import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import Box from '@material-ui/core/Box'

const useSelectDropdownStyles = makeStyles(theme => ({
  formControl: props => ({
    '& span': {
      paddingBottom: theme.spacing(0.75),
      fontSize: 16,
      fontFamily: 'Open Sans',
      color: '#2E2E2E'
    },
    '& .MuiInputBase-root': {
      width: props.width,
      height: 40,
      background: props.isDisable ? '#EEEEEE' : '#FFFFFF',
      border: '1px solid #CCCCCC',
      borderRadius: 4
    }
  })
}))

const SelectDropdown = props => {
  const classes = useSelectDropdownStyles(props)
  const handleChange = event => {
    props.selectValue(event.target.value)
  }
  return (
    <Box display='flex' flexDirection='column' pl={1.25} pr={1.25} pt={1.25}>
      <FormControl
        variant='outlined'
        className={classes.formControl}
        disabled={props.isDisable}
      >
        <span>{props.title}</span>
        <Select onChange={handleChange}>
          <MenuItem value=''>None</MenuItem>
          {props.menuItems &&
            props.menuItems.map((item, index) => {
              return (
                <MenuItem key={index} value={item}>
                  {item}
                </MenuItem>
              )
            })}
        </Select>
      </FormControl>
    </Box>
  )
}

export default SelectDropdown
