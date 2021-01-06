import React from 'react';
import {connect} from 'react-redux';


import { fetchJobData } from '../actions';
import SingleJobDisplay from './SingleJobDisplay';
import './css/jobslist.css';



class JobsList extends React.Component{

    // componentDidMount(){
    //     console.log(this.props.jobsData)
    // };


    componentDidMount(){
        
        this.props.fetchJobData();

    }

    renderEachJob=(jobsList)=>{
        return jobsList.map(job=>{
            return( <SingleJobDisplay key={job.id} jobData={job}/>
            )
        })

    }
    render(){
        // console.log(this.props.jobsData)
        return(
            <div>
                <div className="jobs-list container">
                    <div className="row">
                     {this.renderEachJob(this.props.jobsData)}
                    </div>

                </div>
            </div>
        )
    }
}



// const mapStateToProps=(state)=>{
//     // console.log(state);

//     return {}
//   };

  const mapStateToProps=(state)=>{
    // console.log(state.form.searchBar.registeredFields);
    
    return {searchParam: state.form.searchBar,
            jobsData:state.jobsData
    
        };
  };



  export default connect(mapStateToProps, {fetchJobData})(JobsList);


// export default connect(mapStateToProps, {fetchJobData})(SingleJobDisplay);