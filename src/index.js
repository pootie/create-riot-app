import riot from 'riot';

// tell webpack to load static assets
import './app.tag';

riot.mount('*');

// Enable SW in production
// https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md#making-a-progressive-web-app
// serviceWorkerRegistration.register()