// Write your code here
import {GrFormClose} from 'react-icons/gr'

const Notification = props => {
  const {children} = props

  return (
    <div>
      <Notification>{children}</Notification>
      <GrFormClose className="remove" />
    </div>
  )
}

export default Notification
