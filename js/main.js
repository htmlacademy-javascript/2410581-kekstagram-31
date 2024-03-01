import {generateUsers} from './generation.js';
import {settings} from './settings.js';

const users = Array.from({length: settings.MAX_USERS}, generateUsers);

console.log(users); // eslint-disable-line
