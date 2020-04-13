import { createMuiTheme } from '@material-ui/core/styles'

const rawTheme = createMuiTheme({
  palette: {
    background: {
      default: '#f6f6f6'
    },
    text: {
      primary: '#2e2e2e'
    }
  }
})

const theme = {
  ...rawTheme,
  overrides: {
    // Overrides all buttons to spec allowing us to use material-ui semantics
    // to generate styled buttons
    MuiButton: {
      root: {
        fontWeight: 'bold',
        boxShadow: 'none',
        borderRadius: 0,
        marginRight: rawTheme.spacing(2),
        '&:last-child:not(:first-child)': {
          marginRight: 0
        }
      },
      containedPrimary: {
        backgroundColor: '#b22222',
        '&$containedPrimary:hover': {
          background: '#870a0a'
        },
        '&$disabled': {
          background: '#d89090',
          color: '#fff'
        }
      },
      outlinedPrimary: {
        border: '2px solid #b22222',
        color: '#b22222',
        background: '#fff',
        '&$outlinedPrimary:hover': {
          border: '2px solid #870a0a',
          color: '#870a0a',
          background: '#fff'
        },
        '&$disabled': {
          border: '2px solid #d89090',
          color: '#d89090'
        }
      },
      containedSecondary: {
        backgroundColor: '#6e6e6e',
        '&$containedSecondary:hover': {
          background: '#555555'
        },
        '&$disabled': {
          background: '#b1b6b8',
          color: '#fff'
        }
      },
      outlinedSecondary: {
        border: '2px solid #6e6e6e',
        color: '#6e6e6e',
        background: '#fff',
        '&$outlinedSecondary:hover': {
          border: '2px solid #555555',
          color: '#555555',
          background: '#fff'
        },
        '&$disabled': {
          border: '2px solid #b1b6b8',
          color: '#b1b6b8'
        }
      },
      disabled: {}
    }
  },
  props: {
    MuiButton: {
      disableElevation: true
    }
  }
}

export default theme
