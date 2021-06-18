import React from 'react'; 
import ReactDOM from 'react-dom';
import faker from 'faker'; /*Anytime you want to use a library or dependency
from package.json in the project's src folder, you use an import statement.*/
import CommentDetail from './CommentDetail'; 
import ApprovalCard from './ApprovalCard';

/* Relative file navigation review. "./" means to look for the file in the same directory
as the current one you're in. Also, the Webpack plugin auto attempts to find 
js files, so you don't need to put ".js" at the end.*/


const App = () => {
    return (
        <div className= "ui container comments">
        <ApprovalCard />
          <CommentDetail 
            author= "Max" 
            timePosted= "Today at 7:53 PM" 
            newComment= "Hey, did you notice this change?"
            avatar= {faker.image.people()}/>
          <CommentDetail 
            author= "Miria" 
            timePosted= "Today at 2:30 PM" 
            newComment= "What change?"
            avatar= {faker.image.avatar()}/>
          <CommentDetail 
            author= "Milena" 
            timePosted= "Yesterday at 5:00 PM" 
            newComment= "All our comments are different, silly!"
            avatar= {faker.image.avatar()}/>
         </div>
    )
};


ReactDOM.render(<App />, 
    document.querySelector('#root'));