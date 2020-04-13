import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import FormControl from '@material-ui/core/FormControl'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import Box from '@material-ui/core/Box'
import FormLabel from '@material-ui/core/FormLabel'
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Typography from '@material-ui/core/Typography'
import 'date-fns'
import DatePicker from '../Shared/DatePicker'
import SimpleInput from '../Shared/SimpleInput'
import SelectDropdown from '../Shared/SelectDropdown'

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

const useRadioButtonStyles = makeStyles(theme => ({
  root: {
    '& fieldset>legend': {
      fontSize: 16,
      fontFamily: 'Open Sans',
      color: '#2E2E2E'
    },
    '& span': {
      paddingBottom: theme.spacing(0.75),
      fontSize: 16,
      fontFamily: 'Open Sans',
      color: '#2E2E2E'
    }
  }
}))

const useClientPolicyStyles = makeStyles(theme => ({
  root: {
    '& .MuiInputBase-root': {
      width: 197,
      height: 40,
      border: '1px solid #CCCCCC',
      borderRadius: 4,
      background: '#FFFFFF'
    },
    '&+span>i': {
      width: 375,
      height: 34,
      font: 'Italic 12px Open Sans',
      color: '#666666',
      display: 'inline-block',
      marginLeft: 13,
      verticalAlign: 'bottom'
    }
  }
}))
const GeneralInformation = () => {
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
  const classes = useFormContainerStyles()
  const [isDisableAgency, setIsDisableAgency] = React.useState(true)
  const [isDisableRating, setIsDisableRating] = React.useState(true)
  const [isDisableCompany, setIsDisableCompany] = React.useState(true)
  const [isDisableProducer, setIsDisableProducer] = React.useState(true)
  const [dateError, setDateError] = React.useState('')
  const agencyMenuItems = ['agency1', 'agency2', 'agency3']
  const ratingMenuItems = ['rating1', 'rating2', 'rating3']
  const companyMenuItems = ['company1', 'company2', 'company3']
  const onDateChange = value => {
    if (value) {
      setIsDisableAgency(false)
      const isValid = validate(value)
      isValid
        ? setDateError('')
        : setDateError(
            'Effective Date cannot be greater than 1 year in the future or in the past from today’s date'
          )
    }
  }
  const validate = date => {
    const today = new Date()
    // calculating number of days b/w two dates
    const diffInMilli = Math.abs(today.getTime() - date.getTime())
    const daysDiff = Math.floor(diffInMilli / (1000 * 3600 * 24))
    const isValid = daysDiff < 365
    return isValid
  }
  const disableDate = date => {
    if (date.getMonth() === 1) {
      return date.getDate() === 29
    }
  }
  const onAgencySelect = value => {
    if (value) {
      setIsDisableRating(false)
    }
  }
  const onRatingSelect = value => {
    if (value) {
      setIsDisableCompany(false)
    }
  }
  const onCompanySelect = value => {
    if (value) {
      setIsDisableProducer(false)
    }
  }
  return (
    <Grid container>
      <Grid item xs={12} className={classes.gridItem}>
        <Heading title='General Information' />
      </Grid>
      <Grid item xs={12} className={classes.gridItem}>
        <DatePicker
          title='Effective Date'
          width={190}
          changeDate={onDateChange}
          errorText={dateError}
          disablefebruary29={disableDate}
        />
        <SimpleInput
          defaultValue='91'
          isDisableInput
          title='Program'
          type='text'
          width={190}
        />
        <SelectDropdown
          title='Agency'
          width={400}
          isDisable={isDisableAgency}
          menuItems={agencyMenuItems}
          selectValue={onAgencySelect}
        />
      </Grid>
      <Grid item xs={12} className={classes.gridItem}>
        <SelectDropdown
          title='Producer'
          width={400}
          isDisable={isDisableProducer}
        />
      </Grid>
      <Grid item xs={12} className={classes.gridItem}>
        <SelectDropdown
          title='Rating State'
          width={400}
          isDisable={isDisableRating}
          menuItems={ratingMenuItems}
          selectValue={onRatingSelect}
        />
        <SelectDropdown
          title='Company'
          width={400}
          isDisable={isDisableCompany}
          menuItems={companyMenuItems}
          selectValue={onCompanySelect}
        />
      </Grid>
      <Grid item xs={12} className={classes.gridItem}>
        <RadioButton
          title='Is this Quote a Book Transfer?'
          label1='Yes'
          label2='No'
          value1='yes'
          value2='no'
        />
      </Grid>
      <Grid item xs={12} className={classes.gridItem}>
        <RadioButton
          title='Are you working on existing client or prospect?'
          label1='Client'
          label2='Prospect'
          value1='client'
          value2='prospect'
        />
      </Grid>
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

const RadioButton = props => {
  const classes = useRadioButtonStyles()
  const [client, setClient] = React.useState(false)
  const handleChange = event => {
    setClient(event.target.value === 'client')
  }
  return (
    <Box
      display='flex'
      flexDirection='column'
      pl={1.25}
      pr={1.25}
      pt={1.25}
      className={classes.root}
    >
      <FormControl component='fieldset'>
        <FormLabel component='legend'>{props.title}</FormLabel>
        <RadioGroup
          aria-label='position'
          name='position'
          onClick={handleChange}
          row
        >
          <FormControlLabel
            value={props.value1}
            control={<Radio color='primary' />}
            label={props.label1}
            labelPlacement='end'
          />
          <FormControlLabel
            value={props.value2}
            control={<Radio color='primary' />}
            label={props.label2}
            labelPlacement='end'
          />
        </RadioGroup>
      </FormControl>
      {client ? <ClientPolicyNumber /> : null}
    </Box>
  )
}

const ClientPolicyNumber = () => {
  const classes = useClientPolicyStyles()
  return (
    <Box display='flex' flexDirection='column'>
      <span>Client Policy Number</span>
      <span>
        <TextField
          className={classes.root}
          id='outlined-helperText'
          defaultValue=''
          variant='outlined'
        />
        <span>
          <i>
            By providing us with the Client Policy Number we will bring the
            existing information to reduce your form filling time
          </i>
        </span>
      </span>
    </Box>
  )
}
export default GeneralInformation
