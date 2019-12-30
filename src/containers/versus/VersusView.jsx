//@flow

import React, { Component } from 'react'
import Header from 'components/header'
import BreadCrum from 'components/breadCrum'
import VersusSidebar from 'components/versusSidebar'
// import VersusFooterItems from 'components/versusFooterItems'
import RecentItems from 'components/common/RecentItems'
import Button from 'components/common/ButtonComponent'
import Modal from 'components/common/Modal'
import InputSearchBar from 'components/inputSearchBar'
import ShortedProduct from 'components/shortedProduct'
import SelectedItem from 'components/SelectedItems'

import {
  breadCrumData,
  recentProduct,
  // versusFooterData,
  productDescription,
  productColors,
  productDisplayDescription,
  filterButtonList,
  addedItems,
  shortedProduct
} from 'utils/metaData'
import AddedItems from './AddedItems'

import './styles.scss'

type Props = {
  onFeedBackClick: () => any,
  onBreadCrumClick: () => any,
  activeFilter: string,
  isAddButtonClicked: boolean,
  onAddItem: () => any,
  onSearchModal: () => any,
  onRecentItems: () => any,
  isRecentItemVisible: boolean,
  onCloseModal: () => any,
  onShortedProductClick: (val: any) => any,
  onFilterButton: (item: string) => any,
  isModalOpen: boolean,
  onVSButtonClick: () => any,
  onTextChange: (item: any) => any
}

class VersusView extends Component<Props> {
  render() {
    const {
      onFeedBackClick,
      onBreadCrumClick,
      activeFilter,
      isAddButtonClicked,
      onAddItem,
      onSearchModal,
      onRecentItems,
      isRecentItemVisible,
      onCloseModal,
      onShortedProductClick,
      onFilterButton,
      isModalOpen,
      onVSButtonClick,
      onTextChange
    } = this.props
    return (
      <div className="wrapper">
        <Header
          onFeedBackClick={onFeedBackClick}
          headerClass="header-wrapper"
        />
        <BreadCrum breadCrumData={breadCrumData} onClick={onBreadCrumClick} />
        <section>
          <div className="vs-box">
            <VersusSidebar />
            <div className="vs-main">
              <div className="vs-lft d_flex">
                <AddedItems
                  productDescription={productDescription}
                  productColors={productColors}
                  productDisplayDescription={productDisplayDescription}
                />
                <div className="vscol-2">
                  <div className="vs2-cont drp-crs">
                    <div className="vs-plus ">
                      {!isAddButtonClicked && (
                        <Button
                          onClick={onAddItem}
                          className="cstm_plus bg_blue"
                        >
                          <i className="fa fa-plus" aria-hidden="true"></i>
                        </Button>
                      )}
                      {isAddButtonClicked && (
                        <Button onClick={onAddItem} className="cstm_plus">
                          <i className="fa fa-times" aria-hidden="true"></i>
                        </Button>
                      )}
                    </div>
                    <p className="start">Start comparing by adding products.</p>
                    {isAddButtonClicked && (
                      <div className="vs-src">
                        <span>
                          <Button
                            onClick={onSearchModal}
                            className="search"
                            dataToggel="modal"
                            dataTarget="#myModal"
                          >
                            <i className="fa fa-search" aria-hidden="true"></i>
                            Search
                          </Button>
                        </span>
                        <span>
                          <Button
                            onClick={onRecentItems}
                            className="search"
                            dataToggel="modal"
                            dataTarget="#myModal"
                          >
                            <i className="fa fa-clock-o" aria-hidden="true"></i>
                            Recent
                          </Button>
                        </span>
                      </div>
                    )}
                    {isRecentItemVisible && isAddButtonClicked && (
                      <RecentItems recentItems={recentProduct} />
                    )}
                  </div>
                </div>
              </div>
              {/* <VersusFooterItems versusFooterData={versusFooterData} /> */}
            </div>
          </div>
        </section>
        {/* Modal start */}

        <Modal isOpen={isModalOpen} className="mdal-box">
          <div className="modal-header">
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              onClick={onCloseModal}
            >
              &times;
              <span>close</span>
            </button>
          </div>
          <div className="mdal-pop">
            <InputSearchBar
              onTextChange={onTextChange}
              labelClassName="blu-ipn"
              label="iPhon"
              activeFilter={activeFilter}
              filterButtonList={filterButtonList}
              onFilterButtonClick={onFilterButton}
              techClass="tech-ipt"
              techContentClass="tech-cont"
              tagRowClass="tags_row"
            >
              <span>ESC to clear</span>
            </InputSearchBar>
            <div className="drop-opt">
              <SelectedItem
                onVSButtonClick={onVSButtonClick}
                addedItems={addedItems}
              />
              {shortedProduct.map((item, index) => (
                <ShortedProduct
                  key={index}
                  onClick={onShortedProductClick}
                  item={item}
                  itemRowClass="drp-crd"
                  itemRowLeftClass="vsbt-cont"
                  productImageClass="vsbt-img"
                  productContent="vsbt-para"
                >
                  <span className="grn-bttn"></span>
                </ShortedProduct>
              ))}
            </div>
          </div>
        </Modal>
        {/* Modal end */}
      </div>
    )
  }
}

export default VersusView
