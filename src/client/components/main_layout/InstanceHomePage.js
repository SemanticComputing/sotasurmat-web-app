import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import purple from '@material-ui/core/colors/purple';
import SurmatutPageTable from '../perspectives/SurmatutPageTable';
import TaistelutPageTable from '../perspectives/TaistelutPageTable';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import ResultTableCell from '../facet_results/ResultTableCell';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/InfoOutlined';
import has from 'lodash';

const styles = theme => ({
  root: {
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center'
  },
  content: {
    padding: theme.spacing(1),
    width: 800,
    overflowY: 'auto'
  },
  divider: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1)
  },
  sahaButton: {
    marginTop: theme.spacing(2),
  },
  spinnerContainer: {
    display: 'flex',
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  labelCell: {
    minWidth: 220
  }
});

class InstanceHomePage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      instanceHeading: '',
      localID: []
    };
  }

  componentDidMount = () => {
    let uri = '';
    let base = 'http://ldf.fi/siso';
    const localID = this.props.routeProps.location.pathname.split('/').pop();
    this.setState({ localID: localID });
    switch(this.props.resultClass) {
      case 'surmatut':
        this.setState({
          instanceHeading: 'Henkilö',
        });
        uri = `${base}/death_records/${localID}`;
        break;
      case 'taistelut':
        this.setState({
          instanceHeading: 'Taistelu',
        });
        uri = `${base}/sita/${localID}`;
        break;
    }
    this.props.fetchByURI({
      resultClass: this.props.resultClass,
      facetClass: null,
      variant: null,
      uri: uri
    });
  }

  // renderTable = () => {
  //   let tableEl = null;
  //   if (this.state.instanceClass !== '') {
  //     switch (this.state.instanceHeading) {
  //       case 'Henkilö':
  //         tableEl =
  //           <SurmatutPageTable
  //             data={this.props.data}
  //           />;
  //         break;
  //       case 'Taistelu':
  //         tableEl =
  //             <TaistelutPageTable
  //               data={this.props.data}
  //             />;
  //         break;
  //       default:
  //         tableEl = <div></div>;
  //     }
  //   }
  //   return tableEl;
  // }

  render = () => {
    const { classes, data, isLoading } = this.props;
    const hasData = data !== null && Object.values(data).length >= 1;
    return(
      <div className={classes.root}>
        <Paper className={classes.content}>
          {isLoading &&
            <div className={classes.spinnerContainer}>
              <CircularProgress style={{ color: purple[500] }} thickness={5} />
            </div>
          }
          {!hasData &&
            <React.Fragment>
              <Typography variant='h4'>{this.state.instanceHeading}</Typography>
              <Divider className={classes.divider} />
              <Typography variant='h6'>
                No data found for id: <span style={{ fontStyle: 'italic'}}>{this.state.localID}</span>
              </Typography>
            </React.Fragment>
          }
          {hasData &&
            <React.Fragment>
              <Typography variant='h4'>{this.state.instanceHeading}</Typography>
              <Divider className={classes.divider} />
              <Typography variant='h6'>
                {Array.isArray(data.prefLabel)
                  ? data.prefLabel[0].prefLabel
                  : data.prefLabel.prefLabel
                }
              </Typography>
              <Table>
                <TableBody>
                  {this.props.tableRows.map(row => {
                    if (row.id !== 'prefLabel') {
                      return (
                        <TableRow key={row.id}>
                          <TableCell className={classes.labelCell}>
                            {row.label}
                            <Tooltip
                              title={row.desc}
                              enterDelay={300}
                            >
                              <IconButton>
                                <InfoIcon />
                              </IconButton>
                            </Tooltip>
                          </TableCell>
                          <ResultTableCell
                            columnId={row.id}
                            data={data[row.id]}
                            valueType={row.valueType}
                            makeLink={row.makeLink}
                            externalLink={row.externalLink}
                            sortValues={row.sortValues}
                            numberedList={row.numberedList}
                            minWidth={row.minWidth}
                            container='cell'
                            expanded={true}
                            linkAsButton={has(row, 'linkAsButton')
                              ? row.linkAsButton
                              : null
                            }
                            collapsedMaxWords={has(row, 'collapsedMaxWords')
                              ? row.collapsedMaxWords
                              : null
                            }
                          />
                        </TableRow>
                      );
                    }
                  }
                  )}
                </TableBody>
              </Table>
              <Button
                className={classes.sahaButton}
                variant='contained'
                target='_blank'
                rel='noopener noreferrer'
                href={data.id}
              >
                Open in Linked Data Browser
              </Button>
            </React.Fragment>
          }
        </Paper>
      </div>
    );
  }
}

InstanceHomePage.propTypes = {
  classes: PropTypes.object.isRequired,
  fetchByURI: PropTypes.func.isRequired,
  resultClass: PropTypes.string.isRequired,
  data: PropTypes.object,
  tableRows: PropTypes.array.isRequired,
  isLoading: PropTypes.bool.isRequired,
  routeProps: PropTypes.object.isRequired
};

export default withStyles(styles)(InstanceHomePage);
