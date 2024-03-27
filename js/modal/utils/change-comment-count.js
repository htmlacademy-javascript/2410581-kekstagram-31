import {commentsTotalCount, numberOfComments} from '../variables.js';
import {settings} from '../../settings.js';

const changeCommentCount = (comments) => {
  commentsTotalCount.textContent = comments.length;
  numberOfComments.textContent = comments.length > settings.MAX_STARTING_COMMENTS ? settings.MAX_STARTING_COMMENTS : comments.length;
};

export {changeCommentCount};
