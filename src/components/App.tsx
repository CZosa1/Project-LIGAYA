import { Routes, Route } from 'react-router';

import Topbar from '@/components/Topbar';

import HomePage from './HomePage';
import NotFoundPage from './NotFoundPage';

const App: React.FC = () => {
	return (
		<>
			<Topbar />
			<Routes>
				<Route path={'/'} element={<HomePage />} />
				<Route path={'*'} element={<NotFoundPage />} />
			</Routes>
		</>
	);
	// TODO: 404 page css
}

export default App;
