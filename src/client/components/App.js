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
  typography: {
    useNextVariants: true,
  },
});

const App = () => (
  <MuiThemeProvider theme={theme}>
    <SemanticPortal />
  </MuiThemeProvider>
);

export default App;
