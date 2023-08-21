import React from 'react';

import { PageLayout } from '../../layouts';
import styles from './CircleAnimationPage.module.scss';

export default function CircleAnimationPage() {
	return (
		<PageLayout>
			<div className={styles.container}>
				<div className={styles.box}>
					<div className={styles.circle} />
					<div className={styles.dot} />
				</div>
			</div>
		</PageLayout>
	);
}
