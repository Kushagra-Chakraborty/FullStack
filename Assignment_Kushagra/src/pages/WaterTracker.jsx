import { useCallback, useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import CounterDisplay from "../components/CounterDisplay";

function WaterTracker() {
  const [count, setCount] = useState(0);
  const [goal, setGoal] = useState(8);
  const [tip, setTip] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [note, setNote] = useState(0);

  useEffect(() => {
    const saved = Number(localStorage.getItem("waterCount"));
    if (!Number.isNaN(saved) && saved >= 0) {
      setCount(saved);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("waterCount", String(count));
  }, [count]);

  useEffect(() => {
    let active = true;

    async function fetchTip() {
      setLoading(true);
      setError("");
      try {
        const response = await fetch("https://api.adviceslip.com/advice");
        if (!response.ok) {
          throw new Error("Network request failed.");
        }
        const data = await response.json();
        if (active) {
          setTip(data?.slip?.advice || "Stay hydrated throughout the day.");
        }
      } catch (fetchError) {
        if (active) {
          setError("Failed to fetch health tip.");
        }
      } finally {
        if (active) {
          setLoading(false);
        }
      }
    }

    fetchTip();
    return () => {
      active = false;
    };
  }, []);

  const addWater = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  const removeWater = useCallback(() => {
    setCount((prev) => (prev > 0 ? prev - 1 : 0));
  }, []);

  const resetWater = useCallback(() => {
    setCount(0);
  }, []);

  const incrementUnrelatedState = useCallback(() => {
    setNote((prev) => prev + 1);
  }, []);

  return (
    <>
      <Navbar />
      <main className="screen">
        <div className="card">
          <h1>Daily Water Tracker</h1>
          <CounterDisplay count={count} goal={goal} />

          <div className="button-row">
            <button onClick={addWater}>+</button>
            <button onClick={removeWater}>-</button>
            <button onClick={resetWater}>Reset</button>
          </div>

          <label className="goal-row" htmlFor="goal">
            Daily Goal:
            <input
              id="goal"
              type="number"
              min="1"
              value={goal}
              onChange={(event) => setGoal(Number(event.target.value) || 1)}
            />
          </label>

          <div className="tip-box">
            <h2>Today's Health Tip:</h2>
            {loading && <p>Loading...</p>}
            {!loading && error && <p>{error}</p>}
            {!loading && !error && <p>{tip}</p>}
          </div>

          <button className="secondary-btn" onClick={incrementUnrelatedState}>
            Unrelated Button ({note})
          </button>
        </div>
      </main>
    </>
  );
}

export default WaterTracker;
