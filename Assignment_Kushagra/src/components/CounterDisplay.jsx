import { memo } from "react";

const CounterDisplay = memo(function CounterDisplay({ count, goal }) {
  return (
    <section className="progress">
      <p className="progress-text">
        {count} / {goal} glasses completed
      </p>
      {count >= goal && <p className="goal-hit">Goal Reached</p>}
    </section>
  );
});

export default CounterDisplay;
