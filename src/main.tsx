import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router';

import App from '@/components/App';

const element = document.getElementById('root')!
const root = createRoot(element);
root.render(
	<StrictMode>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</StrictMode>
);

const userAgent = navigator.userAgent.toLowerCase();
if (userAgent.includes('chrome')) {
	element.classList.add('scrollbar');
}
