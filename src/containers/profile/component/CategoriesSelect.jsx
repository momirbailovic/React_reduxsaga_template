import React, { Component } from 'react'
import { connect } from 'react-redux'
import Icon from 'react-web-vector-icons';

import './component.scss'

class CategoriesSelect extends Component {
    constructor(props) {
        super(props)
        this.state = {
            checklist: [],

            leftcolum: [],
            middlecolum: [],
            rightcolum: [],

            checkCatego: [],
            checkCatego1: [],
            checkCatego2: [],
            checkCatego3: [],

        }
        this.initial = this.initial.bind(this);
        this.reSort = this.reSort.bind(this);
        this.addCatego = this.addCatego.bind(this);
    }

    componentDidMount() {
        this.initial();
        this.reSort();
    }
    initial() {        
        let data = this.props.categories;
        let categories = this.state.checklist;
        data.categories.map(item => (
            categories.push(item.category_name)
        ))
        this.setState({checklist: categories})
    }
    reSort() {
        let temp = this.state.checklist.sort();
        let length = temp.length
        this.setState({
            checklist:   temp,
            leftcolum:   temp.slice(0, length/3),
            middlecolum: temp.slice(length/3, length/3*2),
            rightcolum:  temp.slice(length/3*2, length),
        });

        temp = this.state.checkCatego.sort();
        this.setState({
            checkCatego:  temp,
            checkCatego1: temp.slice(0, length/3),
            checkCatego2: temp.slice(length/3, length/3*2),
            checkCatego3: temp.slice(length/3*2, length),
        });
    }
    addCatego(item) {
        const newItem = item;
        let checklist = this.state.checklist;
        let checkCatego = this.state.checkCatego;
        // If our input has a value
        if (newItem !== "") {
            // Add the new item to the end of our brandslist array
            var a = checklist.indexOf(newItem);
            checklist.splice(a, 1);
            checkCatego.push(newItem);
            // Then we use that to set the state for brandslist
            this.setState({
                checklist: checklist,
                checkCatego: checkCatego,
            });
            this.reSort();
            // Finally, we need to reset the form
            //newItem.classList.remove("is-danger");
            //form.reset();
        } else {
            // If the input doesn't have a value, make the border red since it's required
            newItem.classList.add("is-danger");
        }
    }
    removeCatego(item) {
        const newItem = item;
        let checkCatego = this.state.checkCatego;
        let checklist = this.state.checklist;
        // If our input has a value
        if (newItem !== "") {
            // Add the new item to the end of our brandslist array
            var a = checkCatego.indexOf(newItem);
            checkCatego.splice(a, 1);
            checklist.push(newItem);
            // Then we use that to set the state for brandslist
            this.setState({
                checkCatego: checkCatego,
                checklist: checklist,
            });
            this.reSort();
            // Finally, we need to reset the form
            //newItem.classList.remove("is-danger");
            //form.reset();
        } else {
            // If the input doesn't have a value, make the border red since it's required
            newItem.classList.add("is-danger");
        }
    }

    render() {

        return (
            <div>
                <p>Categories that you are interested</p>
                <div className="row">
                    <div className="col-sm-6">
                        <div className="row">
                        <div className="col-sm">
                            {this.state.leftcolum.map(item => (
                            <div className="categoItem" key={item}>
                                <span onClick={() => this.addCatego(item)} style={{ cursor: 'pointer', fontSize: '12px' }}>
                                    {item} &nbsp;
                                </span>
                            </div>
                            ))}
                        </div>
                        <div className="col-sm">
                            {this.state.middlecolum.map(item => (
                            <div className="categoItem" key={item}>
                                <span onClick={() => this.addCatego(item)} style={{ cursor: 'pointer', fontSize: '12px' }}>
                                    {item} &nbsp;
                                </span>
                            </div>
                            ))}
                        </div>
                        <div className="col-sm">
                            {this.state.rightcolum.map(item => (
                            <div className="categoItem" key={item}>
                                <span onClick={() => this.addCatego(item)} style={{ cursor: 'pointer', fontSize: '12px' }}>
                                    {item} &nbsp;
                                </span>
                            </div>
                            ))}
                        </div>
                        </div>
                    </div>

                    <div className="col-sm-6">
                        <div className="dragcategories">
                        <div className="row">
                            <div className="col-sm">
                            {this.state.checkCatego1.map(item => (
                                <div className="addItem" key={item}>
                                <p style={{ margin: '5px', marginRight: '0px', fontSize: '12px' }}>{item} &nbsp; </p>
                                <span onClick={() => this.removeCatego(item)} style={{ margin: '3px', marginLeft: '0px' }}>
                                    <Icon
                                    name='minuscircle'
                                    font='AntDesign'
                                    color='#baccd8'
                                    size={16}
                                    style={{ cursor: 'pointer' }}
                                    />
                                </span>
                                </div>
                            ))}
                            </div>
                            <div className="col-sm">
                            {this.state.checkCatego2.map(item => (
                                <div className="addItem" key={item}>
                                <p style={{ margin: '5px', marginRight: '0px', fontSize: '12px' }}>{item} &nbsp; </p>
                                <span onClick={() => this.removeCatego(item)} style={{ margin: '3px', marginLeft: '0px' }}>
                                    <Icon
                                    name='minuscircle'
                                    font='AntDesign'
                                    color='#baccd8'
                                    size={16}
                                    style={{ cursor: 'pointer' }}
                                    />
                                </span>
                                </div>
                            ))}
                            </div>
                            <div className="col-sm">
                            {this.state.checkCatego3.map(item => (
                                <div className="addItem" key={item}>
                                <p style={{ margin: '5px', marginRight: '0px', fontSize: '12px' }}>{item} &nbsp; </p>
                                <span onClick={() => this.removeCatego(item)} style={{ margin: '3px', marginLeft: '0px' }}>
                                    <Icon
                                    name='minuscircle'
                                    font='AntDesign'
                                    color='#baccd8'
                                    size={16}
                                    style={{ cursor: 'pointer' }}
                                    />
                                </span>
                                </div>
                            ))}
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        categories: state.categories.categories, //action.payload
    }
  }
CategoriesSelect = connect(mapStateToProps,null)(CategoriesSelect)
export default  CategoriesSelect;
