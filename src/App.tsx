import Title from './components/Title';
import Box from './components/Box';
import Counter from './components/Counter';

function App() {
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
      <Counter />
    </Box>
  );
}

export default App;
