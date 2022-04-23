import React, { createContext, useReducer } from 'react';
import User from '../types/User';
import AppReducer from './AppReducer';

const initialState = {
  userData: null,
};

export const GlobalContext = createContext<any>(initialState);

export const GlobalProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);
  console.log('state', state);

  function SaveUserData(userData: User) {
    dispatch({
      type: 'SAVE_USER_DATA',
      payload: userData,
    });
  }
  function DeleteUserData() {
    dispatch({
      type: 'DELETE_USER_DATA',
      payload: null,
    });
  }

  return (
    <GlobalContext.Provider
      value={{ userData: state.userData, SaveUserData, DeleteUserData }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
