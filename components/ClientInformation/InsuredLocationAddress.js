import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import SimpleInput from '../Shared/SimpleInput'
import SelectDropdown from '../Shared/SelectDropdown'

const useInsuredLocationAddressStyles = makeStyles(theme => ({
  gridItem: {
    display: 'flex'
  },
  insuredAddress: {
    font: 'Bold 14px Open Sans',
    color: '#2E2E2E'
  },
  horizontalLine: {
    height: 1,
    width: 820,
    background: '#5B7183',
    border: '1px solid #3E3E3E',
    opacity: 0.5
  }
}))

const InsuredLocationAddress = () => {
  const classes = useInsuredLocationAddressStyles()
  return (
    <Box>
      <Grid item xs={12} className={classes.gridItem}>
        <Box pl={1.25} pr={1.25} pt={1.25}>
          <span className={classes.insuredAddress}>
            Insured Location Address
          </span>
          <div className={classes.horizontalLine} />
        </Box>
      </Grid>
      <Grid item xs={12} className={classes.gridItem}>
        <Box display='flex'>
          <SimpleInput title='Address Line 1' width={330} />
          <SimpleInput title='Suite / Apt # (Optional)' width={330} />
          <SelectDropdown title='City' width={120} />
        </Box>
      </Grid>
      <Grid item xs={12} className={classes.gridItem}>
        <Box display='flex'>
          <SelectDropdown title='Rating City' width={155} />
          <SelectDropdown title='County' width={155} />
          <SelectDropdown title='State' width={155} />
          <SelectDropdown title='Zipcode' width={155} />
        </Box>
      </Grid>
      <Grid item xs={12} className={classes.gridItem}>
        <Box display='flex'>
          <SimpleInput
            title='Country'
            width={155}
            defaultValue='United States'
            isDisable
          />
        </Box>
      </Grid>
    </Box>
  )
}

export default InsuredLocationAddress
