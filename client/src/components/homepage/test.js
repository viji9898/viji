/*
https://www.fitbit.com/oauth2/authorize?response_type=code&client_id=22C4LM&redirect_uri=http://localhost&scope=activity%20nutrition%20heartrate%20location%20nutrition%20profile%20settings%20sleep%20social%20weight




Received Authorisation 
1. Update Client ID 
2. Check URL - everything until the # 
auth code???? 

Exchange auth code for an access token:

POST Requestman request: to access token

POST https://api.fitbit.com/oauth2/token
Authorization: Basic MjJDNExNOjAyOTQwMzk3ZjZjOWJjOGEzNjUxODgzMTgyYTYxMGQ3


=MjJDNExNOjAyOTQwMzk3ZjZjOWJjOGEzNjUxODgzMTgyYTYxMGQ3

ClientId:Client_secret


22C4LM:02940397f6c9bc8a3651883182a610d7




Content-Type: application/x-www-form-urlencoded

client_id=22942C&grant_type=authorization_code&redirect_uri=https%3A%2F%2Fexample.com%2Ffitbit_auth&code=123456




OAuth 2.0 Client ID
22C4LM
Client Secret
02940397f6c9bc8a3651883182a610d7
Callback URL
http://localhost
OAuth 2.0: Authorization URI
https://www.fitbit.com/oauth2/authorize
OAuth 2.0: Access/Refresh Token Request URI
https://api.fitbit.com/oauth2/token
*/

