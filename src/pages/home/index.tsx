import React, { Suspense } from 'react';
import { useMedia } from 'react-use';
import HorizontalScroll from './components/HorizontalScroll';
import Parts from './parts';
import './index.scss';

const Home: React.FC = () => {
  const isWide = useMedia('(min-width: 768px)');

  return (
    <div className="home-pages-container">
      <Suspense fallback="">
        {isWide ? (
          <HorizontalScroll>
            <Parts />
          </HorizontalScroll>
        ) : (
          <Parts />
        )}
      </Suspense>
    </div>
  );
};

export default Home;
