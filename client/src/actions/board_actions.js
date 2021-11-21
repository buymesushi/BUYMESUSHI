import axios from 'axios';
const { POST_BOARD } = require('./types');

export function Board(dataTosubmit) {
  const request = axios
    .post('/api/board/write', dataTosubmit)
    .then((response) => response.data);
  return {
    type: POST_BOARD,
    payload: request,
  };
}