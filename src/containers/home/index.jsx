//@flow

import * as React from 'react'
import { connect } from 'react-redux'
import Header from 'components/header'
import InputSearchBar from 'components/inputSearchBar'
import ComparativeProductViewer from './ComparativeProductViewer.jsx'
import TrendingListSection from './TrendingListSection.jsx'
import ProductDescriptionModal from './ProductDescriptionModal.jsx'
import ReferenceApps from 'components/referenceApps/index'
import AboutPopup from 'components/aboutPopup'
import {
  filterButtonList,
  sideBarMenu,
  socialApp,
  relatedProducts,
  tabList
} from 'utils/metaData'
import './styles.scss'
import { SEARCH_BY_NAME, GET_TRENDING_PRODUCTS } from 'common/constants'
import { trendingProductType } from 'common/types'

type Props = {
  history: {
    push: (path: string) => any
  },
  dispatch: ({ type: string, payload: any }) => any,
  deviceByName: Array<Object>,
  trendingProducts: Array<trendingProductType>
}

type State = {
  activeFilter: string,
  isAboutPopup: boolean,
  activeTab: string,
  isDescModalVisible: boolean,
  productName: string,
  isArrowClicked: boolean,
  currentToolTip: string,
  isSuggestProductVisible: boolean
}

class Home extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      activeFilter: 'Iphone X',
      isAboutPopup: true,
      activeTab: 'A1865',
      isDescModalVisible: false,
      isSuggestProductVisible: false,
      productName: '',
      currentToolTip: '',
      isArrowClicked: false
    }
    props.dispatch({
      type: 'GET_TRENDING_PRODUCTS',
      payload: { url: GET_TRENDING_PRODUCTS }
    })
  }

  onFilterButtonClick = (activeFilter: string) => {
    this.setState({ activeFilter, productName: activeFilter })
  }

  onShortedProductClick = () => {}

  onAdvanceSearhClick = () => {}

  onTrendingProductBtnClick = () => {
    this.setState({ isDescModalVisible: true })
  }

  onModalOuterClick = event => {
    this.setState({ isDescModalVisible: false })
  }

  onAboutPopupClose = () => {
    this.setState({ isAboutPopup: false })
  }

  onHideTrending = () => {}

  onFeedBackClick = () => {}

  onProductTabChange = (activeTab: string) => {
    this.setState({ activeTab })
  }

  onProductColorSelect = (event: SyntheticEvent<HTMLButtonElement>) => {}

  onProductDetails = () => {}

  onReferenceAppClick = () => {
    this.props.history.push('/versus')
  }

  getProductByName = productName => {
    const { dispatch } = this.props
    this.setState({ productName })
    if (productName.length >= 1) {
      this.setState({ isSuggestProductVisible: true })
      dispatch({
        type: 'GET_DEVICE_BY_NAME',
        payload: { url: SEARCH_BY_NAME, name: productName }
      })
    } else {
      this.setState({ isSuggestProductVisible: false })
      dispatch({
        type: 'RESET',
        payload: { type: 'GET_DEVICE_BY_NAME_RESET' }
      })
    }
  }

  onTrendingMouseOver = currentToolTip => {
    this.setState({ currentToolTip })
  }

  onArrowClick = () => {
    this.setState({ isArrowClicked: !this.state.isArrowClicked })
  }

  render() {
    const {
      activeFilter,
      isAboutPopup,
      isDescModalVisible,
      isSuggestProductVisible,
      productName,
      currentToolTip,
      isArrowClicked
    } = this.state
    const { trendingProducts, deviceByName } = this.props
    return (
      <div className="wrapper">
        <Header onFeedBackClick={this.onFeedBackClick} />
        <div className="techspec-cont">
          <div className="container cstm-container">
            <InputSearchBar
              labelClassName="blu-ipn"
              placeholder="iPhone X"
              label="I want to find"
              activeFilter={activeFilter}
              filterButtonList={filterButtonList}
              onFilterButtonClick={this.onFilterButtonClick}
              techClass="tech-ipt"
              techContentClass="tech-cont"
              deviceByName={deviceByName}
              isSuggestProductVisible={isSuggestProductVisible}
              value={productName}
              tagRowClass="pos-relative"
              onTextChange={e => this.getProductByName(e.target.value)}
            >
              <button className="mic" type="button">
                <i className="fa fa-microphone" aria-hidden="true"></i>
              </button>
            </InputSearchBar>
            <ComparativeProductViewer
              deviceByName={deviceByName}
              onShortedProductClick={this.onShortedProductClick}
              onAdvanceSearhClick={this.onAdvanceSearhClick}
              onProductDetails={this.onProductDetails}
            />
            {trendingProducts && (
              <TrendingListSection
                currentToolTip={currentToolTip}
                onMouseOver={this.onTrendingMouseOver}
                trendingProducts={trendingProducts}
                onTrendingProductBtnClick={this.onTrendingProductBtnClick}
                onHideTrending={this.onHideTrending}
              />
            )}
            <ReferenceApps onReferenceAppClick={this.onReferenceAppClick} />
          </div>
          <AboutPopup
            onAboutPopupClose={this.onAboutPopupClose}
            isAboutPopup={isAboutPopup}
          />
        </div>

        {/* Product Description Modal */}
        {isDescModalVisible && (
          <ProductDescriptionModal
            {...this.state}
            onModalOuterClick={this.onModalOuterClick}
            sideBarMenu={sideBarMenu}
            socialApp={socialApp}
            relatedProductsData={relatedProducts}
            tabList={tabList}
            onProductTabChange={this.onProductTabChange}
            onProductColorSelect={this.onProductColorSelect}
            onAdvanceSearhClick={this.onAdvanceSearhClick}
            activeTab="A1865"
            onShortedProductClick={this.onShortedProductClick}
            onArrowClick={this.onArrowClick}
            isArrowClicked={isArrowClicked}
          />
        )}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    trendingProducts: state.trendingProducts.trendingProducts.trending,
    deviceByName: state.deviceByName
  }
}

// $FlowFixMe
export default connect(mapStateToProps)(Home)
