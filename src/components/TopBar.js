import React from 'react';



class TopBar extends React.Component{
    render(){
        return(
            <div>
                <header className="header my-container">
                    <div className="top-bar">

                        <h1>devjobs</h1>

                        <label className="switch" >
                            <input type="checkbox" id="checkbox" />
                            <div className="slider round"></div>
                        </label>
                    
                    </div>

                   
                 </header>
                    
            </div>
        )
    }
}

export default TopBar;