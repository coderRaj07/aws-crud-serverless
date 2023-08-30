## AWS CRUD Serverless App
This repository contains a simple CRUD (Create, Read, Update, Delete) application deployed using the Serverless framework on AWS. The application allows you to manage user records through a set of API endpoints.

## Getting Started
These instructions will help you get a copy of the project up and running on your local machine for development and testing purposes.

## Prerequisites
Node.js and npm
AWS Account
Serverless CLI

## Installing
Clone the repository:

`git clone https://github.com/coderRaj07/aws-crud-serverless`
`cd aws-crud-serverless`

## Install the project dependencies:
`npm install`

## Create a .env file in the root of the project and set the required environment variable:
`DB=<your-database-connection-string>`

## Deployment
To deploy the application to AWS Lambda and API Gateway using Serverless, follow these steps:

Make sure you have the AWS credentials properly configured either through environment variables or AWS CLI.

Deploy the application using Serverless:
`serverless deploy`

This will package and deploy your application to AWS Lambda and API Gateway.

Once the deployment is successful, you will receive a list of endpoints that you can use to interact with the application.


## To test this Application
✔ Service deployed to stack aws-crud-serverless-dev to stage dev (ap-south-1)

## Endpoints:
  GET - https://6vh5xz3umd.execute-api.ap-south-1.amazonaws.com/
  POST - https://6vh5xz3umd.execute-api.ap-south-1.amazonaws.com/users
  GET - https://6vh5xz3umd.execute-api.ap-south-1.amazonaws.com/users
  GET - https://6vh5xz3umd.execute-api.ap-south-1.amazonaws.com/users/{email}

## Functions in AWS:
  api: aws-crud-serverless-dev-api (35 MB)
  createUser: aws-crud-serverless-dev-createUser (35 MB)
  getAll: aws-crud-serverless-dev-getAll (35 MB)
  getUser: aws-crud-serverless-dev-getUser (35 MB)

## Functions
The following AWS Lambda functions are included in the deployment:

api - The main API handler.
createUser - Handles user creation.
getAll - Handles retrieving all users.
getUser - Handles retrieving a specific user by email.

## Built With
Node.js
Serverless Framework
AWS Lambda
Amazon API Gateway
MongoDB

## Author
Rajendra Bisoi
