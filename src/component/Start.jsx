import React from 'react';
import uber from '../util/uberHelper';

export default class Start extends React.Component {
  state = {
    video: false,
  }

  componentDidMount() {
    this.setState({ video: !localStorage.getItem('video') });
  }

  onEnded() {
    localStorage.setItem('video', false);
    this.setState({ video: false });
  }

  render() {
    return (
      <div className="start">
        {
          this.state.video ?
            <video controls="" autoPlay name="media" onEnded={::this.onEnded}>
              <source src="assets/video/video.webm" type="video/webm" />
            </video>
          :
            <div className="auth">
              <img className="splash" src="assets/img/splash.png" />
              <a className="logo" href={uber.generateRegisterUrl()}>
                <img src="assets/img/logo.svg" alt="Uber" />
              </a>

              <div className="auth-actions jawbone">
                <a href={uber.generateAuthUrl()} className="login">Sign in</a>
                <a href={uber.generateRegisterUrl()} target="_blank" className="register">Register</a>
              </div>
            </div>
        }
      </div>
    );
  }
}
