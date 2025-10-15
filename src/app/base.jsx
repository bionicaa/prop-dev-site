import Image from 'next/image';
import Link from 'next/link';
import '../styles/globals.css';

function Base() {
  return (
      <div className='container'>
        <Image className='logo' src={`/Logo.jpg`} alt="Logo" width={125} height={125} />
        <div className='nav-row'>
          <Link className='links' href="/"><strong>Home</strong></Link>
          <br />
          <Link className='links' href="/about"><strong>About</strong></Link>
          <br />
          <Link className='links' href="/contact"><strong>Contact</strong></Link>
        </div>
        <div>
          <p className='footer'> 
            Established in 2025 © Silver Oak Property Development Limited. All rights reserved.
          </p>
        </div>
      </div>
  );
}

export default Base;