import {funOrState, funOrValue, funOpState, funOpValue, getImages} from "../../reduxjs-toolkit/searchSlice.js";
import React from 'react';
import Search from "./Search";
import {connect} from "react-redux";

class SearchContainer extends React.Component {
    
    componentDidMount() {
        const {words, orValue, opValue} = this.props.searchReducer;
        this.props.getImages(1, 5, words, opValue, orValue)
        
    }

    componentDidUpdate(newProps, newState) {
        const {words, orValue, opValue} = this.props.searchReducer;

        if( newProps.searchReducer.orValue !== orValue || newProps.searchReducer.opValue !== opValue || newProps.searchReducer.words !== words){
            this.props.getImages(1, 5, words, opValue, orValue);
        }

    }

    render() {

        return <>
            <Search 
            searchReducer={this.props.searchReducer}
            funOrState={this.props.funOrState}
            funOrValue={this.props.funOrValue}
            funOpState={this.props.funOpState}
            funOpValue={this.props.funOpValue}
             />
            }
        </>
    }
}
let mapStateToProps = (state) => {
    return {
        searchReducer: state.searchReducer
    }
}


export default connect(mapStateToProps, {funOrState, funOrValue, funOpState, funOpValue, getImages})(SearchContainer);