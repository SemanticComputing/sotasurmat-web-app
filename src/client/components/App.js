import React from 'react'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import SemanticPortal from '../containers/SemanticPortal'
// import deepPurple from '@material-ui/core/colors/deepPurple'
import red from '@material-ui/core/colors/red'

const sisoRed = red.A700

const theme = createMuiTheme({
  palette: {
    primary: {
      main: sisoRed
    }
  },
  overrides: {
    MuiTooltip: {
      tooltip: {
        fontSize: '1 rem'
      }
    },
    MuiAccordion: {
      root: {
        '&$expanded': {
          marginTop: 8,
          marginBottom: 8
        }
      }
    },
    MuiButton: {
      endIcon: {
        marginLeft: 0
      }
    },
    MuiSlider: {
      valueLabel: {
        '& *': {
          width: 82,
          height: 19,
          transform: 'none',
          backgroundColor: 'transparent',
          borderRadius: 0,
          fontSize: '1rem'
        }
      }
    }
  }
})

const App = () => (
  <MuiThemeProvider theme={theme}>
    <SemanticPortal />
  </MuiThemeProvider>
)

export default App
