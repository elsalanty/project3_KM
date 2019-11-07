import React from 'react'
import {Link} from 'react-router-dom';
import GoogleAuth from './GoogleAuth'

class Header extends React.Component{
    render(){
        return(
            <div className="navbar navbar-expand-lg fixed-top navbar-dark bg-primary">
                <div className="container">
                <div className="collapse navbar-collapse" id="navbarResponsive">
                <ul className="navbar-nav">
                <li className="nav-item">
                    <GoogleAuth userEmail={this.props.userEmail} saveUser={this.props.saveUser}/>
                    </li>
                            <li className="nav-item"><Link className="navbar-brand" to={'/module'}>Module</Link></li>
                            <li className="nav-item"><Link className="navbar-brand" to={'/quiz'}>Take Quiz</Link></li>
                      </ul>
                    </div>
                </div>

                
            </div>
        )
    }
}
export default Header;