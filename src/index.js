import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './components/App'
import { createStore } from "redux"
import { Provider } from "react-redux"
import reducer from "./reducers"

const store = createStore(reducer) // we call create stroe passing it our root reducer

// then we wrap our main app inside the provider component and we pass out store to provider

ReactDOM.render(<Provider store={store}> 
<App />
</Provider>, 
document.getElementById('root'))