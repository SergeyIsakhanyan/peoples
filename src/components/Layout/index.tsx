import React, { Component } from 'react';
import { RouteComponentProps, Switch, Route } from 'react-router';
import { AppContentContainer } from '../../containers/AppContainer';

export const ROUTES = { Home: '/home' };

export interface ILayoutProps extends RouteComponentProps<{}> {
  routePush: (location: string) => void;
}

export default class Layout extends Component<ILayoutProps, {}> {
  public componentDidMount() {
    if (this.props.location.pathname !== ROUTES.Home) {
      this.props.routePush(ROUTES.Home);
    }
  }

  public render() {
    return (
      <Switch>
        <Route exact={true} path={ROUTES.Home} component={AppContentContainer} />
      </Switch>
    );
  }
}
