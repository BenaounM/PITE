import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
var apiBaseUrl = "http://localhost:4000/api/";


class Login extends Component {
  constructor(props){
    super(props);
    var localloginComponent=[];
    localloginComponent.push(
      
    )
    this.state={
      username:'',
      password:'',
     
    }
  }
  handleClick(event){
   
  }
  
  render() {
    return (
      <div>
        <MuiThemeProvider>
        <AppBar
             title="Enet'Com"
           />
        </MuiThemeProvider>
        <MuiThemeProvider>
        <div>
        <p>Login</p>
       
        </div>
        </MuiThemeProvider>
        <MuiThemeProvider key={"theme"}>
        <div>
         <TextField
           hintText="Taper Votre Email"
           floatingLabelText="Email"
           onChange={(event,newValue) => this.setState({username:newValue})}
           />
         <br/>
           <TextField
             type="password"
             hintText="Taper Votre Mot De Passe"
             floatingLabelText="Mot De Passe"
             onChange = {(event,newValue) => this.setState({password:newValue})}
             />
           <br/>
           <RaisedButton label="Connexion" primary={true} style={style} onClick={(event) => this.handleClick(event)}/>
       </div>
       </MuiThemeProvider>
      </div>
    );
  }
}

const style = {
  margin: 15,
};

export default Login;
