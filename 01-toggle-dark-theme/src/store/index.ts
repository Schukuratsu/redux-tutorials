import { configureStore } from '@reduxjs/toolkit'

// Create the store by passing a configuration object to the `configureStore` function
export const store = configureStore({
    // This is the only required parameter
    // We will be passing an empty object for now
    reducer: {}
})