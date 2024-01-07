# Project Overview - Folder Structure, Development Challenges, and Initialization Steps

## Folder Structure:

- **src:**
  - **Assets:**
    - **Images:**
      - logo.png
      - search.svg
    - constants.js
  - **Components:**
    - About
    - ErrorBoundary
    - Footer
    - Loading
    - Login-form
    - NavBar
    - Products
    - TopButton
    - RouterComponent.jsx
  - **Enhancers:**
    - monitorReducer.js
  - **Middleware:**
    - logger.js
    - constants.js
  - **Pages:**
    - About
    - Login
    - Products
    - AppRoutes.jsx
    - index.jsx
  - **Reducers:**
    - auth.js
    - index.js
    - products.js
    - types.js
  - **Redux:**
    - auth.js
    - configureStore.js
    - products.js
  - **Session:**
    - AuthContext.js
    - withAuthentication.jsx
  - App.css
  - App.js
  - index.css
  - index.js

- **public:**
  - **Assets:**
    - **Images:**
      - **favicon:**
        - ... Images
  - index.html
  - manifest.json
  - robots.txt

- **node_modules**

## Development Difficulties

While developing the application, several challenges were encountered. Some of the difficulties include:

- **Login Module Integration:**
  - Integrating the login module with secure email and password validation proved challenging, especially ensuring proper validation and encryption.
  
- **Search Functionality:**
  - Implementing the search functionality with Angular Material cards in the product list module required meticulous handling to ensure a smooth user experience and accurate results.
  
- **Authentication Handling:**
  - Managing authentication and correctly passing the access token as a header in API requests posed challenges, requiring thorough understanding of security measures.
  
- **API Clarification:**
  - While communicating with Kailash about the API, there was a need for clarification on fetching the access token. This required additional communication to resolve the issue and ensure proper API integration. After Reviewing and updating the API server, Including "Authorization" header in the POST API from the updated assignment requirements pdf, the issue was successfully resolved.

  The resolved code for fetching the authentication token is as follows:

```javascript
export const login = (username, password) => async (dispatch) => {
  dispatch(loginRequest());
  
  try {
    const hashedPassword = sha256(password).toString();
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Basic UHJvbWlsbzpxNCE1NkBaeSN4MiRHQg==");
    
    const formData = new FormData();
    formData.append('username', username);
    formData.append('password', hashedPassword);
    formData.append('grant_type', 'password');
    
    const response = await fetch('https://apiv2stg.promilo.com/user/oauth/token', {
      method: 'POST',
      headers: myHeaders,
      body: formData,
    });
    
    if (response) {
      const data = await response.json();
      
      if (data.status.code === 200) {
        const token = data.response.access_token;
        localStorage.setItem('authToken', token);
        localStorage.setItem('userData', JSON.stringify(data.response));
        dispatch(loginSuccess(data));
        dispatch(notify({ message: `Login success`, status: 'success' }));
        dispatch(notify({ message: `Redirecting to Products`, status: 'loading' }));
        
        setTimeout(() => {
          window.location.href = '/products';
        }, 1000);
      } else {
        dispatch(loginFailure(data));
        dispatch(notify({ message: data.status.message, status: 'error' }));
      }
    }
  } catch (error) {
    dispatch(loginFailure(error.message));
  }
};
```

Project Start Guide
To initiate the project, carefully follow these step-by-step instructions:

Clone the project repository from the provided Git URL.

### `git clone <https://github.com/hanu7674/provision-store-test>`

Install project dependencies using the following command:

### `npm install`


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
