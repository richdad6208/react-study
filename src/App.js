import logo from "./logo.svg";
import "./App.css";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState([]);

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const addTodo = () => {
    const newTodo = { text: inputValue, completed: false };
    setTodos([...todos, newTodo]);
    setInputValue("");
  };

  const handleCheck = (index) => {
    const newTodos = todos.map((todo, todoIndex) =>
      index === todoIndex ? { ...todo, completed: !todo.completed } : todo
    );
  };

  return (
    <>
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholer="할 일을 적어주세요."
      />
      <button type="submit" onClick={addTodo}>
        추가
      </button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => handleCheck(index)}
            />
            {todo.text}
          </li>
        ))}
      </ul>
    </>
  );
}

function buttonAdd() {
  //
  //체크박스 + input 아래에 새로운 줄을 추가하며 value 입력
  //inputValue의 데이터를 나열
  //기존데이터는 아래로 밀기
}
export default App;
