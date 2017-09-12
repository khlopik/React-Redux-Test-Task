import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Menu from './Menu/Menu';
import Project from './Project/Project';
import Calendar from './Calendar/Calendar';
import Chat from './Chat/Chat';
import Table from './Table/Table';
import Backlog from './Backlog/Backlog';

export default class RootContainer extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
      <Router history="">
        <div>
          <Menu />
          <Route exact path='/' component={Project} />
          <Route path='/calendar' component={Calendar} />
          <Route path='/chat' component={Chat} />
          <Route path='/table' component={Table} />
          <Route path='/backlog' component={Backlog} />
        </div>
      </Router>
        );
    }
}
