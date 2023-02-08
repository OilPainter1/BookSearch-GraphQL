import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SearchBooks from './pages/SearchBooks';
import SavedBooks from './pages/SavedBooks';
import Navbar from './components/Navbar';
import CREATE_USER from './gql/queries';
import GET_USER from './gql/queries';
import { useQuery,useMutation} from '@apollo/client';

const test = {
  username: "test",
  email:"test@test.com",
  password:"testpassword"

}

function App() {
  return (
    <Router>
      {console.log(useMutation(CREATE_USER({test})))}
      {console.log(useQuery(GET_USER))}
        <Navbar />
        <Switch>
          <Route exact path='/' component={SearchBooks} />
          <Route exact path='/saved' component={SavedBooks} />
          <Route render={() => <h1 className='display-2'>Wrong page!</h1>} />
        </Switch>
    
    </Router>
 
 

  );
}

export default App;
