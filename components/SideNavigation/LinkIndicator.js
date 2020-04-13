import Box from '@material-ui/core/Box'
import CircleIcon from '@material-ui/icons/Lens'
import CircleOutlinedIcon from '@material-ui/icons/LensOutlined'

// Side navigation indicators are circles with a number centered and sometimes
// a stroke.

// Generic indicator icon used by each variant below in main component
const Icon = ({ number, stroke, fill, color }) => (
  <Box position='relative' height={24} width={24}>
    <Box position='absolute'>
      <CircleIcon style={{ color: fill }} />
    </Box>
    <Box position='absolute'>
      <CircleOutlinedIcon style={{ color: stroke }} />
    </Box>
    <Box
      fontWeight='bold'
      color={color}
      position='absolute'
      width={24}
      height={24}
      display='flex'
      alignItems='center'
      fontSize={12}
      lineHeight='12px'
      justifyContent='center'
    >
      <div>{number}</div>
    </Box>
  </Box>
)

const LinkIndicator = ({ variant, number }) => {
  if (variant === 'selected') {
    return <Icon stroke='#c7c7c7' fill='#fff' number={number} />
  }

  if (variant === 'complete') {
    return <Icon stroke='#0e803E' fill='#27ae60' color='#fff' number={number} />
  }

  return <Icon stroke='#c7c7c7' fill='#c7c7c7' number={number} />
}

export default LinkIndicator
