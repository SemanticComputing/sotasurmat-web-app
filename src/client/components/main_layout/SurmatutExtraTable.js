import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import ResultTableCell from '../facet_results/ResultTableCell';

const styles = theme => ({
  root: {
    overflow: 'auto',
    width: '100%',
    height: 'auto',
    display: 'flex',
    justifyContent: 'center'
  },
  content: {
    padding: theme.spacing(1),
    minWidth: 800,
    maxWidth: 1200
  },
  labelCell: {
    width: 240,
  }
});

class SurmatutExtraTable extends React.Component {

  render = () => {
    const { classes, data } = this.props;
    //console.log(data)
    return(
      <Table className={classes.table} size='small'>
        <TableBody>
          <TableRow key='ownFamilyName'>
            <TableCell className={classes.labelCell}>Oma sukunimi</TableCell>
            <ResultTableCell
              columnId='ownFamilyName'
              data={data.ownFamilyName}
              valueType='object'
              makeLink={false}
              externalLink={false}
              sortValues={true}
              numberedList={false}
              minWidth={150}
              container='cell'
              expanded={true}
              showSource={true}
              sourceExternalLink={true}
            />
          </TableRow>
        </TableBody>
      </Table>
    );
  }
}

SurmatutExtraTable.propTypes = {
  classes: PropTypes.object.isRequired,
  data: PropTypes.object.isRequired,
};

export default withStyles(styles)(SurmatutExtraTable);
