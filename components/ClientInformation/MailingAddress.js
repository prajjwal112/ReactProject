import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import Collapse from '@material-ui/core/Collapse'
import Checkbox from '@material-ui/core/Checkbox'
import InfoIcon from '@material-ui/icons/Info'
import SimpleInput from '../Shared/SimpleInput'
import SelectDropdown from '../Shared/SelectDropdown'
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormControl from '@material-ui/core/FormControl'
import FormLabel from '@material-ui/core/FormLabel'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import InsuredLocationAddress from './InsuredLocationAddress'

const useMailingAddressStyles = makeStyles(theme => ({
  gridItem: {
    display: 'flex'
  },

  horizontalLine: {
    height: 1,
    width: 820,
    background: '#5B7183',
    border: '1px solid #3E3E3E',
    opacity: 0.5,
    marginBottom: 15
  },
  italics: {
    font: 'Italic 12px Open Sans',
    color: '#666666',
    marginLeft: 10
  },
  foreignAddress: {
    font: 'Normal 14px Open Sans',
    color: '#2E2E2E'
  },
  infoIcon: {
    width: 16,
    height: 16,
    color: '#676767'
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
    },
    '& .MuiBox-root>span': {
      font: 'Italic 12px Open Sans',
      color: '#666666'
    }
  }
}))

const MailingAddress = props => {
  const classes = useMailingAddressStyles()
  const [checked, setChecked] = React.useState(false)
  const [isNotEquals, setIsNotEquals] = React.useState(true)
  const handleChange = event => {
    setChecked(event.target.checked)
  }
  const onChangeInsuredRadio = value => {
    setIsNotEquals(value)
    setChecked(!value)
  }
  return (
    <Collapse in={props.toggleOpen} timeout='auto'>
      <Grid item xs={12} className={classes.gridItem}>
        <Box
          pr={1.25}
          pt={1.25}
          display='flex'
          width={170}
          justifyContent='space-between'
          alignItems='center'
        >
          <Checkbox
            checked={checked}
            onChange={handleChange}
            inputProps={{ 'aria-label': 'uncontrolled-checkbox' }}
            width={20}
            height={20}
          />
          <span className={classes.foreignAddress}>Foreign Address</span>
          <InfoIcon className={classes.infoIcon} />
        </Box>
      </Grid>
      <Grid item xs={12} className={classes.gridItem}>
        <Box display='flex'>
          <SimpleInput title='Address Line 1' width={330} />
          <SimpleInput title='Address Line 2' width={330} />
          <SelectDropdown title='City' width={120} />
        </Box>
      </Grid>
      <Grid item xs={12} className={classes.gridItem}>
        <Box display='flex'>
          <SelectDropdown title='State' width={155} />
          <SelectDropdown title='Zipcode' width={155} />
          {checked ? (
            <Box display='flex' flexDirection='column'>
              {' '}
              <SelectDropdown title='Country' width={155} />{' '}
              <i
                style={{
                  font: 'Italic 12px Open Sans',
                  color: '#666666',
                  marginLeft: 10
                }}
              >
                Please select a foreign Country
              </i>
            </Box>
          ) : (
            <SimpleInput
              title='Country'
              width={155}
              defaultValue='United States'
              isDisable
            />
          )}
        </Box>
      </Grid>
      <Grid item xs={12} className={classes.gridItem}>
        <Box display='flex' flexDirection='column'>
          <SelectDropdown title='Year at Current Address' width={327} />
          <i className={classes.italics}>
            If your current address is less that 2 years you will be providing
            us with your Past address
          </i>
        </Box>
      </Grid>
      <Grid item xs={12} className={classes.gridItem}>
        <RadioButton
          title='Is your Insured address Same as your Mailing Address?'
          label1='Yes'
          label2='No'
          value1='yes'
          value2='no'
          toggleInsured={onChangeInsuredRadio}
        />
      </Grid>
      {!isNotEquals && <InsuredLocationAddress />}
    </Collapse>
  )
}

const RadioButton = props => {
  const classes = useRadioButtonStyles()
  const [isEqual, setIsEqual] = React.useState()
  const handleChange = event => {
    event.target.value === 'yes'
      ? setIsEqual(event.target.value === 'yes') ||
        props.toggleInsured(event.target.value === 'yes')
      : props.toggleInsured(!event.target.value === 'yes') ||
        setIsEqual(!event.target.value === 'yes')
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
        >
          <Box display='flex'>
            <Box>
              <Box display='flex' alignItems='center'>
                <FormControlLabel
                  value={props.value1}
                  control={<Radio color='primary' />}
                  label={props.label1}
                  labelPlacement='end'
                />
                <span>If YES we can move to the next section</span>
              </Box>
              <Box display='flex' alignItems='center' mt={-2}>
                <FormControlLabel
                  value={props.value2}
                  control={<Radio color='primary' />}
                  label={props.label2}
                  labelPlacement='end'
                />
                <span>If No you need to get us your Location Address</span>
              </Box>
            </Box>
            {isEqual && (
              <Box ml={2}>
                <SelectDropdown title='Add Country' width={155} />
              </Box>
            )}
          </Box>
        </RadioGroup>
      </FormControl>
    </Box>
  )
}

export default MailingAddress
