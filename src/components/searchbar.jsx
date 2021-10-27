import React, { Component } from 'react'; 
import { bindActionCreators } from 'redux';
import { cherchePays, setPays } from "../actions/pays";
import { connect } from 'react-redux';

class SearchBar extends Component {

    handleUpdate = (event) => {
        if (event.target.value === '') {
            this.props.setPays();
        }
        else
        {
           this.props.cherchePays(event.target.value);
        }
        
    }

    render() {
        return (
          <input
            type="text"
            className="form-control form-search"
            onChange={this.handleUpdate}
          />
        );
      }

}

const mapStateToProps = (state) => {
    return {
      pays: state.pays
    };
  };
  
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ cherchePays, setPays }, dispatch);
};



export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);