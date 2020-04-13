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

const usePolicyFormDetailsStyles = makeStyles(theme => ({
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
    policyForm: {
        font: 'Bold 14px Open Sans',
        color: '#2E2E2E'
    },
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

const PolicyFormDetails = (props) => {
    const classes = usePolicyFormDetailsStyles()
    return (
        <Box bgcolor='#F6F6F6' border='1px solid #E3E3E3' width={820} ml={1.25} mr={1.25} mt={1.25}>
            <Grid item xs={12} className={classes.gridItem}>
                <Box pl={1.25} pr={1.25} pt={1.25}>
                    <span className={classes.policyForm}>{props.title}</span>
                </Box>
            </Grid>
            <Grid item xs={12} className={classes.gridItem}>
                <SelectDropdown title='Policy Form' width={393} />
            </Grid>
            <Grid item xs={12} className={classes.gridItem}>
                <RadioButton
                    title='Enhanced Coverage'
                    label1='Homeowner Coverage Enhancement'
                    label2='Homeowner Coverage Elite'
                    label3='Homeowner Coverage Advantage'
                    label4='None'
                    value1='homeownerCoverageEnhancement'
                    value2='homeownerCoverageElite'
                    value3='homeownerCoverageAdvantage'
                    value4='none'
                />
            </Grid>
        </Box>
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
                    <Box display='flex' flexDirection='column'>
                        <Box display='flex'>
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
                        </Box>
                        <Box display='flex'>
                            <FormControlLabel
                                value={props.value3}
                                control={<Radio color='primary' />}
                                label={props.label3}
                                labelPlacement='end'
                            />
                            <FormControlLabel
                                value={props.value4}
                                control={<Radio color='primary' />}
                                label={props.label4}
                                labelPlacement='end'
                            />
                        </Box>
                    </Box>
                </RadioGroup>
            </FormControl>
        </Box>
    )
}

export default PolicyFormDetails