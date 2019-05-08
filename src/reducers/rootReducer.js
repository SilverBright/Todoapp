const initState = {
  posts: [
    {id: '1', title: 'Hello World', body: 'Laa dee daa'},
    {id: '2', title: 'Hot Dog', body: 'Hot dogs are delicious!'},
    {id: '3', title: 'Foo Bar', body: 'Once upon a time...'}
  ]
}

const rootReducer = (state = initState, action) => {
  return state;
}

export default rootReducer;