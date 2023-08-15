import css from "./App.module.css"
import { Header } from "./components/Header";
import { List } from "./components/List";
import { AddTodoForm } from "./components/AddTodoForm";

function App() {
  return (
    <div className={css.App}>
      <Header />
      <AddTodoForm/>
      <List />
    </div>
  )
}

export default App
