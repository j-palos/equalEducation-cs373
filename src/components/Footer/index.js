import React, {Component} from 'react';
import './index.css';

class Footer extends Component {
  constructor() {
    super();
    this.state = {
        intervalId: 0
    };
  }

  scrollStep() {
    if (window.pageYOffset === 0) {
        clearInterval(this.state.intervalId);
    }
    window.scroll(0, window.pageYOffset - this.props.scrollStepInPx);
  }

  scrollToTop() {
    let intervalId = setInterval(this.scrollStep.bind(this), this.props.delayInMs);
    this.setState({ intervalId: intervalId });
  }

//saving this code for the current. will have to be added via js later
// <span className="sr-only">(current)</span>
  render() {
    return (
      <footer className="container">
        <p className="float-right">
          <button type="button" className="btn btn-link"
                  onClick={ () => { this.scrollToTop(); }}>
            Back to top
          </button>
        </p>
        <p className="float-left">© Equal Education</p>
      </footer>
    );
  }
}

export default Footer;
