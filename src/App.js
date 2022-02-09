import React from 'react';


function Items(pr) {

  const {id,name,age}=pr
return(
  <ol>
    <li>{id}</li>
    <li>{name}</li>
    <li>{age}</li>

  </ol>
  )
}


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
