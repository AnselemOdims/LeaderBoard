import FetchWrapper from './fetchWrapper.js';

const API = new FetchWrapper('https://us-central1-js-capstone-backend.cloudfunctions.net/api/');
const user = document.querySelector('#name');
const score = document.querySelector('#score');

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

  /**
   * @function setLocal - handles setting the ID to the local storage
   * @param {string} id - the key to set in the local storage
   * @param {string} data - the data value to set in the local storage
   */
  static setLocal(id, data) {
    localStorage.setItem(id, JSON.stringify(data));
  }

  /**
   * @function generateID - handles creating a new game ID
   * @returns {string} - the new game ID
   */
  static async generateID() {
    const { result } = await API.post('games/', { name: 'My cool new game' });
    return result.substr(14, 20);
  }

  /**
   * @function clearFields - handles clearing the input after submit
   */
  static clearFields() {
    user.value = '';
    score.value = '';
  }
}