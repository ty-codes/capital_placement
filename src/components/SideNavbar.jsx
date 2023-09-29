import { useEffect, useRef } from "react";
import { useMediaQuery } from "react-responsive";
import { NavLink, useLocation } from "react-router-dom";
import { useState } from "react";
import { device } from "../constants";
import {
  CalendarIcon,
  FileIcon,
  HomeIcon,
  LikeIcon,
  SettingsIcon,
  ShareIcon,
  UsersIcon,
  NotebookIcon
} from "../assets/svg";
import styled from "styled-components";

const SideNavbar = ({ isSideNavOpen, setIsSideNavOpen }) => {
  const location = useLocation();
  let currentPath =
    location.pathname === "/" || !location.pathname
      ? "dashboard"
      : location.pathname.split("/")[1];
  const [activeTab, setActiveTab] = useState(currentPath);
  const ref = useRef(null);
  const isSmallDevice = useMediaQuery({ maxWidth: 768 });

  useEffect(() => {
    if (isSmallDevice) {
      const handleClickOutside = (event) => {
        if (ref.current && !ref.current.contains(event.target)) {
          setIsSideNavOpen(false);
        }
      };
      document.addEventListener("click", handleClickOutside, true);
      document.addEventListener("scroll", handleClickOutside, true);

      return () => {
        document.removeEventListener("click", handleClickOutside, true);
        document.removeEventListener("scroll", handleClickOutside, true);
      };
    } else {
      setIsSideNavOpen(true);
    }
  }, [isSmallDevice, setIsSideNavOpen]);
  if (!isSmallDevice) setIsSideNavOpen(true);

  return (
    <>
      <Wrapper className={!isSideNavOpen ? "close" : undefined} ref={ref}>
        <div className="logo-wrapper">
          <div />
        </div>

        <NavItems className="nav-items">
          <NavLink to="/">
            <li
              onClick={() => setActiveTab("home")}
              className={activeTab === "home" ? "active" : undefined}
            >
              <HomeIcon />
            </li> 
          </NavLink>
          <NavLink to="/">
            <li
              onClick={() => setActiveTab("users")}
              className={activeTab === "users" ? "active" : undefined}
            >
              <UsersIcon />
            </li>
          </NavLink>
          <NavLink to="/">
            <li
              onClick={() => setActiveTab("calendar")}
              className={activeTab === "calendar" ? "active" : undefined}
            >
              <CalendarIcon />
            </li>
          </NavLink>
          <NavLink to="/">
            <li
              onClick={() => setActiveTab("share")}
              className={activeTab === "share" ? "active" : undefined}
            >
              <ShareIcon />
            </li>
          </NavLink>
          <NavLink to="/">
            <li
              onClick={() => setActiveTab("files")}
              className={activeTab === "files" ? "active" : undefined}
            >
              <FileIcon />
            </li>
          </NavLink>
          <NavLink to="/">
            <li
              onClick={() => setActiveTab("notebook")}
              className={activeTab === "notebook" ? "active" : undefined}
            >
              <NotebookIcon />
            </li>
          </NavLink>
          <NavLink to="/">
            <li
              onClick={() => setActiveTab("like")}
              className={activeTab === "like" ? "active" : undefined}
            >
              <LikeIcon />
            </li>
          </NavLink>
          
        </NavItems>
        <End>
          <NavLink to="/">
            <li
              onClick={() => setActiveTab("settings")}
              className={activeTab === "settings" ? "active" : undefined}
            >
              <SettingsIcon />
            </li>
          </NavLink>
          <Circle>
            <h3>AS</h3>
          </Circle>
        </End>
      </Wrapper>
    </>
  );
};

const Circle = styled.div`
  background-color: #d7edfd;
  height: 2rem;
  width: 2rem;
  border-radius: 50%;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;

  h3 {
    color: #b1cbfd;
    font-family: PoppinsSemiBold;
    margin-block: auto;
  }
`;

const End = styled.div`
  align-items: center;
  padding: 1rem 0.8rem;
  cursor: pointer;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  display: flex;
  gap: 2rem;
  flex-direction: column;

  @media (max-width: 991px) {
    margin-bottom: 0.8rem;
  }


  li,
  .link-dropdown {
    display: flex;

    svg {
      width: 1.3rem;
      height: 1.3rem;
      margin: auto;
    }

    path {
      stroke: ${props => props.theme.black};
    }

    &.active, &:hover {
      background-color: #e9efff;
      padding: 0.9rem 0.5rem;
      margin-inline: 0.8rem;
      border-radius: 0.3rem;

      svg {
        path {
          stroke: #1d4ed8;
        }
      }
    }
  }
`

const Wrapper = styled.nav`
  position: fixed;
  width: ${(props) => props.theme.sideBarWidth};
  height: 100vh;
  overflow-y: auto;
  overflow-x: hidden;
  z-index: 50;
  padding: 0;
  background: white;

  &.close {
    display: none;
  }

  .logo-wrapper{
    position: sticky;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    padding-block: 0.8rem;

    div {
      background-color: #d7edfd;
      height: 2.3rem;
      width: 2.3rem;
      border-radius: 50%;
      margin: auto;
    }
  }

  .logo {
    width: 6rem;
    height: 4rem;
    display: flex;
    align-self: center;
    margin: auto;
  }

  @media ${device.laptop} {
    width: 4rem;
  }
`;

const NavItems = styled.ul`
  margin-top: 1rem;
  padding: 0;
  display: flex;
  gap: 2rem;
  flex-direction: column;

  a {
    text-decoration: none;
    color: inherit;
  }

  li,
  .link-dropdown {
    display: flex;

    svg {
      width: 1.3rem;
      height: 1.3rem;
      margin: auto;
    }

    path {
      stroke: ${props => props.theme.black};
    }

    &.active {
      background-color: #e9efff;
      padding: 0.9rem 0.5rem;
      margin-inline: 0.8rem;
      border-radius: 0.3rem;

      svg {
  
        path {
          stroke: #1d4ed8;
        }
      }
    }
  }

  .link-dropdown {
    margin-bottom: 0;
  }
`;


export default SideNavbar;
