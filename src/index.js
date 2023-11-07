import React from "react";
import ReactDOM from "react-dom/client";

// Import React Router
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";

import App from "./App";

// Projects
import Fixit from "./Components/Project/Fixit";
import Aqua from "./Components/Project/Aqua";
import Swiftbasket from "./Components/Project/Swiftbasket";
import Ecommercebuilder from "./Components/Project/Ecommercebuilder";

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
	},
	{
		path: "/projects-fixit-mobile-app",
		element: <Fixit />,
	},
	{
		path: "/projects-aqua-wallet",
		element: <Aqua />,
	},
	{
		path: "/projects-swiftbasket",
		element: <Swiftbasket />,
	},
	{
		path: "/projects-ecommerce-builder",
		element: <Ecommercebuilder />,
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<RouterProvider router={router} />
);
