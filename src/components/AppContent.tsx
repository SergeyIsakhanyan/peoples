import React, { PureComponent } from 'react';
import EnhancedTable from '../containers/DataTable';
import { People } from '../types/people';

export interface IAppContentProps {
  data: People[];
  addPerson: (info: People) => void;
  updatePersonData: (info: People) => void;
  removePerson: () => void;
  saveData: (data: People[]) => void;
  routePush: (location: string) => void;
}

export default class AppContent extends PureComponent<IAppContentProps> {
  public render() {
    return (
      <div className="App">
        <EnhancedTable
          addPerson={this.props.addPerson}
          updatePersonData={this.props.updatePersonData}
          data={this.props.data}
          removePerson={this.props.removePerson}
          saveData={this.props.saveData}
        />
      </div>
    );
  }
}
