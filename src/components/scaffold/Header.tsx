// Scaffold component - Header of the page
import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronCircleDown } from '@fortawesome/free-solid-svg-icons';

type HeaderProps = {
  id: string;
}
const Header = (props: HeaderProps) => {
  return (
    <header className="Header" id={props.id}>
      <h1>
        <Link to="/">Nicholas Hazel</Link>
      </h1>
      <nav>
        <a href="#menu">
          Menu&nbsp;
          <FontAwesomeIcon icon={faChevronCircleDown} />
        </a>
      </nav>
    </header>
  )
};

export default Header;