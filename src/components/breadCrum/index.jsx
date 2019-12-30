//@flow

import React from 'react'
import { Link } from 'react-router-dom'

import './styles.scss'

type Props = {
  breadCrumData: Array<string>,
  onClick: () => any
}
const BreadCrum = (props: Props) => {
  const { breadCrumData, onClick } = props
  return (
    <section className="vs-section">
      <div className="vs-container">
        <div className="vs-img">
          <span className="wrap_arrow">
            <Link to="" className="arrow_lft">
              <i className="fa fa-angle-left" aria-hidden="true"></i>
            </Link>
            <Link to="" className="arrow_rgt">
              <i className="fa fa-angle-right" aria-hidden="true"></i>
            </Link>
          </span>
          <ul className="cstm_bredcum">
            {breadCrumData.map((item, i) => {
              return (
                <li key={i}>
                  <Link to="#" onClick={() => onClick()}>
                    {' '}
                    {item}{' '}
                    <i className="fa fa-angle-right" aria-hidden="true"></i>
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default BreadCrum
