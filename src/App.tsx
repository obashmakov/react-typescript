import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { NavBar } from './components/NavBar';
import { AboutPage } from './pages/AboutPage';
import { TodosPage } from './pages/TodosPage';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <div className="container">
        <Switch>
          <Route component={TodosPage} path="/react-typescript" />
          <Route component={AboutPage} path="/about" />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
