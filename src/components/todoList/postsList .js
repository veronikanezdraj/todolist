import { useSelector } from "react-redux";
import PostItem from "../todoItem/postItem";
import "./list.css";
const PostsList = ({ setSelectedToEditItem }) => {
  const posts = useSelector((state) => state.postsReducer.posts);
  return (
    <ul className="ul">
      {posts
        ?.sort((a, b) => (a.date > b.date ? -1 : 1))
        .sort((a, b) => (a.completed < b.completed ? -1 : 1))
        .map((postItem) => (
          <PostItem
            key={postItem.id}
            {...postItem}
            clickOnEditButton={function () {
              setSelectedToEditItem(postItem);
            }}
          />
        ))}
    </ul>
  );
};

export default PostsList;
// import { useEffect } from "react";
// import { useDispatch } from "react-redux";
// import { setPostsToLocalStorage } from "../../store/apishkaRedux/actions/postsActions";
// useEffect(() => {
//   if (posts?.length) {
//     localStorage.setItem("todos", JSON.stringify(posts));
//   }
// }, [posts]);

// useEffect(() => {
//   const posts = JSON.parse(localStorage.getItem("todos"));

//   if (posts?.length) {
//     // console.log(todos);
//     dispatch(setPostsToLocalStorage(posts));
//   }
// }, [dispatch]);
