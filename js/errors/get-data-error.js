import {errorAllPosts} from './variables.js';
import {documentBody} from '../modal/variables.js';
import {settings} from '../settings.js';

const getDataError = () => {
  documentBody.append(errorAllPosts);

  setTimeout(() => {
    errorAllPosts.remove();
  }, settings.ALERT_SHOW_TIME);
};

export {getDataError};
