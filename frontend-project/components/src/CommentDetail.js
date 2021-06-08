import React from 'react';
import faker from 'faker';

/*This is your reusable component*/

const CommentDetail = (props) => {
    return (
       <div className= "comment">
        <a href = "/" className= "avatar">
          <img alt= "avatar" src= {faker.image.avatar()}/>
        </a>
        <div className= "content">
        <a href= "/" className= "author">
        {props.author} 
        </a>
        <div className="metadata">
        <span className="date"> Today at 6:07 PM </span>
        </div>
        <div className="text"> Nice blog post!</div>
        </div>  
         </div>
    );
};

export default CommentDetail; /*This export statement means that 
this component will be made available to all the files for this 
project.*/