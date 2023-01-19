import { ReactAppOptions } from '@teambit/react';

export const MfeFtwApp: ReactAppOptions = {
  name: 'champions-app',
  entry: [require.resolve('./champions-app.app-root')],
};

export default MfeFtwApp;
