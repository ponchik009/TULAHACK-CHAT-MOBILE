import React from 'react';

export default (state: any, action: any) => {
  switch (action.type) {
    case 'SAVE_USER_DATA':
      return;
      action.payload;
    case 'DELETE_USER_DATA':
      return null;
    default:
      return state;
  }
};
