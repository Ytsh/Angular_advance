import { createAction, props } from "@ngrx/store";


export const loginAction = createAction(
    '[Header Component] Login',
    props<{isLoggedIn:boolean}>() 
);