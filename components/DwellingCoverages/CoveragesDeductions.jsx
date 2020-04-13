import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import DatePicker from '../Shared/DatePicker'
import SimpleInput from '../Shared/SimpleInput'
import SelectDropdown from '../Shared/SelectDropdown'
import Collapse from '@material-ui/core/Collapse'
import FormControl from '@material-ui/core/FormControl'
import FormLabel from '@material-ui/core/FormLabel'
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'


const useCoveragesDeductionsStyles = makeStyles(theme => ({
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
    },
    italics: {
        font: 'Italic 12px Open Sans',
        color: '#666666',
        marginLeft: 10
      },
      foreignAddress: {
        font: 'Normal 14px Open Sans',
        color: '#2E2E2E',
        width: 251
      },
  }))

const CoveragesDeductions = props => {
    const classes = useCoveragesDeductionsStyles()
    const [checkedLiability, setCheckedLiability] = React.useState(false)
    const [checkedPersonalCost, setCheckedPersonalCost] = React.useState(false)
  const handleChangeLiability = event => {
    setCheckedLiability(event.target.checked)
  }
  const handleChangePersonalCost = event => {
    setCheckedPersonalCost(event.target.checked)
  }
    return (
      <Collapse in={props.toggleOpen} timeout='auto'>
        <Grid item xs={12} className={classes.gridItem}>
        <Box pl={1.25} pr={1.25} pt={1.25}>
          <span className={classes.insuredHeading}>Coverage Section 1: Property</span>
          <div className={classes.horizontalLine} />
        </Box>
        </Grid>
        <Grid item xs={12} className={classes.gridItem}>
        <SimpleInput title='A - Dwelling*' width={190}/>
        <SimpleInput title='B - Other Structures' width={190} isDisable/>
        <SimpleInput title='C - Personal Property' width={190} isDisable/>
        <SimpleInput title='D - Loss of Use' width={190} isDisable/>
        </Grid>
        <Grid item xs={12} className={classes.gridItem}>
        <Box
          pr={1.25}
          pt={1.25}
          display='flex'
          width='auto'
          justifyContent='space-between'
          alignItems='center'
        >
        <Checkbox
            checked={checkedLiability}
            onChange={handleChangeLiability}
            inputProps={{ 'aria-label': 'uncontrolled-checkbox' }}
            width={20}
            height={20}
          />
          <span className={classes.foreignAddress}>Liability extended from another policy</span>
          </Box>
        <Box
          pr={1.25}
          pt={1.25}
          display='flex'
          width='auto'
          justifyContent='space-between'
          alignItems='center'
        >
        <Checkbox
            checked={checkedPersonalCost}
            onChange={handleChangePersonalCost}
            inputProps={{ 'aria-label': 'uncontrolled-checkbox' }}
            width={20}
            height={20}
          />
          <span className={classes.foreignAddress}>Personal Property Replacement Cost</span>
          </Box>
        </Grid>
        <Grid item xs={12} className={classes.gridItem}>
        <Box pl={1.25} pr={1.25} pt={1.25}>
          <span className={classes.insuredHeading}>Liability</span>
          <div className={classes.horizontalLine} />
        </Box>
        </Grid>
        <Grid item xs={12} className={classes.gridItem}>
        <SelectDropdown title='Personal Liability' width={190}/>
        <SelectDropdown title='Medical Payments' width={190}/>
        <SelectDropdown title='All Perils Deductible *' width={190}/>
        </Grid>
        <Grid item xs={12} className={classes.gridItem}>
        <Box pl={1.25} pr={1.25} pt={1.25}>
          <span className={classes.insuredHeading}>Deductions</span>
          <div className={classes.horizontalLine} />
        </Box>
        </Grid>
        <Grid item xs={12} className={classes.gridItem}>
        <SelectDropdown title='All Perils Deductible *' width={190}/>
        <SelectDropdown title='Wind Deductible' width={190} isDisable/>
        </Grid>
        </Collapse>
    )
}

export default CoveragesDeductions