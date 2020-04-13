import compact from 'lodash/compact'

// A utility for building up classnames

// classNames('foo', 'bar') => 'foo bar'
// classNames('foo', false && 'bar', true && 'baz') => 'foo baz'

const classNames = (...styles) => compact(styles).join(' ')

export default classNames
