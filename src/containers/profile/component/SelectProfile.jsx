import React, { Component,  } from 'react'
import { Form, } from 'react-bootstrap';
import Icon from 'react-web-vector-icons';
import axios from 'axios';

import SearchSelect from './SearchSelect';
import SearchSelectBra from './SearchSelectBra';
import CategoriesSelect from './CategoriesSelect';
import DragDropImage from './DragDropImage'
import './component.scss'

import LOGO_IMG from '../../../assets/images/profile_header.png'

import { connect } from 'react-redux'


const sourceHobbies = [
    { title: 'Sci-Fi' },
    { title: 'Gaming' },
    { title: 'Tech' },
    { title: 'Magazines' },
];
const plaholHobbies = "Type your interests, Hit comma to add";
const genderList = [
    "Female",
    "Male",
    "Transgender",
    "Haven't decide yet"
];

class SelectProfile extends Component{
    constructor(props) {
        super(props)
        this.state = {
            isLoading: false,
            firstName: "",
            lastName: "",
            email: "",
            country: "",
            gender: "Female",
            selectHobbies: [],
            hobbies: [],
            selectBrands: [],
            brands: [],
            categories: [],
        }
        this.getCategoriesInfo=this.getCategoriesInfo.bind(this)
        this.onSetHob=this.onSetHob.bind(this)
        this.onSetBra=this.onSetBra.bind(this)
    }

    componentDidMount() {
        this.getCategoriesInfo();  
    }

    async getCategoriesInfo() {
        await axios.get('http://api.techspecs.io/api/category').then((response) => {
            let data = response.data;
            let categories = this.state.categories;
            data.categories.map(item => (
                categories.push(item.category_name)
            ))
            this.setState({categories: categories, isLoading: true,})


        }).catch((error) => {
            console.log(error);
        });
    };
    onSetHob(value) { this.setState({selectHobbies:value}) }
    onSetBra(value) { this.setState({selectBrands:value}) }
    
    submit() {
        console.log(this.state.firstName)
        console.log(this.state.lastName)
        console.log(this.state.email)
        console.log(this.state.country)
        console.log(this.state.gender)
        console.log(this.state.selectHobbies)
        console.log(this.state.selectBrands)
        console.log(this.state.categories)        
    }
    cancel() {

    }

  

    render() {
        const { isLoading, categories, } = this.state

        if (this.props.changingStatus1 !== 'success' || this.props.changingStatus2 !== 'success')
        {
            return (
                <div>Loading..</div>
            )
        }
        if (isLoading)
        return (
            <div>
                <div className="header">
                    <img src={LOGO_IMG} alt="" />
                    <p className="headertxt"> This is my profile. Fill as much as  info that you can so we can</p>
                </div>
                <p className="smalltitletxt"> Personal Details</p>
                <div className="main">
                    <div className="dragdrop">
                        <DragDropImage />
                    </div>
                    <div className="inputdata">
                        <div className="row" >
                            <div className="col-md-6" >
                                <p >First name</p>
                                <input
                                    type="text"
                                    id="formGroupExampleInput"
                                    className="inptxt"
                                    placeholder='Beverly'
                                    onChange={event =>  this.setState({firstName: event.target.value})}
                                />
                            </div>
                            <div className="col-md-6">
                                <p>Last name</p>
                                <input
                                    type="text"
                                    className="inptxt"
                                    id="formGroupExampleInput"
                                    style={{ backgroundColor: '#e9eef2' }}
                                    placeholder='Hayes'
                                    onChange={event =>  this.setState({lastName: event.target.value})}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="inputdata">
                        <div className="row" >
                            <div className="col-md-6" >
                                <p >Email</p>
                                <input
                                    type="text"
                                    className="inptxt"
                                    id="formGroupExampleInput"
                                    style={{ backgroundColor: '#e9eef2' }}
                                    placeholder='Beverly.hayes@mail.com'
                                    onChange={event =>  this.setState({email: event.target.value})}
                                />
                            </div>
                            <div className="col-md-6">
                                <p>County</p>
                                <Form>
                                <Form.Group controlId="exampleForm.ControlSelect1">
                                    <Form.Control as="select"
                                    className="inptxt"
                                    >
                                        <option>Singapore</option>
                                        <option>China</option>
                                        <option>HongKong</option>
                                        <option>And So On</option>
                                    </Form.Control>
                                </Form.Group>
                                </Form>
                            </div>
                        </div>
                    </div>
                    <div className="genderdata">
                        <p>Gender</p>
                        <div className="checkdiv">
                        {genderList.map((item, key) => (
                            <div key={key} style={{ fontSize: '15px', margin: '10px', display: 'flex' }}>
                                <span onClick={() => this.setState({ gender: item })} >
                                    <Icon
                                        name={this.state.gender === item ? 'md-radio-button-on' : 'md-radio-button-off'}
                                        font='Ionicons'
                                        color='#00aaf0'
                                        size={23}
                                        style={{ cursor: 'pointer' }}
                                    />
                                </span>
                                <p style={{ paddingLeft: '10px' }}>{item}</p>
                            </div>
                        ))}
                        </div>
                    </div>
                    <div className="interest">
                        <p>Your interests, hobbies</p>
                        <SearchSelect source={sourceHobbies} placeholder={plaholHobbies} onSetData={this.onSetHob} idname="hob" />
                    </div>
                    <div className="interest">                        
                        <SearchSelectBra onSetData={this.onSetBra} idname="bra" />
                    </div>
                    <div className="categories">
                        <CategoriesSelect source={categories}/>
                    </div>
                    <div className="submitbnt">
                        <button className="savebnt" onClick={()=>{this.submit()}} > Save Changes </button>
                        <button className="revertbnt" onClick={()=>{this.cancel()}} > Revert Changes </button>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        changingStatus1: state.brands.changingStatus, // 'success'        
        changingStatus2: state.categories.changingStatus, // 'success'
    }
}
SelectProfile = connect(mapStateToProps,null)(SelectProfile)
export default  SelectProfile;
