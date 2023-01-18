import React from 'react';
import styles from './best-page-forever.module.scss';

export function BestPageForever() {
  return (
    <div className={styles.pageContainer}>
      <h1 className={styles.pageTitle}>
        Integrating Micro Frontends with Bit and Git for Easier Collaboration
      </h1>

      <div className={styles.pageContent}>
        <img
          src="https://static.bit.dev/Community/images/collaboration-diagram.png"
          alt="Workspace illustration"
          className={styles.pageIllustration}
        />
        <div>
          <p>
            To get started, teams should first open a GitHub organization. We
            used the name “we-are-the-champions”. Because we are.
          </p>
          <p>
            Next, create a Bit organization with the same name. This
            organization will contain all the scopes maintained by the different
            teams. In this example, we will show a simple collaboration between
            two teams - ”the-header-herders” and ”the-page-turners”. The
            ”the-header-herders” team is responsible for creating the header
            component and the ”the-page-turners” team is responsible for
            creating the page component. We also have a shared scope named
            ”the-app-timizers” which contains the app component.
          </p>
          <p>
            To make sure teams each team is able to release new updates
            independently, in the repository that belongs to the
          </p>
          <p>
            When updates are made to either of the teams' scopes, they will
            propagate to the shared app component.
          </p>
          <p>
            To ensure that the teams are able to collaborate and share code
            easily, two separate workspaces should be created. Each workspace
            should contain a component from one of the teams, as well as the app
            component from the shared scope. All workspaces should be
            version-controlled with Git and GitHub.
          </p>
          <p>
            By integrating MFEs with Bit and Git, teams are able to work
            together and release updates independently. This helps streamline
            the development process and ensures teams are able to collaborate
            and share code efficiently.
          </p>
        </div>
      </div>
    </div>
  );
}
