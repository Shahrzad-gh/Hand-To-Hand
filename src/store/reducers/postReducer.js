const initialState = {
  posts: [
    { id: "1", title: "ABC", content: "HelloWorld" },
    { id: "12", title: "Hello", content: "HelloGH" },
    { id: "123", title: "World", content: "HelloSh" },
  ],
};
const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CREATE_POST_SUCCESS":
      console.log("create post", action.post);
      return state;
    case "CREATE_POST_ERROR":
      console.log("create post ERROR", action.err);
      return state;
    default:
      return state;
  }
};
export default postReducer;
