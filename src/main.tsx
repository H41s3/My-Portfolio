
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Find the root element or create a fallback
const rootElement = document.getElementById("root");
if (!rootElement) {
  const fallbackRoot = document.createElement("div");
  fallbackRoot.id = "root";
  document.body.appendChild(fallbackRoot);
}

createRoot(document.getElementById("root")!).render(<App />);
