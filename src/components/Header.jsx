import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { LOGO_URL } from '../utils/constants';
import useOnlineStatus from '../utils/useOnlineStatus';
import UserContext from '../utils/UserContext';

export default Header = () => {
	const [btnName, setBtnName] = useState('Login');

	const onlinestatus = useOnlineStatus();
	const { loggedInUser } = useContext(UserContext);
	return (
		<div className='flex justify-between bg-orange-400 shadow-lg'>
			<div>{/* <img  src={LOGO_URL} className='w-40' /> */}</div>
			<div className='flex items-center'>
				<ul className='flex p-4 m-4'>
					<li className='px-4'>{onlinestatus ? '🟢' : '🔴'}</li>
					<li className='px-4'>
						<Link to='/'>Home</Link>
					</li>
					<li className='px-4'>
						<Link to='/about'>About Us</Link>
					</li>
					<li className='px-4'>
						<Link to='/contact'>Contact Us</Link>
					</li>
					<li className='px-4'>
						<Link to='/instamart'>InstaMart</Link>
					</li>
					<li className='px-4'>Cart</li>

					<button
						className='loginbtn'
						onClick={() => {
							btnName === 'Login' ? setBtnName('Logout') : setBtnName('Login');
						}}
					>
						{btnName}
					</button>
				</ul>
				<span className='p-10 font-bold text-white'>
					Welcome, {loggedInUser}!
				</span>
			</div>
		</div>
	);
};

//export default Header;
