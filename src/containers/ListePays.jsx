import React, { Component } from 'react';
import Vignette from '../components/vignette';
import { setPays } from "../actions/pays";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import SearchBar from './searchbar';
import ChoixPays from './ChoixPays'
class ListePays extends Component {

    componentDidMount() {
      this.props.setPays();
    }

    render() {
      console.log(this.props.pays)
      if (this.props.pays.status === 404)
       {
        return (
        <div>
          <div className="searchelements">
            <div className="searchbar" id="searchbar"><SearchBar /></div>
            <div className="choix"><ChoixPays /></div>  
          </div>
          <div className="listepays"> "No Countries found!"</div>
        </div>
          );
       }
      return (
        <div>
         <div className="searchelements">
          <div className="searchbar" id="searchbar"><SearchBar /></div>
          <div className="choix"><ChoixPays /></div>  
        </div>
        <div className="listepays"> 
       
        {this.props.pays.map((pays) => {
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