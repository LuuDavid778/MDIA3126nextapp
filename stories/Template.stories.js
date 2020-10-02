import React, {useState} from 'react';
import Menu from '../comps/Menu'


export default {
title:'Menu',
component: Menu,

};

export const BasicMenu = () => <Menu/>;
export const DefaultExpandedMenu = () => <Menu expand = {true}/>;
export const ExpandWithAnotherButton = () => {
const [menu,setMenu] = useState(false);
return <div>
  <Menu expand = {menu}/>
    <button onClick = {()=>setMenu(!menu)}>Expand Menu</button>
  </div>;

}

