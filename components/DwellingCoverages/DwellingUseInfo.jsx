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

const useDwellingUseInfoStyles = makeStyles(theme => ({
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

  const useRadioButtonStyles = makeStyles(theme => ({
    root: {
        '& fieldset>legend': {
            fontSize: 16,
            fontFamily: 'Open Sans',
            color: '#2E2E2E',
            paddingTop: 5
        },
        '& span': {
            paddingBottom: theme.spacing(0.75),
            fontSize: 16,
            fontFamily: 'Open Sans',
            color: '#2E2E2E'
        }
    }
}))

const DwellingUseInfo = props => {
    const classes = useDwellingUseInfoStyles()
    return (
      <Collapse in={props.toggleOpen} timeout='auto'>
        <Grid item xs={12} className={classes.gridItem}>
          <SelectDropdown title='Construction' width={190}/>
          <RadioButton
                    title='Kit-Built or Manufactured'
                    label1='Yes'
                    label2='No'
                    value1='yes'
                    value2='no'
                />
            <SimpleInput title='Year of Construction' width={190}/>
            <RadioButton
                    title='Lead Abatement Completed'
                    label1='Yes'
                    label2='No'
                    value1='yes'
                    value2='no'
                />
        </Grid>
        <Grid item xs={12} className={classes.gridItem}>
        <SelectDropdown title='Dwelling Use' width={378}/>
        <SelectDropdown title='Miles to Fire Station' width={190}/>
        <RadioButton
                    title='Feet to Hydrant'
                    label1='0-1000'
                    label2='Over 1000'
                    value1='thousand'
                    value2='thousandplus'
                />
        </Grid>
        <Grid item xs={12} className={classes.gridItem}>
        <SelectDropdown title='Number of Families' width={190}/>
        <RadioButton
                    title='Townhouse or Row House'
                    label1='Yes'
                    label2='No'
                    value1='yes'
                    value2='no'
                />
        </Grid>
        <Grid item xs={12} className={classes.gridItem}>
        <SelectDropdown title='Distance to Coast' width={378}/>
        </Grid>
        </Collapse>
    )
}

const RadioButton = props => {
    const classes = useRadioButtonStyles()

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
        </Box>
    )
}

export default DwellingUseInfo