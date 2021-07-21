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
        if(jobsList.length>1) return jobsList.map(job=>{
            return( <SingleJobDisplay key={job.id} jobData={job}/>
            )
        })

        return <div>
            <h1> Error:</h1>
            <h3 style={{color:"red"}}> "GitHub Jobs is deprecated! New jobs will not be posted from May 19, 2021. It will shut down entirely on August 19, 2021. Read more in: https://github.blog/changelog/2021-04-19-deprecation-notice-github-jobs-site/</h3>
        </div>


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
    console.log(state);
    
    return {searchParam: state.form.searchBar,
            jobsData:state.jobsData
    
        };
  };



  export default connect(mapStateToProps, {fetchJobData})(JobsList);


// export default connect(mapStateToProps, {fetchJobData})(SingleJobDisplay);