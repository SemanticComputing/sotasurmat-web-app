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
    const rowTypes = [
      {id:'ownFamilyName',label:'Oma sukunimi'},
      {id:'formerFamilyName',label:'Entinen sukunimi'},
      {id:'alternativeName',label:'Vaihtoehtoinen nimi'},
      {id:'nameQualifier',label:'Lisätietoa nimestä'},
      {id:'birthVillage',label:'Synnyinkylä'},
      {id:'broaderBirthPlace',label:'Laajenmpi syntymäpaikka'},
      {id:'birthHouse',label:'Synnyintalo'},
      {id:'otherBirthPlaceInformation',label:'Muuta tietoa synnyinpaikasta'},

      {id:'registeredVillage',label:'Rekisteröity kylä'},
      {id:'registeredHouse',label:'Rekisteröity talo'},
      {id:'foreignRegisteredProvince',label:'Ulkomainen rekisteröity lääni'},
      {id:'broaderRegisteredCountry',label:'Laajempi registeröity maakäsite'},
      {id:'livingVillage',label:'Asuinkylä'},
      {id:'livingHouse',label:'Asuintalo'},
      {id:'familyAddress',label:'Perheen osoite'},
      {id:'foreignLivingProvince',label:'Ulkomainen asuinlääni'},

      {id:'otherOccupation',label:'Muu ammatti'},
      {id:'socialStatus',label:'Sosiaalinen asema'},
      {id:'formerOccupation',label:'Entinen ammatti'},
      {id:'formerSocialStatus',label:'Entinen sosiaalinen asema'},
      {id:'title',label:'Titteli'},
      {id:'workPlace',label:'Työpaikka'},
      {id:'numberOfUnderageChildren',label:'Alaikäisten lasten määrä'},
      {id:'familySize',label:'Perheen koko'},
    ];

    //console.log(data)
    return (
      <Table className={classes.table} size='small'>
        <TableBody>
          {rowTypes.map(row => {
            return (
              <TableRow key={row.id}>
                <TableCell className={classes.labelCell}>
                  {row.label}
                </TableCell>
                <ResultTableCell
                  columnId={row.id}
                  data={data[row.id]}
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
            );
          }
          )}
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
