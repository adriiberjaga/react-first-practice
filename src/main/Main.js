import { useState } from 'react';
import './Main.css';

function Main() {
  // Estado para las tareas y el input
  const [tareas, setTareas] = useState([]);
  const [nuevaTarea, setNuevaTarea] = useState(''); // Estado para el input

  // Función para agregar tarea
  const agregarTarea = (e) => {
    e.preventDefault(); // Para evitar que se recargue la página al enviar el formulario
    if (nuevaTarea.trim() !== '') {
      setTareas([...tareas, nuevaTarea]); // Añade la nueva tarea al array
      setNuevaTarea(''); // Limpia el input
    }
  };

  return (
    <div>
      {/* Formulario para agregar tarea */}
      <form onSubmit={agregarTarea}>
        <input 
          type="text" 
          value={nuevaTarea} 
          onChange={(e) => setNuevaTarea(e.target.value)} 
          placeholder="Ingresa una nueva tarea"
        />
        <button type="submit">Agregar tarea</button>
      </form>

      {/* Lista de tareas */}
      <ul>
        {tareas.map((tarea, index) => (
          <li key={index}>{tarea}</li>
        ))}
      </ul>
    </div>
  );
}

export default Main;
