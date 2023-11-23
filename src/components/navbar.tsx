import Image from 'next/image'
import doremiPhoto from '/public/Doremi.png'
import Link from 'next/link.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import styles from '@/styles/Navbar.module.css'
import githubLogo from '/public/github.png'

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <Image
        src={doremiPhoto}
        alt={'navbar photo'}
        width={50}
        height={50}
      ></Image>
      <ul className={styles.navbar_item}>
        <li>
          <Link href={'/'}>홈</Link>
        </li>
      </ul>
      <ul className={styles.navbar_icon}>
        <li>
          <Link href={'https://github.com/Migan-Studio/Doremi'}>
            <Image src={githubLogo} alt={'github'} width={20} />
          </Link>
        </li>
      </ul>
      <Link href={'#'} className={styles.navbar_menu}>
        <FontAwesomeIcon
          icon={faBars}
          size={'2x'}
          className={styles.navbar_hamburger_icon}
        />
      </Link>
    </nav>
  )
}
