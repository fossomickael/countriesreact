import React, { Component } from 'react';
import Vignette from '../components/vignette';
import { setPays } from "../actions/pays";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import SearchBar from './searchbar';
class ListePays extends Component {

    componentDidMount() {
      this.props.setPays();
    }

    render() {
      if (this.props.pays === "error")
       {
        <div><SearchBar /></div>
         return "No Countries found!"
       }
      return (
        <div><SearchBar />
        <div className="listepays"> {this.props.pays.map((pays) => {
            return <Vignette key={pays.name} pays={pays} />;
        })} </div>
        </div>
      );
    }
}

const mapStateToProps = (state) => {
    return {
      pays: state.pays
    };
  };
  
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ setPays }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(ListePays);