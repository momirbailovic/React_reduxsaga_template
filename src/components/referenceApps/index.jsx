//@flow

import React from 'react'
import { referenceAppsData } from 'utils/metaData'
import './styles.scss'

type Props = {
  onReferenceAppClick: () => any
}
const ReferenceApps = (props: Props) => {
  const { onReferenceAppClick } = props
  return (
    <div className="tech-app">
      <p>Apps</p>
      <div className="app-box">
        {referenceAppsData.map((data, index) => (
          <div
            className={data.className}
            key={index}
            onClick={onReferenceAppClick}
          >
            <div className="apps-cont">
              <img src={data.img} alt={data.appName} />
              <p>{data.appName}</p>
              <div className="cstm_tooltip">
                <p>{data.description}</p>
                <p className="try_now">Try Now</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ReferenceApps
