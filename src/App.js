import React from 'react';

//child
class  Items extends React.Component {
render(){
  const {items}=this.props
  const i=items.map(e=>(
    <ol>
    <li>{e.id}</li>
    <li>{e.name}</li>
    <li>{e.age}</li>

  </ol>

  ))
return(
<>{i}</>
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
  <Items items={this.state.items} />


</>
);
}
}
export default App;
