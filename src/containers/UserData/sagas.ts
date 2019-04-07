import { all, put, takeLatest, select } from 'redux-saga/effects';
import { IAddNewPerson, UserDataActions, IUpdatePersonInfo } from './actions';
import { ADD_NEW_PERSON, REMOVE_PERSON_DATA, UPDATE_PERSON_DATA } from './constants';
import { StoreState } from '../../store/configureStore';
import { People } from '../../types/people';

function* addNewPerson(action: IAddNewPerson) {
  let data = yield select((state: StoreState) => state.userData.data);
  data.push(action.payload.info);
  yield put(UserDataActions.saveData([...data]));
}

function* removePerson() {
  let data: People[] = yield select((state: StoreState) => state.userData.data);
  let newData = data.filter(item => !item.isSelected);
  yield put(UserDataActions.saveData([...newData]));
}

function* updateInfo(action: IUpdatePersonInfo) {
  let data: People[] = yield select((state: StoreState) => state.userData.data);
  let person = data.find(item => item.id === action.payload.info.id);
  if (person) {
    person = { ...action.payload.info };
  }
  yield put(UserDataActions.saveData([...data]));
}

function* userDataWatcher() {
  yield all([
    takeLatest(ADD_NEW_PERSON, addNewPerson),
    takeLatest(UPDATE_PERSON_DATA, updateInfo),
    takeLatest(REMOVE_PERSON_DATA, removePerson),
  ]);
}

export default userDataWatcher;
