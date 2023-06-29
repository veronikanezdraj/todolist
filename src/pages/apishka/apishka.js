import { useDispatch } from "react-redux";
import InputFieldApishka from "../../components/inputField/inputFieldApishka";
import { useEffect, useState } from "react";
import "./app.css";
import { Button } from "../../components/button/button";
import { useSelector } from "react-redux";
import {
  getPosts,
  createPost,
  updatePost,
  completedPost,
  deleteSelected,
} from "../../store/apishkaRedux/actions/postsActions";
import PostsList from "../../components/todoList/postsList ";

// import classNames from "classnames";
const Apishka = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  const [selectedToEditItem, setSelectedToEditItem] = useState(null);

  const postsArr = useSelector((state) => state.postsReducer.posts);

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  const createTask = () => {
    dispatch(createPost(text, false));
    setText("");
  };

  const editPost = () => {
    if (selectedToEditItem) {
      dispatch(updatePost(selectedToEditItem.id, selectedToEditItem.text));
      setSelectedToEditItem(null);
    }
  };

  const selectedPosts = postsArr.filter((post) => post.selected);

  return (
    <>
      {selectedPosts.length > 0 && (
        <div>
          <Button onClick={() => dispatch(completedPost())}>
            completed ({selectedPosts.length})
          </Button>
          <Button onClick={() => dispatch(deleteSelected())}>
            delete ({selectedPosts.length})
          </Button>
        </div>
      )}
      <div>
        <InputFieldApishka
          selectedToEditItem={selectedToEditItem}
          setSelectedToEditItem={setSelectedToEditItem}
          text={text}
          handleEdit={editPost}
          handelInput={setText}
          handleSubmit={createTask}
        />
        <PostsList setSelectedToEditItem={setSelectedToEditItem} />
      </div>
    </>
  );
};
export default Apishka;
/* <ul className={cn("task", { taskCompleted: completed })}>  */
// taskCompleted - is css class
// completed - is field in object

// : (
//   <div className="nonSelected">
//     <Button
//       className="completed"
//       onClick={() => dispatch(completePost())}
//     >
//       completed ({selectedPost.length})
//     </Button>
//     <Button onClick={() => dispatch(deleteSelected())}>
//       delete ({selectedPost.length})
//     </Button>
//   </div>
// )}

// className={classNames("selected", {
//   nonSelected: selectedPost.length === 0,
// })}
