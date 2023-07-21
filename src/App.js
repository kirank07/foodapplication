import React, { lazy, Suspense, useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Footer from './components/Footer';
import Body from './components/Body';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import About from './components/About';
import Contactus from './components/Contactus';
import Error from './components/Error';
import RestaurantMenu from './components/RestaurantMenu';
import Shimmer from './components/Shimmer';
import UserContext from './utils/UserContext';

const Instamart = lazy(() => import('./components/Instamart'));
const App = () => {
	const [userName, setUserName] = useState();

	useEffect(() => {
		//API Call and authenticate user and setUser
		const data = {
			name: 'Kiran khade'
		};
		setUserName(data.name);
	}, []);
	return (
		<UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
			<div className='app'>
				{/* <UserContext.Provider value={{ loggedInUser: 'KK' }}> */}
				<Header />
				{/* </UserContext.Provider> */}
				<Outlet />
				<Footer />
			</div>
		</UserContext.Provider>
	);
};

const appRouter = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		children: [
			{
				path: '/',
				element: <Body />
			},
			{
				path: '/about',
				element: <About />
			},
			{
				path: '/contact',
				element: <Contactus />
			},
			{
				path: '/instamart',
				element: (
					<Suspense fallback={<Shimmer />}>
						<Instamart />
					</Suspense>
				)
			},
			{
				path: '/restaurant/:resId',
				element: <RestaurantMenu />
			}
		],
		errorElement: <Error />
	}
]);
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<RouterProvider router={appRouter} />);
