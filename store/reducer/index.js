// import { combineReducers } from "redux";
import authReducer from './auth.reducer';
import articlesReducer from "./articles.reducer";
import doctorsReducer from "./doctors.reducer";
import medcentersReducer from "./medcenters.reducer";
import profileReducer from "./profile.reducer";

const rootReducer = combineReducers({
    auth: authReducer,
    articles: articlesReducer,
    doctors:doctorsReducer,
    medcenters:medcentersReducer,
    profile:profileReducer
});

export default rootReducer;