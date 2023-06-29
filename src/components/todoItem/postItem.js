import "./Item.css";
import { useDispatch } from "react-redux";
import { Button } from "../button/button";
import {
  deletePost,
  selectedPost,
} from "../../store/apishkaRedux/actions/postsActions";
import dayjs from "dayjs";
import classNames from "classnames";
const PostItem = ({
  id,
  selected,
  text,
  date,
  clickOnEditButton,
  completed,
}) => {
  const dispatch = useDispatch();

  return (
    <li className={classNames("li", { taskCompleted: completed })}>
      {!completed ? (
        <>
          <div className="con-like">
            <input
              title="like"
              type="checkbox"
              className="like"
              checked={selected}
              onChange={() => dispatch(selectedPost(id))}
            />
            <div className="checkmark">
              <svg
                viewBox="0 0 24 24"
                className="outline"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Zm-3.585,18.4a2.973,2.973,0,0,1-3.83,0C4.947,16.006,2,11.87,2,8.967a4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,11,8.967a1,1,0,0,0,2,0,4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,22,8.967C22,11.87,19.053,16.006,13.915,20.313Z"></path>
              </svg>
              <svg
                viewBox="0 0 24 24"
                className="filled"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Z"></path>
              </svg>
              <svg
                className="celebrate"
                width="100"
                height="100"
                xmlns="http://www.w3.org/2000/svg"
              >
                <polygon points="10,10 20,20" className="poly"></polygon>
                <polygon points="10,50 20,50" className="poly"></polygon>
                <polygon points="20,80 30,70" className="poly"></polygon>
                <polygon points="90,10 80,20" className="poly"></polygon>
                <polygon points="90,50 80,50" className="poly"></polygon>
                <polygon points="80,80 70,70" className="poly"></polygon>
              </svg>
            </div>
          </div>
          <span>{text}</span>
          <time dateTime={date}>
            {dayjs(date).format("dddd, D  MMMM  YYYY mm:ss")}
          </time>
          <Button onClick={clickOnEditButton}>edit</Button>
          <Button onClick={() => dispatch(deletePost(id))}>delete</Button>
        </>
      ) : (
        <>
          <span>{text}</span>
          <time dateTime={date}>
            {dayjs(date).format("dddd, D  MMMM  YYYY mm:ss")}
          </time>
          <Button onClick={() => dispatch(deletePost(id))}>delete</Button>
        </>
      )}
    </li>
  );
};

export default PostItem;
