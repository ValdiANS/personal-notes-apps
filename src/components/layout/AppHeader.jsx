import { Fragment } from 'react';
import { createPortal } from 'react-dom';

const AppHeader = () => {
  const appHeaderContentElement = (
    <Fragment>
      <h1>Aplikasi Catatan Pribadi</h1>
    </Fragment>
  );

  return createPortal(
    appHeaderContentElement,
    document.getElementById('header')
  );
};

export default AppHeader;
