import React from 'react';

//child
class  Items extends React.Component {
render(){
  const {items}=this.props
const theitems=items.map(e=>{
  
  return<ol>
    <li>{e.id}</li>
    <li>{e.name}</li>
    <li>{e.age}</li>

  </ol>
})
return(
<>{theitems}</>
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
