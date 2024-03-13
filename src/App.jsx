import './App.css'
import Counter from './Counter';
import Team from './Team';
import Users from './User';
import Friends from './Friends';


function App() {
  function handleClick(){
    alert('button clicked');

  }

  const addToFive = (num) =>{
    alert(num + 5);
  }
  

  return (
    <>
      
      <h3>React Core Concept 2</h3>
      

      <Friends></Friends>
      <Users></Users>

      <Team></Team>
      <Counter></Counter>
      <button onClick={handleClick}>Click Me</button>
      <button onClick={() =>{alert('third clicked')}}>Third</button>
      <button onClick={() => addToFive(3)}>Four</button>

      
      
    </>
  )
}

export default App
