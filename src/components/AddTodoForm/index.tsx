import { Button } from "../../shared/Button";

function AddTodoForm() {
  return (
    <form>
      <input type="text" id="addTodoForm"/>
      <label htmlFor="addTodoForm"> Description of new task</label>
      <Button/>
    </form>
  );
}

export { AddTodoForm }