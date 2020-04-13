import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Box from '@material-ui/core/Box'

const useSimpleInputStyles = makeStyles(theme => ({
  spanLabel: {
    paddingBottom: theme.spacing(0.75),
    fontSize: 16,
    fontFamily: 'Open Sans',
    color: '#2E2E2E'
  },
  simpleTextField: props => ({
    '& .MuiInputBase-root': {
      width: props.width,
      height: 40,
      border: '1px solid #CCCCCC',
      borderRadius: 4,
      background: props.isDisableInput ? '#EEEEEE' : '#FFFFFF'
    }
  })
}))

const SimpleInput = props => {
  const classes = useSimpleInputStyles(props)
  return (
    <Box display='flex' flexDirection='column' pl={1.25} pr={1.25} pt={1.25}>
      <span className={classes.spanLabel}>{props.title}</span>
      <TextField
        className={classes.simpleTextField}
        id='outlined-helperText'
        defaultValue={props.defaultValue}
        variant='outlined'
        type={props.type}
        disabled={props.isDisableInput}
      />
    </Box>
  )
}

export default SimpleInput
