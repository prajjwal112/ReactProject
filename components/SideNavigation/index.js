import React, { useState, useEffect, Fragment } from 'react'
import { makeStyles, withStyles } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'
import Collapse from '@material-ui/core/Collapse'
import BaseList from '@material-ui/core/List'
import BaseListItem from '@material-ui/core/ListItem'
import BaseListItemIcon from '@material-ui/core/ListItemIcon'
import BaseListItemText from '@material-ui/core/ListItemText'
import BaseCloseSectionIcon from '@material-ui/icons/ExpandLess'
import BaseOpenSectionIcon from '@material-ui/icons/ExpandMore'
import first from 'lodash/first'
import LinkIndicator from './LinkIndicator'
import SubLinkIndicator from './SubLinkIndicator'
import links from '../../links'
import startsWith from 'lodash/startsWith'

// The quote/app "side navigation" menu displays two top-level "sections", one
// for each of the "quote" and "app" sections of the application. Nested below
// each section is a list of "links" each linking to a different area of the
// application. Links can optionally have "sub links" when there are multiple
// sub-areas under the corresponding parent link.
//
// Each section/link/sub-link has a corresponding "path" that maps to a URL for
// routing purposes. Each path is also used internally as an ID for the
// purposes of marking completion, selection, and other states.

// Base components:
// The following components includes many MUI base components restyled for
// the purpose of the composing the navbar. Other supporting components are
// located in the subdirectory alongside this component.

const SectionText = withStyles({
  root: {
    margin: 0,
    lineHeight: '16px',
    display: 'flex',
    alignItems: 'center',
    textTransform: 'uppercase'
  }
})(BaseListItemText)

const SubLinkItemText = withStyles({
  root: { fontSize: 12 }
})(BaseListItemText)

const LinkItemText = withStyles({
  root: { fontSize: 14 }
})(BaseListItemText)

const ItemIcon = withStyles(theme => ({
  root: {
    minWidth: 'initial',
    paddingRight: theme.spacing(2)
  }
}))(BaseListItemIcon)

const useItemStyles = makeStyles({
  root: {
    fontSize: 14,
    height: 40
  }
})

const Item = props => {
  const classes = useItemStyles()
  return (
    <BaseListItem button component='a' className={classes.root} {...props} />
  )
}

const OpenSectionIcon = withStyles({
  root: { transform: 'rotate(90deg)' }
})(BaseOpenSectionIcon)

const CloseSectionIcon = withStyles({
  root: { transform: 'rotate(180deg)' }
})(BaseCloseSectionIcon)

const List = withStyles({
  root: {
    width: '100%',
    background: '#fff'
  }
})(BaseList)

const SubLinkList = withStyles({
  root: {
    borderLeft: '1px solid #ccc',
    borderRight: '1px solid #ccc',
    borderBottom: '1px solid #ccc'
  }
})(List)

const SectionItem = withStyles({
  root: {
    fontSize: 16,
    color: '#fff',
    '&$selected': {
      borderBottom: '1px solid #ccc'
    },
    '&$disabled': {
      opacity: 1,
      borderLeft: '1px solid #d0d0d0',
      borderRight: '1px solid #d0d0d0',
      borderBottom: '1px solid #d0d0d0'
    }
  },
  selected: {},
  disabled: {}
})(Item)

const QuoteSection = withStyles({
  root: {
    background: '#b22222',
    '&:hover, &$selected:hover': {
      background: '#870a0a'
    },
    '&$selected': {
      background: '#b22222'
    },
    '&$disabled': {
      background: '#d89090'
    }
  },
  selected: {},
  disabled: {}
})(SectionItem)

const ApplicationSection = withStyles({
  root: {
    background: '#000',
    '&:hover, &$selected:hover': {
      background: '#222'
    },
    '&$selected': {
      background: '#000'
    },
    '&$disabled': {
      background: '#e1e1e1'
    }
  },
  selected: {},
  disabled: {}
})(SectionItem)

const Section = ({ variant, ...props }) =>
  variant === 'application' ? (
    <ApplicationSection {...props} />
  ) : (
    <QuoteSection {...props} />
  )

const LinkItem = withStyles({
  root: {
    border: '1px solid #ccc',
    borderTop: 0
  }
})(Item)

const SubLinkItem = withStyles({
  root: {
    '&$selected, &$selected:hover': {
      background: '#cde6f7'
    }
  },
  selected: {}
})(Item)

// Link list:
// Component represents all of the links and sublinks inside a given section

const SectionLinkList = ({
  path,
  progress: externalProgress,
  open,
  section,
  onPathChange
}) => {
  // Completing all sublinks for a given link should cause the link to also
  // appear completed. We create some local state to capture these "internally
  // completed" links
  const [internalProgress, setInternalProgress] = useState({})

  // Detect fully completed groups of sublinks and mark the parent link
  // completed. The motivation for this approach is to keep looping over
  // sublinks outside of render in the name of efficiency.
  useEffect(() => {
    section.links.forEach(link => {
      // Determine if section is sublinks are all complete
      const allSubLinksComplete = link.links?.every(
        subLink => !!progress[subLink.path]
      )
      // Update completion status for link w/ sublinks
      setInternalProgress(progress => ({
        ...progress,
        [link.path]: allSubLinksComplete
      }))
    })
  }, [externalProgress])

  // Combine internal/external progress
  const progress = { ...externalProgress, ...internalProgress }

  const toggleSection = link =>
    onPathChange(link.links ? first(link.links).path : link.path)

  return (
    <Collapse timeout='auto' in={open}>
      <List disablePadding>
        {section.links.map((link, index) => {
          const isLinkSelected = startsWith(path, link.path)
          const isLinkCompleted = !!progress[link.path]
          return (
            <Fragment key={link.path}>
              <LinkItem
                id={`side-nav-${link.slug}`}
                selected={isLinkSelected}
                onClick={() => toggleSection(link)}
              >
                <ItemIcon>
                  {isLinkSelected && !isLinkCompleted ? (
                    <LinkIndicator number={index + 1} variant='selected' />
                  ) : isLinkCompleted ? (
                    <LinkIndicator number={index + 1} variant='complete' />
                  ) : (
                    <LinkIndicator
                      number={index + 1}
                      variant='incomplete'
                    />
                  )}
                </ItemIcon>
                <LinkItemText disableTypography primary={link.name} />
              </LinkItem>
              {link.links && (
                <Collapse timeout='auto' in={isLinkSelected}>
                  <SubLinkList>
                    {link.links.map(subLink => {
                      const isSubLinkCompleted = !!progress[subLink.path]
                      const isSubLinkSelected = startsWith(path, subLink.path)
                      return (
                        <SubLinkItem
                          id={`side-nav-${subLink.slug}`}
                          key={subLink.path}
                          onClick={() => onPathChange(subLink.path)}
                          selected={isSubLinkSelected}
                        >
                          <SubLinkIndicator
                            completed={isSubLinkCompleted}
                            selected={isSubLinkSelected}
                          />
                          <SubLinkItemText
                            disableTypography
                            primary={subLink.name}
                          />
                        </SubLinkItem>
                      )
                    })}
                  </SubLinkList>
                </Collapse>
              )}
            </Fragment>
          )
        })}
      </List>
    </Collapse>
  )
}

// Side navigation:
// Component represents the side navigation component

const [firstSection, secondSection] = links

const SideNavigation = ({
  path,
  onPathChange,
  progress = {},
  disabled = {}
}) => {
  const toggleSection = (event, section) =>
    onPathChange(
      startsWith(path, firstSection.path)
        ? first(secondSection.links).path
        : first(firstSection.links).path
    )
  return (
    <Box width='200px'>
      <List disablePadding id='side-nav'>
        {links.map(section => (
          <Fragment key={section.name}>
            <Section
              id={`side-nav-${section.slug}`}
              variant={section.name.toLowerCase()}
              onClick={event => toggleSection(event, section)}
              disabled={!!disabled[section.path]}
              selected={startsWith(path, section.path)}
            >
              <SectionText disableTypography primary={section.name} />
              {startsWith(path, section.path) ? (
                <OpenSectionIcon />
              ) : (
                <CloseSectionIcon />
              )}
            </Section>
            <SectionLinkList
              section={section}
              path={path}
              progress={progress}
              open={startsWith(path, section.path)}
              onPathChange={onPathChange}
            />
          </Fragment>
        ))}
      </List>
    </Box>
  )
}

export default SideNavigation
