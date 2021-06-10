import Main from './Pages/Main/Main.jsx'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
function App() {
  return (
    <>
    <Router>
      <Switch>
        <Route path='/'>
          <Main />  
        </Route>
      </Switch>
    </Router>
    </>
  );
}

export default App;
