import { BiLogOut } from "react-icons/bi";
import useLogout from "../../hooks/useLogout";

const LogoutButton = () => {
	

	return (
		<div className='mt-auto'>
			
				<BiLogOut className='w-6 h-6 text-white cursor-pointer'  />
			
				<span className='loading loading-spinner'></span>
			
		</div>
	)
}
export default LogoutButton;
