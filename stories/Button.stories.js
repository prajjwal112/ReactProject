import React from 'react'
import Button from '@material-ui/core/Button'
import Box from '@material-ui/core/Box'
import { action } from '@storybook/addon-actions'

export default {
  title: 'Buttons',
  component: Button
}

export const Primary = () => (
  <Box display='flex' flexDirection='column'>
    <Box pb={2}>
      <Button variant='contained' color='primary' onClick={action('click')}>
        Primary
      </Button>
    </Box>

    <Box pb={2}>
      <Button
        variant='contained'
        color='primary'
        disabled
        onClick={action('click')}
      >
        Primary Disabled
      </Button>
    </Box>

    <Box pb={2}>
      <Button variant='outlined' color='primary' onClick={action('click')}>
        Primary Outlined
      </Button>
    </Box>

    <Box pb={2}>
      <Button
        variant='outlined'
        color='primary'
        disabled
        onClick={action('click')}
      >
        Primary Disabled Outlined
      </Button>
    </Box>
  </Box>
)

export const Secondary = () => (
  <Box display='flex' flexDirection='column'>
    <Box pb={2}>
      <Button variant='contained' color='secondary' onClick={action('click')}>
        Secondary
      </Button>
    </Box>

    <Box pb={2}>
      <Button
        variant='contained'
        color='secondary'
        disabled
        onClick={action('click')}
      >
        Secondary Disabled
      </Button>
    </Box>

    <Box pb={2}>
      <Button variant='outlined' color='secondary' onClick={action('click')}>
        Secondary Outlined
      </Button>
    </Box>

    <Box pb={2}>
      <Button
        variant='outlined'
        color='secondary'
        disabled
        onClick={action('click')}
      >
        Secondary Disabled Outlined
      </Button>
    </Box>
  </Box>
)
