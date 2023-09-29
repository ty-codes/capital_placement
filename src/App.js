import React, { Suspense, useMemo } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from 'react-router-dom';
import styled from 'styled-components';
import { ThemeProvider } from 'styled-components';
import './App.scss';
import { useMediaQuery } from 'react-responsive';
import { Outlet } from 'react-router-dom';
import { PageLoader, PageLayout } from './components';

const Dashboard = React.lazy(() => import('./pages/Dashboard'));

function App() {
  const theme = useMemo(
    () => ({
      black: '#0b0b0b',
      white: '#fff',
      grey: '#AFAFAF',
      red: '#D32600',
      primaryColor: '#1d4ed8',
      textBlack: '#2b2b29',
      darkBlack: '#1a1a1a',
      secondaryColor: 'red',
      greyText: '#5a5a5a',
      grey100: '#cbcfd3',
      background: 'rgba(215, 237, 253, 0.15)',

      // variables
      sideBarWidth: '6vw',
    }),
    [],
  );
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Suspense
          fallback={
            <Wrapper>
              <PageLoader />
            </Wrapper>
          }
        >
          <Routes>
            <Route path="/" element={<PagesWrapper />}>
              <Route index element={<Dashboard />} />
            </Route>
          </Routes>
        </Suspense>
      </Router>
    </ThemeProvider>
  );
}

const PagesWrapper = () => {
  const isSmallDevice = useMediaQuery({ maxWidth: 768 });

  return (
    <Container isSmallDevice={isSmallDevice}>
      <PageLayout>
        <Outlet />
      </PageLayout>
    </Container>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: auto;
  margin-top: 5em;
`;

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
      background: ${props => props.theme.primaryColor};
    }
  }
`;

export default App;
