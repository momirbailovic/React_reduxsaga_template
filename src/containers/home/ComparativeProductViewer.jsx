//@flow

import React from 'react'
import ShortedProduct from 'components/shortedProduct'
import Selector from 'components/common/Selector'
import AdvancedSearchButton from 'components/common/AdvancedSearchButton'
import {
  // shortedProduct,
  phoneTypeFilter,
  phoneBrandFilter
} from 'utils/metaData'
import './styles.scss'

type Props = {
  deviceByName: Object,
  onShortedProductClick: (val: any) => any,
  onAdvanceSearhClick: (val: any) => any,
  onProductDetails: () => any
}
const ComparativeProductViewer = (props: Props) => {
  const {
    onShortedProductClick,
    onAdvanceSearhClick,
    deviceByName,
    onProductDetails
  } = props

  const devices = Object.keys(deviceByName).length
    ? deviceByName.deviceByName.result
    : []

  return devices ? (
    <div className="comparission_dropdown">
      <div className="drop_row">
        <div className="drop_lft">
          <Selector optionList={phoneTypeFilter} />
          <Selector optionList={phoneBrandFilter} />
        </div>
        <AdvancedSearchButton onClick={onAdvanceSearhClick} />
      </div>
      {devices.map((item, index) => {
        const itemObj = {
          productImg: item.featured_image.thumb,
          aboutProduct: item.slug,
          productName: item.device_name
        }
        return (
          <ShortedProduct
            key={index}
            onClick={onShortedProductClick}
            item={itemObj}
          >
            <div className="item_row_rgt">
              <button type="button" onClick={onProductDetails}>
                See Specs <i className="fa fa-angle-right" aria-hidden="true" />
              </button>
            </div>
          </ShortedProduct>
        )
      })}
    </div>
  ) : null
}
export default ComparativeProductViewer
