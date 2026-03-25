import { useEffect, useState } from 'react';
import { createContext } from 'react';
import API from '../services/Api';
import { toast } from 'react-toastify';

// Creating context
export const TodoContext = createContext(null);

const TodoProvider = ({ children }) => {
  const [todos, settodos] = useState([]);

  // GET todos
  const fetchTodos = async () => {
    const res = await API.get('/todos');
    console.log('Backend Response:', res.data);
    settodos(res.data);
  };

  // ADD TODo
  const addTodo = async (title) => {
    if (!title) return;
    await API.post('/todos', { title });
    fetchTodos();
  };

  // Delete

  const deleteTodo = async (id) => {
    await API.delete(`/todos/${id}`);
    toast.success('Todo Deleted');
    fetchTodos();
  };

  const updateTodo = async (id, title) => {
    if (!title) return;
    await API.patch(`/todos/${id}`, { title });
    toast.success('Todo Updated');
    fetchTodos();
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <TodoContext.Provider value={{ todos, addTodo, deleteTodo, updateTodo }}>
      {children}
    </TodoContext.Provider>
  );
};

export default TodoProvider;
