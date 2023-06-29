import * as actionTypes from "../actions/actionTypes";

const initialState = {
  posts: [],
  loading: false,
  error: null,
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.GET_POSTS_START:
      return { ...state, loading: true, error: null };
    case actionTypes.GET_POSTS_SUCCESS:
      return { ...state, posts: payload, loading: false, error: null };
    case actionTypes.GET_POSTS_FAIL:
      return { ...state, error: payload, loading: false };
    case actionTypes.CREATE_POST_START:
      return { ...state, loading: true, error: null };
    case actionTypes.CREATE_POST_SUCCESS:
      return {
        ...state,
        posts: [...state.posts, payload],
        loading: false,
        error: null,
      };
    case actionTypes.CREATE_POST_FAIL:
      return { ...state, error: payload, loading: false };
    case actionTypes.PUT_POSTS_START:
      return { ...state, loading: true, error: null };
    case actionTypes.PUT_POSTS_SUCCESS:
      return {
        ...state,
        posts: [
          ...state.posts.filter((post) => post.id !== payload.id),
          payload,
        ],
        loading: false,
        error: null,
      };
    case actionTypes.PUT_POSTS_FAIL:
      return { ...state, loading: true, error: null };
    case actionTypes.DELETE_POSTS_START:
      return { ...state, loading: true, error: null };
    case actionTypes.DELETE_POSTS_SUCCESS:
      return {
        ...state,
        posts: [...state.posts.filter((post) => post.id !== payload.id)],
        loading: false,
        error: null,
      };
    case actionTypes.DELETE_POSTS_FAIL:
      return { ...state, loading: true, error: null };

    case actionTypes.SELECTED_POST_START:
      return {
        ...state,
      };
    case actionTypes.SELECTED_POST_SUCCESS:
      console.log(payload);
      return {
        ...state,
        posts: [
          ...state.posts.filter((post) => post.id !== payload.id),
          payload,
        ],
      };
    case actionTypes.SELECTED_POST_FAIL:
      return {
        ...state,
      };

    case actionTypes.COMPLETED_POST_START:
      return {
        ...state,
      };
    case actionTypes.COMPLETED_POST_SUCCESS:
      console.log(payload.id);
      return {
        ...state,
        posts: [
          ...state.posts.filter((post) => post.id !== payload.id),
          payload,
        ],
        loading: false,
        error: null,
      };
    case actionTypes.COMPLETED_POST_FAIL:
      return {
        ...state,
      };

    case actionTypes.DELETE_SELECTED_START:
      return { ...state, loading: true, error: null };
    case actionTypes.DELETE_SELECTED_SUCCESS:
      return {
        ...state,
        posts: [...state.posts.filter((post) => post.id !== payload.id)],
        loading: false,
        error: null,
      };
    case actionTypes.DELETE_SELECTED_FAIL:
      return { ...state, loading: true, error: null };
    default:
      return state;
  }
};

export default reducer;

// case actionTypes.SELECTED_POST:
//   const selectedPost = state.posts.find(
//     (selectedItem) => selectedItem.id === payload
//   );
//   if (state.selected.find((selectedItem) => selectedItem === payload)) {
//     return {
//       ...state,
//       selected: [
//         ...state.selected.filter(
//           (selectedItem) => selectedItem !== payload
//         ),
//       ],
//     };
//   }
//   console.log(selectedPost, state.selected);
//   return {
//     ...state,
//     selected: [...state.selected, selectedPost.id],
//   };

// case actionTypes.COMPLETED_POST:
//       const completedPost = state.posts.map((item) => {
//         if (state.selected.includes(item.id)) {
//           return { ...item, completed: true };
//         }
//         return item;
//       });
//       console.log(completedPost);
//       return {
//         ...state,
//         selected: [],
//         posts: completedPost,
//       };
// case actionTypes.DELETE_SELECTED:
//   console.log(state.posts);
//   return {
//     selected: [],
//     posts: state.posts.filter((item) => !state.selected.includes(item.id)),
//   };
// case actionTypes.DELETE_SELECTED_START:
//   return { ...state, loading: true, error: null };
// case actionTypes.DELETE_SELECTED_SUCCESS:
//   return {
//     ...state,
//     selected: [],
//     posts: [
//       ...state.posts.filter((item) => !state.selected.includes(item.id)),
//     ],
//     loading: false,
//     error: null,
//   };
// case actionTypes.DELETE_SELECTED_FAIL:
//   return { ...state, loading: true, error: null };

// case actionTypes.SET_TO_LOCAL_STORAGE:
//   // console.log({ payload });
//   return { ...state, posts: payload };
