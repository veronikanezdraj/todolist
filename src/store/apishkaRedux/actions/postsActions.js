import * as actionTypes from "./actionTypes";
import axios from "axios";

export const getPostsStart = () => {
  return {
    type: actionTypes.GET_POSTS_START,
  };
};

export const getPostsSuccess = (posts) => {
  return {
    type: actionTypes.GET_POSTS_SUCCESS,
    payload: posts,
  };
};

export const getPostsFail = (error) => {
  return {
    type: actionTypes.GET_POSTS_FAIL,
    payload: error,
  };
};

export const getPosts = () => {
  return (dispatch) => {
    dispatch(getPostsStart());
    axios
      .get("http://localhost:3000/posts/")
      .then((response) => {
        dispatch(getPostsSuccess(response.data.posts));
      })
      .catch((err) => {
        dispatch(getPostsFail(err.response.posts.error));
      });
  };
};

export const createPostsStart = () => {
  return {
    type: actionTypes.CREATE_POST_START,
  };
};

export const createPostsSuccess = (result) => {
  return {
    type: actionTypes.CREATE_POST_SUCCESS,
    payload: result,
  };
};

export const createPostsFail = (error) => {
  return {
    type: actionTypes.CREATE_POST_FAIL,
    payload: error,
  };
};

export const createPost = (text, completed) => {
  return async (dispatch) => {
    dispatch(createPostsStart());
    axios
      .post("http://localhost:3000/posts/", {
        text,
        completed,
        selected: false,
      })
      .then((response) => {
        dispatch(createPostsSuccess(response.data.post));
        console.log(response.data.post);
      })
      .catch((error) => {
        dispatch(createPostsFail(error));
      });
  };
};

export const putPostsStart = () => {
  return {
    type: actionTypes.PUT_POSTS_START,
  };
};

export const putPostsSuccess = (result) => {
  console.log(result);
  return {
    type: actionTypes.PUT_POSTS_SUCCESS,
    payload: result,
  };
};
export const putPostsFail = (error) => {
  return {
    type: actionTypes.PUT_POSTS_FAIL,
    payload: error,
  };
};

export const updatePost = (postId, text, completed) => {
  return (dispatch) => {
    dispatch(putPostsStart());
    axios
      .put(`http://localhost:3000/posts/${postId}`, {
        text,
        completed,
      })
      .then((response) => {
        dispatch(putPostsSuccess(response.data.result));
        console.log(response.data.result);
        console.log(response);
      })
      .catch((error) => {
        dispatch(putPostsFail(error));
      });
  };
};

export const deletePostsStart = () => {
  return {
    type: actionTypes.DELETE_POSTS_START,
  };
};

export const deletePostsSuccess = (postId) => {
  console.log(postId);
  return {
    type: actionTypes.DELETE_POSTS_SUCCESS,
    payload: postId,
  };
};
export const deletePostsFail = (error) => {
  return {
    type: actionTypes.DELETE_POSTS_FAIL,
    payload: error,
  };
};

export const deletePost = (postId) => {
  return (dispatch) => {
    dispatch(deletePostsStart());
    axios
      .delete(`http://localhost:3000/posts/${postId}`)
      .then((response) => {
        dispatch(deletePostsSuccess(response.data.post));
        console.log(response.data.post);
      })
      .catch((error) => {
        dispatch(deletePostsFail(error.message));
      });
  };
};

export const selectedPostStart = () => {
  return {
    type: actionTypes.SELECTED_POST_START,
  };
};

export const selectedPostSuccess = (result) => {
  console.log(result);
  return {
    type: actionTypes.SELECTED_POST_SUCCESS,
    payload: result,
  };
};

export const selectedPostFail = (error) => {
  return {
    type: actionTypes.SELECTED_POST_FAIL,
    payload: error,
  };
};

export const selectedPost = (postId) => {
  return (dispatch) => {
    dispatch(selectedPostStart);
    axios
      .put(`http://localhost:3000/posts/selected/${postId}`, { selected: true })
      .then((response) => {
        dispatch(selectedPostSuccess(response.data.result));
        console.log(response);
      })
      .catch((error) => {
        dispatch(selectedPostFail(error));
      });
  };
};

export const deleteSelectedStart = () => {
  return {
    type: actionTypes.DELETE_SELECTED_START,
  };
};

export const deleteSelectedSuccess = (postId) => {
  console.log(postId);
  return {
    type: actionTypes.DELETE_SELECTED_SUCCESS,
    payload: postId,
  };
};
export const deleteSelectedFail = (error) => {
  return {
    type: actionTypes.DELETE_SELECTED_FAIL,
    payload: error,
  };
};

export const deleteSelected = (postId) => {
  return (dispatch) => {
    dispatch(deleteSelectedStart());
    axios
      .delete(`http://localhost:3000/posts/${postId}`)
      .then((response) => {
        dispatch(deleteSelectedSuccess(response.data.post));
        console.log(response.data.post);
      })
      .catch((error) => {
        dispatch(deleteSelectedFail(error.message));
      });
  };
};

export const completedPostStart = () => {
  return {
    type: actionTypes.COMPLETED_POST_START,
  };
};

export const completedPostSuccess = (result) => {
  console.log(result);
  return {
    type: actionTypes.COMPLETED_POST_SUCCESS,
    payload: result,
  };
};

export const completedPostFail = () => {
  return {
    type: actionTypes.COMPLETED_POST_FAIL,
  };
};

export const completedPost = () => {
  return (dispatch) => {
    dispatch(completedPostStart());
    axios
      .get("http://localhost:3000/posts/complete")
      .then((response) => {
        dispatch(completedPostSuccess(response.data.result));
        console.log(response);
      })
      .catch((error) => {
        dispatch(putPostsFail(error.message));
      });
  };
};

// export const selectedPost = (id) => ({
//   type: actionTypes.SELECTED_POST,
//   payload: id,
// });
// export const setPostsToLocalStorage = (posts) => ({
//   type: actionTypes.SET_TO_LOCAL_STORAGE,
//   payload: posts,
// });
// const response = await fetch(`http://localhost:3000/posts/${postId}`, {
//   method: "PUT",
//   body: JSON.stringify({
//     postId,
//     updatedText,
//     updatedCompleted,
//   }),
// });
// if (!response.ok) {
//   throw new Error("Sending cart data failed.");
// }

// export const deletePost = (id) => {
//   return (dispatch) => {
//     axios.get(`http://localhost:3000/posts/:postId${id}`).then((response) => {
//       dispatch(getPostsSuccess(response.posts)).catch((err) => {
//         dispatch(getPostsFail(err.response.posts.error));
//       });
//     });
//   };
// };

// export const deleteSelected = () => ({
//   type: actionTypes.DELETE_SELECTED,
// });
