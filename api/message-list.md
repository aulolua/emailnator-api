# Emailnator Message List API Documentation

## message-list
## Endpoint

- **Endpoint URL**: `https://www.emailnator.com/message-list`
- **Method**: `POST`

## Request

### Request URL

```
https://www.emailnator.com/message-list
```

### Request Headers

- **User-Agent**: Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:109.0) Gecko/20100101 Firefox/119.0
- **Accept**: application/json, text/plain, */*
- **Accept-Language**: en-US,en;q=0.5
- **X-Requested-With**: XMLHttpRequest
- **Content-Type**: application/json
- **X-XSRF-TOKEN**: [Your XSRF token]
- **Sec-Fetch-Dest**: empty
- **Sec-Fetch-Mode**: cors
- **Sec-Fetch-Site**: same-origin

### Request Body

```json
{
    "email": "town.porta.l.s.croll4.7.9@gmail.com"
}
```

- The `email` field specifies the target email address for which you want to retrieve the message list.

### Request Method

- **Method**: POST

### Request Mode

- **Mode**: cors

## Response

### Response Example

```json
{
    "messageData": [
        {
            "messageID": "ADSVPN",
            "from": "AI TOOLS",
            "subject": "Unleash the power of AI with our ultimate directory of online tools!",
            "time": "Just Now"
        }
    ]
}
```

- The response will be a JSON object containing an array of message objects, each representing a message in the inbox.

## Usage Example

```javascript
await fetch("https://www.emailnator.com/message-list", {
    "credentials": "include",
    "headers": {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:109.0) Gecko/20100101 Firefox/119.0",
        "Accept": "application/json, text/plain, */*",
        "Accept-Language": "en-US,en;q=0.5",
        "X-Requested-With": "XMLHttpRequest",
        "Content-Type": "application/json",
        "X-XSRF-TOKEN": "Your XSRF token",
        "Sec-Fetch-Dest": "empty",
        "Sec-Fetch-Mode": "cors",
        "Sec-Fetch-Site": "same-origin"
    },
    "referrer": "https://www.emailnator.com/inbox/",
    "body": "{\"email\":\"town.porta.l.s.croll4.7.9@gmail.com\"}",
    "method": "POST",
    "mode": "cors"
});
```

- This is an example of how to make a request using the Fetch API in JavaScript.

## Notes

- Ensure that the necessary headers, including the XSRF token, are included in your request for successful API access.
- Handle the response appropriately in your application based on your use case.
