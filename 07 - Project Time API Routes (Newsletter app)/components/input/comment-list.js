import { useState, useEffect } from 'react';

import classes from './comment-list.module.css';

function CommentList(props) {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`/api/events/${props.id}`);
      const data = await response.json();
      setComments(data);
    }
    fetchData();
  }, [props.id]);

  return (
    <ul className={classes.comments}>
      {comments.map(comment => 
        <li key={comment.id}>
          <p>{comment.message}</p>
          <div>
            By <address>{comment.name}</address>
          </div>
        </li>
      )}
    </ul>
  );
}

export default CommentList;
