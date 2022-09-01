# How to setup a new project with Redux

This project was bootstrapped with the command `yarn create react-app 01-toggle-dark-theme --template typescript` (if you don't want to use typescript just remove the `--template typescript` part).

First thing you need is to install the assential redux libraries by running `yarn add react-redux @reduxjs/toolkit`.

[React Redux](https://react-redux.js.org/) comes with the essentials for running redux in your react applications and [Redux Toolkit](https://redux-toolkit.js.org/) is the modern way to build projects with redux.

The first thing we will need is to create a `store/index.ts` file inside our `src` folder. This will be the starting point of our redux store.

```javascript
// src/store/index.ts

import { configureStore } from '@reduxjs/toolkit'

// Create the store by passing a configuration object to the `configureStore` function
export const store = configureStore({
    // This is the only required parameter
    // We will be passing an empty object for now
    reducer: {}
})
```

The redux store is created, but our application can't see it yet. For that we need to provide the store in the top level of our component tree, and that would be in our `src/index.tsx` file.

```javascript
// src/index.tsx

// importing the provider component and the store we just created
import { Provider } from "react-redux";
import { store } from "./store";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    {/* You need to wrap your application with a store provider, this way you can access the store from any component */}
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
```