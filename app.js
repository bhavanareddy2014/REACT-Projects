
// This is how we create nested element tags
/* 
 <div id="parent">
 <div id="child">
 <h1>
I m an h1 tag
 </h1>
 <h2>
 Im an h2 tag
 </h2>
 </div>
<div id="child2">
 <h1>
I m an h1 tag
 </h1>
 <h2>
 Im an h2 tag
 </h2>
 </div>
 </div>

*/

const parent = React.createElement(
    "div",{id:"parent"},
 [React.createElement("div",{id:"child"}, 
 [React.createElement("h1" , {}, "Im an h1 tag"),
 React.createElement("h2" , {}, "Im an h2 tag")]),
 React.createElement("div",{id:"child2"}, 
 [React.createElement("h1" , {}, "Im an h1 tag"),
 React.createElement("h2" , {}, "Im an h2 tag")])]
);

// This single element creation

// const heading = React.createElement("h1",{id:"heading"},"Hello world")

console.log(parent); //  object
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(parent)