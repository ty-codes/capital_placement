import {
  UserCloseIcon,
  BurgerIcon,
  ArrowDownIcon,
  TagIcon,
  UserCheckIcon,
  UserVoiceIcon,
  MailIcon,
} from 'assets/svg';
import React, { useEffect, useState } from 'react';
import { useUserContext } from '../context/UserContext';
import { getUser } from '../api/users';
import styled from 'styled-components';
import { device } from 'constants';

export default function TopNav({ isSmallDevice, setIsSideNavOpen }) {
  const { user, setUser } = useUserContext();
  const [show, setShow] = useState(false);
  const items = [
    {
      title: 'applied',
      amount: 1745,
    },
    {
      title: 'shortlisted',
      amount: 453,
    },
    {
      title: 'technical interview',
      amount: 123,
    },
    {
      title: 'opportunity browsing',
      amount: 243,
    },
    {
      title: 'video interview I',
      amount: 25,
    },
    {
      title: 'video interview Ii',
      amount: 25,
    },
    {
      title: 'video interview III',
      amount: 25,
    },
    {
      title: 'offer',
      amount: 25,
    },
    {
      title: 'withdrawn',
      amount: 25,
    },
  ];

  useEffect(() => {
    user?._id &&
      getUser(user?._id).then(res => {
        setUser(res.data);
      });
  }, [user?._id, setUser]);

  return (
    <Wrapper id="topNav">
      <div className="flex align-center">
        {isSmallDevice && (
          <BurgerIcon
            className="burger"
            onClick={() => {
              setIsSideNavOpen(prevState => !prevState);
            }}
          />
        )}

        <Program>
          <h4 className="capitalize">London Internship Program</h4>
          <p className="t-sm capitalize">London</p>
        </Program>
      </div>

      <DropdownWrapper>
        <div className="dropdown">
          <h5 className="b-600">Opportunity Browsing</h5>
          <ArrowDownIcon
            className="cursor-pointer"
            onClick={() => setShow(!show)}
          />
        </div>
        {show && (
          <div className="dropdown-items">
            {items.map((item, id) => (
              <div className="item" key={`dropdown-item-${id}`}>
                <p className="capitalize title">{item.title}</p>
                <p className="amount t-sm">{item.amount}</p>
              </div>
            ))}
          </div>
        )}
      </DropdownWrapper>

      <IconsWrapper>
        <Icons>
          <div className="icon">
            <TagIcon />
          </div>
          <div className="icon">
            <UserCloseIcon />
          </div>
          <div className="icon">
            <UserCheckIcon />
          </div>
          <div className="icon">
            <UserVoiceIcon />
          </div>
          <div className="icon">
            <MailIcon />
          </div>
        </Icons>
        <ButtonWrapper>
          <div className="btn-text">
            <p>Move To Voice Interview 1</p>
          </div>
          <div className="action-btn">
            <ArrowDownIcon />
          </div>
        </ButtonWrapper>
      </IconsWrapper>
    </Wrapper>
  );
}

const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.1rem;

  div {
    background: #1d5ecd;
    height: 2.2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.5rem 0.7rem;
  }

  .btn-text {
    border-radius: 0.6rem 0 0 0.6rem;

    p {
      font-size: 0.7rem;
      color: white;
      font-family: PoppinsLight;
    }
  }

  .action-btn {
    border-radius: 0 0.6rem 0.6rem 0;

    svg {
      width: 0.6rem;
      height: 0.6rem;

      path {
        stroke: white;
      }
    }
  }
`;

const IconsWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  @media (max-width: 991px) {
    flex-direction: column-reverse;
    gap: 0.3rem;
    margin-block: 2rem;
  }

  @media (max-width: 530px) {
    display: none;
  }
`;

const Icons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.5rem;
  border-right: 1px solid #eee;
  padding-right: 0.5rem;

  @media (max-width: 991px) {
    gap: 0.3rem;
    align-items: end;
    border-right: none;
    padding-right: 0;
  }

  .icon {
    background: white;
    border-radius: 0.5rem;
    padding: 0.5rem 0.7rem;

    svg {
      width: 1rem;
      height: 1rem;
    }
  }
`;

const Program = styled.div`
  h4 {
    color: ${props => props.theme.primaryColor};
    font-family: PoppinsSemiBold;
    min-width: 9rem;
  }

  p {
    color: ${props => props.theme.black};
  }
`;

const DropdownWrapper = styled.div`
  position: relative;

  .dropdown {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 4rem;
    background: white;
    padding: 0.6rem 1rem;
    border-radius: 3.5rem;
    width: 18rem;

    @media (max-width: 991px) {
      width: auto;
    }

    @media ${device.mobileM} {
      gap: 0;
    }
  }

  h5 {
    color: ${props => props.theme.primaryColor};
    font-weight: 500;
  }

  .dropdown-items {
    height: 20rem;
    position: absolute;
    background: white;
    width: 18rem;
    overflow-y: auto;
    margin-top: 0.3rem;

    @media (max-width: 530px) {
      width: auto;
    }

    @media ${device.mobileM} {
      left: -6rem;
    }

    .item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 4rem;
      padding: 1.2rem 0.7rem;
      border-bottom: 1px solid #eee;
      color: ${props => props.theme.black};

      &:hover {
        color: ${props => props.theme.primaryColor};
        background-color: #d7edfd;
      }

      .title {
        font-weight: 600;
      }

      .amount {
        background: #fafafa;
        color: #444;
        padding: 0.2rem 0.4rem;
        border-radius: 3rem;
      }
    }
  }
`;

const Wrapper = styled.nav`
  display: flex;
  // width: 100%;
  align-items: center;
  padding: 1.2rem 1.3rem;
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  transition: all 1s ease;
  z-index: 5;
  width: calc(100vw - ${props => props.theme.sideBarWidth});
  float: right;
  justify-content: space-between;
  height: 5rem;
  gap: 0.3rem;

  @media (max-width: 991px) {
    height: 6rem;
  }

  .input-wrap {
    margin-bottom: 0;
  }

  .searchbar {
    height: 2.7rem;
    width: 20vw;
    min-width: 10.6rem;
    border-radius: 2rem;

    @media ${device.isSmallDevice} {
      margin-left: 0.65rem;
    }
  }

  @media ${device.laptop} {
    width: calc(100vw - 4rem);
  }

  @media ${device.isSmallDevice} {
    width: 100%;
    padding-inline: 0.65rem;
    gap: 0.5rem;
  }

  .burger {
    margin-right: 0.65rem;

    rect {
      fill: ${props => props.theme.primaryColor};
    }
  }

  .flex.icons {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
  }
`;
