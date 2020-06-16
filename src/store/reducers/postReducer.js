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
    case "LIKE_POST_SUCCESS":
      console.log("like post success");
      return state;
    case "LIKR_POST_ERROR":
      console.log("like post ERROR", action.err);
      return state;
    case "UNLIKE_POST_SUCCESS":
      console.log("unlike post success");
      return state;
    case "UNLIKR_POST_ERROR":
      console.log("unlike post error", action.err);
      return state;
    case "COMMENT_ADD_SUCCESS":
      console.log("add comment success");
      return state;
    case "COMMENT_ADD_ERROR":
      console.log("add comment error", action.err);
      return state;
    case "COMMENT_COUNT_INC_SUCCESS":
      console.log("comment inc success");
      return state;
    case "COMMENT_COUNT_INC_ERROR":
      console.log("comment inc error", action.err);
      return state;
    case "DELETE_POST_SUCCESS":
      console.log("post delete success");
      return state;
    case "DELETE_POST_ERROR":
      console.log("post delete error", action.err);
      return state;
    case "DELETE_COMMENT_SUCCESS":
      console.log("comment delete success");
      return state;
    case "DELETE_COMMENT_ERROR":
      console.log("comment delete error", action.err);
      return state;
    case "COMMENT_DEC_SUCCESS":
      console.log("comment dec success");
      return state;
    case "COMMENT_DEC_ERROR":
      console.log("comment dec error", action.err);
      return state;
    default:
      return state;
  }
};
export default postReducer;
