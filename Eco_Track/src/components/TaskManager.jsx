import { useState } from 'react';
import useForm from '../hooks/useForm.jsx';

const initialFormValues = {
  title: '',
  priority: 'Low',
};

const TaskManager = () => {
  const [tasks, setTasks] = useState([]);
  const { values, handleChange, resetForm } = useForm(initialFormValues);

  const handleSubmit = (event) => {
    event.preventDefault();

    const title = values.title.trim();
    if (!title) {
      return;
    }

    setTasks((currentTasks) => [
      ...currentTasks,
      {
        id: crypto.randomUUID(),
        title,
        priority: values.priority,
      },
    ]);
    resetForm();
  };

  return (
    <section className="task-manager">
      <div className="task-manager__intro">
        <h2>Task Tracker</h2>
      </div>

      <form className="task-manager__form" onSubmit={handleSubmit}>

        <label className="task-manager__field">
          <span>Task Title</span>
          <input
            type="text"
            name="title"
            value={values.title}
            onChange={handleChange}
            placeholder="Enter task title"
          />
        </label>

        <label className="task-manager__field">
          <span>Priority</span>
          <select
            name="priority"
            value={values.priority}
            onChange={handleChange}
          >
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
        </label>

        <button type="submit" className="task-manager__submit">
          Add Task
        </button>
      </form>

      <div className="task-manager__list">
        <div className="task-manager__list-header">
          <span>Task Id</span>
          <span>Task Title</span>
          <span>Priority</span>
        </div>

        {tasks.length === 0 ? (
          <p className="task-manager__empty">No tasks added yet.</p>
        ) : (
          tasks.map((task) => (
            <div key={task.id} className="task-manager__item">
              <span>{task.id}</span>
              <span>{task.title}</span>
              <span className={`task-manager__badge task-manager__badge--${task.priority.toLowerCase()}`}>
                {task.priority}
              </span>
            </div>
          ))
        )}
      </div>
    </section>
  );
};

export default TaskManager;
