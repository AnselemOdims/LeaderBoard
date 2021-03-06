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
   * @param {String} value - the string value to insert into the DOM
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
    document.querySelector('.list').innerHTML = data.sort((a, b) => b.score - a.score)
      .map((result) => `<li>${result.user} : ${result.score}</li>`)
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
   * @param {String} id - the key to set in the local storage
   * @param {String} data - the data value to set in the local storage
   */
  static setLocal(id, data) {
    localStorage.setItem(id, JSON.stringify(data));
  }

  /**
   * @function generateID - handles creating a new game ID
   * @returns {String} - the new game ID
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

  /**
   * @function showModal - shows the modal
   * @param {String} result - the result from the server
   * @returns - stops operations if inputs are empty
   */
  static showModal(result) {
    Utils.inputChecker();
    const elem = document.querySelector('#modal');
    elem.innerHTML = result;
    elem.style.top = '5px';
    setTimeout(() => {
      elem.style.top = '-100vh';
    }, 3500);
  }

  /**
   * @function inputChecker - handles stopping operations if inputs are empty
   * @returns
   */
  static inputChecker() {
    if (user.value === '' || score.value === '') {
      Utils.displayError('The user and score inputs can not be empty');
    } else {
      Utils.displayError('');
    }
  }

  /**
   * @function inputFocus - handles the input focus on load
   */
  static inputFocus() {
    user.focus();
  }

  /**
   * @function checkScores - checks the length of the array retrieved from the server
   * @param {Array} result - the result array from the server
   */
  static checkScores(result) {
    if (result.length === 0) {
      document.querySelector('.list').innerHTML = '<li>No Leaderboard scores added yet</li>';
    } else {
      Utils.render(result);
    }
  }

  /**
   * @function displayError - handle the display of error
   * @param {string} value - the error string
   */
  static displayError(value) {
    document.querySelector('.error').innerHTML = `${value}`;
  }
}