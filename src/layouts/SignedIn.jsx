import React from "react";
import { Dropdown, Image, Menu } from "semantic-ui-react";

export default function SignedIn({signOut}) {
  return (
    <div>
      <Menu.Item>
        <Image avatar spaced="right" src="https://cdn.dribbble.com/users/230875/screenshots/12589592/media/a12435c0fd22de967b379b098f606683.jpg?compress=1&resize=70x70" />
        <Dropdown pointing="top left" text="Dr.Who">
            <Dropdown.Menu>
                <Dropdown.Item text="Bilgilerim" icon="info"/>
                <Dropdown.Item onClick={signOut}text="Çıkış Yap" icon="sign-out"/>
            </Dropdown.Menu>
        </Dropdown>
      </Menu.Item>
    </div>
  );
}
