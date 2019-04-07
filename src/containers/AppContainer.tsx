import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { StoreState } from '../store/configureStore';
import { UserDataActions } from './UserData/actions';
import { People } from '../types/people';
import { routerActions } from 'react-router-redux';
import AppContent, { IAppContentProps } from '../components/AppContent';

const mapStateToProps = (state: StoreState) => {
  return {
    data: state.userData.data,
  } as IAppContentProps;
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    addPerson: (info: People) => dispatch(UserDataActions.addPerson(info)),
    updatePersonData: (info: People) => dispatch(UserDataActions.updatePersonInfo(info)),
    removePerson: () => dispatch(UserDataActions.removePerson()),
    saveData: (data: People[]) => dispatch(UserDataActions.saveData(data)),
    routePush: (location: string) => dispatch(routerActions.push(location)),
  } as Partial<IAppContentProps>;
};

export const AppContentContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(AppContent);
