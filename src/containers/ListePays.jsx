import React, { Component } from 'react';
import Vignette from '../components/vignette';
import { setPays } from "../actions/pays";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class ListePays extends Component {

    componentDidMount() {
      this.props.setPays();
    }

    render() {
      if (this.props.pays === "error")
       {
         return "No Countries found!"
       }
      return (
        <div className="listepays"> {this.props.pays.map((pays) => {
            return <Vignette key={pays.name} pays={pays} />;
        })} </div>
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