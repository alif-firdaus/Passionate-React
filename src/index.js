import React from "react";
import ReactDOM from "react-dom/client";

// Import React Router
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";

import App from "./App";

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<RouterProvider router={router} />
);
