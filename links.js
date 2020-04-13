const keyBy = require('lodash/keyBy')

// The `linksTree` structure describes the "shape" of the side nav and the
// relationship between side nav links and application routes. It is used to
// dynamically generate the nav bar and also, in the app shell, as an aid to
// navigation and routing. Note: in various spots we need different
// permutations of the data so we compute it all in this module to prevent
// needing to recompute after app initialization. TODO: it would be nice to
// compute permutations statically but I didn't see a super easy way to do it.

const linksTree = [
  {
    name: 'Quote',
    path: '/quote',
    links: [
      {
        name: 'Link 1',
        path: '/quote/link-1'
      },
      {
        name: 'Link 2',
        path: '/quote/link-2'
      }
    ]
  },
  {
    name: 'Application',
    path: '/application',
    links: [
      {
        name: 'Link 1',
        path: '/application/link-1'
      },
      {
        name: 'Link 2',
        path: '/application/link-2',
        links: [
          {
            name: 'Sublink 1',
            path: '/application/link-2/sub-link-1'
          },
          {
            name: 'Sublink 2',
            path: '/application/link-2/sub-link-2'
          },
          {
            name: 'Sublink 3',
            path: '/application/link-2/sub-link-3'
          }
        ]
      },
      {
        name: 'Link 3',
        path: '/application/link-3'
      }
    ]
  }
]

// Here we walk the links tree for the following purposes:
//  * Mutate the nodes to include context sensitive titles
//  * Accumulate an array with all of the nodes flattened into an array that
//  * Accumulate a "slug" value based on the path

const defaultTitle = 'Vermont Mutual'

const linksList = []

linksTree.forEach(section => {
  linksList.push(section)
  section.title = `${defaultTitle} | ${section.name}`
  section.slug = section.path.slice(1).replace('/', '-')
  section.links.forEach(link => {
    linksList.push(link)
    link.slug = link.path.slice(1).replace('/', '-')
    link.title = `${defaultTitle} | ${section.name} | ${link.name}`
    if (!link.links) return
    link.links.forEach(subLink => {
      linksList.push(subLink)
      subLink.slug = subLink.path.slice(1).replace('/', '-')
      subLink.title = `${defaultTitle} | ${section.name} | ${link.name} | ${subLink.name}`
    })
  })
})

// Mutate nodes to include next/prev links for pagination
linksList.forEach((link, index) => {
  const prevLink = linksList[index - 1]
  const nextLink = linksList[index + 1]
  // Skip sections and links with sublinks because you can't actually navigate
  // to them
  link.prev = prevLink && prevLink.links ? linksList[index - 2] : prevLink
  link.next = nextLink && nextLink.links ? linksList[index + 2] : nextLink
})

// A lookup for finding page metadata by path
const linksByPath = keyBy(linksList, 'path')

module.exports = linksTree
module.exports.linksByPath = linksByPath
