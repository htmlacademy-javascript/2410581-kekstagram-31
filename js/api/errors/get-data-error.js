import {errorAllPosts} from '../variables.js';
import {documentBody} from '../../modal/variables';
import {settings} from '../../settings';

const getDataError = () => {
  documentBody.append(errorAllPosts);

  setTimeout(() => {
    errorAllPosts.remove();
  }, settings.ALERT_SHOW_TIME);
};

export {getDataError};
