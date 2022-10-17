import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "./config/firebase";
import "bootstrap/dist/css/bootstrap.min.css";
import { RecoilRoot } from "recoil";
import "bootstrap/dist/js/bootstrap.bundle.min";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<BrowserRouter>
			<RecoilRoot>
				<App />
			</RecoilRoot>
		</BrowserRouter>
	</React.StrictMode>
);
