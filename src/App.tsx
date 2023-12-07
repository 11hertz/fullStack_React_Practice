import Title from './components/Title';
import Box from './components/Box';
import Counter from './components/Counter';
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  const increaseOrDecreaseCount = (txt: string) => {
    if (txt === 'upCount') {
      return setCount((prevCount) => prevCount + 1);
    }
    if (txt === 'downCount') {
      return setCount((prevCount) => prevCount - 1);
    }
  };

  return (
    <Box
      borderWidth='2px'
      borderColor='blue'
      borderStyle='solid'
      padding='4px'
      margin='2px'
    >
      <Title title='React Tutorial' color='red'>
        sub title: Counter (using UseState)
      </Title>
      <h1>Count: {count}</h1>
      <Counter increaseOrDecreaseCount={increaseOrDecreaseCount} />
    </Box>
  );
}

export default App;
