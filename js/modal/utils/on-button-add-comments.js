import {idPhoto} from './fill-photo-modal.js';
import {addComment} from './add-comment.js';
import { getData } from '../../api/get-data.js';

const onButtonAddComments = () => {
  getData()
    .then((posts) => addComment(posts[idPhoto].comments));
};

export {onButtonAddComments};
