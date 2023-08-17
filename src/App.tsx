import './App.css';

import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { MainLayout, PageLayout } from './layouts';

function App() {
	return (
		<Routes>
			<Route path="/" element={<MainLayout />}>
				<Route path="/circle-animation" element={<PageLayout />} />
			</Route>
		</Routes>
	);
}

export default App;
