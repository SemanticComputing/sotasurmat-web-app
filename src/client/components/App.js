import React from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import SemanticPortal from '../containers/SemanticPortal';
import red from '@material-ui/core/colors/red';

const sisoRed = red['A700'];

const theme = createMuiTheme({
  palette: {
    primary: {
      main: sisoRed,
    },
  },
  overrides: {
    MuiTooltip: {
      tooltip: {
        fontSize: '1 rem'
      }
    },
    MuiExpansionPanel: {
      root: {
        '&$expanded': {
          marginTop: 8,
          marginBottom: 8
        }
      },
    }
  }
});

const App = () => (
  <MuiThemeProvider theme={theme}>
    <SemanticPortal />
  </MuiThemeProvider>
);

export default App;
