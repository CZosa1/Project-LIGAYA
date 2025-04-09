import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router';

import Topbar from './Topbar';
import Footer from './Footer';
import HomePage from './HomePage';
import MissionPage from './MissionPage';
import WhoPage from './WhoPage';
import QRCodePage from './QRCodePage';
import NotFoundPage from './NotFoundPage';

import './App.scss';

const App: React.FC = () => {
	const location = useLocation();
	
	useEffect(() => {
		const root = document.getElementById('root');
		if (root) {
			root.scrollTo({ top: 0, behavior: 'smooth' });
		}
	}, [location]);
	
	return (
		<>
			<Topbar />
			<Routes location={location}>
				<Route path={'/'} element={<HomePage />} />
				<Route path={'/mission'} element={<MissionPage />} />
				<Route path={'/who'} element={<WhoPage />} />
				<Route path={'/qrcode'} element={<QRCodePage />} />
				<Route path={'*'} element={<NotFoundPage />} />
			</Routes>
			<Footer />
		</>
	);
}

export default App;
