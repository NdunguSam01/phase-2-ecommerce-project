import React from 'react';
import{link} from 'react-router-dom';

const Navbar = () =>{
 return(
 <Navbar>
<ul>
    <li>
 <link to ="/Home">Home</link> 
<link to ="/Cart">Cart</link> 
  <link to ="/saved-items">Saved Items</link>    
    </li>
    </ul>  

 </Navbar>   
 );   
}
export default Navbar;