import React from 'react';
import CharacterList from './CharacterList';

function Home() {
  return (
    <div className="Home">
      <header className="App-header">
        <h1 className="App-title">React 11 Challenge</h1>
        <p>
          This component displays a list of characters. Each link leads to a{' '}
          <code>CharacterDetails</code> page.
        </p>
        <p>
          <strong>You have nothing to modify on this page</strong> (leave{' '}
          <code>Home</code> and <code>CharacterList</code> as they are).
        </p>
      </header>
      <CharacterList />
    </div>
  );
}

export default Home;
