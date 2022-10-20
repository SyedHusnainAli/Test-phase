import React from "react";
import '../styles/pricing.css';

function Pricing(){

const price = [
    {
    value: 'Per Month',
    value2: '$50',
    value3: 'Basic',
},
{
    value: 'Per Month',
    value2: '$90',
    value3: 'Standard'
},
{
    value: 'Per Month',
    value2: '$30',
    value3: 'InterShip'
},
{
    value: 'Per Month',
    value2: '$250',
    value3: 'Project'
},
]
    return(
  <>  
         
<div className="main-div">
   
            <div className="text-div">
               <h1>Premium Plans</h1>
               <h3>1 month free not available for users who have already tried Premium. 1 month free!</h3>
               </div>
              <div className="container_div">
              {price.map(function(into){
          return(
                 <div className="container-1">
                    <h4> {into.value}</h4>
                    <h1>{into.value2}</h1>
                    <h3>{into.value3}</h3>
                    <hr />
                    <hr />
                    <hr />
                    <ul className="point">
                        <li> lipsum  sometimes known</li>
                        <li> lipsum sometimes known</li>
                        <li> lipsum  sometimes known</li>
                        <li> lipsum sometimes known</li>
                        <li> lipsum sometimes known</li>
                        <li> lipsum  sometimes known</li>
                        <li> lipsum sometimes known</li>
                    </ul>
                    <button className="btn-click"  >Click Here</button>
                 </div>
                          )})
                        }
              </div>

        </div>        
 
        </>

          )
    
}


export default Pricing;