# simple-crud-app-backend
A simple node.js application that provides CRUD operations in API or through web application for a simple entity called "Product".

## Usage
This application provides CRUD operations for a simple entity called "Product". The application is built using Node.js, Express.js, and MongoDB.

## Installation
1. Clone the repository
2. Run `npm install` to install the dependencies
3. Run `npm start` to start the application

## API Endpoints

### Products

- **GET /products**: Retrieve a list of all products.
- **GET /products/:id**: Retrieve a specific product by its ID.
- **POST /products**: Create a new product. The body of the request should include the product details.
- **PUT /products/:id**: Update a specific product by its ID. The body of the request should include the updated product details.
- **DELETE /products/:id**: Delete a specific product by its ID.

Please replace `:id` with the actual product ID.


### Request Body for POST and PUT

The request body for POST and PUT requests should be in JSON format, like this:

```json
{
    "name": "Chocolate Bar",
    "quantity": 10,
    "price": 39.99
}
