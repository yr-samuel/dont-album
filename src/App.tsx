import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Album, Home } from "./pages";

const App = () => {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/*" element={<Album />} />
		</Routes>
	);
};

export default App;
