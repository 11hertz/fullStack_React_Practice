type CounterProp = {
  increaseOrDecreaseCount: (txt: 'upCount' | 'downCount') => void;
};

const Counter = ({ increaseOrDecreaseCount }: CounterProp) => {
  console.log('counter');
  return (
    <>
      <button onClick={() => increaseOrDecreaseCount('upCount')}>+1</button>
      <button onClick={() => increaseOrDecreaseCount('downCount')}>-1</button>
    </>
  );
};

export default Counter;
