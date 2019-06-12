import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import ResultTableCell from './ResultTableCell';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import IconButton from '@material-ui/core/IconButton';
import CircularProgress from '@material-ui/core/CircularProgress';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import purple from '@material-ui/core/colors/purple';
import querystring from 'querystring';
import ResultTableHead from './ResultTableHead';
import TablePagination from '@material-ui/core/TablePagination';
import ResultTablePaginationActions from './ResultTablePaginationActions';
import history from '../../History';

const styles = theme => ({
  tableContainer: {
    zIndex:110000000,
    overflow: 'auto',
    width: '100%',
    height: 'auto',
    [theme.breakpoints.up('md')]: {
      height: 'calc(100% - 73px)'
    },
    backgroundColor: theme.palette.background.paper,
    borderTop: '1px solid rgba(224, 224, 224, 1);'
  },
  // table: {
  //   borderTop: '1px solid rgba(224, 224, 224, 1);',
  // },
  paginationRoot: {
    backgroundColor: '#fff',
    display: 'flex',
    justifyContent: 'flex-start',
    borderBottom: '1px solid rgba(224, 224, 224, 1);',
  },
  progressContainer: {
    width: '100%',
    height: 'calc(100% - 72px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  expandCell: {
    paddingRight: 0,
    paddingTop: 0,
    paddingBottom: 0
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
});

class ResultTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expandedRows: new Set(),
    };
  }

  componentDidMount = () => {
    let page;
    if (this.props.routeProps.location.search === '') {
      page = this.props.data.page === -1 ? 0 : this.props.data.page;
      // console.log(`result table mounted WITHOUT page parameter, set page to ${page}`);
    } else {
      const qs = this.props.routeProps.location.search.replace('?', '');
      page = parseInt(querystring.parse(qs).page);
      // console.log(`result table mounted with page parameter, set page to ${page}`);
    }
    this.props.updatePage(this.props.resultClass, page);
    history.push({
      //pathname: `/${this.props.resultClass}/table`,
      pathname: `${this.props.rootUrl}/surmatut/table`,
      search: `?page=${page}`,
    });
    if (this.props.data.resultsUpdateID !== -1 && this.props.data.resultsUpdateID !== this.props.facetUpdateID) {
      this.props.updatePage(this.props.resultClass, 0);
      this.fetchResults();
    }
  }

  componentDidUpdate = prevProps => {
    // always fetch new results when page has updated
    if (prevProps.data.page != this.props.data.page) {
      this.fetchResults();
      history.push({
        //pathname: `/${this.props.resultClass}/table`,
        pathname: `${this.props.rootUrl}/surmatut/table`,
        search: `?page=${this.props.data.page}`,
      });
    }
    // when sort property or direction changes, return to first page
    if (this.needNewResults(prevProps)) {
      if (this.props.data.page == 0) {
        this.fetchResults();
      } else {
        this.props.updatePage(this.props.resultClass, 0);
      }
    }
  }

  fetchResults = () => {
    this.props.fetchPaginatedResults(this.props.resultClass, this.props.facetClass, this.props.data.sortBy, this.props.variant);
  }

  needNewResults = prevProps => {
    return (
      prevProps.data.sortBy != this.props.data.sortBy
      || prevProps.data.sortDirection != this.props.data.sortDirection
      || prevProps.facetUpdateID != this.props.facetUpdateID
    );
  }

  handleChangePage = (event, page) => {
    if (event != null && !this.props.data.fetching) {
      this.props.updatePage(this.props.resultClass, page);
    }
  }

  handleOnChangeRowsPerPage = (event, rowsPerPage) => {
    if (event != null) {
      return rowsPerPage;
    }
  }

  handleSortBy = sortBy => event => {
    if (event != null) {
      this.props.sortResults(this.props.resultClass, sortBy);
    }
  }

  handleExpandRow = rowId => () => {
    let expandedRows = this.state.expandedRows;
    if (expandedRows.has(rowId)) {
      expandedRows.delete(rowId);
    } else {
      expandedRows.add(rowId);
    }
    this.setState({ expandedRows});
  }

  rowRenderer = row => {
    const { classes } = this.props;
    const expanded = this.state.expandedRows.has(row.id);
    let hasExpandableContent = false;
    const dataCells = this.props.data.tableColumns.map(column => {
      const columnData = row[column.id];
      if (Array.isArray(columnData)) {
        hasExpandableContent = true;
      }
      return (
        <ResultTableCell
          key={column.id}
          columnId={column.id}
          data={row[column.id] == null ? '-' : row[column.id]}
          valueType={column.valueType}
          makeLink={column.makeLink}
          sortValues={column.sortValues}
          numberedList={column.numberedList}
          minWidth={column.minWidth}
          container='cell'
          expanded={expanded}
        />
      );
    });
    return (
      <TableRow key={row.id}>
        <TableCell className={classes.expandCell}>
          {hasExpandableContent &&
            <IconButton
              className={clsx(classes.expand, {
                [classes.expandOpen]: expanded,
              })}
              onClick={this.handleExpandRow(row.id)}
              aria-expanded={expanded}
              aria-label="Show more"
            >
              <ExpandMoreIcon />
            </IconButton>
          }
        </TableCell>
        {dataCells}
      </TableRow>
    );
  }

  render() {
    const { classes } = this.props;
    const { resultCount, paginatedResults, page, pagesize, sortBy, sortDirection, fetching } = this.props.data;
    return (
      <div className={classes.tableContainer}>
        <TablePagination
          component='div'
          classes={{
            root: classes.paginationRoot
          }}
          count={resultCount}
          rowsPerPage={pagesize}
          rowsPerPageOptions={[5]}
          page={page == -1 || resultCount == 0 ? 0 : page}
          onChangePage={this.handleChangePage}
          onChangeRowsPerPage={this.handleOnchangeRowsPerPage}
          ActionsComponent={ResultTablePaginationActions}
        />
        {fetching ?
          <div className={classes.progressContainer}>
            <CircularProgress style={{ color: purple[500] }} thickness={5} />
          </div>
          :
          <Table className={classes.table}>
            <ResultTableHead
              columns={this.props.data.tableColumns}
              onChangePage={this.handleChangePage}
              onSortBy={this.handleSortBy}
              onChangeRowsPerPage={this.handleOnChangeRowsPerPage}
              resultCount={resultCount}
              page={page}
              pagesize={pagesize}
              sortBy={sortBy}
              sortDirection={sortDirection}
              routeProps={this.props.routeProps}
            />
            <TableBody>
              {paginatedResults.map(row => this.rowRenderer(row))}
            </TableBody>
          </Table>
        }
      </div>
    );
  }
}

ResultTable.propTypes = {
  rootUrl: PropTypes.string.isRequired,
  classes: PropTypes.object.isRequired,
  data: PropTypes.object.isRequired,
  resultClass: PropTypes.string.isRequired,
  facetClass: PropTypes.string.isRequired,
  variant: PropTypes.string,
  facetUpdateID: PropTypes.number.isRequired,
  fetchPaginatedResults: PropTypes.func.isRequired,
  sortResults: PropTypes.func.isRequired,
  updatePage: PropTypes.func.isRequired,
  routeProps: PropTypes.object.isRequired
};

export default withStyles(styles)(ResultTable);
