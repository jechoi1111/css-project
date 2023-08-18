import React from 'react';

import { ICON } from '../../assets/icons';
import styles from './SideNavBar.module.scss';

export default function SideNavBar() {
	return (
		<div className={styles.sideNavBarWrapper}>
			<h1>CSS-PROJECT</h1>
			<ul>
				<li>
					<i style={{ backgroundImage: `url(${ICON.home})` }} />
					Home
				</li>
				<li>
					<i style={{ backgroundImage: `url(${ICON.circle_w})` }} />
					Circle Animation
				</li>
			</ul>
		</div>
	);
}
