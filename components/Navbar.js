import Link from 'next/link';
import Image from 'next/image';
import navStyles from '../styles/Nav.module.css';

const Navbar = () => {
  return (
    <nav className={navStyles.navigation}>
      <ul>
        <li>
          <Link href="/work"><a>Work</a></Link>
        </li>
        <li>
        <Link href="/about"><a>About</a></Link>
        </li>
        <li>
        <Link href="/blog/"><a>Blog</a></Link>
        </li>
        <li>
        <Link href="/contact"><a>Contact</a></Link>
        </li>                       
      </ul>
    </nav>
);
}
 
export default Navbar;