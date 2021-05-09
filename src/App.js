import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { KYCBasicPage, KYCDocumentsPage, KYCFacePage } from './pages/kyc/';

const App = () => {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/kyc/first-step/" component={KYCBasicPage} />
          <Route exact path="/kyc/middle-step/" component={KYCDocumentsPage} />
          <Route exact path="/kyc/last-step/" component={KYCFacePage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
