//@flow

import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../common/ButtonComponent'
import { LOGO_IMG } from 'common/images'
import { Dropdown } from 'react-bootstrap';
import './styles.scss'
import profilephoto from '../../assets/images/1.jpg';

type Props = {
  onFeedBackClick: () => any,
  headerClass?: string
}

const Header = (props: Props) => {
  return (
    <header className={props.headerClass}>
      <div className="hdr">
        <div className="hdr-logo">
          <img src={LOGO_IMG} alt="" />
        </div>
        <div className="hdr-bar">
          <i className="fa fa-bars" aria-hidden="true" />
        </div>
        <div className="hdr-nav">
          <ul>
            <li>
              <Link to="#">About</Link>
            </li>
            <li>
              <Link to="#">Apps</Link>
            </li>
            <li>
              <Link to="#">API</Link>
            </li>
            <li>
              <Link to="#">Contact</Link>
            </li>
            <li>
              <Button className="default_btn feedback_btn" onClick={props.onFeedBackClick}>Send Feedback</Button>
            </li>
            <li>
              <Dropdown>
                <Dropdown.Toggle variant="transparent" id="dropdown-basic">
                  <img
                    src={profilephoto}
                    alt="user"
                    className="rounded-circle"
                    width="31"
                  />
                </Dropdown.Toggle>
                <Dropdown.Menu className="drp_menu">
                  <Dropdown.Item href="/profile">Profile</Dropdown.Item>
                  <Dropdown.Item>Settings</Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item>Log out</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </li>
          </ul>
        </div>
      </div>
    </header>
  )
}

export default Header
