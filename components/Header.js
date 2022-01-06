//using Link from the Next API to ensure client side navigation. Otherwise the request will be made to the server.
import Link from "next/Link";

//the below style get passed to the a tags as variable
const linkStyle = {
  marginRight: 15,
};
//this component holds the links to other pages. It acts as a Navbar.
const Header = () => {
  return (
    <div>
      <Link href="/">
        <a style={linkStyle}>Home</a>
      </Link>
      <Link href="/about">
        <a style={linkStyle}>About</a>
      </Link>
      <Link href="/projects">
        <a style={linkStyle}>Projects</a>
      </Link>
      <Link href="/contact">
        <a style={linkStyle}>Contact Me</a>
      </Link>
    </div>
  );
};

export default Header;
