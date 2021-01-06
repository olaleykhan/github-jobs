import React from 'react';
import {Field, reduxForm} from 'redux-form';
import {connect} from 'react-redux';


import { fetchJobData } from '../actions';
import './searchBar.css'




class SearchBar extends React.Component{

    componentDidMount(){
        // console.log(this.props);
        // this.props.fetchJobData();
    }

    renderError({error,touched}){
        if(touched && error){
            return(
                <div className="ui error message" >
                    <div className="header"> {error}</div>
                </div>
            );
        }
    }


    renderInput=(props)=>{
        // console.log(props)
        // console.log(meta.error)
        return(
            <div className="search-bar">
               
                <input {...props.input} placeholder={props.placeholder} type={props.type} id={props.id} />
                <label>{props.label}</label>
                <div>{this.renderError(props.meta)}</div>
            </div>
        )
    }

    onSubmit=(formValues)=>{
        console.log(formValues)
        console.log(this.props.searchParam.values)
        this.props.fetchJobData(this.props.searchParam.values);
        // this.props.fetchJobData(formValues);
    }




    render(){

        return(
             <div className="input-bars mt-n4 mb-5 container">
                <form 
                onSubmit={this.props.handleSubmit(this.onSubmit)}
                className="input-form"
                >

                    <Field name="searchFilter" component={this.renderInput} placeholder="Filter by Title, company, expertise" id="search-bar"/>
                    <Field name="locationFilter" component={this.renderInput} placeholder="Filter by Location..." id="filter-bar"  />
                    <span id="my-checkbox">
                         <Field name="fullTime" component={this.renderInput} type="checkbox"   label="Full time only"/>
                   </span >
                    <button className="blue-btn"> Submit</button>
                </form>
            </div>
        )
    }
}


const validate = (formValues)=>{
    const errors={};
    if (!formValues.searchFilter){
        errors.title= "You must specify a search title"
    }

    return errors;
}


// export default reduxForm({
//     form: 'searchBar',
//     // validate: validate
// })(SearchBar);
const mapStateToProps=(state)=>{
    // console.log(state.form.searchBar.registeredFields);
    return {searchParam: state.form.searchBar};
  };


const formWrapped= reduxForm({
    form: 'searchBar',
    validate: validate
})(SearchBar);



export default connect(mapStateToProps, {fetchJobData})(formWrapped);










 