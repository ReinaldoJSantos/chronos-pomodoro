import Home from "./pages/home";
 
import "./styles/theme.css";
import "./styles/global.css";
import { TaskContextProvider } from "./Context/TaskContextProvider";

export default function App() {

  return (
    <TaskContextProvider>
      <Home />
    </TaskContextProvider>
  );
}
