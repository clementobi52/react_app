import { USER_LOGGED_IN, USER_LOGGED_OUT } from "../types";
import api from "../api";

export const userLoggedin = user => ({
  type: USER_LOGGED_IN,
  user
});

export const userLoggedout = () => ({
    type: USER_LOGGED_OUT,

  });

export const login = credentials => dispatch =>
  api.user.login(credentials).then(user => {
    localStorage.backendJWT = user.token;
    dispatch(userLoggedin(user));
  });


  export const logout = () => dispatch =>{
     localStorage.removeItem('backendJWT');
    dispatch(userLoggedout());
  };
