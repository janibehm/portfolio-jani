import Link from 'next/link';
import Image from 'next/image'; 

const Navbar = () => {
  return (
        <nav>
    <div className="logo">
      {/* <Image src="/web_developing.png" width={128} height={77}/> */}
    </div>
    
      <Link href="/"><a>Etusivu</a></Link> 
      <Link href="/about"><a>Teknologiat</a></Link> 
      <Link href="/contact"><a>Ota Yhteyttä</a></Link> 
    </nav>
  );
}

export default Navbar;
