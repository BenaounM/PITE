import React from "react";

export class forgot extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="base-container" ref={this.props.containerRef}>
        <div className="header">Mot De Passe Oublier</div>
        <br/>
        <div className="content">
          <div className="form">
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" placeholder="taper votre email" />
            </div>
          </div>
        </div>
        <div className="footer">
          <button type="button" className="btn">
            
Envoyer
          </button>
        </div>
      </div>
    );
  }
}