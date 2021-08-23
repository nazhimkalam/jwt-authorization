# JWT-Authorization 🚀

**[JWT](https://jwt.io/)** stands for JSON Web Tokens

## What is JWT ?

JSON Web Token is a **standard used to create access tokens for an application to interact between two parties (client and a server)**.

Which basically means we make sure that the authorized user is only able to access the resources **(apis)** he/she is allowed to access.

## Why is JWT better than Session cookie based authorization ?

This is because tokens are stored on the client-side while the session uses the server memory to store user data, and this might be an issue when a large number of users are accessing the application at once.

## How does JWT work ?

When the user is logged in, each subsequent request will include the **JWT**, allowing the user to access routes, services, and resources that are permitted with that **token**.

## What is the JSON Web Token Structure ?

In its compact form, JSON Web Tokens consist of **3** parts separated by dots **(.)**, which are:

- Header
- Payload
- Signature

Therefore, a JWT typically looks like the following.

    xxxxx.yyyyy.zzzzz

## What does this repo contain?

This repo contains code sample which uses **JSON web tokens** for **API authorization** using Node JS, this repo also includes the usage of **refresh tokens** for higher security
