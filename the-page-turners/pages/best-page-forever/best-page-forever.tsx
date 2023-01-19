import React from 'react';
import styles from './best-page-forever.module.scss';

export function BestPageForever() {
  return (
    <div className={styles.pageContainer}>
      <h1 className={styles.pageTitle}>
        Hello from the best page ever, maintained by{' '}
        <a href="https://bit.cloud/we-are-the-champions/the-page-turners">
          the page turners
        </a>{' '}
        team!
      </h1>

      <div className={styles.pageContent}>
        <img
          src="https://static.bit.dev/Community/images/DALL·E 2023-01-19 21.27.13 - a page waving hello.png"
          alt="Workspace illustration"
          className={styles.pageIllustration}
        />
      </div>
    </div>
  );
}
