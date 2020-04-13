import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import 'date-fns'
import DateFnsUtils from '@date-io/date-fns'
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from '@material-ui/pickers'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'

const useDatePickerStyles = makeStyles(theme => ({
  spanLabel: {
    fontSize: 16,
    fontFamily: 'Open Sans',
    color: '#2E2E2E'
  },
  picker: props => ({
    '& .MuiFormControl-root': {
      marginTop: 8,
      '& .MuiInputBase-root': {
        width: props.width,
        height: 40,
        border: '1px solid #CCCCCC',
        borderRadius: 4
      }
    }
  })
}))

const DatePicker = props => {
  const [selectedDate, setSelectedDate] = React.useState()
  const handleDateChange = date => {
    setSelectedDate(date)
    props.changeDate(date)
  }

  const classes = useDatePickerStyles(props)
  return (
    <Box display='flex' flexDirection='column' pl={1.25} pr={1.25} pt={1.25}>
      <span className={classes.spanLabel}>{props.title}</span>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <Grid container justify='space-around' className={classes.picker}>
          <KeyboardDatePicker
            disableToolbar
            variant='inline'
            inputVariant='outlined'
            format='MM/dd/yyyy'
            margin='normal'
            error={props.errorText}
            helperText={props.errorText}
            shouldDisableDate={props.disablefebruary29}
            value={selectedDate}
            onChange={handleDateChange}
            id='date-picker-inline'
            KeyboardButtonProps={{
              'aria-label': 'change date'
            }}
          />
        </Grid>
      </MuiPickersUtilsProvider>
    </Box>
  )
}
export default DatePicker
