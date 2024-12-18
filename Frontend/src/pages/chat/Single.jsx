import { useSelector } from 'react-redux'
import MessageInput from '../../components/message/MessageInput'
import Messages from '../../components/message/Messages'

const SingleChat = () => {
 
  return (
    <>
      {/* Header */}
      <div className="bg-slate-500 px-4 py-2 mb-2">
        <span className="label-text"></span>{' '}
        <span className="text-gray-900 font-bold"></span>
      </div>

      <Messages />
      <MessageInput />
    </>
  )
}

export default SingleChat
