import styled from "styled-components";
import { useMediaQuery } from "react-responsive";
import { TopNav, SideNavbar } from ".";
import { useState } from "react";
import { useModalContext } from "../context/ModalContext";

export default function PageLayout(props) {
  const isSmallDevice = useMediaQuery({ maxWidth: 768 });
  const [isSideNavOpen, setIsSideNavOpen] = useState(false);
  const { setModalType, setIsOpenModal } = useModalContext();

  return (
    <>
      <Container isSmallDevice={isSmallDevice}>
        <>
          <TopNav
            isSmallDevice={isSmallDevice}
            setIsSideNavOpen={setIsSideNavOpen}
            setModalType={setModalType}
            setIsOpenModal={setIsOpenModal}
          />
          <SideNavbar
            isSideNavOpen={isSideNavOpen}
            setIsSideNavOpen={setIsSideNavOpen}
          />
          {props.children}
        </>
      </Container>
    </>
  );
}

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  overflow-y: auto;

  @media (min-width: 1024px) {
    &::-webkit-scrollbar {
      display: none;
      width: 9px;

      &:hover {
        cursor: pointer;
      }
    }

    /* Track */
    &::-webkit-scrollbar-track {
      background: white;
      box-shadow: inset 0 0 5px grey;
      border-radius: 10px;
    }

    /* Handle */
    &::-webkit-scrollbar-thumb {
      background: ${(props) => props.theme.primaryColor};
    }
  }
`;
