import React from 'react'


 export  default class ItemStatusFilter extends React.Component{
   render(){
       return(
       <div className="btn-group">
           <button type="button" className="btn btn-info">ALL</button>
           <button type="button" className="btn btn-outline-secondary">Secondary</button>
           <button type="button" className="btn btn-outline-secondary">Secondary</button>
       </div>
       )
   }
};



