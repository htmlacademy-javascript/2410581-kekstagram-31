import {idPhoto} from './fill-photo-modal.js';
import {getCommentData} from '../../api/get-comment-data.js';
import {addComent} from './add-comment.js';

const onButtonAddComments = () => {
  getCommentData(idPhoto, addComent);
};

export {onButtonAddComments};
