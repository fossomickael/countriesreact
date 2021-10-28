import React, { Component } from 'react'; 
import { bindActionCreators } from 'redux';
import { filtrerRegion } from "../actions/pays";
import { connect } from 'react-redux';

class ChoixPays extends Component {

    handleSelect = (event) => {
        this.props.filtrerRegion(event.target.value); 
    }

    render() {
        return (
          <div >
            
            <label for="region-select">Choose a region:</label>

                <select name="regions" id="region-select" onChange={this.handleSelect}>
                    <option value="">Filter by region</option>
                    <option value="africa">Africa</option>
                    <option value="america">America</option>
                    <option value="asia">Asia</option>
                    <option value="europe">Europe</option>
                    <option value="oceania">Oceania</option>
                </select> 
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
    return bindActionCreators({ filtrerRegion }, dispatch);
};



export default connect(mapStateToProps, mapDispatchToProps)(ChoixPays);