import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import 'date-fns'
import ExpandLess from '@material-ui/icons/ExpandLess'
import ExpandMore from '@material-ui/icons/ExpandMore'
import BasicDetails from './BasicDetails'
import MailingAddress from './MailingAddress'

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
const useHeadingStyles = makeStyles(theme => ({
  title: {
    font: 'Bold 16px Open Sans',
    color: '#2E2E2E',
    width: 164,
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
const useFormContainerStyles = makeStyles(theme => ({
  gridItem: {
    display: 'flex'
  },
  basicDetails: {
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
  onHover: {
    '&:hover': {
      cursor: 'pointer'
    }
  }
}))

const ClientInformation = () => {
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
  const [open, setOpen] = React.useState(true)
  const [addInsured, setAddInsured] = React.useState(false)
  const [openMail, setOpenMail] = React.useState(true)
  const handleClick = () => {
    setOpen(!open)
  }
  const AddInsuredForm = e => {
    !addInsured ? setAddInsured(!addInsured) : e.preventDefault()
  }
  const handleMailClick = () => {
    setOpenMail(!openMail)
  }
  const classes = useFormContainerStyles()
  return (
    <Grid container>
      <Grid item xs={12} className={classes.gridItem}>
        <Heading title='Client Information' />
      </Grid>
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
            onClick={handleClick}
          >
            <span className={classes.basicDetails}>Basic Details</span>
            {open ? <ExpandMore /> : <ExpandLess />}
          </Box>
          <div
            className={classes.horizontalLine}
            style={{ marginBotton: 15 }}
          />
        </Box>
      </Grid>
      <BasicDetails toggleOpen={open} title='1st Insured' />
      <BasicDetails toggleOpen={open} title='2nd Insured' />
      {addInsured && <BasicDetails toggleOpen={open} title='3rd Insured' />}
      <div className={classes.horizontalLine} style={{ marginTop: 10 }} />
      <Box display='flex' flexDirection='column' width={819} textAlign='right'>
        <span
          className={classes.onHover}
          style={{
            font: 'normal 14px Open Sans',
            color: '#B22222',
            paddingTop: 5
          }}
          onClick={AddInsuredForm}
        >
          + Add More Name
        </span>
        <i style={{ font: 'Italic 12px Roboto', color: '#979797' }}>
          You can add upto three Named Insured’s
        </i>
      </Box>
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
            onClick={handleMailClick}
          >
            <span className={classes.basicDetails}>Mailing Address</span>
            {openMail ? <ExpandMore /> : <ExpandLess />}
          </Box>
          <div
            className={classes.horizontalLine}
            style={{ marginBotton: 15 }}
          />
        </Box>
      </Grid>
      <MailingAddress toggleOpen={openMail} />
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

export default ClientInformation
