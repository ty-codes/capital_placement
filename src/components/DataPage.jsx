import styled from 'styled-components';
import { useState } from 'react';
import { device } from 'constants';

export default function DataPage({ data }) {

  const selectDeselect = () => {
    let selectAllEl = document.getElementById('select-all');
    selectAllEl?.addEventListener('click', () => {
      let boxes = document.getElementsByName('checkbox');
      if (selectAllEl.checked === true) {
        for (let i = 0; i < boxes.length; i++) {
          if (boxes[i].type === 'checkbox') boxes[i].checked = true;
        }
      } else {
        for (let i = 0; i < boxes.length; i++) {
          if (boxes[i].type === 'checkbox') boxes[i].checked = false;
        }
      }
    });
  };

  return (
    <Wrapper>
      <Header>
        <Number>
          <input
            type="checkbox"
            id="select-all"
            onClick={() => selectDeselect()}
          />
          <span>
            <h5 className="primaryColor b-600">{data.length}</h5>
            <h5 className="primaryColor b-600"> Candidates</h5>
          </span>
        </Number>
        <div className="overflow-hidden">
          <Tags>
            <h5 className="primaryColor">Qualified</h5>
            <span className="tag">
              <h5>Task</h5>
              <p className="t-sm">25</p>
            </span>
            <span className="tag">
              <h5>Disqualified</h5>
              <p className="t-sm">78</p>
            </span>
          </Tags>
        </div>
      </Header>
      <Data>
        {data?.map((candidate, key) => (
          <Candidate key={`candidate-${key}`}>
            <input type="checkbox" name="checkbox" />
            <div className="circle-avatar">
              <h2 className="uppercase">AS</h2>
            </div>
            <div className="candidate">
              <h4 className="capitalize">{candidate?.name}</h4>
              <p className="b-600 capitalize">{candidate?.location}</p>
              <p className="university capitalize">{candidate?.university}</p>
              <span className="hashtags">
                {candidate?.hashtags.map((hashtag, id) => (
                  <p
                    className="t-sm primaryColor hashtag"
                    key={`hashtag-${id}`}
                  >
                    # {hashtag}
                  </p>
                ))}
              </span>
              <span className="tags">
                {candidate?.tags.map((tag, id) => (
                  <p className="t-sm primaryColor tag" key={`hashtag-${id}`}>
                    # {tag}
                  </p>
                ))}
              </span>
            </div>
          </Candidate>
        ))}
      </Data>
    </Wrapper>
  );
}

const Candidate = styled.div`
  display: flex;
  gap: 1.2rem;
  padding: 1rem 0;
  border-bottom: 1px solid #eee;
  align-items: center;

  @media ${device.mobileL} {
    gap: 0.8rem;
  }

  .candidate {
    display: flex;
    gap: 0.6rem;
    flex-direction: column;

    @media ${device.mobileL} {
      gap: 0.4rem;
    }

    h4 {
      font-family: PoppinsSemiBold;
    }

    .university {
      font-family: PoppinsLight;
    }
  }

  .circle-avatar {
    background-color: #d7edfd;
    height: 4.3rem;
    width: 4.3rem;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;

    @media ${device.isSmallDevice} {
      width: 3.8rem;
      height: 3.8rem;
    }

    @media ${device.mobileL} {
      width: 3rem;
      height: 3rem;
    }

    h2 {
      color: #b1cbfd;
      font-family: PoppinsSemiBold;
      margin-block: auto;
    }
  }

  span {
    display: flex;
    gap: 0.7rem;
  }

  .tags {
    .tag {
      background: ${props => props.theme.background};
      color: ${props => props.theme.primaryColor};
      padding: 0.2rem 0.4rem;
      border-radius: 1rem;
    }
  }
`;

const Data = styled.div``;

const Wrapper = styled.div`
  border-radius: 0.5rem;
  background: white;
  padding: 0 0.7rem;
  overflow-y: auto;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #eee;
  padding: 1rem 0;
  gap: 1rem;

  span {
    display: flex;
    gap: 0.3rem;
    align-items: center;
  }
`;

const Number = styled.div`
  display: flex;
  gap: 2rem;

  @media ${device.isSmallDevice} {
    gap: 0.5rem;
  }
`;

const Tags = styled.div`
  display: flex;
  gap: 2rem;
  overflow-x: auto;
  align-items: center;

  .tag {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 0.3rem;

    .t-sm {
      background: #fafafa;
      color: #444;
      padding: 0.1rem;
    }
  }
`;
