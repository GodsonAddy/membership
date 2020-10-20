import React from 'react';
import NavBar from '../Components/NavBar';
import SMS from '../Components/sendMemberMessage';
import '../App.css'

function memberSearch() {
    return (
        <div>
        <NavBar />
        <div className="searches">
        <center>
        <SMS/>
        </center>
        </div>
            
        </div>
    )
}
 
export default memberSearch

