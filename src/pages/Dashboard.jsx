import styled from 'styled-components';
import { DataPage, Filters, PageWrapper } from 'components';
import { device } from 'constants';
import { WarningIcon, SearchIcon } from 'assets/svg';
import { useState } from 'react';

export default function Dashboard() {
  const data = [
    {
      name: 'aaliyah sanderson',
      location: 'riyaah, saudi arabia',
      university: 'bachelor - cambridge university (2019 - 2023)',
      hashtags: ['top_candidate', 'top_candidate'],
      tags: ['new york', 'marketing', 'london'],
      selected: false,
    },
    {
      name: 'john doe',
      location: 'boston, USA',
      university: 'bachelor - MIT (2019 - 2023)',
      hashtags: ['top_candidate', 'top_candidate'],
      tags: ['new york', 'marketing', 'london'],
      selected: false,
    },
    {
      name: 'thomas matt',
      location: 'edinburgh, UK',
      university: 'bachelor - harvard university (2019 - 2023)',
      hashtags: ['top_candidate', 'top_candidate'],
      tags: ['new york', 'business', 'london'],
      selected: false,
    },
    {
      name: 'kamilia smith',
      location: 'london, UK',
      university: 'bachelor - boston university (2019 - 2023)',
      hashtags: ['top_candidate', 'top_candidate'],
      tags: ['new york', 'marketing', 'london'],
      selected: false,
    },
    {
      name: 'roy jade',
      location: 'cambridge, UK',
      university: 'bachelor - yale (2019 - 2023)',
      hashtags: ['top_candidate', 'top_candidate'],
      tags: ['california', 'marketing', 'london'],
      selected: false,
    },
    {
      name: 'ahmed salman',
      location: 'new york, USA',
      university: 'bachelor - cambridge university (2019 - 2023)',
      hashtags: ['top_candidate', 'top_candidate'],
      tags: ['new york', 'marketing', 'london'],
      selected: false,
    },
    {
      name: 'mohammed isimbabi',
      location: 'lagos, nigeria',
      university: 'bachelor - Lagos state university (2019 - 2023)',
      hashtags: ['top_candidate', 'top_candidate'],
      tags: ['new york', 'marketing', 'london'],
      selected: false,
    },
    {
      name: 'john smith',
      location: 'boston, USA',
      university: 'bachelor - cambridge university (2019 - 2023)',
      hashtags: ['top_candidate', 'top_candidate'],
      tags: ['new york', 'marketing', 'london'],
      selected: false,
    },
    {
      name: 'rick grimes',
      location: 'boston, USA',
      university: 'bachelor - cambridge university (2019 - 2023)',
      hashtags: ['top_candidate', 'top_candidate'],
      tags: ['new york', 'marketing', 'london'],
      selected: false,
    },
  ];

  const [query, setQuery] = useState('');
  const [error, setError] = useState(false);

  const filteredData = data.filter(el => {
    let q = query?.toLowerCase();

    return (
      el?.name?.toLowerCase().includes(q) ||
      el?.location?.toLowerCase().includes(q) ||
      el?.university?.toLowerCase().includes(q) ||
      el?.hashtags?.some(s => s.includes(q)) ||
      el?.tags.some(s => s.includes(q))
    );
  });

  return (
    <PageWrapper>
      <Page>
        <SideBar>
          <Wrapper>
            <Searchbar>
              <input
                type="search"
                placeholder="Search by name, edu, exp or #tag"
                value={query}
                onChange={e => {query && setError(false); setQuery(e.target.value)}}
                onKeyDown={e => {
                  if (e.key === 'Enter' && !query) setError(true);
                }}
              />
              <div className="search">
                <SearchIcon />
              </div>

              <div className="warning">
                <WarningIcon className={error ? 'error' : ''} />
              </div>
            </Searchbar>
            <Filters />
          </Wrapper>
        </SideBar>
        <Main>
          <DataPage data={filteredData} />
        </Main>
      </Page>
    </PageWrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Searchbar = styled.div`
  position: relative;

  @media ${device.isSmallDevice} {
    width: 20rem;
  }

  input {
    background: white;
    outline: none;
    border: none;
    height: 2.5rem;
    color: #b0babf;
    padding-inline: 2rem 0;

    &::placeholder {
      color: #b0babf;
    }
  }

  .search {
    position: absolute;
    left: 0.8rem;
    top: 0;
    display: flex;
    height: 100%;
    align-items: center;

    svg {
      width: 0.9rem;
      height: 0.9rem;
      path {
        stroke: #b0babf;
      }
    }
  }

  .warning {
    position: absolute;
    right: 0.8rem;
    top: 0;
    display: flex;
    height: 100%;
    align-items: center;

    svg {
      width: 0.9rem;
      height: 0.9rem;
      path {
        stroke: #9aa6ac;
      }

      &.error {
        path {
          stroke: red;
        }
      }
    }
  }
`;

const Page = styled.div`
  width: 100%;
  gap: 1rem;
  display: flex;
  height: calc(100vh - 5rem);
  overflow-y: hidden;

  @media ${device.isSmallDevice} {
    flex-direction: column;
  }
`;

const Main = styled.section`
  width: 100%;
  overflow-y: auto;

  @media (max-width: 850px) {
    width: 100%;
  }
`;

const SideBar = styled.section`
  width: fit-content;

  @media ${device.isSmallDevice} {
    width: 100%;
  }
`;
