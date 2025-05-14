// App.jsx
import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Exercise from "./pages/Exercise/Start";
import ArmStretch from "./pages/Exercise/ArmStretch";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/exercise" element={<Exercise />} />
      <Route path="/exercise/arm-strecth" element={<ArmStretch />} />
    </Routes>
  );
};

export default App;
