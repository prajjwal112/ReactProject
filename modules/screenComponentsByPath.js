import Box from '@material-ui/core/Box'
import TextField from '@material-ui/core/TextField'
import { configureForm } from '../contexts/form'

// Screen components are built and associated with specific "link paths" in
// this module

const PersonInput = ({ name }) => {
  const { useInput } = configureForm(name)
  const [first, onFirstChange] = useInput('first')
  const [middle, onMiddleChange] = useInput('middle')
  const [last, onLastChange] = useInput('last')
  return (
    <Box display='flex' mb={2}>
      <Box mr={2}>
        <TextField
          required
          value={first}
          label='First'
          onChange={onFirstChange}
        />
      </Box>
      <Box mr={2}>
        <TextField value={middle} label='Middle' onChange={onMiddleChange} />
      </Box>
      <Box mr={2}>
        <TextField required value={last} label='Last' onChange={onLastChange} />
      </Box>
    </Box>
  )
}

const AddressInput = ({ name }) => {
  const { useInput } = configureForm(name)
  const [address1, onAddress1Change] = useInput('address1')
  const [address2, onAddress2Change] = useInput('address2')
  const [city, onCityChange] = useInput('city')
  const [zip, onZipChange] = useInput('zip')
  return (
    <Box display='flex' mb={2}>
      <Box mr={2}>
        <TextField
          required
          value={address1}
          label='Address 1'
          onChange={onAddress1Change}
        />
      </Box>
      <Box mr={2}>
        <TextField
          value={address2}
          label='Address 2'
          onChange={onAddress2Change}
        />
      </Box>
      <Box mr={2}>
        <TextField required value={city} label='City' onChange={onCityChange} />
      </Box>
      <Box mr={2}>
        <TextField required value={zip} label='ZIP' onChange={onZipChange} />
      </Box>
    </Box>
  )
}

const Section1Link1 = () => (
  <>
    <PersonInput name='person1' />
    <PersonInput name='person2' />
    <PersonInput name='person3' />
  </>
)

const Section1Link2 = () => (
  <>
    <AddressInput name='address1' />
    <AddressInput name='address2' />
    <AddressInput name='address3' />
  </>
)

const Section2Link1 = () => (
  <>
    <PersonInput name='person4' />
    <PersonInput name='person5' />
    <PersonInput name='person6' />
  </>
)

const Section2Link2 = () => (
  <>
    <AddressInput name='address4' />
    <AddressInput name='address5' />
    <AddressInput name='address6' />
  </>
)

const Section2Link2SubLink1 = () => (
  <>
    <PersonInput name='person7' />
    <PersonInput name='person8' />
    <PersonInput name='person9' />
  </>
)

const Section2Link2SubLink2 = () => (
  <>
    <AddressInput name='address7' />
    <AddressInput name='address8' />
    <AddressInput name='address9' />
  </>
)

const Section2Link2SubLink3 = () => (
  <>
    <PersonInput name='person10' />
    <PersonInput name='person11' />
    <PersonInput name='person12' />
  </>
)

const Section2Link3 = () => (
  <>
    <AddressInput name='address13' />
    <AddressInput name='address14' />
    <AddressInput name='address15' />
  </>
)

const screenComponentsByPath = {
  '/quote/link-1': Section1Link1,
  '/quote/link-2': Section1Link2,
  '/application/link-1': Section2Link1,
  '/application/link-2': Section2Link2,
  '/application/link-2/sub-link-1': Section2Link2SubLink1,
  '/application/link-2/sub-link-2': Section2Link2SubLink2,
  '/application/link-2/sub-link-3': Section2Link2SubLink3,
  '/application/link-3': Section2Link3
}

export default screenComponentsByPath
