/* eslint-disable class-methods-use-this */
import Utils from './utils.js';
import FetchWrapper from './fetchWrapper.js';

const API = new FetchWrapper('https://us-central1-js-capstone-backend.cloudfunctions.net/api/');

/**
 * @class Helper - the helper class
 */
export default class Helper {
/**
 * @function createNewGame - create new game on load
 */
  async createNewGame() {
    if (!Utils.getLocal()) {
      try {
        const gameID = await Utils.generateID();
        Utils.setLocal('ID', gameID);
      } catch (err) {
        throw new Error(err);
      }
    }
  }
}