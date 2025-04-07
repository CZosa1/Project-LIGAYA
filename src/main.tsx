import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from '@/components/App';

import './index.scss';
import { BrowserRouter } from 'react-router';

const root = createRoot(document.getElementById('root')!);

root.render(
	<StrictMode>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</StrictMode>
)
