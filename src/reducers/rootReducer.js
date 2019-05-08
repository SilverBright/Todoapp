const initState = {
  posts: [
    {id: '1', title: 'Hello World', body: 'Laa dee daa'},
    {id: '2', title: 'Hot Dog', body: 'Hot dogs are delicious!'},
    {id: '3', title: 'Foo Bar', body: 'Once upon a time...'}
  ]
}

const rootReducer = (state = initState, action) => {
  // console.log(action);
  if (action.type === 'DELETE_POST') {
    let newPosts = state.posts.filter(post => {
      return action.id !== post.id
    });
    return {
      ...state,
      posts: newPosts
    }
  }
  return state;
}

export default rootReducer;