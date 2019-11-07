import React from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import Header from './components/Header'
import Quiz from './components/Quiz';
import Module from './components/Module';
import axios from 'axios'; //library used to make api calls

 class App extends React.Component{
   //this is the top level component which will hold the state for userEmail
   state={
    userEmail: null
   }

   //saveUser function will get invoked from GoogleAuth.jsx once the user successfully signs in
   //we will use this function here to invoke the server api to create user
   saveUser = (userEmail)=>{
     axios.post('/api/createUser',{userEmail}).then(response=>{
       console.log('response back from server',response);
       this.setState({userEmail})
     })

   }
   render(){
      return (
        <BrowserRouter>
        <Header userEmail={this.state.userEmail} saveUser={this.saveUser} />
        <Switch>
        <Route path="/module" component={Module} />
        <Route path="/quiz" render={(props)=> <Quiz {...props} />} />
        </Switch>
          
        </BrowserRouter>

      );
   }
  
}

export default App;
