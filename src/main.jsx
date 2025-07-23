import { useState } from "react";
import ReactDOM from "react-dom/client";

const sessions = ["Session A", "Session B", "Session C"];
const weeks = Array.from({ length: 12 }, (_, i) => `Semaine ${i + 1}`);

const exercises = {
  "Session A": ["Pompes", "Dips", "Plank to Push-Up", "Planche"],
  "Session B": ["Pull-Ups", "Australian Pull-Ups", "Hanging Knee Raises", "Hollow Hold"],
  "Session C": ["Pistol Squats", "Bulgarian Squats", "Jump Squats", "Wall Sit"]
};

function App() {
  const [progress, setProgress] = useState({});

  const updateProgress = (week, session, exercise, value) => {
    setProgress(prev => ({
      ...prev,
      [week]: {
        ...prev[week],
        [session]: {
          ...prev[week]?.[session],
          [exercise]: value
        }
      }
    }));
  };

  return (
    <div style={{ padding: 16 }}>
      {weeks.map(week => (
        <div key={week} style={{ marginBottom: 32 }}>
          <h2>{week}</h2>
          {sessions.map(session => (
            <div key={session} style={{ marginBottom: 16 }}>
              <h3>{session}</h3>
              {exercises[session].map(ex => (
                <div key={ex} style={{ marginBottom: 8 }}>
                  <label style={{ marginRight: 8 }}>{ex}</label>
                  <input
                    type="text"
                    value={progress[week]?.[session]?.[ex] || ""}
                    onChange={e => updateProgress(week, session, ex, e.target.value)}
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
