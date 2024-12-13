

const Message = () => {
	

	return (
		<div >
			<div className='chat-image avatar'>
				<div className='w-10 rounded-full'>
					<img src="https://cdn.vectorstock.com/i/500p/11/69/blank-avatar-profile-picture-vector-45161169.jpg" alt='Tailwind CSS chat bubble component'  />
				</div>
			</div>
			<div className="chat-bubble text-white pb-2">message</div>
			<div className='chat-footer opacity-50 text-xs flex gap-1 items-center'>time</div>
		</div>
	);
};
export default Message;
