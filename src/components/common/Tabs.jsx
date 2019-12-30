//@flow

import React from 'react'
import { Link } from 'react-router-dom'
import './styles.scss'

type TabListTypes = { tabName: string, status: string }

type Props = {
  onTabChange: (val: string) => any,
  tabList: Array<TabListTypes>,
  activeTab: string,
  wrapperClass?: string
}

const Tabs = (props: Props) => {
  const { onTabChange, tabList, wrapperClass, activeTab } = props
  return (
    <ul className={wrapperClass || 'nav nav-pills'}>
      {tabList.map((item, index) => {
        const { tabName } = item
        return (
          <li key={index} className={tabName === activeTab ? 'active' : ''}>
            <Link to="#" onClick={() => onTabChange(item.tabName)}>
              {item.tabName}
              {item.status ? <div className="ipn-new">new</div> : null}
            </Link>
          </li>
        )
      })}
    </ul>
  )
}

export default Tabs
