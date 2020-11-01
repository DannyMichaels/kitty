import Home from './screens/Home/Home'
import CreateCat from './screens/CreateCat/CreateCat'
import CatGallery from './screens/CatGallery/CatGallery'
import Layout from './components/shared/Layout/Layout'
import Game from './screens/TicTacToe/Game'
import { HashRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Layout>
   <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/create-cat' component={CreateCat} />
          <Route exact path='/cat-gallery' component={CatGallery} />
          <Route exact path='/cat-mouse-toe' component={Game} />
        </Switch>
   </Layout>
      </Router>
  );
}

export default App;
