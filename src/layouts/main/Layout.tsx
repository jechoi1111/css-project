import React from 'react';
import { Outlet } from 'react-router-dom';

import { SideNavBar } from '../../components';
import styles from './Layout.module.scss';

export const MainLayout = () => {
	return (
		<div className={styles.mainRoot}>
			<div className={styles.mainSide}>
				<SideNavBar />
			</div>
			<div className={styles.mainContent}>
				<Outlet />
			</div>
		</div>
	);
};
