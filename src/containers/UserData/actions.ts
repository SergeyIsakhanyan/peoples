import { ADD_NEW_PERSON, UPDATE_PERSON_DATA, REMOVE_PERSON_DATA, SAVE_DATA } from './constants';
import { People } from '../../types/people';

export interface IAddNewPerson {
  type: typeof ADD_NEW_PERSON;
  payload: {
    info: People;
  };
}

export interface IUpdatePersonInfo {
  type: typeof UPDATE_PERSON_DATA;
  payload: {
    info: People;
  };
}

export interface IRemovePersonData {
  type: typeof REMOVE_PERSON_DATA;
}

export interface ISaveData {
  type: typeof SAVE_DATA;
  payload: {
    data: People[];
  };
}

export type UserDataAction = IAddNewPerson | IUpdatePersonInfo | IRemovePersonData | ISaveData;

export class UserDataActions {
  public static addPerson(info: People): UserDataAction {
    return {
      type: ADD_NEW_PERSON,
      payload: {
        info,
      },
    };
  }

  public static updatePersonInfo(info: People): UserDataAction {
    return {
      type: UPDATE_PERSON_DATA,
      payload: {
        info,
      },
    };
  }

  public static removePerson(): UserDataAction {
    return {
      type: REMOVE_PERSON_DATA,
    };
  }

  public static saveData(data: People[]): UserDataAction {
    return {
      type: SAVE_DATA,
      payload: {
        data,
      },
    };
  }
}
