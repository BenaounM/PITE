import React from "react";

export class newpw extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="base-container" ref={this.props.containerRef}>
        <div className="header">Nouveau Mot De Passe</div>
        <br/>
        <div className="content">
        
          <div className="form">
            <div className="form-group">
              <label htmlFor="username">Mot De Passe</label>
              <input type="text" name="username" placeholder="taper votre mot de passe" />
            </div>
            <div className="form-group">
              <label htmlFor="password">Confirmer Votre Mot De Passe</label>
              <input type="text" name="password" placeholder="taper votre mot de passe" />
            </div>
            
          </div>
        </div>
        <div className="footer">
          <button type="button" className="btn">
            
Confirmer
          </button>
        </div>
      </div>
    );
  }
}