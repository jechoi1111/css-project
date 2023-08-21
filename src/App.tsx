import './App.css';

import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { MainLayout } from './layouts';
import { CircleAnimationPage, HomePage, InfinityAnimationPage } from './pages';

function App() {
	return (
		<Routes>
			<Route element={<MainLayout />}>
				<Route path="/" element={<HomePage />} />
				<Route path="/circle-animation" element={<CircleAnimationPage />} />
				<Route path="/infinity-animation" element={<InfinityAnimationPage />} />
			</Route>
		</Routes>
	);
}

export default App;
