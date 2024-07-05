# E-commerce Product Server

## Project Overview

This project implements an Express.js application using TypeScript to build a robust E-commerce Product Server. It manages products and orders using MongoDB with Mongoose for data persistence. Key features include RESTful APIs for CRUD operations on products and orders, inventory management, validation using Zod, and comprehensive error handling.

## Key Features and Technologies

- **Express.js**: Used for building the server and handling HTTP requests.
- **TypeScript**: Provides type safety and enhances code quality.
- **MongoDB (with Mongoose)**: Manages data storage and retrieval for products and orders.
- **Zod**: Integrated for robust data validation ensuring data integrity.
- **Deployment**: Deployed on Vercel for scalable and reliable production hosting.

## API Endpoints

### Product Management

- **Create Product**: `/api/products` (POST)
- **Retrieve All Products**: `/api/products` (GET)
- **Retrieve Specific Product**: `/api/products/:productId` (GET)
- **Update Product**: `/api/products/:productId` (PUT)
- **Delete Product**: `/api/products/:productId` (DELETE)
- **Search Products**: `/api/products?searchTerm=<search-term>` (GET)

### Order Management

- **Create Order**: `/api/orders` (POST)
- **Retrieve All Orders**: `/api/orders` (GET)
- **Retrieve Orders by Email**: `/api/orders?email=<user-email>` (GET)

### Bonus Section

- Implemented inventory update logic to reduce product quantity upon order creation.

## Development Tools

### Dependencies

- cors, dotenv, express, mongoose, validator, zod

### DevDependencies

- @types/cors, @types/express, @types/validator, @typescript-eslint/eslint-plugin, @typescript-eslint/parser, eslint, ts-node-dev, typescript

## Deployment

Deployed the project on Vercel, providing a scalable and reliable production environment.

## Recent Updates

- Integrated Zod for data validation across product and order creation and update operations.
- Successfully deployed the application on Vercel for public access.

# Mobile Shop Product Server

## Overview

Developed a backend server for managing a mobile shop's products using TypeScript and Node.js. Implemented RESTful APIs for creating, retrieving, updating, and deleting product details, ensuring efficient inventory management and product handling.

## Table of Contents

- [Key Features](#key-features)
- [Development Tools](#development-tools)
- [Deployment](#deployment)
- [Commands](#commands)
- [Live Demo](#live-demo)
- [Installation](#installation)
- [API Documentation](#api-documentation)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

## Key Features

- **Product Management**: Comprehensive CRUD operations for products.
- **Inventory Management**: Automated updates to product inventory and stock status.
- **Validation**: Implemented robust data validation using Zod to ensure data integrity.

## Development Tools

- **TypeScript**: Ensured type safety and enhanced code quality.
- **Express.js**: Built scalable and maintainable server-side applications.
- **Mongoose**: Integrated MongoDB for database operations.
- **ESLint**: Maintained code quality and consistency.

## Deployment

Deployed the application on Vercel, providing a seamless and scalable production environment.

## Commands

- **Start Development Server**: `npm run start:dev`
- **Start Production Server**: `npm run start:prod`
- **Compile TypeScript**: `npm run build`
- **Check for Code Errors**: `npm run lint`

## Live Demo

[Mobile Shop Product Server](https://assignment-2-zeta.vercel.app/)

## Installation

To set up the project locally, follow these steps:

1. Clone the repository:
   ```sh
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```sh
   cd project-directory
   ```
3. Install the dependencies:
   ```sh
   npm install
   ```
4. Start the development server:
   ```sh
   npm run start:dev
   ```

## API Documentation

### Endpoints

- **GET /api/products**: Retrieve all products.
- **GET /api/products/:id**: Retrieve a product by ID.
- **POST /api/products**: Create a new product.
- **PUT /api/products/:id**: Update a product by ID.
- **DELETE /api/products/:id**: Delete a product by ID.
- **POST /api/orders**: Create a new order.
- **GET /api/orders**: Retrieve all orders.
- **GET /api/orders?email=:email**: Retrieve orders by email.

## Project Structure

```bash
project-root
├── src
│   ├── modules
│       ├── product
│           ├── product.controller.ts
│           ├── product.model.ts
│           ├── product.routes.ts
│           ├── product.service.ts
│           └── product.validation.ts
│
│       ├── order
│           ├── order.controller.ts
│           ├── order.model.ts
│           ├── order.routes.ts
│           ├── order.service.ts
│           └── order.validation.ts
│
│   └── app
│       └── config
│           └── index.ts
│
│   ├── app.ts
│   └── server.ts
│
├── .gitignore
├── .env
├── package.json
├── tsconfig.json
├── vercel.json
└── .eslintrc.js
```

## Contributing

Contributions are welcome! Please follow these guidelines:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Commit your changes with a descriptive message.
4. Push your changes to your forked repository.
5. Create a pull request to the main repository.

## License

This project is licensed under the MIT License.
