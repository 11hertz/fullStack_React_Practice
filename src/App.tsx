import Title from './components/Title';
import Box from './components/Box';

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
        sub title: react basic
      </Title>
    </Box>
  );
}

export default App;
