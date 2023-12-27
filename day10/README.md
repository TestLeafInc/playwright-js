Day 10 [Sunday]
*Agenda - Playwright with API Integration*

# Recap
# APIRequest, APIRequestContext, APIResponse
# Status Code, Response Body
# Practice
# POST call (Creating a lead)
# GET call (Retrieving the lead)
# Practice &  Break
# DELETE call (Deleting the lead)
# Reading a data from JSON file
# E2E Scenario (Bearer Token, Create, Update & Delete)

*API Request*
In Playwright, an API Request refers to an HTTP request you make to an API endpoint. This request can be of various types, such as GET, POST, PUT, DELETE, etc., depending on the operation you want to perform. You can use an API request to interact with RESTful services, fetch data, submit data, update resources, or delete resources.

When making an API request, you typically specify:

>> URL: The endpoint of the API.
>> Method: HTTP method (GET, POST, PUT, etc.).
>> Headers: Additional information required by the API, like content type or authentication tokens.
>> Body: Data sent to the server (mainly in POST or PUT requests).

*APIRequestContext*
APIRequestContext in Playwright is a context for making API requests. It provides methods for sending HTTP requests and is used to interact with APIs within Playwright tests. 
The context maintains cookies and other session information across requests, which is useful for scenarios where you need to maintain a session state across multiple API calls.

*API Response*
When you make an API request, the server responds with an API Response. This response contains several pieces of information, including:

>> Status Code: Indicates the result of the request (e.g., 200 for success, 404 for not found, 500 for server error).
>> Headers: Metadata about the response, such as content type or server information.
>> Body: The data returned by the server. This could be in various formats like JSON, XML, or plain text.

In Playwright, when you make an API request using the APIRequestContext, you receive an APIResponse object. This object allows you to inspect the response, including status codes, headers, and the body. You can use methods like .json(), .text(), or .body() to extract the response's content based on its format.


*Status Codes*

- 2xx: Success
>> 200 OK: The request was successful, and the response body contains the requested data.
>> 201 Created: The request has been fulfilled, and a new resource has been created.
>> 202 Accepted: The request has been accepted for processing, but the processing is not complete.
>> 204 No Content: The server successfully processed the request, but is not returning any content.

- 4xx: Client Errors
>> 400 Bad Request: The server cannot process the request due to a client error (e.g., malformed request syntax).
>> 401 Unauthorized: Authentication is required, and the client has failed to provide it.
>> 403 Forbidden: The client does not have access rights to the content.
>> 404 Not Found: The server cannot find the requested resource.
>> 405 Method Not Allowed: The request method is not supported for the requested resource.

- 5xx: Server Errors

>> 503 Service Unavailable: The server is not ready to handle the request, often due to maintenance or overloading.



