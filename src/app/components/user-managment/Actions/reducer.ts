import { ApiResult } from '../../../model/user.model';
import { UserActions, UserActionType } from './user-actions';


export const initialState = {
  userList: ApiResult,
};

export function usersReducer(state = initialState, action: UserActions) {

  switch (action.type) {

    case UserActionType.GET_USERS: {
      return { ...state };
    }

    case UserActionType.GET_USERS_SUCCESS: {
      let msgText = '';
      let bgClass = '';

      if (action.payload.data.length < 1) {
        msgText = 'No data found';
        bgClass = 'bg-danger';
      } else {
        msgText = 'Loading data';
        bgClass = 'bg-info';
      }

      return {
        ...state,
        userList: action.payload,
        message: msgText,
        infoClass: bgClass
      };
    }

    case UserActionType.GET_USERS_FAILED: {
      return { ...state };
    }

    default: {
      return { ...state };
    }

  }
}