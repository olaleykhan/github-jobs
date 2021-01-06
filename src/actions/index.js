import githubApi from '../apis/githubApi';

export const fetchJobData = (searchParam)=> async (dispatch)=>{
    let description =``,
            location=``,
            full_time = false;

            // The following is used to create the api search parameter and attach to axios end poit. 

   if (searchParam){
    if (searchParam.searchFilter){
        description= `description=${searchParam.searchFilter}`
    }
    if (searchParam.locationFilter){
        location= `&location=${searchParam.locationFilter}`
    }
    if (searchParam.fullTime){
        full_time= `&full_time=on`
    } else{full_time= ``}
   }

    const combinedSearchTerm = description+full_time+location;
  
    // The following handles the Asyncness of the api call
    
    const response = await githubApi.get(combinedSearchTerm);

    dispatch ({type:'FETCH_JOB_DATA', payload: response.data});
}