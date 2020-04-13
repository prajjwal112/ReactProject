import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import 'date-fns'
import ExpandLess from '@material-ui/icons/ExpandLess'
import ExpandMore from '@material-ui/icons/ExpandMore'
import PolicyFormDetails from './PolicyFormDetails'
import DwellingUseInfo from './DwellingUseInfo'
import CoveragesDeductions from './CoveragesDeductions'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    background: '#FFFFFF',
    width: 860,
    border: '1px solid #E9E9E9',
    paddingLeft: theme.spacing(1.25),
    paddingRight: theme.spacing(1.25)
  },
  form: {
    display: 'flex',
    width: '100%'
  }
}))

const useFormContainerStyles = makeStyles(theme => ({
  gridItem: {
    display: 'flex'
  },
  dwellingUseHeading: {
    font: 'Bold 14px Open Sans',
    color: '#B22222',
    paddingLeft: 10
  },
  horizontalLine: {
    height: 1,
    width: 820,
    background: '#DCDCDC',
    border: '1px solid #3E3E3E',
    opacity: 0.5
  },
}))

const useHeadingStyles = makeStyles(theme => ({
  title: {
    font: 'Bold 16px Open Sans',
    color: '#2E2E2E',
    width: 388,
    height: 22,
    marginTop: 4,
    marginBottom: 10,
    '&+div>i': {
      font: 'Italic 12px Open Sans',
      color: '#666666',
      width: 296,
      height: 17,
      marginBottom: 10,
      display: 'inline-block'
    }
  }
}))

const DwellingCoverages = () => {
  const classes = useStyles()
  return (
    <Box>
      <div className={classes.root}>
        <form className={classes.form}>
          <FormContainer />
        </form>
      </div>
    </Box>
  )
}

const FormContainer = () => {
  const [openDwellingUse, setOpenDwellingUse] = React.useState(true)
  const [openCoveragesDeductions, setOpenCoveragesDeductions] = React.useState(true)
  const handleDwellingUseClick = () => {
    setOpenDwellingUse(!openCoveragesDeductions)
  }
  const handleCoveragesDeductionsClick = () => {
    setOpenCoveragesDeductions(!openDwellingUse)
  }
  const classes = useFormContainerStyles()
  return (
    <Grid container>
      <Grid item xs={12} className={classes.gridItem}>
        <Heading title='Basic Policy and Enhanced Coverage information' />
      </Grid>
      <PolicyFormDetails title='Policy Form Details' />
      <Grid item xs={12} className={classes.gridItem}>
        <Box
          display='flex'
          flexDirection='column'
          pl={1.25}
          pr={1.25}
          pt={1.25}
        >
          <Box
            display='flex'
            justifyContent='space-between'
            onClick={handleDwellingUseClick}
          >
            <span className={classes.dwellingUseHeading}>Dwelling Use Info</span>
            {openDwellingUse ? <ExpandMore /> : <ExpandLess />}
          </Box>
          <div
            className={classes.horizontalLine}
            style={{ marginBotton: 15 }}
          />
        </Box>
      </Grid>
      <DwellingUseInfo toggleOpen={openDwellingUse} />
      <Grid item xs={12} className={classes.gridItem}>
        <Box
          display='flex'
          flexDirection='column'
          pl={1.25}
          pr={1.25}
          pt={1.25}
        >
          <Box
            display='flex'
            justifyContent='space-between'
            onClick={handleCoveragesDeductionsClick}
          >
            <span className={classes.dwellingUseHeading}>Coverages and Deductions</span>
            {openCoveragesDeductions ? <ExpandMore /> : <ExpandLess />}
          </Box>
          <div
            className={classes.horizontalLine}
            style={{ marginBotton: 15 }}
          />
        </Box>
      </Grid>
      <CoveragesDeductions toggleOpen={openCoveragesDeductions} />
    </Grid>
  )
}

const Heading = props => {
  const classes = useHeadingStyles()
  return (
    <Box display='flex' flexDirection='column' pl={1.25} pr={1.25} pt={1.25}>
      <Typography className={classes.title}>{props.title}</Typography>
      <div>
        <i>All fields below are required unless marked as optional</i>
      </div>
    </Box>
  )
}

export default DwellingCoverages