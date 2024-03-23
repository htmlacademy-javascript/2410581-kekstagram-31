import {commentsTotalCount, numberOfComments} from '../variables.js';
import {settings} from '../../settings.js';

const changeCommentCount = (id) => {
  commentsTotalCount.textContent = id.length;
  numberOfComments.textContent = id.length > settings.MAX_STARTING_COMMENTS ? settings.MAX_STARTING_COMMENTS : id.length;
};

export {changeCommentCount};
