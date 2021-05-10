import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { PageTransition } from './AppStyle';

import { KYCBasicPage, KYCDocumentsPage, KYCFacePage } from './pages/kyc/';

const App = () => {
  return (
    <div className="App">
      <PageTransition>
        <Router>
          <Switch>
            <Route exact path="/kyc/first-step/" component={KYCBasicPage} />
            <Route exact path="/kyc/middle-step/" component={KYCDocumentsPage} />
            <Route exact path="/kyc/last-step/" component={KYCFacePage} />
            <Route exact path="/*">
              <Redirect to="/kyc/first-step/" />
            </Route>
          </Switch>
        </Router>
      </PageTransition>
    </div>
  );
}

export default App;
