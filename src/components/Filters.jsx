import styled from 'styled-components';
import { device } from 'constants';
import { ArrowDownIcon, FileIcon } from 'assets/svg';
import { useState } from 'react';
import { useMediaQuery } from 'react-responsive';

export default function Filters() {
  const isMobile = useMediaQuery({ maxWidth: '768px' });
  const [show, setShow] = useState(!isMobile);

  return (
    <Wrapper>
      <div className="dropdown-header" onClick={() => setShow(!show)}>
        <p className="b-600">Filters</p>
        <p className="t-sm">0 selected</p>
      </div>
      {show && (
        <div className="dropdown-items">
          <div className="item ">
            <div>
              <FileIcon />
              <p className="capitalize title">Personal information</p>
            </div>
            <ArrowDownIcon className="arrow" />
          </div>
          <div className="item ">
            <div>
              <FileIcon />
              <p className="capitalize title">Education</p>
            </div>
            <ArrowDownIcon className="arrow" />
          </div>
          <div className="item ">
            <div>
              <FileIcon />
              <p className="capitalize title">Work experience</p>
            </div>
            <ArrowDownIcon className="arrow" />
          </div>
          <div className="item ">
            <div>
              <FileIcon />
              <p className="capitalize title">activity filter</p>
            </div>
            <ArrowDownIcon className="arrow" />
          </div>
          <div className="item ">
            <div>
              <FileIcon />
              <p className="capitalize title">advanced filter</p>
            </div>
            <ArrowDownIcon className="arrow" />
          </div>
        </div>
      )}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;

  .dropdown-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 4rem;
    background: white;
    padding: 0.8rem 1rem;
    width: 18rem;

    @media (max-width: 850px) {
      width: 16rem;
      gap: 2rem;
    }

    @media ${device.isSmallDevice} {
      width: 20rem;
    }
  }

  h5 {
    color: ${props => props.theme.primaryColor};
    font-weight: 500;
  }

  .dropdown-items {
    position: absolute;
    background: white;
    width: 18rem;
    margin-top: 0.2rem;

    @media (max-width: 850px) {
      width: 14rem;
      gap: 2rem;
    }

    .item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 4rem;
      padding: 1.2rem 0.7rem;
      border-bottom: 1px solid #eee;
      color: ${props => props.theme.black};
      width: 18rem;
      background: white;

      @media (max-width: 850px) {
        width: 16rem;
      }

      @media ${device.isSmallDevice} {
        width: 20rem;
      }

      &:hover {
        color: ${props => props.theme.primaryColor};
        background-color: #d7edfd;
      }

      div {
        display: flex;
        gap: 0.6rem;
        align-items: center;
      }

      svg {
        width: 1rem;
        height: 1rem;

        path {
          stroke: ${props => props.theme.black};
        }
      }

      .arrow {
        width: 0.7rem;
        height: 0.7rem;

        path {
          stroke: ${props => props.theme.primaryColor};
        }
      }

      p {
        color: ${props => props.theme.black};
      }
    }
  }
`;
