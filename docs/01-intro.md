# iMoneza NodeJS API Documentation

## Introduction

The iMoneza NodeJS API allows you to interact with the iMoneza platform with an object-oriented NodeJS library.  Please make
sure to get your Access Key/Secret and Management Key/Secret from your [iMoneza Merchant Account](https://manageui.imoneza.com).

## Methodology of Use

This library is architected in such a way that is very modular and object-based.  The general workflow is as follows:

1. Create an Options Object  
Create an options object that reflects the type of request you want to do.  If the options object requires additional 
customization or parameters, apply those to the options object before performing your request.

2. Create a Connection Object  
A connection object accepts a number of elements as dependencies of its construction.  The Management API and Access API key
and secrets are required.  Finally, pass in an instance of a logging library compatible with [Bunyan](https://www.npmjs.com/package/bunyan).  This step is not
required, but it is highly recommended.

3. Call the request method  
The request method of the connection object accepts two arguments: the options object and a callback.  The callback follows
the NodeJS standards of receiving an error as the first parameter, and the response object as the second parameter.

4. Access the result  
The result is returned as a standard javascript object.  The detailed object responses can be found with the associated
calls in the [main API documentation](http://imoneza.github.io/documentation/docs/api).  This library will refer to this
documentation instead of duplicating the result documentation here.

## Error Handling

There are a number of custom error types that are sent to the callback if specific errors happen during the execution.
If a specific error is not caught, a general javascript Error object will be returned.

