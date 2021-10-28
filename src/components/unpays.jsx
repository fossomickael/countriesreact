import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { chercheUnPays } from "../actions/pays";
import { connect } from 'react-redux';
import Back from './back';


class UnPays extends Component {
    componentDidMount() {
         
        if (!this.props.unpays) {
            this.props.chercheUnPays(this.props.match.params.code);
         }
    }

    extractvalues = (array, tofind) => {
        return array.map(a => a[tofind]).toString();
    }

    extractborders = (array) => {
        if (array)
        {
            return array.toString();
        }
        return "No border countries"
        
    }
    render() {
        
        if (!this.props.unpays) {
            return <div>Loading</div>;
          }
        return (
            <div>
        <div><Back /></div><div className="unpays">
        
        <div>
            <img className="unpaysimg" alt="drapeau" src={`${this.props.unpays.flag}`} />
        </div>
        <div className="paysdroite">
            <h2>{`${this.props.unpays.name}`}</h2>
            <div className="unpaysdetails">   
            <ul>
                
                <li><b>Native Name:</b> {`${this.props.unpays.nativeName}`}</li>
                <li><b>Population:</b> {`${this.props.unpays.population}`}</li>
                <li><b>Region:</b> {`${this.props.unpays.region}`}</li>
                <li><b>Capital:</b> {`${this.props.unpays.capital}`}</li>
            </ul>
            <ul>
                <li><b>Top level domain:</b> {`${this.props.unpays.topLevelDomain}`}</li>
                <li><b>Currencies:</b> {`${this.extractvalues(this.props.unpays.currencies, "name")}`}</li>
                <li><b>Languages:</b> {`${this.extractvalues(this.props.unpays.languages, "name")}`}</li>
             </ul>
            
             </div>
              <div className="border"><b>Border Countries:</b> {`${this.extractborders(this.props.unpays.borders)}`}</div>
   
            </div>    


        
      
        </div>
        </div>);
    };

}
 

const mapStateToProps = (state, ownProps) => {
    const alpha3Code = ownProps.match.params.code;
    
    return {
      unpays: state.pays.find( unpays =>  unpays.alpha3Code === alpha3Code),
    
    };
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ chercheUnPays } , dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(UnPays);