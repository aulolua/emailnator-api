# Emailnator API Documentation
## generate-email
## Endpoint

- **Endpoint URL**: `https://www.emailnator.com/generate-email`
- **Method**: `POST`

## Request

### Request URL

```
https://www.emailnator.com/generate-email
```

### Request Headers

- **User-Agent**: Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:109.0) Gecko/20100101 Firefox/119.0
- **Accept**: application/json, text/plain, */*
- **Accept-Language**: en-US,en;q=0.5
- **X-Requested-With**: XMLHttpRequest
- **Content-Type**: application/json
- **X-XSRF-TOKEN**: [Token] *(Your XSRF token, if applicable)*
- **Sec-Fetch-Dest**: empty
- **Sec-Fetch-Mode**: cors
- **Sec-Fetch-Site**: same-origin

### Request Body

```json
{
    "email": ["domain", "plusGmail", "dotGmail", "googleMail"]
}
```

- The `email` field is an array that includes different options for generating email addresses.

### Request Method

- **Method**: POST

### Request Mode

- **Mode**: cors

## Response

### Response Example

```json
{
    "email": ["town.porta.l.s.croll4.7.9@gmail.com"]
}
```

- The response will be a JSON object containing an array of generated email addresses.

## Usage Example

```javascript
await fetch("https://www.emailnator.com/generate-email", {
    "credentials": "include",
    "headers": {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:109.0) Gecko/20100101 Firefox/119.0",
        "Accept": "application/json, text/plain, */*",
        "Accept-Language": "en-US,en;q=0.5",
        "X-Requested-With": "XMLHttpRequest",
        "Content-Type": "application/json",
        "X-XSRF-TOKEN": "",
        "Sec-Fetch-Dest": "empty",
        "Sec-Fetch-Mode": "cors",
        "Sec-Fetch-Site": "same-origin"
    },
    "referrer": "https://www.emailnator.com/",
    "body": "{\"email\":[\"domain\",\"plusGmail\",\"dotGmail\",\"googleMail\"]}",
    "method": "POST",
    "mode": "cors"
});
```

- This is an example of how to make a request using the Fetch API in JavaScript.

## Notes

- Ensure that the necessary headers are included in your request for successful API access.
- Handle the response appropriately in your application based on your use case.
