# API-mot-backend2
exercise 2

Design a markdown document with paths, methods and response-codes and then implement
it on own backend to meet it´s criteria. 

## To run server: 
```
npm install (to get dependencies)
npm run start (port 3000 default if not selected)
```
---
## Endpoints and possible methods and desired answers
```   
/users
Methods: GET, POST
Response codes: 200(OK), 201(Created), 404(Not Found) 

/users/userId
Methods: GET, PATCH, DELETE
Response codes: 200(OK), 201(Created), 400(Bad request), 404(Not Found)

/posts
Methods: GET, POST
Response codes: 200(OK), 201(Created)

/posts/postId
Methods: GET, PATCH, DELETE
Response codes: 200(OK), 201(Created), 400(Bad request), 404(Not Found)
```