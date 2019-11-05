import React from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import Header from './components/Header'
import Quiz from './components/Quiz';
import Module from './components/Module';

 class App extends React.Component{
   render(){
      return (
        <BrowserRouter>
        <Header />
        <Switch>
        <Route path="/module" component={Module} />
        <Route path="/quiz" render={(props)=> <Quiz {...props} />} />
        </Switch>
          
        </BrowserRouter>

      );
   }
  
}

export default App;
