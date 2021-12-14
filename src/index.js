import './style.css';
import Helper from './helpers.js';
import Utils from './utils.js';

const helper = new Helper();

window.addEventListener('DOMContentLoaded', async () => {
  await Helper.createNewGame();
  await helper.getHandler();
  Utils.inputFocus();
  document.querySelector('.add-form form').addEventListener('submit', helper.postHandler);
  document.querySelector('.refresh-btn').addEventListener('click', helper.getHandler);
});