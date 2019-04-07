import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { StoreState } from '../store/configureStore';
import { withRouter } from 'react-router';
import Layout, { ILayoutProps } from '../components/Layout';
import { routerActions } from 'react-router-redux';

const mapStateToProps = (state: StoreState) => {
  return {} as ILayoutProps;
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    routePush: (location: string) => dispatch(routerActions.push(location)),
  } as Partial<ILayoutProps>;
};

export const LayoutContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Layout));
