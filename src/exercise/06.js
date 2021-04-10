// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react';

function UsernameForm({ onSubmitUsername }) {
  const inputEl = React.useRef(null);

  const [error, setError] = React.useState('Must be filled in');
  const [username, setUsername] = React.useState('');

  const handleSubmit = evt => {
    evt.preventDefault();

    onSubmitUsername(username);
  };

  const handleOnChange = () => {
    if (!inputEl.current.value) {
      setUsername('');
      setError('Must be filled in');
      return;
    }

    setUsername(inputEl.current.value.toLowerCase());
    setError(null);
  };

  return (
    <form onSubmit={evt => handleSubmit(evt)}>
      <div>
        <label htmlFor="username">Username:</label>
        <input
          id="username"
          type="text"
          ref={inputEl}
          onChange={e => handleOnChange(e)}
          value={username}
        />
        {error && <p>Invalid input</p>}
      </div>
      <button type="submit" disabled={Boolean(error)}>
        Submit
      </button>
    </form>
  );
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`);
  return <UsernameForm onSubmitUsername={onSubmitUsername} />;
}

export default App;
