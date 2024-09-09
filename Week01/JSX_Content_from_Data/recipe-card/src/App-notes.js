function App(/*we can add the variables here*/) {
  const message = 'Hello world with react'
  const myObj = {
    name: 'marisol',
    age: 22,
  }

  return (
    //this may look like html but its actually jsx
    //Adjecent elements must always be wrapped in one parent tag
    <>
      <h1>Hello world!</h1>
      <h1>{message}</h1>
      <p>Hi my name is {myObj.name} and I am {myObj.age}!</p>
    </>
  )
}

export default App;

