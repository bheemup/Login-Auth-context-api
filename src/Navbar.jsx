import React, { useContext } from 'react'
import "./App.css"
import {AuthContext} from "./Content/AuthContent";

function Navbar() {
    const {isAuth,login,logout}=useContext(AuthContext);

  return (
    <>
    <div className='navbar'>
        <h3>Home</h3>
        <button onClick={()=>{
            if(isAuth){
                logout()
            }else{
                login("d","e")
            }
        }}>{isAuth ? "Logout" : "Login"}</button>
        </div>
        <br />
        <br />
        <div>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem soluta optio esse officiis neque aspernatur illo perferendis ad molestiae, accusamus eaque, hic ullam voluptate possimus libero dicta obcaecati, error provident!
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium, nam. Aut, reprehenderit rem. Quas illo, fugiat velit soluta qui inventore fugit commodi quo consequuntur, dolorum saepe exercitationem ipsam voluptate aliquid.
        
    </div>
    </>
  )
}

export default Navbar