import React from 'react';
import PropTypes from "prop-types";
import {connect} from 'react-redux'
import LoginForm from "../forms/LoginForm"
import {login} from "../../actions/auth"
 


class Loginpage extends React.Component {
    submit = data => this.props.login(data).then(() => this.props.history.push("/Dashboard"));

    render() { 
        return ( 
        <div>
             <h1>LoginPage</h1>
             <LoginForm submit={this.submit}/>
        </div>


         );
    }
}

Loginpage.propTypes = {
    history: PropTypes.shape({
        push: PropTypes.func.isRequired
    }).isRequired,
    login: PropTypes.func.isRequired       
    
}
 
export default connect(null,{login}) (Loginpage);
