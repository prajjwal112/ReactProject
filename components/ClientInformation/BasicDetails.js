import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import DatePicker from '../Shared/DatePicker'
import SimpleInput from '../Shared/SimpleInput'
import SelectDropdown from '../Shared/SelectDropdown'
import Collapse from '@material-ui/core/Collapse'

const useBasicDetailsStyles = makeStyles(theme => ({
  gridItem: {
    display: 'flex'
  },
  insuredHeading: {
    font: 'Bold 14px Open Sans',
    color: '#2E2E2E'
  },
  horizontalLine: {
    height: 1,
    width: 820,
    background: '#5B7183',
    border: '1px solid #3E3E3E',
    opacity: 0.5,
    marginBottom: 15
  }
}))

const BasicDetails = props => {
  const classes = useBasicDetailsStyles()
  return (
    <Collapse in={props.toggleOpen} timeout='auto'>
      <Grid item xs={12} className={classes.gridItem}>
        <Box pl={1.25} pr={1.25} pt={1.25}>
          <span className={classes.insuredHeading}>{props.title}</span>
          <div className={classes.horizontalLine} />
        </Box>
      </Grid>
      <Grid item xs={12} className={classes.gridItem}>
        <SimpleInput title={`First Name - ${props.title}`} width={220} />
        <SimpleInput title='Middle Name (Optional)' width={220} />
        <SimpleInput title='Last Name' width={220} />
        <SelectDropdown title='Suffix' width={100} />
      </Grid>
      <Grid item xs={12} className={classes.gridItem}>
        <DatePicker title='Date of Birth' width={220} />
        <SimpleInput title='Email Address' width={460} />
      </Grid>
      <Grid item xs={12} className={classes.gridItem}>
        <SimpleInput title='Phone Number' width={220} />
        <SelectDropdown title='Phone Type (Optional)' width={220} />
      </Grid>
    </Collapse>
  )
}

export default BasicDetails
