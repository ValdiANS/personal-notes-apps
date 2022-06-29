import { Fragment } from 'react';
import { createPortal } from 'react-dom';

const AppFooter = () => {
  const appFooterContentElement = (
    <Fragment>
      <p>
        Created by{' '}
        <a
          href="https://github.com/ValdiANS/personal-notes-apps"
          target="_blank"
          rel="noopener noreferrer"
        >
          <strong>Rivaldi</strong>
        </a>{' '}
        for dicoding submission
      </p>
    </Fragment>
  );

  return createPortal(
    appFooterContentElement,
    document.getElementById('footer')
  );
};

export default AppFooter;
