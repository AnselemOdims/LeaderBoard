export default class FetchWrapper {
  constructor(baseURL){
    this.baseURL = baseURL;
  }

  async get(endpoint) {
    const response = await fetch(this.baseURL + endpoint);
    return response.json()
  }
}