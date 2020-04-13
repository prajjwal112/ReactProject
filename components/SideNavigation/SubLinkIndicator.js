import CompleteSublinkIcon from '@material-ui/icons/CheckCircleOutline'
import { makeStyles } from '@material-ui/core/styles'
import CircleIcon from '@material-ui/icons/Lens'

// Side navigation sub-link indicators have a specific UI that is implemented
// in this component

const useStyles = makeStyles(theme => ({
  root: {
    marginRight: theme.spacing(2),
    width: 24,
    height: 40,
    display: 'flex',
    justifyContent: 'center',
    position: 'relative'
  },
  selectedLine: {
    width: 4,
    height: 40,
    background: '#005a9e'
  },
  unselectedLine: {
    width: 4,
    height: 40,
    background: '#bdbdbd'
  },
  icon: {
    color: '#0E803E',
    top: 10,
    left: 2,
    position: 'absolute'
  },
  iconBackground: {
    width: 20,
    height: 20,
    top: 10,
    left: 2,
    position: 'absolute'
  }
}))

const SubLinkIndicator = ({ completed, selected }) => {
  const classes = useStyles()
  return (
    <span className={classes.root}>
      {completed && (
        <>
          <CircleIcon className={classes.iconBackground}  style={{ color: '#fff' }} />
          <CompleteSublinkIcon className={classes.icon} fontSize='small' />
        </>
      )}
      {selected ? (
        <span className={classes.selectedLine} />
      ) : (
        <span className={classes.unselectedLine} />
      )}
    </span>
  )
}

export default SubLinkIndicator
