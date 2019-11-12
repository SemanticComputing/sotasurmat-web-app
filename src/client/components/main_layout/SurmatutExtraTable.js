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
    const { classes, extras } = this.props;
    //console.log(data)
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

      {id:'army',label:'Armeija'},
      {id:'brigade',label:'Prikaati, rykmentti'},
      {id:'battalion',label:'Pataljoona'},
      {id:'company',label:'Komppania'},
      {id:'platoon',label:'Joukkue, plutoona'},
      {id:'group',label:'Ryhmä'},

      {id:'orgJoiningTime',label:'Rekrytointipäivämäärä'},
      {id:'durationInOrg',label:'Kuinka kauan kuulunut suojeluskuntaan/punakaartiin'},
      {id:'timeLeftOrg',label:'Koska eronnut sotilasjärjestöstä'},

      {id:'militaryRank',label:'Sotilasarvo'},
      {id:'militaryBackground',label:'Sotilastausta'},
      {id:'armyOfCountry',label:'Maa, jonka armeijaan kuului'},

      {id:'militaryTask',label:'Sotilastehtävä'},
      {id:'civilianTask',label:'Siviilitehtävä'},
      {id:'otherRole',label:'Muu rooli sodassa'},
      {id:'taskStartDate',label:'Koska aloittanut tehtävässä'},
      {id:'durationOfTask',label:'Kuinka kauan toiminut tehtävässä'},
      {id:'placeOfTask',label:'Missä toiminut'},

      // huom 25 koodin tiedot on mysteeri!!!

      {id:'otherFamilyWelfare',label:'muu perheen toimeentulo'},

      {id:'exactPlaceOfCapture',label:'Tarkka vangitsemispaikka'},
      {id:'areaOfCapture',label:'Vangitsemisalue'},
      {id:'eventWhereCaptured',label:'Tapahtuma jossa vangittiin'},
      {id:'frontWhereCaptured',label:'Rintama jossa vangittiin'},
      {id:'capturer',label:'Vangitsija'},
      {id:'presumedPlaceOfCapture',label:'Vangitsemisen oletettu paikka tai tapahtuma'},

      {id:'firstPlaceOfImprisonment',label:'Vangittunaolon I paikka'},
      {id:'secondPlaceOfImprisonment',label:'vangittunaolon II paikka'},
      {id:'thirdPlaceOfImprisonment',label:'Vangittunaolon III paikka'},
      {id:'arrivedToPrison',label:'Milloin saapunut vankileirille'},
      {id:'movedToPrison',label:'Milloin siirretty vankileiriltä'},

      {id:'sentencingCourt',label:'Tuomion langettaja'},
      {id:'verdict',label:'Tuomio'},

      {id:'presumedArrestDate',label:'Arveltu vangitsemispäivä'},
      {id:'arrestTime',label:'Vangitsemisajankohta'},
      {id:'secondArrestTime',label:'II vangitsemisen ajankohta'},
      {id:'thirdArrestTime',label:'III vangitsemisen ajankohta'},

      {id:'dateOfEscape',label:'Pakenemispäivä'},

      {id:'yearDeclaredDead',label:'Kuolleeksijulistamisen vuosi'},
      {id:'officialDeathDate',label:'Virallinen kuolinaika'},
      {id:'whereDeclaredDead',label:'Missä ja milloin julistettu kuolleeksi'},

      {id:'presumedDeathTime',label:'Arveltu kuolinaika'},
      {id:'deathPeriod',label:'Kuolinajankohta'},


      {id:'presumedDeathMunicipality',label:'Oletettu kuolinpaikka'},
      {id:'presumedDeathPlaceOrEvent',label:'Oletettu tapahtuma tai paikka jossa kuollut'},
      {id:'municipalityWhereWounded',label:'Haavoittumispaikka'},
      {id:'presumedWoundedPlaceOrEvent',label:'Oletettu haavoittumispaikka'},
      {id:'woundedTime',label:'Haavoittumisaika'},

      {id:'broaderDeathPlace',label:'Laajempi kuolinpaikka'},
      {id:'broaderWarEvent',label:'Laajempi sotatapahtuma'},
      {id:'warEvent',label:'Sotatapahtuma'},

      {id:'deathPlaceQualifier',label:'Kuolinpaikan tarkenne'},
      {id:'otherDeathPlaceQualifier',label:'IMuu kuolinpaikan takenne'},
      {id:'deathArea',label:'Alue jossa kuollut'},
      {id:'deathEvent',label:'Tapahtuma jossa kuollut'},
      {id:'deathFront',label:'Rintama jossa kuollut'},
      {id:'lastSeenWhere',label:'Missä nähty viimeksi'},

      {id:'otherCauseOfDeath',label:'Kuolintapa'},
      {id:'presumedMannerOfDeath',label:'Oletettu kuolintapa'},
      {id:'causeOfDeathQualifier',label:'Kuolintavan tarkenne'},
      {id:'otherCauseOfDeathQualifier',label:'Muu kuolinsyyn tarkenne'},

      {id:'court',label:'Tuomioistuin'},
      {id:'killer',label:'Surmaaja'},
      {id:'presumedKiller',label:'Oletettu surmaaja'},

      {id:'buriedIn',label:'Hautaustapa II'},
      {id:'placeOfBurial',label:'I hautauksen paikka'},
      {id:'secondPlaceOfBurial',label:'II hautauksen paikka'},
      {id:'timeOfBurial',label:'I hautauksen ajankohta'},
      {id:'secondTimeOfBurial',label:'II hautauksen ajankohta'},

      {id:'parish',label:'Seurakunta'},


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
                  data={extras[row.id]}
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
  extras: PropTypes.object.isRequired,
};

export default withStyles(styles)(SurmatutExtraTable);
