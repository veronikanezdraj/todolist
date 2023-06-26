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
  completePost,
  deleteSelected,
} from "../../store/apishkaRedux/actions/postsActions";
import PostsList from "../../components/todoList/postsList ";
import classNames from "classnames";
const Apishka = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  const [selectedToEditItem, setSelectedToEditItem] = useState(null);
  const selectedPost = useSelector((state) => state.postsReducer.selected);

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

  return (
    <>
      {selectedPost.length > 0 ? (
        <div className="selected">
          <Button onClick={() => dispatch(completePost())}>
            completed ({selectedPost.length})
          </Button>
          <Button onClick={() => dispatch(deleteSelected())}>
            delete ({selectedPost.length})
          </Button>
        </div>
      ) : (
        <div className="nonSelected">
          <Button
            className="completed"
            onClick={() => dispatch(completePost())}
          >
            completed ({selectedPost.length})
          </Button>
          <Button onClick={() => dispatch(deleteSelected())}>
            delete ({selectedPost.length})
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
