import {settings} from '../settings.js';
import {documentBody, templateErrorPosts} from '../variables.js';

const getDataError = (text) => {
  documentBody.append(templateErrorPosts);
  if (text) {
    templateErrorPosts.querySelector('.data-error__title').textContent = text;
  }

  setTimeout(() => {
    templateErrorPosts.remove();
  }, settings.ALERT_SHOW_TIME);
};

export {getDataError};
