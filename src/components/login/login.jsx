import React from "react";
import logo from "../../logo.jpg";

export class Login extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="base-container" ref={this.props.containerRef}>
        <div className="header">Connexion</div>
        <br/>
        <div className="content">
          <div className="image">
            <img src={logo} />
          </div>
          <div className="form">
            <div className="form-group">
              <label htmlFor="username">Email</label>
              <input type="text" name="username" placeholder="taper votre email" />
            </div>
            <div className="form-group">
              <label htmlFor="password">Mot De Passe</label>
              <input type="password" name="password" placeholder="taper votre mot de passe" />
            </div>
          </div>
        </div>
        <div className="footer">
          <button type="button" className="btn">
            connexion
          </button>
        </div>
        <br/>
        <div className="form-group">
              <label>Mot De Passe Oublier !</label>
            </div>
      </div>
    );
  }
}
