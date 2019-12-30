import React, { Component, } from 'react'

import LOGO_IMG from '../../../assets/images/profile_header.png'
import '../styles.scss'

export default class SelectTemp extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }


  render() {

    return (
      <div>
        <div className="header">
          <img src={LOGO_IMG} alt="" />
          <p className="headertxt"> This is temp page. You can change this page</p>
        </div>
        <p className="smalltitletxt"> Add new data</p>
        <div className="main">

          <div className="submitbnt">
            <button className="savebnt">
              Save Changes
                        </button>
            <button className="revertbnt">
              Revert Changes
                        </button>
          </div>
        </div>
      </div>
    )
  }
}
