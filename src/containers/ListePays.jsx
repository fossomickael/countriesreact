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

    afficherPays = (pays) => {
      console.log(pays)
      if (pays.status === 404)
      {
        return <div className="listepays"> "No Countries found!"</div>
      }
      else 
      {
        return pays.map((pays) => {
          return <Vignette key={pays.name} pays={pays} />;
        })
      }
      
    }

    render() {
      return (
        <div>
         <div className="searchelements">
          <div className="searchbar" id="searchbar"><SearchBar /></div>
          <div className="choix"><ChoixPays /></div>  
        </div>
        <div className="listepays"> 
            {this.afficherPays(this.props.pays)}
        </div>
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