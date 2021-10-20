/**
 *
 * Asynchronously loads the component for ContestByType
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
