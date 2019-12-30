//@flow

import React from 'react'
import './styles.scss'

type Props = {
  onArrowClick: () => any,
  isArrowClicked: boolean
}

const ModalHeader = (props: Props) => {
  const { onArrowClick, isArrowClicked } = props
  return (
    <div className="iphn-hed">
      <div className="wrap_radio">
        <span>Apple iPhone X</span>
        <div className="custm_radio">
          <input type="radio" id="test1" name="radio-group" />
          <label htmlFor="test1">I Own This Device</label>
        </div>
      </div>
      <div className="click_drp" onClick={onArrowClick}>
        <span className="iphn-swt">
          <i
            className={isArrowClicked ? 'fa fa-angle-up' : 'fa fa-angle-down'}
            aria-hidden="true"
          ></i>
        </span>
      </div>
    </div>
  )
}

export default ModalHeader
