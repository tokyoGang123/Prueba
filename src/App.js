import React, { useState, useEffect } from 'react';
import ListaComentarios from './Componentes/ListaComentarios.jsx';
import FormularioAgregarComentario from './Componentes/FormularioAgregarComentario.jsx';
import axios from 'axios';
import './App.css';

function App() {
  const [comments, setComments] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const commentsPerPage = 10;

  // Obtener comentarios desde la API
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/comments')
      .then(response => {
        setComments(response.data);
      })
      .catch(error => console.error('Error fetching comments:', error));
  }, []);

  // Función para agregar un nuevo comentario
  const addComment = (newComment) => {
    axios.post('https://jsonplaceholder.typicode.com/comments', newComment)
      .then(response => {
        setComments([response.data, ...comments]);
      })
      .catch(error => console.error('Error adding comment:', error));
  };

  // Paginación
  const indexOfLastComment = currentPage * commentsPerPage;
  const indexOfFirstComment = indexOfLastComment - commentsPerPage;
  const currentComments = comments.slice(indexOfFirstComment, indexOfLastComment);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="App">
      <h1>Lista de Comentarios</h1>
      <FormularioAgregarComentario addComment={addComment} />
      <ListaComentarios comments={currentComments} />
      <div className="pagination">
        <button onClick={() => paginate(currentPage - 1)} disabled={currentPage === 1}>Anterior</button>
        <button onClick={() => paginate(currentPage + 1)} disabled={indexOfLastComment >= comments.length}>Siguiente</button>
      </div>
    </div>
  );
}

export default App;


