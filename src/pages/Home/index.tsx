import { useState } from "react";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);
  const navigate = useNavigate();

  return (
    <div className="container flex justify-center flex-col items-center h-screen w-screen">
      <h1 className="text-2xl font-mono">Vite + React</h1>
      <div className="card flex justify-center">
        <Button
          type="primary"
          onClick={() => {
            setCount((count) => count + 1);
            navigate("/home/detail");
          }}
        >
          count is {count}
        </Button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default App;
