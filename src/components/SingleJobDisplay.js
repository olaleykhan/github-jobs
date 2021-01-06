import React from 'react';

import {Link} from 'react-router-dom';


class SingleJobDisplay extends React.Component{

   
    
    render(){
        const jobData=this.props.jobData;

        jobData.company_logo ==null? console.log(jobData.title):console.log('')

        return( <div className="col-lg-4 col-md-6 col-sm-12 mb-5  ">
                <div className=" p-4 ml-3 mr-3 job-box ">
                    <span > <img className="company-logo" src={jobData.company_logo ==null? `https://dummyimage.com/600x400/ffffff/000000.jpg&text=+${jobData.company}`:jobData.company_logo} alt="logo"/> </span>
                    <div className="job-details">
                        <p className="grey "> 
                            <span className="upload-time"> {jobData.created_at}</span> 
                            <span className="dot  "> </span>
                            <span className="job-time">{jobData.type}</span>
                        </p>
                        <h3 className="Job-name">
                         <Link to={jobData.id}>{jobData.title}</Link>
                        </h3>
                        <p className="company-name grey"> {jobData.company} </p>
        
                        <h4 className="violet">{jobData.location}</h4>
                    </div>
                </div>
                </div>
        )
    }
}



export default SingleJobDisplay;