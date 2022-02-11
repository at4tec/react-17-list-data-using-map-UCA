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
    [{id:'1',name:'ahmed',age:'31'},
       {id:'2',name:'aly',age:'36'}]
  }
render(){
  return (
<>
  --List items:-
  <Items items={this.state.items[0]} />
  <Items items={this.state.items[1]} />

</>
);
}
}
export default App;
