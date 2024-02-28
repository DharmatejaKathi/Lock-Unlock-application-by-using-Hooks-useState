// Write your code here
import {useState} from 'react'
import {Container, Button, InnerContainer, Para} from './styledComponents'

const Unlock = () => {
  const [lockStatus, setLock] = useState(true)
  const onChangeLock = () => setLock(prevState => !prevState)
  console.log(lockStatus)

  const changeImg = lockStatus
    ? 'https://assets.ccbp.in/frontend/hooks/lock-img.png'
    : 'https://assets.ccbp.in/frontend/hooks/unlock-img.png'

  const changeAlt = lockStatus ? 'lock' : 'unlock'

  const changeText = lockStatus
    ? 'Your Device is Locked'
    : 'Your Device is Unlocked'

  const buttonText = lockStatus ? 'Unlock' : 'lock'

  return (
    <Container>
      <InnerContainer>
        <img src={changeImg} alt={changeAlt} />
        <Para>{changeText}</Para>
        <Button type="button" onClick={onChangeLock}>
          {buttonText}
        </Button>
      </InnerContainer>
    </Container>
  )
}

export default Unlock
