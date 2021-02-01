import Head from 'next/head'
import { Button, Navbar, Nav, NavItem, NavDropdown, MenuItem, Form, FormControl } from 'react-bootstrap';
import styles from '../styles/Navigation.module.css'
import Link from 'next/link'

export default function NavBr() {
  return (
    <div className={styles.navigationBar}>
      <Nav className="justify-content-center" activeKey="/home">
        <Nav.Link href='/'>
          <Link href='/'>Home</Link>
        </Nav.Link>
        <Nav.Link>
          <Link href="/news"><div> News</div></Link>
        </Nav.Link>
        <Nav.Link>
          <Link href="/about">About</Link>
        </Nav.Link>
      </Nav>
    </div>
  )
}
