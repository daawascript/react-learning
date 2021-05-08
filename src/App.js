import React from 'react';
import Button from './components/4.Context/Theme/Button';
import Header from './components/4.Context/Theme/Header';
import { ThemeContextConsumer } from './components/4.Context/Theme/themeContext';

function App() {
  return (
    <div>
      <Header />
      <ThemeContextConsumer>
        {theme => <Button theme={theme} />}
      </ThemeContextConsumer>
      <Button />
      <Button />
    </div>
  );
}

export default App;
