import {AiFillCheckCircle, AiFillInfoCircle} from 'react-icons/ai'
import {MdError, MdWarning} from 'react-icons/md'

import Notification from '../Notification'

const AlertNotification = () => {
  const renderSuccessNotification = () => (
    <Notification>
      <AiFillCheckCircle className="verified" />
      <div className="container">
        <h1 className="heading">Success</h1>
        <p className="para">You can access all the files in the folder</p>
      </div>
    </Notification>
  )

  const renderError = () => (
    <Notification>
      <MdError className="error" />
      <div className="container">
        <h1 className="heading">Error</h1>
        <p className="para">
          Sorry, you are not authorized to have access to delete the file
        </p>
      </div>
    </Notification>
  )

  const renderWarning = () => (
    <Notification>
      <MdWarning className="warning" />
      <div className="container">
        <h1 className="heading">Warning</h1>
        <p className="para">
          Viewers of this file can see comments and suggestions
        </p>
      </div>
    </Notification>
  )

  const renderInfo = () => (
    <Notification>
      <AiFillInfoCircle className="info" />
      <div className="container">
        <h1 className="heading">Info</h1>
        <p className="para">Anyone on the internet can view these files</p>
      </div>
    </Notification>
  )

  return (
    <div className="main-container">
      <h1 className="alert-heading">Alert Notifications</h1>
      {renderSuccessNotification()}
      {renderError()}
      {renderWarning()}
      {renderInfo()}
    </div>
  )
}

export default AlertNotification
