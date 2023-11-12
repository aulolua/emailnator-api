// emailnator-api.js

const fetch = require('node-fetch');

class EmailnatorAPI {
  constructor() {
    this.baseURL = 'https://www.emailnator.com';
    this.headers = {
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:109.0) Gecko/20100101 Firefox/119.0',
      'Accept': 'application/json, text/plain, */*',
      'Accept-Language': 'en-US,en;q=0.5',
      'X-Requested-With': 'XMLHttpRequest',
      'Content-Type': 'application/json',
      'Sec-Fetch-Dest': 'empty',
      'Sec-Fetch-Mode': 'cors',
      'Sec-Fetch-Site': 'same-origin',
    };
  }

  async generateEmail(options) {
    const url = `${this.baseURL}/generate-email`;
    const body = JSON.stringify({ email: options });
    return this.makeRequest(url, 'POST', body);
  }

  async getMessageList(email) {
    const url = `${this.baseURL}/message-list`;
    const body = JSON.stringify({ email });
    return this.makeRequest(url, 'POST', body);
  }

  async makeRequest(url, method, body) {
    try {
      const response = await fetch(url, {
        method,
        headers: this.headers,
        body,
      });

      if (!response.ok) {
        throw new Error(`Request failed with status: ${response.status}`);
      }

      return response.json();
    } catch (error) {
      throw new Error(`Failed to make request: ${error.message}`);
    }
  }
}

module.exports = EmailnatorAPI;
