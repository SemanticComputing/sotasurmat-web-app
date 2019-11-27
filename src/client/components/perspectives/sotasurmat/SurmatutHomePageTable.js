import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import ResultTableCell from '../../facet_results/ResultTableCell';
import intl from 'react-intl-universal';

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
          <TableRow key='deathLikelihood'>
            <TableCell className={classes.labelCell}>{intl.get('perspectives.victims.properties.deathLikelihood.label')}</TableCell>
            <ResultTableCell
              columnId='deathLikelihood'
              data={data.deathLikelihood}
              valueType='object'
              makeLink={false}
              externalLink={false}
              sortValues={true}
              numberedList={false}
              minWidth={150}
              container='cell'
              expanded={true}
              showSource={true}
              sourceExternalLink={false}
            />
          </TableRow>
          <TableRow key='familyName'>
            <TableCell className={classes.labelCell}>{intl.get('perspectives.victims.properties.familyName.label')}</TableCell>
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
              sourceExternalLink={false}
            />
          </TableRow>
          <TableRow key='firtstName'>
            <TableCell className={classes.labelCell}>{intl.get('perspectives.victims.properties.firstName.label')}</TableCell>
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
              sourceExternalLink={false}
            />
          </TableRow>
          <TableRow key='party'>
            <TableCell className={classes.labelCell}>{intl.get('perspectives.victims.properties.party.label')}</TableCell>
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
              sourceExternalLink={false}
            />
          </TableRow>
          <TableRow key='birthPlace'>
            <TableCell className={classes.labelCell}>{intl.get('perspectives.victims.properties.birthPlace.label')}</TableCell>
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
              sourceExternalLink={false}
            />
          </TableRow>
          <TableRow key='birthCountry'>
            <TableCell className={classes.labelCell}>{intl.get('perspectives.victims.properties.birthCountry.label')}</TableCell>
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
              sourceExternalLink={false}
            />
          </TableRow>
          <TableRow key='birthYear'>
            <TableCell className={classes.labelCell}>{intl.get('perspectives.victims.properties.birthYear.label')}</TableCell>
            <ResultTableCell
              columnId='birthYear'
              data={data.birthYear}
              valueType='object'
              makeLink={false}
              externalLink={false}
              sortValues={true}
              numberedList={false}
              minWidth={150}
              container='cell'
              expanded={true}
              showSource={true}
              sourceExternalLink={false}
            />
          </TableRow>
          <TableRow key='birthDay'>
            <TableCell className={classes.labelCell}>{intl.get('perspectives.victims.properties.birthDay.label')}</TableCell>
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
              sourceExternalLink={false}
            />
          </TableRow>
          <TableRow key='regMunicipality'>
            <TableCell className={classes.labelCell}>{intl.get('perspectives.victims.properties.registeredMunicipality.label')}</TableCell>
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
              sourceExternalLink={false}
            />
          </TableRow>
          <TableRow key='regProvince'>
            <TableCell className={classes.labelCell}>{intl.get('perspectives.victims.properties.registeredProvince.label')}</TableCell>
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
              sourceExternalLink={false}
            />
          </TableRow>
          <TableRow key='regCountry'>
            <TableCell className={classes.labelCell}>{intl.get('perspectives.victims.properties.registeredCountry.label')}</TableCell>
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
              sourceExternalLink={false}
            />
          </TableRow>
          <TableRow key='livingMunicipality'>
            <TableCell className={classes.labelCell}>{intl.get('perspectives.victims.properties.livingMunicipality.label')}</TableCell>
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
              sourceExternalLink={false}
            />
          </TableRow>
          <TableRow key='livingProvince'>
            <TableCell className={classes.labelCell}>{intl.get('perspectives.victims.properties.livingProvince.label')}</TableCell>
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
              sourceExternalLink={false}
            />
          </TableRow>
          <TableRow key='livingCountry'>
            <TableCell className={classes.labelCell}>{intl.get('perspectives.victims.properties.livingCountry.label')}</TableCell>
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
              sourceExternalLink={false}
            />
          </TableRow>
          <TableRow key='occupation'>
            <TableCell className={classes.labelCell}>{intl.get('perspectives.victims.properties.occupation.label')}</TableCell>
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
              sourceExternalLink={false}
            />
          </TableRow>
          <TableRow key='maritalStatus'>
            <TableCell className={classes.labelCell}>{intl.get('perspectives.victims.properties.maritalStatus.label')}</TableCell>
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
              sourceExternalLink={false}
            />
          </TableRow>
          <TableRow key='numberOfChildren'>
            <TableCell className={classes.labelCell}>{intl.get('perspectives.victims.properties.numberOfChildren.label')}</TableCell>
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
              sourceExternalLink={false}
            />
          </TableRow>
          <TableRow key='gender'>
            <TableCell className={classes.labelCell}>{intl.get('perspectives.victims.properties.gender.label')}</TableCell>
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
              sourceExternalLink={false}
            />
          </TableRow>
          <TableRow key='nationality'>
            <TableCell className={classes.labelCell}>{intl.get('perspectives.victims.properties.nationality.label')}</TableCell>
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
              sourceExternalLink={false}
            />
          </TableRow>
          <TableRow key='language'>
            <TableCell className={classes.labelCell}>{intl.get('perspectives.victims.properties.language.label')}</TableCell>
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
              sourceExternalLink={false}
            />
          </TableRow>
          <TableRow key='personComment'>
            <TableCell className={classes.labelCell}>{intl.get('perspectives.victims.properties.personComment.label')}</TableCell>
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
              sourceExternalLink={false}
            />
          </TableRow>
          <TableRow key='militaryOrganization'>
            <TableCell className={classes.labelCell}>{intl.get('perspectives.victims.properties.militaryOrganization.label')}</TableCell>
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
              sourceExternalLink={false}
            />
          </TableRow>
          <TableRow key='recruitment'>
            <TableCell className={classes.labelCell}>{intl.get('perspectives.victims.properties.recruitment.label')}</TableCell>
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
              sourceExternalLink={false}
            />
          </TableRow>
          <TableRow key='rank'>
            <TableCell className={classes.labelCell}>{intl.get('perspectives.victims.properties.rank.label')}</TableCell>
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
              sourceExternalLink={false}
            />
          </TableRow>
          <TableRow key='position'>
            <TableCell className={classes.labelCell}>{intl.get('perspectives.victims.properties.position.label')}</TableCell>
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
              sourceExternalLink={false}
            />
          </TableRow>
          <TableRow key='combatantStatus'>
            <TableCell className={classes.labelCell}>{intl.get('perspectives.victims.properties.combatantStatus.label')}</TableCell>
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
              sourceExternalLink={false}
            />
          </TableRow>
          <TableRow key='armedStatus'>
            <TableCell className={classes.labelCell}>{intl.get('perspectives.victims.properties.armedStatus.label')}</TableCell>
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
              sourceExternalLink={false}
            />
          </TableRow>
          <TableRow key='welfare'>
            <TableCell className={classes.labelCell}>{intl.get('perspectives.victims.properties.familyWelfare.label')}</TableCell>
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
              sourceExternalLink={false}
            />
          </TableRow>
          <TableRow key='statusNote'>
            <TableCell className={classes.labelCell}>{intl.get('perspectives.victims.properties.statusNote.label')}</TableCell>
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
              sourceExternalLink={false}
            />
          </TableRow>
          <TableRow key='placeOfCapture'>
            <TableCell className={classes.labelCell}>{intl.get('perspectives.victims.properties.placeOfCapture.label')}</TableCell>
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
              sourceExternalLink={false}
            />
          </TableRow>
          <TableRow key='camp'>
            <TableCell className={classes.labelCell}>{intl.get('perspectives.victims.properties.prisonCamp.label')}</TableCell>
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
              sourceExternalLink={false}
            />
          </TableRow>
          <TableRow key='imprisonmentMotive'>
            <TableCell className={classes.labelCell}>{intl.get('perspectives.victims.properties.imprisonmentMotive.label')}</TableCell>
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
              sourceExternalLink={false}
            />
          </TableRow>
          <TableRow key='imprisonmentDate'>
            <TableCell className={classes.labelCell}>{intl.get('perspectives.victims.properties.imprisonmentDate.label')}</TableCell>
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
              sourceExternalLink={false}
            />
          </TableRow>
          <TableRow key='releaseDate'>
            <TableCell className={classes.labelCell}>{intl.get('perspectives.victims.properties.releaseDate.label')}</TableCell>
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
              sourceExternalLink={false}
            />
          </TableRow>
          <TableRow key='deathYear'>
            <TableCell className={classes.labelCell}>{intl.get('perspectives.victims.properties.deathYear.label')}</TableCell>
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
              sourceExternalLink={false}
            />
          </TableRow>
          <TableRow key='deathDay'>
            <TableCell className={classes.labelCell}>{intl.get('perspectives.victims.properties.deathDay.label')}</TableCell>
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
              sourceExternalLink={false}
            />
          </TableRow>
          <TableRow key='age'>
            <TableCell className={classes.labelCell}>{intl.get('perspectives.victims.properties.age.label')}</TableCell>
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
              sourceExternalLink={false}
            />
          </TableRow>
          <TableRow key='deathMunicipality'>
            <TableCell className={classes.labelCell}>{intl.get('perspectives.victims.properties.deathMunicipality.label')}</TableCell>
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
              sourceExternalLink={false}
            />
          </TableRow>
          <TableRow key='deathProvince'>
            <TableCell className={classes.labelCell}>{intl.get('perspectives.victims.properties.deathProvince.label')}</TableCell>
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
              sourceExternalLink={false}
            />
          </TableRow>
          <TableRow key='deathCountry'>
            <TableCell className={classes.labelCell}>{intl.get('perspectives.victims.properties.deathCountry.label')}</TableCell>
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
              sourceExternalLink={false}
            />
          </TableRow>
          <TableRow key='deathPlace'>
            <TableCell className={classes.labelCell}>{intl.get('perspectives.victims.properties.deathPlace.label')}</TableCell>
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
              sourceExternalLink={false}
            />
          </TableRow>
          <TableRow key='causeOfDeath'>
            <TableCell className={classes.labelCell}>{intl.get('perspectives.victims.properties.causeOfDeath.label')}</TableCell>
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
              sourceExternalLink={false}
            />
          </TableRow>
          <TableRow key='deathMotive'>
            <TableCell className={classes.labelCell}>{intl.get('perspectives.victims.properties.deathMotive.label')}</TableCell>
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
              sourceExternalLink={false}
            />
          </TableRow>
          <TableRow key='burial'>
            <TableCell className={classes.labelCell}>{intl.get('perspectives.victims.properties.methodOfBurial.label')}</TableCell>
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
              sourceExternalLink={false}
            />
          </TableRow>
          <TableRow key='deathComment'>
            <TableCell className={classes.labelCell}>{intl.get('perspectives.victims.properties.deathComment.label')}</TableCell>
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
              sourceExternalLink={false}
            />
          </TableRow>
          <TableRow key='religion'>
            <TableCell className={classes.labelCell}>{intl.get('perspectives.victims.properties.religion.label')}</TableCell>
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
              sourceExternalLink={false}
            />
          </TableRow>
          <TableRow key='additionalDeathSource'>
            <TableCell className={classes.labelCell}>{intl.get('perspectives.victims.properties.additionalDeathSource.label')}</TableCell>
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
              sourceExternalLink={false}
            />
          </TableRow>
          <TableRow key='externalLink'>
            <TableCell className={classes.labelCell}>{intl.get('perspectives.victims.properties.link.label')}</TableCell>
            <ResultTableCell
              columnId='externalLink'
              data={data.externalLink}
              valueType='object'
              makeLink={true}
              externalLink={true}
              sortValues={true}
              numberedList={false}
              minWidth={150}
              container='cell'
              expanded={true}
              showSource={true}
              sourceExternalLink={false}
            />
          </TableRow>
          {/*<TableRow key='uri'>
            <TableCell className={classes.labelCell}>Tunniste</TableCell>
            <ResultTableCell
              columnId='uri'
              data={data.uri}
              valueType='object'
              makeLink={true}
              externalLink={true}
              sortValues={true}
              numberedList={false}
              minWidth={150}
              container='cell'
              expanded={true}
              showSource={true}
              sourceExternalLink={false}
            />
          </TableRow>*/}
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
