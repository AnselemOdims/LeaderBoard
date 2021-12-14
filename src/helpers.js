/* eslint-disable class-methods-use-this */
import Utils from './utils.js';
import FetchWrapper from './fetchWrapper.js';

const API = new FetchWrapper('https://us-central1-js-capstone-backend.cloudfunctions.net/api/');
const spinner = document.querySelector('.spinner');
const submit = document.querySelector('.submit');

/**
 * @class Helper - the helper class
 */
export default class Helper {
/**
 * @function createNewGame - create new game on load
 */
  static async createNewGame() {
    if (!Utils.getLocal()) {
      try {
        const gameID = await Utils.generateID();
        Utils.setLocal('ID', gameID);
      } catch (err) {
        throw new Error(err);
      }
    }
  }

  /**
   * @function postHandler - handles the form submit event
   * @param {Event Object} e - the event object
   */
  async postHandler(e) {
    const user = document.querySelector('#name').value.trim();
    const score = Number(document.querySelector('#score').value.trim());
    try {
      e.preventDefault();
      Utils.inputChecker();
      const data = {
        user,
        score,
      };
      Utils.startLoader(submit, spinner);
      const { result } = await API.post(`games/${Utils.getLocal()}/scores`, data);
      Utils.showModal(result);
    } catch (err) {
      throw new Error(err);
    } finally {
      Utils.stopLoader(submit, spinner, 'Submit');
      Utils.clearFields();
      Utils.inputFocus();
    }
  }

  /**
   * @function getHandler - handles the refresh button click event
   * @param {Event Object} e - the event object
   */
  async getHandler() {
    const refresh = document.querySelector('#refresh');
    const spin = document.querySelector('.spin');
    try {
      Utils.startLoader(refresh, spin);
      await Helper.createNewGame();
      const { result } = await API.get(`games/${Utils.getLocal()}/scores/`);
      Utils.checkScores(result);
    } catch (err) {
      throw new Error(err);
    } finally {
      Utils.stopLoader(refresh, spin, 'Refresh <i class="fas fa-sync-alt">');
      Utils.inputFocus();
    }
  }
}