import React, { useState } from 'react'
import Button from '@material-ui/core/Button'
import Box from '@material-ui/core/Box'
import SideNavigation from '../components/SideNavigation'
import LinkIndicator from '../components/SideNavigation/LinkIndicator'
import SubLinkIndicator from '../components/SideNavigation/SubLinkIndicator'
import { action } from '@storybook/addon-actions'

export default {
  title: 'Side Navigation',
  component: SideNavigation
}

export const Interactive = () => {
  const [path, setPath] = useState('/quote/link-1')
  const [disabled, setDisabled] = useState(false)
  const [progress, setProgress] = useState({})

  const markProgress = () => {
    action('mark progress')()
    setProgress(progress => ({ ...progress, [path]: true }))
  }

  const unmarkProgress = () => {
    action('unmark progress')()
    setProgress(progress => ({ ...progress, [path]: false }))
  }

  const clearProgress = () => {
    action('clear all progress')()
    setProgress({})
  }

  const disableQuoteSection = () => {
    action('disable quote section')()
    setPath('/application')
    setDisabled({ '/quote': true })
  }

  const disableApplicationSection = () => {
    action('disable application section')()
    setPath('/quote')
    setDisabled({ '/application': true })
  }

  return (
    <>
      <SideNavigation
        path={path}
        progress={progress}
        disabled={disabled}
        onPathChange={nextPath => {
          setPath(nextPath)
          action('path changed')(nextPath)
        }}
      />
      <Box mt={2} display='flex'>
        <Box mr={1}>
          <Button size='small' variant='contained' onClick={markProgress}>
            Mark
          </Button>
        </Box>
        <Box mr={1}>
          <Button size='small' variant='contained' onClick={unmarkProgress}>
            Unmark
          </Button>
        </Box>
        <Box mr={1}>
          <Button size='small' variant='contained' onClick={clearProgress}>
            Clear
          </Button>
        </Box>
      </Box>
      <Box mt={2} display='flex'>
        <Box mr={1}>
          <Button
            size='small'
            variant='contained'
            onClick={disableQuoteSection}
          >
            {disabled['/quote'] ? 'enable' : 'disable'} quote
          </Button>
        </Box>
        <Box mr={1}>
          <Button
            size='small'
            variant='contained'
            onClick={disableApplicationSection}
          >
            {disabled['/application'] ? 'enable' : 'disable'} app
          </Button>
        </Box>
      </Box>
    </>
  )
}

export const LinkIndicators = () => (
  <>
    <Box mb={1}>
      <LinkIndicator variant='complete' number={1} />
    </Box>
    <Box mb={1}>
      <LinkIndicator variant='selected' number={2} />
    </Box>
    <Box mb={1}>
      <LinkIndicator variant='incomplete' number={3} />
    </Box>
  </>
)

export const SubLinkIndicators = () => (
  <>
    <Box mb={1}>
      <SubLinkIndicator
        completed={false}
        selected={false}
      />
    </Box>
    <Box mb={1}>
      <SubLinkIndicator
        completed={false}
        selected={true}
      />
    </Box>
    <Box mb={1}>
      <SubLinkIndicator
        completed={true}
        selected={false}
      />
    </Box>
    <Box mb={1}>
      <SubLinkIndicator
        completed={true}
        selected={true}
      />
    </Box>
  </>
)

export const SectionSelected = () => (
  <SideNavigation path='/quote/link-1' onPathChange={action('path changed')} />
)

export const SectionToggled = () => (
  <SideNavigation
    path='/application/link-1'
    onPathChange={action('path changed')}
  />
)

export const LinkSelected = () => (
  <SideNavigation
    path='/application/link-3'
    onPathChange={action('path changed')}
  />
)

export const LinkCompleted = () => (
  <SideNavigation
    path='/application/link-1'
    progress={{
      '/application/link-1': true
    }}
    onPathChange={action('path changed')}
  />
)

export const SubLinkSelected = () => (
  <SideNavigation
    path='/application/link-2/sub-link-2'
    onPathChange={action('path changed')}
  />
)

export const SubLinkCompleted = () => (
  <SideNavigation
    path='/application/link-2/sub-link-2'
    progress={{
      '/application/link-2/sub-link-1': true
    }}
    onPathChange={action('path changed')}
  />
)

export const SubLinkCompletedAndSelected = () => (
  <SideNavigation
    path='/application/link-2/sub-link-2'
    progress={{
      '/application/link-2/sub-link-1': true,
      '/application/link-2/sub-link-2': true
    }}
    onPathChange={action('path changed')}
  />
)

export const AllSubLinksCompleted = () => (
  <SideNavigation
    path='/application/link-2/sub-link-3'
    progress={{
      '/application/link-2/sub-link-1': true,
      '/application/link-2/sub-link-2': true,
      '/application/link-2/sub-link-3': true
    }}
    onPathChange={action('path changed')}
  />
)

export const DisabledQuoteSection = () => (
  <SideNavigation
    path='/application'
    disabled={{ '/quote': true }}
    onPathChange={action('path changed')}
  />
)

export const DisabledApplicationSection = () => (
  <SideNavigation
    path='/quote'
    disabled={{ '/application': true }}
    onPathChange={action('path changed')}
  />
)
