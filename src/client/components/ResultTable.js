import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import ResultTableHead from './ResultTableHead';
import { has, orderBy } from 'lodash';

const styles = () => ({
  root: {
    width: '100%',
    //marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
  tableWrapper: {
    overflow: 'auto',
  },
  paginationRow: {
    borderBottom: '1px solid lightgrey'
  },
  valueList: {
    paddingLeft: 15
  },
  valueListNoBullets: {
    listStyle: 'none',
    paddingLeft: 0
  },
  withFilter: {
    minWidth: 170
  },
  infoIcon: {
    paddingTop: 15
  }
});

class ResultTable extends React.Component {

  idRenderer = (row) => {
    let sdbmLink = '';
    let id = row.id.replace('http://ldf.fi/mmm/manifestation_singleton/', '');
    id = id.replace('orphan_', '');
    id = id.replace('part_', '');
    if (has(row, 'manuscriptRecord') && row.manuscriptRecord !== '-') {
      sdbmLink = row.manuscriptRecord;
    } else {
      sdbmLink = 'https://sdbm.library.upenn.edu/entries/' + id;
    }

    return (
      <div className={this.props.classes.tableColumn}>
        <a target='_blank' rel='noopener noreferrer' href={sdbmLink}>{id}</a>
      </div>
    );
  };

  stringListRenderer = (cell) => {
    if (Array.isArray(cell)) {
      cell = cell.sort();
      return (
        <ul className={this.props.classes.valueList}>
          {cell.map((item, i) => <li key={i}>{item}</li>)}
        </ul>
      );
    } else {
      return <span>{cell}</span>;
    }
  };

  objectListRenderer = (cell, makeLink, ordered) => {
    if (cell == null || cell === '-'){
      return '-';
    }
    else if (Array.isArray(cell)) {
      cell = orderBy(cell, 'prefLabel');
      const listItems = cell.map((item, i) =>
        <li key={i}>
          {makeLink &&
            <a
              target='_blank' rel='noopener noreferrer'
              href={item.sdbmLink}
            >
              {item.prefLabel}
            </a>
          }
          {!makeLink && item.prefLabel}
        </li>
      );
      if (ordered) {
        return (
          <ol className={this.props.classes.valueList}>
            {listItems}
          </ol>
        );
      } else {
        return (
          <ul className={this.props.classes.valueList}>
            {listItems}
          </ul>
        );
      }
    } else if (makeLink) {
      return (
        <a
          target='_blank' rel='noopener noreferrer'
          href={cell.sdbmLink}
        >
          {cell.prefLabel}
        </a>
      );
    } else {
      return (
        <span>{cell.prefLabel}</span>
      );
    }
  };

  transactionRenderer = cell => {
    if (Array.isArray(cell)) {
      cell = orderBy(cell, 'date');
      const items = cell.map((item, i) => {
        return (
          <li key={i}>
            {item.date}
            {' '}
            <a
              target='_blank' rel='noopener noreferrer'
              href={item.sdbmLink}
            >
              {item.prefLabel}
            </a>
          </li>
        );
      });
      return (
        <ul className={this.props.classes.valueList}>
          {items}
        </ul>
      );
    } else {
      return (
        <span>
          {cell.date}
          {' '}
          <a
            target='_blank' rel='noopener noreferrer'
            href={cell.sdbmLink}
          >
            {cell.prefLabel}
          </a>
        </span>

      );
    }
  };

  ownerRenderer = cell => {
    if (Array.isArray(cell)) {
      cell.map(item => {
        Array.isArray(item.order) ? item.earliestOrder = item.order[0] : item.earliestOrder = item.order;
      });
      cell.sort((a, b) => a.earliestOrder - b.earliestOrder);

      const items = cell.map((item, i) => {
        return (
          <li key={i}>
            <span>{Array.isArray(item.order) ? item.order.toString() : item.order}. </span>
            <a
              target='_blank' rel='noopener noreferrer'
              href={item.sdbmLink}
            >
              {item.prefLabel}
            </a>
          </li>
        );
      });
      return (
        <ul className={this.props.classes.valueListNoBullets}>
          {items}
        </ul>
      );
    } else {
      return (
        <span>{cell.date}<br />{cell.location}</span>
      );
    }
  };

  render() {
    const { classes, rows } = this.props;

    return (
      <Paper className={classes.root}>
        <div className={classes.tableWrapper}>
          <Table className={classes.table}>
            <ResultTableHead
              fetchFacet={this.props.fetchFacet}
              fetchManuscripts={this.props.fetchManuscripts}
              facet={this.props.facet}
              results={this.props.results}
              page={this.props.page}
            />
            <TableBody>
              {rows.map(row => {
                return (
                  <TableRow key={row.id}>
                    <TableCell component="th" scope="row" >
                      {this.idRenderer(row)}
                    </TableCell>
                    <TableCell className={classes.withFilter} >
                      {this.stringListRenderer(row.prefLabel)}
                    </TableCell>
                    <TableCell className={classes.withFilter}>
                      {this.objectListRenderer(row.author, true)}
                    </TableCell>
                    <TableCell className={classes.withFilter}>
                      {this.objectListRenderer(row.creationPlace, true)}
                    </TableCell>
                    <TableCell className={classes.withFilter}>
                      {this.objectListRenderer(row.timespan)}
                    </TableCell>
                    <TableCell className={classes.withFilter}>
                      {this.stringListRenderer(row.language)}
                    </TableCell>
                    {/*<TableCell className={classes.withFilter}>
                      {this.stringListRenderer(row.material)}
                    </TableCell>*/}
                    <TableCell className={classes.withFilter}>
                      {this.transactionRenderer(row.acquisition)}
                    </TableCell>
                    <TableCell className={classes.withFilter}>
                      {this.ownerRenderer(row.owner)}
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </div>
      </Paper>
    );
  }
}

ResultTable.propTypes = {
  classes: PropTypes.object.isRequired,
  rows: PropTypes.array.isRequired,
  fetchFacet: PropTypes.func.isRequired,
  fetchManuscripts: PropTypes.func.isRequired,
  facet: PropTypes.object.isRequired,
  results: PropTypes.number.isRequired,
  page: PropTypes.number.isRequired
};

export default withStyles(styles)(ResultTable);