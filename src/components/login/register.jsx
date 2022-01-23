import React from "react";
import logo from "../../logo.jpg";

export class Register extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="base-container" ref={this.props.containerRef}>
        <div className="header">Création Du Compte</div>
        <br/>
        <div className="content">
          <div className="image">
            <img src={logo} />
          </div>
          <div className="form">
            <div className="form-group">
              <label htmlFor="username">Nom</label>
              <input type="text" name="username" placeholder="taper votre nom" />
            </div>
            <div className="form-group">
              <label htmlFor="username">Prénom</label>
              <input type="text" name="username" placeholder="taper votre prénom" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" placeholder="taper votre email" />
            </div>
            <div className="form-group">
              <label htmlFor="password">Mot De Passe</label>
              <input type="text" name="password" placeholder="taper votre mot de passe" />
            </div>
            <div className="form-group">
              <label htmlFor="username">Numéro De Téléphone</label>
              <input type="text" name="username" placeholder="taper votre numéro de téléphone" />
            </div>
            <div>
        <input type="radio" value="Male" name="gender"/> Professeur
        <input type="radio" value="Female" name="gender" /> Etudiant
      </div>
          </div>
        </div>
        <div className="footer">
          <button type="button" className="btn">
            
S'inscrire
          </button>
        </div>
      </div>
    );
  }
}
