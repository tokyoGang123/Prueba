import React, { useState } from 'react';

function FormularioAgregarComentario({ addComment }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [body, setBody] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const newComment = {
      name,
      email,
      body
    };

    addComment(newComment);

    // Limpiar el formulario
    setName('');
    setEmail('');
    setBody('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nombre"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="email"
        placeholder="Correo electrónico"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <textarea
        placeholder="Comentario"
        value={body}
        onChange={(e) => setBody(e.target.value)}
        required
      />
      <button type="submit">Agregar Comentario</button>
    </form>
  );
}

export default FormularioAgregarComentario;
