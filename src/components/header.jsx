import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <h1>Thomas Clayton's Thirsty Cheetah || ITIS 3135</h1>
      <nav id="main-nav">
        <Link to="/">Home</Link> ||
        <Link to="/introduction">Introduction</Link> ||
        <Link to="/contract">Contract</Link> ||
        <a href="https://tclayto4.github.io/itis3135/stuff/Wrong%20File!.htm">Crap Website</a> ||
        <a href="https://tclayto4.github.io/itis3135/fccfsjs_outline.htm">FCC Outline</a> ||
        <a href="https://tclayto4.github.io/itis3135/">Main 3135 Site</a>
      </nav>
    </header>
  );
}