import _workBoards from './apps.json';

const TIMEOUT = 100;

export default {
  getWorkBoards: (cb, timeout) =>
    setTimeout(() => cb(_workBoards), timeout || TIMEOUT),
};
