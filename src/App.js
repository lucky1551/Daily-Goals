
import './App.css';


// default import by random name
// import Fake_name from "./Component/Header";

// for '{}' (specific import)
import Header1 from './component/Header';
import Home from './component/Home';

function App(){
 return(
 
  <div> 
    <Header1/> 
    <Home/>
  </div>
  
  );
}
 

// ALL THE CODE WRITTEN BELOW IS ONLY FOR LEARNING PURPOSE ACTUALLY WE WRITE CODE IN DIFFERENT FILES LIKE "HEADER" FILE ETC.


// to declare function first letter should be in Capital.
//  function Component(myname){
//   return (
//     <><div className={myname.nameOfClass}> component is {myname.name}
//     </div>
//     <hr/></>
//   )
//  }
 // learning jsx(mixture of js and html):
// here 'classname' is 'class' of html. most of the syntax is same as html like id, input, etc.
// few things are different like we can access functions in between text (eg. Component)
// "{}" used to define javascript we can pass number, float etc in it
// function App() {
//   return (
//     <div className='hi'> hi <Component name={"Lucky"} nameOfClass={"div1"}/> who are you. 
//     2nd  <Component nameOfClass={"div2"} name={"Bagdi"}/> </div>   
//   );
// }

export default App;