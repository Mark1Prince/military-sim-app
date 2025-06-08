import React, { useState } from "react";

export default function OperationControlPanel() {
  const [status, setStatus] = useState("Ожидание");
  const [speed, setSpeed] = useState("1x");

  const handleStart = () => setStatus("Выполняется");
  const handlePause = () => setStatus("Пауза");
  const handleReset = () => setStatus("Ожидание");

  return (
    <div className="operation-panel">
      <div className="status">
        <span>Состояние:</span> <strong>{status}</strong>
      </div>

      <div className="controls">
        <button onClick={handleStart}>▶ Старт</button>
        <button onClick={handlePause}>⏸ Пауза</button>
        <button onClick={handleReset}>🔁 Сброс</button>
      </div>

      <div className="speed-select">
        <label htmlFor="speed">Скорость:</label>
        <select
          id="speed"
          value={speed}
          onChange={(e) => setSpeed(e.target.value)}
        >
          <option value="0.5x">0.5x</option>
          <option value="1x">1x</option>
          <option value="2x">2x</option>
          <option value="4x">4x</option>
        </select>
      </div>
    </div>
  );
}
