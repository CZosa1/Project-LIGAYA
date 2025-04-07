import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router';

import Topbar from '@/components/Topbar';

import HomePage from './HomePage';
import MissionPage from './MissionPage';
import WhoPage from './WhoPage';
import NotFoundPage from './NotFoundPage';

const App: React.FC = () => {
	const location = useLocation();
	
	useEffect(() => {
		window.scrollTo({ top: 0, behavior: 'instant' });
	}, [location]);
	
	return (
		<>
			<Topbar />
			<Routes>
				<Route path={'/'} element={<HomePage />} />
				<Route path={'/mission'} element={<MissionPage />} />
				<Route path={'/who'} element={<WhoPage />} />
				<Route path={'*'} element={<NotFoundPage />} />
			</Routes>
		</>
	);
	// TODO: 404 page css
}

export default App;
