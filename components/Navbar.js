import Link from 'next/link';

const Navbar = () => {
  return (
        <nav>
    <div className="logo">
      <h1>Navlist</h1>
    </div>
    
      <Link href="/"><a>Etusivu</a></Link> 
      <Link href="/about"><a>Tietoa</a></Link> 
      <Link href="/subfolder"><a>Ota Yhteyttä</a></Link> 
   
    </nav>
  );
}

export default Navbar;
