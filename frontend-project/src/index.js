//1. Import the React and ReactDOM libraries
import React from 'react'; 
import ReactDOM from 'react-dom';

// 2. Create a React component
/*Hint: Shortcut for comments: Alt + Shift + A. Common convention for 
   creating readable code: Any time you have multi-line JSX, move 
   your opening tag (in this case, the "div" tag) to the next line, 
   indent once, then put the lines in parenthesis "( " is on the 
   same line as "return and  ")" is on a new line after the "div" 
   closing tag.*/ 

const App = function () {
  const buttonText = 'Click me';
    return (
     <div> 
      <label className="label" htmlFor="name">
       Enter name 
      </label>
      <input id="name" type="text" />
      <button style={{backgroundColor: 'blue', color: 'white'}}> 
      {buttonText}
      </button> 
    </div>
  );
};

// 3. Take the React component and show it on the screen 
ReactDOM.render(<App />, 
    document.querySelector('#root') /*This call summons the div id of 
    "root" in the index.html file, which is in the "public" folder. 
    Compatible with all web browsers.*/
);

/* Instead of function(), you can write arrow functions instead like 
this: 
() => {
    return <div>Hi There!</div>;
}; */