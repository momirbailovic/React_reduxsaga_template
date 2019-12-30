//@flow

import React from 'react'
import { Link } from 'react-router-dom'
import { COMPARE_PHONE } from 'common/images'
import './styles.scss'

type SocialAppType = { socialName: string, className: string }

type Props = {
  socialApp: Array<SocialAppType>,
  sideBarMenu: Array<string>
}

const ModalSideBar = (props: Props) => {
  const { sideBarMenu, socialApp } = props
  return (
    <div className="iphn-lft">
      <div className="iphn-img">
        <img src={COMPARE_PHONE} alt="" />
      </div>
      <ul className="iphn-spec">
        {sideBarMenu &&
          sideBarMenu.map((menu, index) => {
            return (
              <li className={index === 0 ? 'active' : ''} key={index}>
                <Link to="#">{menu}</Link>
              </li>
            )
          })}
      </ul>
      <ul className="social_icons">
        {socialApp.map((item, i) => {
          return (
            <li className={item.socialName} key={i}>
              <Link to="#" aria-hidden="true">
                <i className={item.className} aria-hidden="true"></i>
              </Link>
              {item.socialName === 'link' && (
                <div className="social_tooltip">
                  Link has been copied to clipboard.
                </div>
              )}
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default ModalSideBar
