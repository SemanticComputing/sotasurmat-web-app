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

class SurmatutHomePageTable extends React.Component {

  render = () => {
    const { classes, data } = this.props;
    console.log(data)
    return(
      <Table className={classes.table}>
        <TableBody>
          <TableRow key='prefLabel'>
            <TableCell className={classes.labelCell}>Nimi</TableCell>
            <ResultTableCell
              columnId='prefLabel'
              data={data.prefLabel}
              valueType='object'
              makeLink={false}
              externalLink={false}
              sortValues={true}
              numberedList={false}
              minWidth={150}
              container='cell'
              expanded={true}
            />
          </TableRow>
          <TableRow key='familyName'>
            <TableCell className={classes.labelCell}>Sukunimi</TableCell>
            <ResultTableCell
              columnId='familyName'
              data={data.familyName}
              valueType='object'
              makeLink={false}
              externalLink={false}
              sortValues={true}
              numberedList={false}
              minWidth={150}
              container='cell'
              expanded={true}
            />
          </TableRow>
          <TableRow key='firtstName'>
            <TableCell className={classes.labelCell}>Etunimi</TableCell>
            <ResultTableCell
              columnId='firstName'
              data={data.firstName}
              valueType='object'
              makeLink={false}
              externalLink={false}
              sortValues={true}
              numberedList={false}
              minWidth={150}
              container='cell'
              expanded={true}
            />
          </TableRow>
          <TableRow key='party'>
            <TableCell className={classes.labelCell}>Osapuoli</TableCell>
            <ResultTableCell
              columnId='party'
              data={data.party}
              valueType='object'
              makeLink={false}
              externalLink={false}
              sortValues={true}
              numberedList={false}
              minWidth={150}
              container='cell'
              expanded={true}
            />
          </TableRow>
          <TableRow key='birthPlace'>
            <TableCell className={classes.labelCell}>Syntymäpaikka</TableCell>
            <ResultTableCell
              columnId='birthPlace'
              data={data.birthPlace}
              valueType='object'
              makeLink={false}
              externalLink={false}
              sortValues={true}
              numberedList={false}
              minWidth={150}
              container='cell'
              expanded={true}
            />
          </TableRow>
          <TableRow key='birthCountry'>
            <TableCell className={classes.labelCell}>Syntymämaa</TableCell>
            <ResultTableCell
              columnId='birthCountry'
              data={data.birthCountry}
              valueType='object'
              makeLink={false}
              externalLink={false}
              sortValues={true}
              numberedList={false}
              minWidth={150}
              container='cell'
              expanded={true}
            />
          </TableRow>
          <TableRow key='regMunicipality'>
            <TableCell className={classes.labelCell}>Kirjoillaolopaikka</TableCell>
            <ResultTableCell
              columnId='regMunicipality'
              data={data.regMunicipality}
              valueType='object'
              makeLink={false}
              externalLink={false}
              sortValues={true}
              numberedList={false}
              minWidth={150}
              container='cell'
              expanded={true}
            />
          </TableRow>
          <TableRow key='regProvince'>
            <TableCell className={classes.labelCell}>Kirjoillaololääni</TableCell>
            <ResultTableCell
              columnId='regProvince'
              data={data.regProvince}
              valueType='object'
              makeLink={false}
              externalLink={false}
              sortValues={true}
              numberedList={false}
              minWidth={150}
              container='cell'
              expanded={true}
            />
          </TableRow>
          <TableRow key='regCountry'>
            <TableCell className={classes.labelCell}>Kirjoillaolomaa</TableCell>
            <ResultTableCell
              columnId='regCounrty'
              data={data.regCountry}
              valueType='object'
              makeLink={false}
              externalLink={false}
              sortValues={true}
              numberedList={false}
              minWidth={150}
              container='cell'
              expanded={true}
            />
          </TableRow>
          <TableRow key='livingMunicipality'>
            <TableCell className={classes.labelCell}>Asuinpaikka</TableCell>
            <ResultTableCell
              columnId='livingMunicipality'
              data={data.livingMunicipality}
              valueType='object'
              makeLink={false}
              externalLink={false}
              sortValues={true}
              numberedList={false}
              minWidth={150}
              container='cell'
              expanded={true}
            />
          </TableRow>
          <TableRow key='livingProvince'>
            <TableCell className={classes.labelCell}>Asuinlääni</TableCell>
            <ResultTableCell
              columnId='livingProvince'
              data={data.livingProvince}
              valueType='object'
              makeLink={false}
              externalLink={false}
              sortValues={true}
              numberedList={false}
              minWidth={150}
              container='cell'
              expanded={true}
            />
          </TableRow>
          <TableRow key='livingCountry'>
            <TableCell className={classes.labelCell}>Asuinmaa</TableCell>
            <ResultTableCell
              columnId='livingCounrty'
              data={data.livingCountry}
              valueType='object'
              makeLink={false}
              externalLink={false}
              sortValues={true}
              numberedList={false}
              minWidth={150}
              container='cell'
              expanded={true}
            />
          </TableRow>
          <TableRow key='occupation'>
            <TableCell className={classes.labelCell}>Ammatti</TableCell>
            <ResultTableCell
              columnId='occupation'
              data={data.occupation}
              valueType='object'
              makeLink={false}
              externalLink={false}
              sortValues={true}
              numberedList={false}
              minWidth={150}
              container='cell'
              expanded={true}
            />
          </TableRow>
          <TableRow key='maritalStatus'>
            <TableCell className={classes.labelCell}>Siviilisääty</TableCell>
            <ResultTableCell
              columnId='maritalStatus'
              data={data.maritalStatus}
              valueType='object'
              makeLink={false}
              externalLink={false}
              sortValues={true}
              numberedList={false}
              minWidth={150}
              container='cell'
              expanded={true}
            />
          </TableRow>
        </TableBody>
      </Table>
    );
  }
}

SurmatutHomePageTable.propTypes = {
  classes: PropTypes.object.isRequired,
  data: PropTypes.object.isRequired,
};

export default withStyles(styles)(SurmatutHomePageTable);
