import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import Slide from '@material-ui/core/Slide'
import Container from '@material-ui/core/Container'
import Button from '@material-ui/core/Button'
import DebugIcon from '@material-ui/icons/Lens'
import IconButton from '@material-ui/core/IconButton'
import ArrowBackIcon from '@material-ui/icons/ChevronLeft'
import ArrowForwardIcon from '@material-ui/icons/ChevronRight'
import SideNavigation from '../components/SideNavigation'
import screenComponentsByPath from '../modules/screenComponentsByPath'
import FormContext from '../contexts/form'
import links, { linksByPath } from '../links'

// This component implements a single page app in Next.js

const notFoundScreenComponent = ({ path }) => (
  <Typography variant='h5' gutterBottom>
    Screen component not found: {path}
  </Typography>
)

const Page = ({ asPath }) => {
  const router = useRouter()
  const [progress, setProgress] = useState({})
  const [formData, setFormData] = useState({})
  const [showDebug, setShowDebug] = useState()

  // Resolve path and associated page
  const path = router.asPath || asPath
  // Always resolve page to first link if it has children. The creates an
  // effective redirect when combined with `useEffect` call below
  const page =
    linksByPath[path]?.links?.[0] || linksByPath[path] || links[0].links[0]
  // If the path has resolved to something other than what's provided
  // update the location and history
  useEffect(() => {
    if (page.path !== path) {
      router.replace(page.path)
    }
  }, [page.path, path])

  // Lookup the screen associated with page path
  const ScreenComponent = screenComponentsByPath[page.path]

  const updateRoute = path => router.push('/app', path)
  const goToNextPage = () => router.push('/app', page.next.path)
  const goToPrevPage = () => router.push('/app', page.prev.path)
  const markProgress = () =>
    setProgress(progress => ({ ...progress, [page.path]: true }))

  // A temporary debug toolbar for looking at form data TODO remove
  const toggleDebug = () => setShowDebug(showDebug => !showDebug)

  // Use page and input name to formulate a unique path so that we can
  // collect all form values for a given session
  const handleFormChange = (form, input, value) => {
    setFormData(prevData => ({
      ...prevData,
      [page.path]: {
        ...(prevData[page.path] || {}),
        [form]: {
          ...(prevData?.[page.path]?.[form] || {}),
          [input]: value
        }
      }
    }))
  }

  return (
    <Box display='flex' flexDirection='column' height='100vh'>
      <Box flexGrow='1' overflow='auto' display='flex' flexDirection='column'>
        <Box flexGrow='1'>
          <Container>
            <Head>
              <title>{page.title}</title>
            </Head>
            <Box display='flex' p={3}>
              <Box pr={2}>
                <SideNavigation
                  progress={progress}
                  path={page.path}
                  onPathChange={updateRoute}
                />
              </Box>
              <Box
                flexGrow='1'
                display='flex'
                flexDirection='column'
                bgcolor='#fff'
                border='1px solid #e9e9e9'
              >
                <Box flexGrow='1' overflow='auto' p={3}>
                  <Typography variant='h6'>{page.name}</Typography>
                  <Typography variant='caption'>
                    All fields below are required, unless marked as optional.
                  </Typography>
                  <FormContext.Provider value={handleFormChange}>
                    <Box pt={3}>
                      <ScreenComponent path={page.path} />
                    </Box>
                  </FormContext.Provider>
                </Box>
                <Box display='flex' bgcolor='#ccc' p={2}>
                  <Box flexGrow='1'>
                    <Button
                      id='screen-action-save-details'
                      color='secondary'
                      variant='outlined'
                      onClick={markProgress}
                    >
                      Save your details
                    </Button>
                  </Box>
                  <Button
                    href={page.prev && page.prev.path}
                    id='screen-action-to-previous'
                    startIcon={<ArrowBackIcon />}
                    color='secondary'
                    variant='contained'
                    disabled={!page.prev}
                    onClick={goToPrevPage}
                  >
                    Previous
                  </Button>
                  <Button
                    href={page.next && page.next.path}
                    id='screen-action-to-next'
                    endIcon={<ArrowForwardIcon />}
                    color='primary'
                    variant='contained'
                    disabled={!page.next}
                    onClick={goToNextPage}
                  >
                    Next
                  </Button>
                </Box>
              </Box>
            </Box>
          </Container>
        </Box>
        <Box>
          <Slide direction='up' in={showDebug} mountOnEnter unmountOnExit>
            <Box borderTop={1} borderColor='#ccc' p={2}>
              <pre>{JSON.stringify(formData, null, 2)}</pre>
            </Box>
          </Slide>
        </Box>
      </Box>
      <Box position='absolute' bottom={5} ml={1}>
        <IconButton size='small' onClick={toggleDebug}>
          <DebugIcon fontSize='inherit' />
        </IconButton>
      </Box>
      <Box
        p={1}
        bgcolor='#000'
        color='#fff'
        display='flex'
        justifyContent='center'
      >
        <Typography variant='caption'>
          ©2019 Vermont Mutual Insurance Group® — All Rights Reserved.
        </Typography>
      </Box>
    </Box>
  )
}

// Inject `asPath` into component because the sidebar needs to know
// the context immediately
Page.getInitialProps = ({ asPath }) => ({ asPath })

export default Page
