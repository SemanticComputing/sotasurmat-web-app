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
    return(
      <Table className={classes.table} size='small'>
        <TableBody>
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
              showSource={true}
              sourceExternalLink={true}
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
              showSource={true}
              sourceExternalLink={true}
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
              showSource={true}
              sourceExternalLink={true}
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
              showSource={true}
              sourceExternalLink={true}
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
              showSource={true}
              sourceExternalLink={true}
            />
          </TableRow>
          <TableRow key='birthDay'>
            <TableCell className={classes.labelCell}>Syntymäaika</TableCell>
            <ResultTableCell
              columnId='birthDay'
              data={data.birthDay}
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
              showSource={true}
              sourceExternalLink={true}
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
              showSource={true}
              sourceExternalLink={true}
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
              showSource={true}
              sourceExternalLink={true}
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
              showSource={true}
              sourceExternalLink={true}
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
              showSource={true}
              sourceExternalLink={true}
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
              showSource={true}
              sourceExternalLink={true}
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
              showSource={true}
              sourceExternalLink={true}
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
              showSource={true}
              sourceExternalLink={true}
            />
          </TableRow>
          <TableRow key='numberOfChildren'>
            <TableCell className={classes.labelCell}>Lasten määrä</TableCell>
            <ResultTableCell
              columnId='numberOfChildren'
              data={data.numberOfChildren}
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
          <TableRow key='gender'>
            <TableCell className={classes.labelCell}>Sukupuoli</TableCell>
            <ResultTableCell
              columnId='gender'
              data={data.gender}
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
          <TableRow key='nationality'>
            <TableCell className={classes.labelCell}>Kansallisuus</TableCell>
            <ResultTableCell
              columnId='nationality'
              data={data.nationality}
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
          <TableRow key='language'>
            <TableCell className={classes.labelCell}>Kieli</TableCell>
            <ResultTableCell
              columnId='language'
              data={data.language}
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
          <TableRow key='personComment'>
            <TableCell className={classes.labelCell}>Henkilöhuomautukset</TableCell>
            <ResultTableCell
              columnId='personComment'
              data={data.personComment}
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
          <TableRow key='militaryOrganization'>
            <TableCell className={classes.labelCell}>Sotilasjärjestö</TableCell>
            <ResultTableCell
              columnId='militaryOrganization'
              data={data.militaryOrganization}
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
          <TableRow key='recruitment'>
            <TableCell className={classes.labelCell}>Rekrytointitapa</TableCell>
            <ResultTableCell
              columnId='recruitment'
              data={data.recruitment}
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
          <TableRow key='rank'>
            <TableCell className={classes.labelCell}>Sotilasarvo</TableCell>
            <ResultTableCell
              columnId='rank'
              data={data.rank}
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
          <TableRow key='position'>
            <TableCell className={classes.labelCell}>Sotilasasema</TableCell>
            <ResultTableCell
              columnId='position'
              data={data.position}
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
          <TableRow key='combatantStatus'>
            <TableCell className={classes.labelCell}>Asema (sotilas vai siviili)</TableCell>
            <ResultTableCell
              columnId='combatantStatus'
              data={data.combatantStatus}
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
          <TableRow key='armedStatus'>
            <TableCell className={classes.labelCell}>Aseenkanto</TableCell>
            <ResultTableCell
              columnId='armedStatus'
              data={data.armedStatus}
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
          <TableRow key='welfare'>
            <TableCell className={classes.labelCell}>Perheen toimeentulo</TableCell>
            <ResultTableCell
              columnId='welfare'
              data={data.welfare}
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
          <TableRow key='statusNote'>
            <TableCell className={classes.labelCell}>Asemahuomatus</TableCell>
            <ResultTableCell
              columnId='statusNote'
              data={data.statusNote}
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
          <TableRow key='placeOfCapture'>
            <TableCell className={classes.labelCell}>Vangitsemispaikka</TableCell>
            <ResultTableCell
              columnId='placeOfCapture'
              data={data.placeOfCapture}
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
          <TableRow key='camp'>
            <TableCell className={classes.labelCell}>Vankileiri</TableCell>
            <ResultTableCell
              columnId='camp'
              data={data.camp}
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
          <TableRow key='imprisonmentMotive'>
            <TableCell className={classes.labelCell}>Vangitsemismotiivi</TableCell>
            <ResultTableCell
              columnId='imprisonmentMotive'
              data={data.imprisonmentMotive}
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
          <TableRow key='imprisonmentDate'>
            <TableCell className={classes.labelCell}>Vangitsemisaika</TableCell>
            <ResultTableCell
              columnId='imprisonmentDate'
              data={data.imprisonmentDate}
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
          <TableRow key='releaseDate'>
            <TableCell className={classes.labelCell}>Vapautumisaika</TableCell>
            <ResultTableCell
              columnId='releaseDate'
              data={data.releaseDate}
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
          <TableRow key='deathYear'>
            <TableCell className={classes.labelCell}>Kuolinvuosi</TableCell>
            <ResultTableCell
              columnId='deathYear'
              data={data.deathYear}
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
          <TableRow key='deathDay'>
            <TableCell className={classes.labelCell}>Kuolinpäivä</TableCell>
            <ResultTableCell
              columnId='deathDay'
              data={data.deathDay}
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
          <TableRow key='age'>
            <TableCell className={classes.labelCell}>Ikä</TableCell>
            <ResultTableCell
              columnId='age'
              data={data.age}
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
          <TableRow key='deathMunicipality'>
            <TableCell className={classes.labelCell}>Kuolinkunta</TableCell>
            <ResultTableCell
              columnId='deathMunicipality'
              data={data.deathMunicipality}
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
          <TableRow key='deathProvince'>
            <TableCell className={classes.labelCell}>Kuolinlääni</TableCell>
            <ResultTableCell
              columnId='deathProvince'
              data={data.deathProvince}
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
          <TableRow key='deathCountry'>
            <TableCell className={classes.labelCell}>Kuolinmaa</TableCell>
            <ResultTableCell
              columnId='deathCountry'
              data={data.deathCountry}
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
          <TableRow key='deathPlace'>
            <TableCell className={classes.labelCell}>Tarkempi kuolinpaikka</TableCell>
            <ResultTableCell
              columnId='deathPlace'
              data={data.deathPlace}
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
          <TableRow key='causeOfDeath'>
            <TableCell className={classes.labelCell}>Kuolintapa</TableCell>
            <ResultTableCell
              columnId='causeOfDeath'
              data={data.causeOfDeath}
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
          <TableRow key='deathMotive'>
            <TableCell className={classes.labelCell}>Surmamotiivi</TableCell>
            <ResultTableCell
              columnId='deathMotive'
              data={data.deathMotive}
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
          <TableRow key='burial'>
            <TableCell className={classes.labelCell}>Hautaustapa</TableCell>
            <ResultTableCell
              columnId='burial'
              data={data.burial}
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
          <TableRow key='deathComment'>
            <TableCell className={classes.labelCell}>Surmakommentti</TableCell>
            <ResultTableCell
              columnId='deathComment'
              data={data.deathComment}
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
          <TableRow key='religion'>
            <TableCell className={classes.labelCell}>Uskonto</TableCell>
            <ResultTableCell
              columnId='religion'
              data={data.religion}
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
          <TableRow key='additionalDeathSource'>
            <TableCell className={classes.labelCell}>Tarkempi lähde kuolintiedoille</TableCell>
            <ResultTableCell
              columnId='additionalDeathSource'
              data={data.additionalDeathSource}
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

SurmatutHomePageTable.propTypes = {
  classes: PropTypes.object.isRequired,
  data: PropTypes.object.isRequired,
};

export default withStyles(styles)(SurmatutHomePageTable);
