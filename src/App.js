import React from 'react';

//child
class  Items extends React.Component {
render(){
  const {id,name,age}=this.props.items
return(
  <ol>
    <li>{id}</li>
    <li>{name}</li>
    <li>{age}</li>

  </ol>
  )
}
}
//parent
class App extends React.Component {
      state={ 
       items:
    {id:'1',name:'ahmed',age:'31'},
    items:
    {id:'2',name:'ahmed',age:'31'}
  }
render(){
  return (
<>
  --List items:-
  <Items items={this.state.items} />

</>
);
}
}
export default App;
