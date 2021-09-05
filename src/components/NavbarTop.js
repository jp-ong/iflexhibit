import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Button from "./Button";
import TextField from "./TextField";

const NavbarDesktop = () => {
  const [title, setTitle] = useState("");
  const handleInput = (e) => {
    setTitle(e.target.value);
  };
  return (
    <nav className="top">
      <div className="nav-left">
        <div className="logo">
          <Link href="/">
            <a>
              <Image
                src="/img/iflexhibit_dark.png"
                layout="fill"
                objectFit="contain"
                alt="iFLEXHIBIT Logo"
              />
            </a>
          </Link>
        </div>
        <div className="divider"></div>
        <div className="links">
          <Button icon="fas fa-home" label="HOME" href="/" />
        </div>
      </div>
      <div className="nav-right">
        <div className="search">
          <TextField
            id="title"
            name="title"
            value={title}
            handleInput={handleInput}
            placeholder="Search by title..."
            icon="fas fa-search"
            label="search"
          />
        </div>
        <div className="upload">
          <Button icon="fas fa-plus" label="UPLOAD" variant="outlined" />
        </div>
        <div className="account">
          <Button icon="fas fa-user" label="SIGN IN" variant="contained" />
        </div>
      </div>
    </nav>
  );
};

export default NavbarDesktop;
