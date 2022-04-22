import Link from 'next/link';
import Image from 'next/image'; 

const Navbar = () => {
  return (
        <nav>
    <div className="logo">
   
      <a href="https://www.linkedin.com/in/jani-behm-bb34a2121/">
      {<Image src="/linkedin_logo.png" width={40} height={40}/>}
      </a>
   
    </div>
    
      <Link href="/"><a>Etusivu</a></Link> 
      <Link href="/about"><a>Teknologiat</a></Link> 
      <Link href="/contact"><a>Ota Yhteyttä</a></Link> 
    </nav>
  );
}

export default Navbar;
