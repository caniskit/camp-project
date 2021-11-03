import React,  {useState} from "react";
import { NavLink } from "react-router-dom";
import { Container, Menu } from "semantic-ui-react";
import { useSelector } from 'react-redux';
import CartSummary from "./CartSummary";
import SignedIn from "./SignedIn";
import SignedOut from "./SignedOut";
import { useHistory } from "react-router";

export default function Navi() {
  const {cartItems} = useSelector(state => state.cart)
  const [isAuthenticated, setIsAuthenticated]= useState(true);
  const history=useHistory();
  function handleSignOut(params){
    setIsAuthenticated(false)
    history.push("/")
  }
  function handleLogin(params){
    setIsAuthenticated(true)
  }
  return (
    <div>
      <Menu inverted fixed="top" >
          <Container>
        <Menu.Item as={NavLink} to="/"
          name="home"
         
        />
        <Menu.Item
          name="messages"
         />

        <Menu.Menu position="right">
          {cartItems.length>0&&<CartSummary/>}
          {isAuthenticated? <SignedIn signOut={handleSignOut} />:<SignedOut login={handleLogin}/>}
                    
        </Menu.Menu>
        </Container>
      </Menu>
    </div>
  );
}
