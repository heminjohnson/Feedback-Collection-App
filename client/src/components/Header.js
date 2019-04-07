import React, { Component } from 'react'

class Header extends Component {
  render() {
    return (
      <nav>
        <div className='nav-wrapper'>
          <div className='container'>
            <a className='left brand-logo'>
              Feedback-Collection-App
            </a>
            <ul className='right'>
              <li>
                <a>Login with Google</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}

export default Header
