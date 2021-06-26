import Link from 'next/link';
import Image from 'next/image';
import navStyles from '../styles/Nav.module.css';

const Navbar = () => {
  return (
    <nav className={navStyles.navigation}>
      <div className={navStyles.logo}>
        <Image src="/logo.svg" width={182} height={56} />
      </div>
      <Link href="/work"><a>Work</a></Link>
      <Link href="/about"><a>About</a></Link>
      <Link href="/blog/"><a>Blog</a></Link>
      <Link href="/contact"><a>Contact</a></Link>
    </nav>
);
}
 
export default Navbar;