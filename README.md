# Emailnator API Module

The `emailnator-api.js` module provides a simple interface for interacting with the Emailnator API in a Node.js environment. This module uses the `node-fetch` library for making HTTP requests.

## Installation

To use this module in your Node.js project, you need to install the `node-fetch` library. Run the following command in your project's root directory:

```bash
npm install node-fetch
```

## Usage

1. Copy the `emailnator-api.js` module into your project.
2. Create an instance of the `EmailnatorAPI` class.
3. Use the provided methods to interact with the Emailnator API.

### Example

```javascript
const EmailnatorAPI = require('./emailnator-api');

const emailnator = new EmailnatorAPI();

// Example: Generate Email
const generateEmailOptions = ['domain', 'plusGmail', 'dotGmail', 'googleMail'];
emailnator.generateEmail(generateEmailOptions)
  .then(response => console.log('Generated Email:', response))
  .catch(error => console.error('Error:', error.message));

// Example: Get Message List
const targetEmail = 'town.porta.l.s.croll4.7.9@gmail.com';
emailnator.getMessageList(targetEmail)
  .then(response => console.log('Message List:', response))
  .catch(error => console.error('Error:', error.message));
```

Adjust the code as needed for your specific use case.

## Methods

### `generateEmail(options: string[]): Promise<object>`

Generates a temporary email address based on the specified options.

- `options`: An array of options for generating email addresses.

### `getMessageList(email: string): Promise<object>`

Retrieves a list of messages associated with a specific email address.

- `email`: The target email address for which you want to retrieve the message list.

### `makeRequest(url: string, method: string, body: string): Promise<object>`

Internal method for making HTTP requests. It is used by the other methods.

- `url`: The URL for the API endpoint.
- `method`: The HTTP method (e.g., 'GET', 'POST').
- `body`: The request body in JSON format.

## Notes

- Ensure that the necessary headers are included in your requests for successful API access.
- Handle the responses appropriately in your application based on your use case.

Feel free to explore and modify the `emailnator-api.js` module to suit your specific project requirements.
