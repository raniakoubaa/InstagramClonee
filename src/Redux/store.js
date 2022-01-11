import rootReduce from "./Reducer"
import { createStore } from "redux"

const Devtools=window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
const store=createStore(rootReduce,Devtools)
export default store

