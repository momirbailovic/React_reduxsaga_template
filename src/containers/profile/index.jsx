import React, { Component, } from 'react';
import Header from 'components/header';

import BreadCrum from 'components/breadCrum';
import { breadCrumPorfileData } from 'utils/metaData';
import UserProfile from './component/SelectProfile';
import Blocks from './component/SelectBlocks';
import Temp from './component/SelectTemp';
import './styles.scss'

import { connect } from 'react-redux';
import { GET_BRANDS, GET_CATEGORIES } from 'common/constants';
import {GET_BRANDS_STARTED, GET_CATEGORIES_STARTED} from 'common/action';


const leftPanelString = [
    "Profile",
    "Apps",
    "Blocks",
    "Security",
];
class Profile extends Component {
    constructor(props) {
        super(props)
        this.state = {
            selectTag: 'Profile'
        }
        props.dispatch({ type: 'GET_CATEGORIES', payload: { url: GET_CATEGORIES } });
        props.dispatch({ type: 'GET_BRANDS', payload: { url: GET_BRANDS } });
    }

    selectSetting(item) {
        this.setState({ selectTag: item })
    }

    render() {
        return (
            <div className="wrapper">
                <Header
                    onFeedBackClick={this.onFeedBackClick}
                    headerClass="header-wrapper"
                />
                <BreadCrum breadCrumData={breadCrumPorfileData} />
                <section>
                    <div className="container">
                        <div className="vs-box">
                            <div className="leftpanel">
                                {leftPanelString.map((item, key) => (
                                this.state.selectTag === item ?
                                    (<div key={key} className="selectpanel">
                                    <span className="click" onClick={() => this.selectSetting(item)}>{item}</span>
                                    </div>) :
                                    (<div key={key} className="unselectpanel">
                                    <span className="click" onClick={() => this.selectSetting(item)}>{item}</span>
                                    </div>)
                                ))}
                            </div>
                            <div className="vs-main">
                                {this.state.selectTag === "Profile" && <UserProfile />}
                                {this.state.selectTag === "Apps" && <Temp />}
                                {this.state.selectTag === "Blocks" && <Blocks />}
                                {this.state.selectTag === "Security" && <Temp />}
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

function mapDispatchToProps (dispatch) {
    return {
      getBrands: () => dispatch(GET_BRANDS_STARTED),
      getCategories: () => dispatch(GET_CATEGORIES_STARTED)
    }
}

export default connect(mapDispatchToProps, null)(Profile)
