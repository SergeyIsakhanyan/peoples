import { UserDataAction } from './actions';
import { SAVE_DATA } from './constants';
import { People } from '../../types/people';

export interface IUserDataState {
  data: People[];
}

const initialState: IUserDataState = {
  data: [] as People[],
};

export const userDataReducer = (state = initialState, action: UserDataAction) => {
  switch (action.type) {
    case SAVE_DATA: {
      return {
        data: action.payload.data,
      };
    }
    default: {
      return state;
    }
  }
};
