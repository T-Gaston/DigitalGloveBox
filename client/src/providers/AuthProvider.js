import React from "react";
import axios from "axios";

export const AuthContext = React.createContext();

export const AuthConsumer = AuthContext.Consumer;

export class AuthProvider extends React.Component {
  state = { user: null, };

  

  handleRegister = (user, history) => {
    axios.post("/api/auth", user)
      .then( res => {
        this.setState({ user: res.data.data, });
        console.log(user)
        history.push("/dashboard");
      })
      
    .catch( res => {
      console.log(res);
    })
  }
  
  handleLogin = (user, history) => {
    axios.post("/api/auth/sign_in", user)
      .then( res => {
        this.setState({ user: res.data.data, });
        history.push("/dashboard");
      })
      .catch( res => {
        console.log(res);
        alert('Your password or Login is Incorrect. Please try again.')
      })
  }
  
  handleLogout = (history) => {
    axios.delete("/api/auth/sign_out")
      .then( res => {
        this.setState({ user: null, });
        history.push('/login');
      })
      .catch( res => {
        console.log(res);
      })
  }

  updateUser = (id, user) => {
    let data = new FormData();
    axios.put(`/api/users/${id}?first_name=${user.first_name}&last_name=${user.last_name}&email=${user.email}&phone_number=${user.phone_number}&postal_code=${user.postal_code}&comm_prefs=${user.comm_prefs}`, data)
      .then( res => this.setState({ user: res.data, }) )
  }
  
  render() {
    return (
      <AuthContext.Provider value={{
        ...this.state,
        authenticated: this.state.user !== null,
        handleRegister: this.handleRegister,
        handleLogin: this.handleLogin,
        handleLogout: this.handleLogout,
        setUser: (user) => this.setState({ user, }),
        updateUser: this.updateUser,
        
      }}>
        { this.props.children }
      </AuthContext.Provider>
    )
  }
};
