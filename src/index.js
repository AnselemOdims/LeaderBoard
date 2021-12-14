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

  // Dark Mode controller
  document.querySelector('.dark-control').addEventListener('click', () => {
    document.querySelectorAll('.scores-container > ul > li, button').forEach((elem) => elem.classList.toggle('white'));
    document.querySelectorAll('h1, h2, footer p, body').forEach((elem) => elem.classList.toggle('dark'));
    document.querySelectorAll('input').forEach((elem) => elem.classList.toggle('input-dark'));
  });
});