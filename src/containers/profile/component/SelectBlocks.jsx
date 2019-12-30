import React, { Component, } from 'react'

import Icon from 'react-web-vector-icons';

import LOGO_IMG from '../../../assets/images/profile_header.png'
import '../styles.scss'

export default class SelectBlocks extends Component {
  constructor(props) {
    super(props)
    this.state = {
      reviews: true,
      videos: false,
      QA: true,
    }
  }

  changeReviews() {
    let reviews = this.state.reviews;
    this.setState({ reviews: !reviews })
  }
  changeVideos() {
    let videos = this.state.videos;
    this.setState({ videos: !videos })
  }
  changeQA() {
    let QA = this.state.QA;
    this.setState({ QA: !QA })
  }

  render() {
    return (
      <div>
        <div className="header">
          <img src={LOGO_IMG} alt="" />
          <p className="headertxt"> This is blocks page. You can add / remove product page blocks</p>
        </div>
        <p className="smalltitletxt"> Add / Remove Blocks</p>
        <div className="main">
          <div className="selectdata">
            <div>
              <p className="psize3bold">Reviews</p>
              <p className="psize2">See reviews and ratings from other users. Read critics, hidden features.</p>
            </div>
            <div>
              <span onClick={() => this.changeReviews()} style={{ margin: '3px', marginLeft: '0px' }}>
                {
                  this.state.reviews ?
                    (
                      <Icon
                        name='toggle-on'
                        font='FontAwesome'
                        color='#00a8ef'
                        size={40}
                        style={{ cursor: 'pointer' }}
                      />
                    ) : (
                      <Icon
                        name='toggle-off'
                        font='FontAwesome'
                        color='#baccd8'
                        size={40}
                        style={{ cursor: 'pointer' }}
                      />
                    )
                }
              </span>
            </div>
          </div>
          <div className="bottomboderdiv"></div>
          <div className="selectdata">
            <div>
              <p className="psize3bold">Videos</p>
              <p className="psize2">Watch tutorials, catch unboxing videos, hear first impressions from famous tech-bioggers.</p>
            </div>
            <div>
              <span onClick={() => this.changeVideos()} style={{ margin: '3px', marginLeft: '0px' }}>
                {
                  this.state.videos ?
                    (
                      <Icon
                        name='toggle-on'
                        font='FontAwesome'
                        color='#00a8ef'
                        size={40}
                        style={{ cursor: 'pointer' }}
                      />
                    ) : (
                      <Icon
                        name='toggle-off'
                        font='FontAwesome'
                        color='#baccd8'
                        size={40}
                        style={{ cursor: 'pointer' }}
                      />
                    )
                }
              </span>
            </div>
          </div>
          <div className="bottomboderdiv"></div>
          <div className="selectdata">
            <div>
              <p className="psize3bold">QA</p>
              <p className="psize2">Be a part of comunity. Ask or answer questions, share the global knowledge.</p>
            </div>
            <div>
              <span onClick={() => this.changeQA()} style={{ margin: '3px', marginLeft: '0px' }}>
                {
                  this.state.QA ?
                    (
                      <Icon
                        name='toggle-on'
                        font='FontAwesome'
                        color='#00a8ef'
                        size={40}
                        style={{ cursor: 'pointer' }}
                      />
                    ) : (
                      <Icon
                        name='toggle-off'
                        font='FontAwesome'
                        color='#baccd8'
                        size={40}
                        style={{ cursor: 'pointer' }}
                      />
                    )
                }
              </span>
            </div>
          </div>
          <div className="bottomboderdiv"></div>

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
