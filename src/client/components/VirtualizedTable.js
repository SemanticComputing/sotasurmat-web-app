import React from 'react';
import Immutable from 'immutable';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import SearchField from '../components/SearchField';
import ResultFilterDialogSingle from './ResultFilterDialogSingle';
import IconButton from '@material-ui/core/IconButton';
import PlaceIcon from '@material-ui/icons/Place';
import {
  AutoSizer,
  Column,
  Table,
  SortIndicator
} from 'react-virtualized';

// https://github.com/bvaughn/react-virtualized/issues/650
// https://github.com/bvaughn/react-virtualized/blob/master/docs/usingAutoSizer.md

const styles = () => ({
  root: {
    display: 'flex',
    height: '100%',
    flexGrow: 1,
  },
  container: {
    height: '100%',
    width: '100%',
    flexDirection: 'column'
  },
  resultsInfo: {
    flexGrow: 0
  },
  searchField: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: 70
  },
});

const tableStyles = {
  tableRoot: {
    fontFamily: 'Roboto',
  },
  headerRow: {
    textTransform: 'none',
    borderBottom: '1px solid rgba(224, 224, 224, 1)'
  },
  evenRow: {
    borderBottom: '1px solid rgba(224, 224, 224, 1)',
    //backgroundColor: '#fafafa'
  },
  oddRow: {
    borderBottom: '1px solid rgba(224, 224, 224, 1)',
  },
  noRows: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '1em',
    color: '#bdbdbd',
  }
};

const columnWidth = 200;

const calculateRowStyle = ({ index }) => {
  if (index < 0) {
    return tableStyles.headerRow;
  } else {
    return index % 2 === 0 ? tableStyles.evenRow : tableStyles.oddRow;
  }
};

class VirtualizedTable extends React.PureComponent {

  constructor(props) {
    super(props);
    this._noRowsRenderer = this._noRowsRenderer.bind(this);
    this._sort = this._sort.bind(this);
  }

  render() {
    const { classes, list } = this.props;
    const rowGetter = ({index}) => this._getDatum(list, index);

    const headerRenderer = ({
      dataKey,
      label,
      sortBy,
      sortDirection,
    }) => {
      const showSortIndicator = sortBy === dataKey;
      const children = [
        <span
          className="ReactVirtualized__Table__headerTruncatedText"
          style={showSortIndicator ? {} : { marginRight: 16 }}
          key="label"
          title={label}>
          {label}
        </span>,
      ];
      if (showSortIndicator) {
        children.push(
          <SortIndicator key="SortIndicator" sortDirection={sortDirection} />,
        );
      }
      children.push(
        <ResultFilterDialogSingle
          key="resultFilter"
          propertyLabel={label}
          property={dataKey}
          resultValues={this.props.resultValues[dataKey]}
          updateResultsFilter={this.props.updateResultsFilter}
        />
      );
      return children;
    };

    const labelRenderer = ({cellData, rowData}) => {
      if (cellData == null) return '';
      const label = <a target='_blank' rel='noopener noreferrer' href={rowData.s}>{cellData}</a>;
      let  marker = '';
      if (typeof rowData.lat !== 'undefined' || typeof rowData.long !== 'undefined') {
        marker = (
          <IconButton
            onMouseOver={handleMarkerMouseOver(rowData.s)}
            onMouseOut={handleMarkerMouseOut(rowData.s)}
            onClick={handleMarkerClick(rowData.s)}
            aria-label="Marker"
          >
            <PlaceIcon />
          </IconButton>
        );
      }
      return (
        <div key={rowData.s}>
          {label}{marker}
        </div>
      );
    };

    const handleMarkerClick = value => () => {
      this.props.openMarkerPopup(value);
    };

    const handleMarkerMouseOver = value => () => {
      this.props.bounceMarker(value);
    };

    const handleMarkerMouseOut = () => () => {
      this.props.removeTempMarker();
    };

    const searchField = (
      <SearchField
        search={this.props.search}
        fetchResults={this.props.fetchResults}
        fetchAllResults={this.props.fetchAllResults}
        updateQuery={this.props.updateQuery}
        clearResults={this.props.clearResults}
      />
    );

    const valueFromArray = (property, rowData) => {
      if (rowData[property] === undefined) {
        return 'Undefined';
      }
      if (Array.isArray(rowData[property])) {
        return rowData[property].map((item) => item.label).join(' / ');
      } else {
        return rowData[property].label;
      }
    };

    return (
      <div className={classes.root}>
        <Grid container className={classes.container}>
          <div className={classes.resultsInfo}>
            <div className={classes.searchField}>
              {searchField}
            </div>
          </div>
          {this.props.list.size > 0 &&
            <div style={{ flex: '1 1 auto' }}>
              <AutoSizer>
                {({ height, width }) => (
                  <Table
                    overscanRowCount={10}
                    rowHeight={40}
                    rowGetter={rowGetter}
                    rowCount={this.props.list.size}
                    sort={this._sort}
                    sortBy={this.props.search.sortBy}
                    sortDirection={this.props.search.sortDirection.toUpperCase()}
                    width={width}
                    height={height}
                    headerHeight={50}
                    noRowsRenderer={this._noRowsRenderer}
                    style={tableStyles.tableRoot}
                    rowStyle={calculateRowStyle}
                  >
                    <Column
                      label="ID"
                      cellDataGetter={({rowData}) => rowData.id.replace('http://ldf.fi/mmm/manifestation_singleton/', '')}
                      dataKey="id"
                      headerRenderer={headerRenderer}
                      cellRenderer={labelRenderer}
                      width={columnWidth}
                    />
                    <Column
                      label="Label"
                      cellDataGetter={({rowData}) => rowData.label}
                      dataKey="label"
                      headerRenderer={headerRenderer}
                      width={columnWidth}
                    />
                    <Column
                      label="Author"
                      cellDataGetter={({rowData}) => rowData.author}
                      dataKey="author"
                      headerRenderer={headerRenderer}
                      width={columnWidth}
                    />
                    <Column
                      label="Creation place"
                      cellDataGetter={({rowData}) => valueFromArray('creationPlace', rowData)}
                      dataKey="creationPlace"
                      headerRenderer={headerRenderer}
                      width={columnWidth}
                    />
                  </Table>
                )}
              </AutoSizer>
            </div>
          }
        </Grid>
      </div>
    );
  }

  _getDatum(list, index) {
    return list.get(index % list.size);
  }

  _getRowHeight({index}) {
    const list = this.props.list;
    return this._getDatum(list, index).size;
  }

  _noRowsRenderer() {
    return <div className={tableStyles.noRows}>No rows</div>;
  }


  // _onScrollToRowChange(event) {
  //   const {rowCount} = this.state;
  //   let scrollToIndex = Math.min(
  //     rowCount - 1,
  //     parseInt(event.target.value, 10),
  //   );
  //
  //   if (isNaN(scrollToIndex)) {
  //     scrollToIndex = undefined;
  //   }
  //
  //   this.setState({scrollToIndex});
  // }

  // https://stackoverflow.com/questions/40412114/how-to-do-proper-column-filtering-with-react-virtualized-advice-needed
  _sort({ event, sortBy, sortDirection }) {
    // console.log(event.target)
    if (event.target.id.startsWith('filter') || event.target.className.startsWith('Mui')) {
      event.stopPropagation();
    } else {
      this.props.sortResults({ sortBy, sortDirection: sortDirection.toLowerCase() });
    }
  }
}

VirtualizedTable.propTypes = {
  classes: PropTypes.object.isRequired,
  list: PropTypes.instanceOf(Immutable.List).isRequired,
  search: PropTypes.object.isRequired,
  resultValues: PropTypes.object.isRequired,
  sortResults: PropTypes.func.isRequired,
  updateResultsFilter: PropTypes.func.isRequired,
  updateQuery: PropTypes.func.isRequired,
  fetchSuggestions: PropTypes.func.isRequired,
  clearSuggestions: PropTypes.func.isRequired,
  fetchResults: PropTypes.func.isRequired,
  fetchAllResults: PropTypes.func.isRequired,
  clearResults: PropTypes.func.isRequired,
  bounceMarker: PropTypes.func.isRequired,
  openMarkerPopup: PropTypes.func.isRequired,
  removeTempMarker: PropTypes.func.isRequired,
};

export default withStyles(styles)(VirtualizedTable);
