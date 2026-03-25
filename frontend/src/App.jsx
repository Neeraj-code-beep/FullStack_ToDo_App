// import { nanoid } from 'nanoid';
// import { useState } from 'react';
import Create from './components/Create';
import Read from './components/Read';

const App = () => {
  // const [todos, settodos] = useState([
  //   { id: 1, title: "Bruhh You're too Smart 😎.", isCompleted: false },
  // ]);
  // Now we gonna use context api so need of this here.

  // Title also goes to create file.
  // const [title, settitle] = useState('');

  // This SubmitHandler goes to create component..
  // const SubmitHandler = (e) => {
  //   e.preventDefault(); // ✅ fixed spelling
  //   const newtodo = {
  //     id: nanoid(),
  //     title,
  //     isCompleted: false,
  //   };

  //   // Add new todo to state
  //   let copytodos = [...todos];
  //   copytodos.push(newtodo);
  //   settodos(copytodos);

  //   // settodos([...todos, newtodo]);
  //   settitle(''); // Optional: clears input after submit
  // };

  // This rendertodos function goes to read component.
  // const rendertodos = todos.map((todo) => <li key={todo.id}>{todo.title}</li>);

  return (
    <div
      className="text-white flex flex-col justify-start items-center gap-10 w-screen h-screen bg-linear-to-tr
from-[#95d071] from-0%
via-cyan-200 via-50%
to-[#d1e452] to-90% p-10 "
    >
      {/* This all now goes to create component */}
      {/* <h1>Create Tasks</h1>
      <form onSubmit={SubmitHandler}>
        <input
          onChange={(e) => settitle(e.target.value)}
          value={title}
          type="text"
          placeholder="title"
        />
        <br /> <br />
        <button>Create Todo</button>
      </form> */}

      {/* <hr /> */}
      {/* This all goes to read component */}
      {/* <h1>Pending Todos</h1>
      <ol>{rendertodos}</ol> */}

      <Create />
      <Read />
    </div>
  );
};

export default App;
