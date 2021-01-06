import React from 'react';
import {Link} from 'react-router-dom';

// import './css/JobDetail.css';
import './css/jobDetail.css';



class JobDetail extends React.Component{

    

    render(){
        // console.log(this.props);
        const {job} = this.props
        return(
            <div id="job-detail" >
                
                
                <div className="container mb-5">

                    <div className="row  pt-5 bg-white">
                        <div className="col-3">
                        <img className="img-fluid" src={job.company_logo ==null? `https://dummyimage.com/600x400/ffffff/000000.jpg&text=+${job.company}`:job.company_logo} />

                        </div>
                        <div className="col-6 text-center">
                        <h3 className="Job-name mt-2 "> {job.company} </h3>
                        <p className="grey mt-3"> {job.company_url} </p>

                        </div>
                        <div className="col-3">
                        <Link class="btn bg-violet pr-4 pl-4" to="/"> <strong>back</strong></Link>

                        </div>

                    </div>
                     
                    <div className="bg-white mt-5">
                    <div className="row">
                        <div className="col-12">
                            {/* {`${job.description}`} */}
                            <div className="p-3 m-5 mt-5 grey " dangerouslySetInnerHTML={{__html: job.description}}>

                            </div>

                        </div>

                    </div>

                    
                </div>


                <section className=" apply mt-5 mb-5">
                    <div className="row">

                    
                        <div className="col-12 p-5">
                            <h2 className="mb-4">How to Apply</h2>
                        <div className="" dangerouslySetInnerHTML={{__html: job.how_to_apply}}>

                        </div>

                        </div>

                    </div>
                </section>


                </div >

                <footer className="pt-4">
                    <div className="container details-footer">
                        <div>
                            <h3>{job.title}</h3>
                            <p className="dark-grey"> {job.company}</p>
                        </div>

                        <a className="btn bg-violet"> Apply now</a>
                    </div>
                </footer>

                
                

                

            </div>
        )
    }
}

export default JobDetail;