import React from 'react';

function ListaComentarios({ comments }) {
  return (
    <div>
      {comments.map(comment => (
        <div key={comment.id} className="comment">
          <h2>{comment.name}</h2>
          <p>{comment.body}</p>
          <small>{comment.email}</small>
        </div>
      ))}
    </div>
  );
}

export default ListaComentarios;
