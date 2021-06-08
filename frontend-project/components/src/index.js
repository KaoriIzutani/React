import React from 'react'; 
import ReactDOM from 'react-dom';
import faker from 'faker'; /*Anytime you want to use a library or dependency
from package.json in the project's src folder, you use an import statement.*/
import CommentDetail from './CommentDetail'; /* Relative file navigation 
review. "./" means to look for the file in the same directory as the 
current one you/re in. Also, the Webpack plugin auto attempts to find 
js files, so you don't need to put ".js" at the end.*/


const App = () => {
    return (
        <div className= "ui container comments">
          <CommentDetail author= "Max"/>
          <CommentDetail author= "Miria"/>
          <CommentDetail author= "Milena"/>
         </div>
    )
};


ReactDOM.render(<App />, 
    document.querySelector('#root'));