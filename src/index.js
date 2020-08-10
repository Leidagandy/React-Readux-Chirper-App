import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './components/App'
import { createStore } from "redux"
import { Provider } from "react-redux"
import reducer from "./reducers"
import middleware from "./middleware" // go ahead and import the default export coming from
// the index.js file which is going to be our applied middleware invokation

const store = createStore(reducer, middleware) // we call create stroe passing it our root reducer

// then we wrap our main app inside the provider component and we pass out store to provider

ReactDOM.render(<Provider store={store}> 
<App />
</Provider>, 
document.getElementById('root'))