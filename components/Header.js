import { useState, useEffect } from 'react';
import Link from 'next/link';
import styled from 'styled-components';

// Icons
import { 
  AiFillHome,
  AiOutlinePlus,
  AiFillStar,
  AiOutlineUserAdd
} from "react-icons/ai";

import {
  BiSearchAlt,
  BiMoviePlay
} from 'react-icons/bi';

import { RiMovie2Fill } from 'react-icons/ri';


function Header() {
  const [scrollY, setScrollY] = useState(0);
  
  function handleScroll() {
    setScrollY(window.pageYOffset);
  }
  
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  return (
    <NavBar scrollY={scrollY}>
      <Wrapper>
        <Image src="/disney_logo.png" alt="disney_plus" />
        <Link href='/'>
          <Page><AiFillHome/> HOME</Page>
        </Link>
        <Link href='/search'>
          <Page><BiSearchAlt/> SEARCH</Page>
        </Link>
        <Link href='/watchlists'>
          <Page><AiOutlinePlus/> WATCHLIST</Page>
        </Link>
        <Link href='/originals'>
          <Page><AiFillStar/> ORIGINALS</Page>
        </Link>
        <Link href='/movies'>
          <Page><RiMovie2Fill/> MOVIES</Page>
        </Link>
        <Link href='/series'>
          <Page><BiMoviePlay/> SERIES</Page>
        </Link>
        <AiOutlineUserAdd className='user'/>
      </Wrapper>
    </NavBar>
  )
}
  // 070212
  const NavBar = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 90px;
    transition: 0.2s all ease;
    background: ${({ scrollY }) => (scrollY > 1 ? "#070212" : "none")};
    box-shadow: ${({ scrollY }) => (scrollY > 1 ? "-1px 3px 5px 0px rgb(0 15 75 / 72%);" : "none")};
    -webkit-box-shadow: ${({ scrollY }) => (scrollY > 1 ? "-1px 3px 5px 0px rgb(0 15 75 / 72%);" : "none")};
    -moz-box-shadow: ${({ scrollY }) => (scrollY > 1 ? "-1px 3px 5px 0px rgb(0 15 75 / 72%);" : "none")};
    z-index: 1;
    color: #fff;
    width: 100%;
    
    svg.user {
      margin-left: auto;
      margin-right: 20px;
      color: #000;
      background: #fff;
      border-radius: 50%;
      width: 2.2rem;
      height: 2.2rem;
      padding: 5px;
    }
    `;

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    margin: auto;
    width: 94%;
    height: inherit;
    max-width: 1400px;
  `;
  
  const Image = styled.img`
    width: 120px;
    padding: 10px;
    margin-right: 50px;
  `;
  
  const Page = styled.a`
  height: 100%;
    display: flex;
    align-items: center;
    cursor: pointer;
    padding-bottom: 5px;
    text-decoration: none;
    color: #fff;
    text-decoration: none;
    background: linear-gradient(currentColor, currentColor) bottom / 0 .15em no-repeat;
    transition: 0.5s background-size;
    height: fit-content;
    margin: 10px 20px;
    background-position: left bottom;
    font-size: 15px;
  
    &:hover {
      background-size: 100% .15em;
    }  
  
    svg {
      margin-right: 10px;
      width: 1.3rem;
      height: 1.3rem;
    }
  
    
  `;
export default Header;
