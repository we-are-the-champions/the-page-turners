import { ReactAppOptions } from '@teambit/react';
import {
  NetlifyOptions,
  Netlify,
} from '@teambit/cloud-providers.deployers.netlify';

const netlifyConfig: NetlifyOptions = {
  team: 'teambit',
  accessToken: process.env.NETLIFY_AUTH_TOKEN as string,
  productionSiteName: 'the-champions-app',
  redirects: '_redirects',
};

export const MfeFtwApp: ReactAppOptions = {
  name: 'champions-app',
  entry: [require.resolve('./champions-app.app-root')],
  deploy: Netlify.deploy(netlifyConfig),
  favicon: require.resolve('./favicon.png'),
};

export default MfeFtwApp;
