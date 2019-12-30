//@flow

import React, { Component } from 'react'
import VersusView from './VersusView'

type State = {
  activeFilter: string,
  isRecentItemVisible: boolean,
  isAddButtonClicked: boolean,
  isModalOpen: boolean
}
type Props = {}

class Versus extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      activeFilter: 'Iphone X',
      isRecentItemVisible: false,
      isAddButtonClicked: false,
      isModalOpen: false
    }
  }

  onRecentItems = () => {
    this.setState({ isRecentItemVisible: true })
  }
  onSearchModal = () => {
    this.setState({ isModalOpen: true })
  }

  onAddItem = () => {
    this.setState({ isAddButtonClicked: !this.state.isAddButtonClicked })
  }
  onFilterButton = (item: string) => {
    this.setState({ activeFilter: item })
  }

  onShortedProductClick = () => {}

  onFeedBackClick = () => {}

  onBreadCrumClick = () => {}

  onCloseModal = () => {
    this.setState({ isModalOpen: false })
  }
  onVSButtonClick = () => {}

  onTextChange = (input: string) => {}

  render() {
    const {
      isRecentItemVisible,
      isAddButtonClicked,
      activeFilter,
      isModalOpen
    } = this.state
    return (
      <VersusView
        onFeedBackClick={this.onFeedBackClick}
        onBreadCrumClick={this.onBreadCrumClick}
        activeFilter={activeFilter}
        isAddButtonClicked={isAddButtonClicked}
        onAddItem={this.onAddItem}
        onSearchModal={this.onSearchModal}
        onRecentItems={this.onRecentItems}
        isRecentItemVisible={isRecentItemVisible}
        onCloseModal={this.onCloseModal}
        onShortedProductClick={this.onShortedProductClick}
        onFilterButton={this.onFilterButton}
        isModalOpen={isModalOpen}
        onVSButtonClick={this.onVSButtonClick}
        onTextChange={e => this.onTextChange(e.target.value)}
      />
    )
  }
}

export default Versus
