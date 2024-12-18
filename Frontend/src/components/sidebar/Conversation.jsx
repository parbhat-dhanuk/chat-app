import {Link} from "react-router-dom"

const Conversation = ({user}) => {
	return (
		<>
			<Link to={`/singlechat/${user._id}`}>
			<div className='flex gap-2 items-center hover:bg-sky-500 rounded p-2 py-1 cursor-pointer'>
				<div className='avatar online'>
					<div className='w-12 rounded-full'>
						<img
							src={user?.profilePic}
							alt='user avatar'
						/>
					</div>
				</div>

				<div className='flex flex-col flex-1'>
					<div className='flex gap-3 justify-between'>
						<p className='font-bold text-black'>{user?.fullName}</p>
						<span className='text-xl'>🎃</span>
					</div>
				</div>
			</div>
			
			</Link>

			
		</>
	);
};
export default Conversation;
