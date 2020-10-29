import Home from './screens/Home/Home'
import CreateCat from './screens/CreateCat/CreateCat'
import Layout from './components/shared/Layout/Layout'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Layout>
   <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/create-cat' component={CreateCat} />
        </Switch>
   </Layout>
      </Router>
  );
}

export default App;
