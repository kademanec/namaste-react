 // name of the tag, attributes, childrens(react elements(objects))
 const heading = React.createElement("h1",{"className":"Chinmaya",style:{ color:"blue"}},"Namaste React1!");
 const heading1 = React.createElement("h1",{"className":"Chinmaya1",style:{ color:"blue"}},"Namaste React2!");
 const container = React.createElement("h1",{"className":"Chinmaya2",style:{ color:"blue"}},[heading,heading1]);
 //createElement is an object
 console.log(container)
 const root = ReactDOM.createRoot(document.getElementById("root"))
 

 //parsing the react element inside the root
 root.render(container)