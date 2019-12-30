//@flow

import React from 'react'
import { Link } from 'react-router-dom'
import ModalSideBar from 'components/modalSidebar'
import ModalHeader from 'components/modalHeader'
import RelatedProducts from 'components/relatedProducts'
import Tabs from 'components/common/Tabs'
import ProductDescriptionTable from 'components/productDescriptionTable'
import { WHITE_VS_ICN } from 'common/images'
import './styles.scss'

type SocialAppType = { socialName: string, className: string }

type RelatedProductsType = { productName: string, version: string }

type TabListType = { tabName: string, status: string }

type Props = {
  onShortedProductClick: (val: any) => any,
  onAdvanceSearhClick: (val: any) => any,
  onProductTabChange: (val: string) => any,
  activeTab: string,
  onProductColorSelect: (event: any) => any,
  onModalOuterClick: (event: any) => any,
  socialApp: Array<SocialAppType>,
  sideBarMenu: Array<string>,
  relatedProductsData: Array<RelatedProductsType>,
  tabList: Array<TabListType>,
  onArrowClick: () => any,
  isArrowClicked: boolean
}
const ProductDescriptionModal = (props: Props) => {
  const {
    socialApp,
    sideBarMenu,
    onProductTabChange,
    activeTab,
    onProductColorSelect,
    relatedProductsData,
    tabList,
    onModalOuterClick,
    onArrowClick,
    isArrowClicked
  } = props
  return (
    <div className="iphone left0">
      <div className="left-portion" onClick={onModalOuterClick} />
      <ModalSideBar sideBarMenu={sideBarMenu} socialApp={socialApp} />
      <div className="iphn-rgt">
        <ModalHeader
          onArrowClick={onArrowClick}
          isArrowClicked={isArrowClicked}
        />
        {isArrowClicked && (
          <RelatedProducts relatedProductsData={relatedProductsData} />
        )}
        <div className="iphn-tab">
          <Tabs
            tabList={tabList}
            onTabChange={onProductTabChange}
            activeTab={activeTab}
          />
          <button type="button" className="suggest_btn">
            <i className="fa fa-outdent" aria-hidden="true"></i> Suggest Edit
          </button>
          <ProductDescriptionTable
            onProductColorSelect={onProductColorSelect}
          />
        </div>
        <div className="plus_toggle">
          <Link to="">
            <span>
              <i className="fa fa-plus" aria-hidden="true"></i>
            </span>
          </Link>
          <img src={WHITE_VS_ICN} alt="versus-icon" />
        </div>
      </div>
    </div>
  )
}
export default ProductDescriptionModal
