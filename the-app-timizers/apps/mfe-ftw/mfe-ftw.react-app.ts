import { ReactAppOptions } from '@teambit/react';

export const MfeFtwApp: ReactAppOptions = {
  name: 'mfe-ftw',
  entry: [require.resolve('./mfe-ftw.app-root')],
  prerender: {
    routes: ['/']
  }
};

export default MfeFtwApp;
