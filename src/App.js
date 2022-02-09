import React from 'react';

//child
function Items(props) {

  const {id,name,age}=props
return(
  <ol>
    <li>{id}</li>
    <li>{name}</li>
    <li>{age}</li>

  </ol>
  )
}

//parent
function App () {
  return (
<>
  --List items:-
  <Items id='1' name='ahmed' age='31' />
  <Items id='2' name='aly' age='22' />

</>
);
}

export default App;
