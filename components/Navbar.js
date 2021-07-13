import Link from 'next/link';
import Image from 'next/image';
import navStyles from '../styles/Nav.module.css';

const Navbar = () => {
  return (
    <nav className={navStyles.navigation}>
      <Image src="https://res.cloudinary.com/pixacod-agency/image/upload/v1625672982/website/logo_hitnt4.png" alt="Image" width={152} height={42}/>
      <ul>
        <li>
          <Link href="/work"><a>Work</a></Link>
        </li>
        <li>
        <Link href="/about"><a>About</a></Link>
        </li>
        <li>
        <Link href="/posts/"><a>Blog</a></Link>
        </li>
        <li>
        <Link href="/contact"><a>Contact</a></Link>
        </li>                       
      </ul>
    </nav>
);
}
 
export default Navbar;