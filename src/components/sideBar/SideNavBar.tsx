import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { ICON } from '../../assets/icons';
import styles from './SideNavBar.module.scss';

export default function SideNavBar() {
	const navigate = useNavigate();
	const { pathname } = useLocation();
	console.log('pathname', pathname);

	return (
		<div className={styles.sideNavBarWrapper}>
			<h1>CSS-PROJECT</h1>
			<ul>
				{/* eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions */}
				<li onClick={() => navigate('/')} className={pathname === '/' ? styles.active : ''}>
					<i style={{ backgroundImage: `url(${ICON.home})` }} />
					Home
				</li>
				{/* eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions */}
				<li
					onClick={() => navigate('/circle-animation')}
					className={pathname === '/circle-animation' ? styles.active : ''}
				>
					<i style={{ backgroundImage: `url(${ICON.circle_w})` }} />
					Circle Animation
				</li>
			</ul>
		</div>
	);
}
