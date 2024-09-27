# Primemart - Grocery E-Commerce App

Primemart is a React Native-based e-commerce application developed using Expo. This app serves as a grocery shopping platform, showcasing your ability to build UI components, work with APIs, manage state, and handle errors effectively.

### Screenshots
<div align="center">
  <img src="https://github.com/user-attachments/assets/58fab961-78d9-44f7-bba6-7d1cd981c3c1" alt="Screenshot 1" width="300"/>
  <img src="https://github.com/user-attachments/assets/b0ff6467-4b2d-4801-9c7c-acf385377d0c" alt="Screenshot 2" width="300"/>
  <img src="https://github.com/user-attachments/assets/79f4715f-df75-4750-924b-7d89c45cfc3d" alt="Screenshot 3" width="300"/>
</div>

## Table of Contents
- [Project Overview](#project-overview)
- [Features](#features)
- [Setup Instructions](#setup-instructions)
- [Running the App](#running-the-app)
- [APIs Used](#apis-used)
- [Screens and UI Components](#screens-and-ui-components)
- [State Management](#state-management)
- [Error Handling](#error-handling)
- [Dependencies](#dependencies)

## Project Overview
**Primemart** is an e-commerce mobile application designed to mimic a grocery shopping experience. It demonstrates various aspects of mobile app development, including API integration, user authentication, cart management, and user interface design.

### Objective:
- Develop a scalable React Native e-commerce app for grocery shopping.
- Implement UI components inspired by a given design.
- Handle state management with Redux/Context API and API error handling gracefully.

## Features
1. **User Interface:**
   - **Home Screen**: Logo, search bar, user location, promotional banners, and shop-by-category section.
   - **Bottom Navigation**: Icons for Home, Categories, Cart, and Profile.
2. **API Integration**:
   - Mock API for fetching categories and products using [JSONPlaceholder](https://jsonplaceholder.typicode.com/).
   - API endpoints for user login and adding products to the cart.
3. **State Management**:
   - Manage user authentication and cart state using Redux or Context API.
4. **Cart Page**: Display products added to the cart, including product details, images, and quantity.
5. **Error Handling**: Gracefully manage network and API errors, such as invalid login or request failures.

## Setup Instructions

### Prerequisites
- **Node.js**: Ensure Node.js is installed on your machine.
- **Expo CLI**: Install Expo CLI for easy project setup and management.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/primemart.git
   cd primemart
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the Expo server:
   ```bash
   npm run start
   ```

## Running the App

You can run the Primemart app on different platforms:

- **Android**:
  ```bash
  npm run android
  ```
  
- **iOS**:
  ```bash
  npm run ios
  ```

- **Web**:
  ```bash
  npm run web
  ```

## APIs Used

The app uses mock data from JSONPlaceholder for API integration. Below are the key endpoints:

1. **Fetch Categories**:
   - Endpoint: `GET https://jsonplaceholder.typicode.com/posts`
   - Maps first 8 posts as product categories.
   
2. **Fetch Products in a Category**:
   - Endpoint: `GET https://jsonplaceholder.typicode.com/photos`
   - Uses photo data as product details.

3. **User Login**:
   - Endpoint: `POST https://jsonplaceholder.typicode.com/users`
   - Sends username and password as a payload for login simulation.

4. **Add to Cart**:
   - Endpoint: `POST https://jsonplaceholder.typicode.com/posts`
   - Sends product details (name, price, quantity) as payload to simulate adding to the cart.

## Screens and UI Components

### Home Screen
- **Header**: Includes a logo, search bar, and current location display.
- **Promotional Banner**: Displays a banner with the latest offers.
- **Categories Section**: Showcases grocery categories with circular icons.
- **Bottom Navigation**: Navigation between Home, Categories, Cart, and Profile screens.

### Cart Page
- Displays the products added to the cart along with their images, quantity, and total cost.

### Login Screen
- Allows users to authenticate with a mock API.
- Provides login error messages for invalid credentials.

## State Management

The app uses **Redux Toolkit** or **Context API** to manage:
- User authentication (login/logout states).
- Shopping cart (adding/removing items).

## Error Handling

- **Network Errors**: Displays a user-friendly message if a network error occurs.
- **API Errors**: Properly handles 4xx and 5xx HTTP errors.
- **Form Validation**: Provides feedback for invalid login attempts.

## Dependencies

Here is the list of key dependencies used in the project:

- **React Native**: Framework for building mobile apps.
- **Expo**: Platform for building universal React Native apps.
- **Redux Toolkit**: State management for global app state.
- **Axios**: HTTP client for API requests.
- **JSONPlaceholder**: Mock API for testing.
