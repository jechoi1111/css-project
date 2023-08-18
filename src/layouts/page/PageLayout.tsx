import React from 'react';

import styles from './PageLayout.module.scss';

type PageLayoutProps = {
	children: React.ReactNode;
};

export const PageLayout = ({ children }: PageLayoutProps) => {
	return <div className={styles.pageLayout}>{children}</div>;
};
