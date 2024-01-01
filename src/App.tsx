import Title from './components/Title';
import Box from './components/Box';
import Counter from './components/Counter';
import { useRef, useState } from 'react';

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

  const [subTitle, setSubtitle] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  const changeSubTitle = () => {
    const inputTxt = inputRef.current?.value;
    if (inputTxt) setSubtitle(inputTxt);
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
        sub title: {subTitle}
      </Title>
      <h1>Count: {count}</h1>
      <Counter increaseOrDecreaseCount={increaseOrDecreaseCount} />
      <br />
      <input type='text' ref={inputRef} />
      <button onClick={changeSubTitle}>입력</button>
    </Box>
  );
}

export default App;
