import React from 'react';
import { Outlet } from 'react-router-dom';

import styles from './Layout.module.scss';

export const MainLayout = () => {
	return (
		<div className={styles.mainRoot}>
			<div style={{ width: '270px' }}></div>
			<div className={styles.mainContent}>
				<Outlet />
			</div>
		</div>
	);
};
