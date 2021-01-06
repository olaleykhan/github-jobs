import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import {connect} from 'react-redux';




import TopBar from './TopBar';
import JobsList from './JobsList';
import JobDetail from './JobDetail';
import SearchBar from './SearchBar';
import './topBar.css';
import jbdat from './testdata';



// const jobLink = 1234;
const arr = [1,2,3,4,5,6,7,8,9];

class App extends React.Component{
    mySort=(jobsData)=>{
        // return (jobsData.forEach(job =>"<Route path={`/${job.id}`} component={JobDetail}/>"));

    //    return jobsData.map(job=><Route path={`/${job.id}`} key={job.id} component={JobDetail}/>)
       return jobsData.map(job=>(<Route
        path={`/${job.id}`}
        key={job.id}
        render={(props) => <JobDetail job={job} />}
        />))
    }

   

    componentDidMount(){
        // console.log(this.mySort(jbdat));
        // console.log(jbdat);
    }
    componentDidUpdate(){
        console.log(this.mySort(this.props.jobsData));

    }
    
    render(){
        // console.log(this.props.jobsData)
     
       

        console.log(this.mySort(this.props.jobsData));
        // console.log(this.props.jobsData);
        return(
            <div>

                <BrowserRouter basepath="">                
                    <TopBar/>
                    {/* <Route path="/" exact component={TopBar} /> */}
                    <Route path="/" exact component={SearchBar} />

                    <div className="">
                        <Route path="/" exact component={JobsList} />
                        {console.log(this.props.jobsData)}
                        {this.mySort(this.props.jobsData).map(eachRoute=> eachRoute
                            
                        )}

                        {/* <Route path={jobLink} component={JobDetail} /> */}
                    </div>
                </BrowserRouter>
            </div>
        )
    }
}



const mapStateToProps=(state)=>{
    
    return {jobsData:state.jobsData    
        };
  };



  export default connect(mapStateToProps)(App);