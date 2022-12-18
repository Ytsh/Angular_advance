import { createReducer, on } from "@ngrx/store";
import { Falsey } from "lodash";
import * as UserActions from "./user.action";


export interface UserState{
    isLoggedIn :boolean;
}

export const userInitialState: UserState = {
    isLoggedIn:false
};

export const userFeatureKey = "userState";

export const userReducer = createReducer(
    userInitialState,
    on(UserActions.loginAction,(state,payload)=>{
        const isLoggedIn = payload.isLoggedIn;
        return{...state, isLoggedIn}
    })
)