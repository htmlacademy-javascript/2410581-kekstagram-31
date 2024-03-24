import {idPhoto} from './fill-photo-modal.js';
import {getCommentData} from '../../api/get-comment-data.js';
import {addComment} from './add-comment.js';

const onButtonAddComments = () => {
  getCommentData(idPhoto, addComment);
};

export {onButtonAddComments};
