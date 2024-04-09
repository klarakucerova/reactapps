/**
 * WordPress Dependencies
 */
import './main.scss';
import { createRoot } from "@wordpress/element";

import App from "./app";

const domNode = document.getElementById("react-app");
const root = createRoot(domNode);
root.render(<App />);
