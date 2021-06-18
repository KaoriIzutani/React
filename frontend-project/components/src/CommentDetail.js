import React from 'react';


/*This is your reusable component*/

const CommentDetail = (props) => {
    return (
       <div className= "comment">
        <a href = "/" className= "avatar">
          <img alt= "avatar" src= {props.avatar}/>
        </a>
        <div className= "content">
        <a href= "/" className= "author">
        {props.author} 
        </a>
        <div className="metadata">
        <span className="date"> {props.timePosted} </span>
        </div>
        <div className="text"> {props.newComment} </div>
        </div>  
         </div>
    ); //{props.author} is an example of a child component.
};

export default CommentDetail; /*This export statement means that 
this component will be made available to all the files for this 
project.*/