import FetchWrapper from './fetchWrapper.js';

const API = new FetchWrapper('https://us-central1-js-capstone-backend.cloudfunctions.net/api/');

/**
 * @class Utils - the utility class to hold all utiltity functionality
 */
export default class Utils {
/**
 * @function startLoader - handles the start of the spinner loading
 * @param {HTMLElement} elem1 - the first HTMLElement
 * @param {HTMLElement} elem2 - the second HTMLElement
 */
  static startLoader(elem1, elem2) {
    elem2.classList.add('loading-spinner');
    elem1.innerHTML = 'Loading';
  }

  /**
   * @function stopLoader - handles the stop of the spinner loading
   * @param {HTMLElement} elem1 - the first HTMLElement
   * @param {HTMLElement} elem2 - the second HTMLElement
   * @param {string} value - the string value to insert into the DOM
   */
  static stopLoader(elem1, elem2, value) {
    elem2.classList.remove('loading-spinner');
    elem1.innerHTML = value;
  }

  /**
   * @function render - handles the rendering of the server response on the DOM
   * @param {Array} data - the array response from the server
   */
  static render(data) {
    document.querySelector('.list').innerHTML = data.map((result) => `<li>${result.user} : ${result.score}</li>`)
      .join('');
  }

  /**
   * @function getLocal - handles getting the ID from local storage
   * @returns {Array} - the ID string
   */
  static getLocal() {
    return JSON.parse(localStorage.getItem('ID'));
  }
}