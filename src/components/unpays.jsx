import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { chercheUnPays } from "../actions/pays";
import { connect } from 'react-redux';


class UnPays extends Component {
    componentDidMount() {
         
        if (!this.props.unpays) {
            this.props.chercheUnPays(this.props.match.params.code);
      
         }
         }
    render() {
        if (!this.props.unpays) {
            return <div>Loading</div>;
          }
        return (<div className="pays">
            <ul>
                <li><b>Native Name:</b> {`${this.props.unpays.nativeName}`}</li>
                <li><b>Population:</b> {`${this.props.unpays.population}`}</li>
                <li><b>Region:</b> {`${this.props.unpays.region}`}</li>
                <li><b>Capital:</b> {`${this.props.unpays.capital}`}</li>
            </ul>
            
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