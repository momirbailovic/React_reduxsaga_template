import _ from 'lodash'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Search } from 'semantic-ui-react'
import Icon from 'react-web-vector-icons';
import './component.scss';

class SearchSelectBra extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoading: false,
            results: [],
            value: '',
            hobbieslist: [],
            source: [],
            idname: this.props.idname,
        }
        this.initial = this.initial.bind(this);
        this.add = this.add.bind(this);
        this.remove = this.remove.bind(this);
    }
    componentDidMount() {
      this.initial();
    }

    initial() {
        let data = this.props.brands;
        let brands = this.state.source;
        data.brands.map(item => (
            brands.push({title: item.brand_name})
        ))
        this.setState({source: brands})
    }

    add(key) {
        let hobbieslist = this.state.hobbieslist;
        const newItem = document.getElementById(this.state.idname);
        if (newItem.value !== "") {
            // Add the new item to the end of our hobbieslist array
            if (hobbieslist.includes(newItem.value)) return;
            hobbieslist.push(newItem.value);
            // Then we use that to set the state for hobbieslist
            this.setState({ hobbieslist: hobbieslist,});
            this.props.onSetData(hobbieslist);
            this.setState({
                isLoading: false,
                results: [],
                value: '',
            });
        }
    }

  remove(item) {
    // Put our hobbieslist into an array
    const hobbieslist = this.state.hobbieslist.slice();
    // Check to see if item passed in matches item in array
    
    let index = hobbieslist.indexOf(item);
    if (index >= 0)
      hobbieslist.splice(index, 1); 
    // hobbieslist.some((el, i) => {
    //   if (el === item) {
    //     // If item matches, remove it from array
    //     hobbieslist.splice(i, 1);
    //     return true;
    //   }
    // });
    // Set state to hobbieslist
    this.setState({
      hobbieslist: hobbieslist
    });
    this.props.onSetData(hobbieslist);
  }

  handleResultSelect = (e, { result }) => {
    let hobbieslist = this.state.hobbieslist;
    hobbieslist.push(result.title);
    this.setState({
      value: '',
      hobbieslist: hobbieslist,
    })
    this.props.onSetData(hobbieslist);
  }

  handleSearchChange = (e, { value }) => {

    this.setState({ isLoading: true, value })

    setTimeout(() => {
      if (this.state.value.length < 1) return this.setState({
        isLoading: false,
        results: [],
        value: '',
      })

      const re = new RegExp(_.escapeRegExp(this.state.value), 'i')
      const isMatch = (result) => re.test(result.title)

      this.setState({
        isLoading: false,
        results: _.filter(this.state.source, isMatch),
      })
    }, 300)
  }

  render() {
    const { isLoading, value, results } = this.state

    return (
        <div>
            <p>Your favourite brands</p>
            <Search
                className="searchbar"
                input={{ icon: 'search', iconPosition: 'left' }}
                loading={isLoading}
                onResultSelect={this.handleResultSelect}
                results={results}
                value={value}
                
                onKeyDown={(event) => {
                    if (event.keyCode === 13) {
                    this.add(event)
                    }
                }}
                id={this.state.idname}
                onSearchChange={_.debounce(this.handleSearchChange, 500, {
                    leading: true,
                })}
                placeholder="Enter your favourite brands, Hit comma to add"
            />
            <section className="section">
                <div className="addPro">
                    {this.state.hobbieslist.map(item => (
                    <div className="addItem" key={item}>
                        <p style={{ margin: '5px', marginRight: '0px' }}>{item} &nbsp; </p>
                        <span onClick={() => this.remove(item)} style={{ margin: '5px', marginLeft: '0px' }} >
                        <Icon
                            name='minuscircle'
                            font='AntDesign'
                            color='#baccd8'
                            size={20}
                            style={{ cursor: 'grab' }}
                        />
                        </span>
                    </div>
                    ))}
                </div>
            </section>
        </div>
    )
  }
}

const mapStateToProps = state => {
  return {
      brands: state.brands.brands, 
  }
}
SearchSelectBra = connect(mapStateToProps,null)(SearchSelectBra)
export default  SearchSelectBra;
