import Nav from "../nav"
import { Outlet } from "react-router-dom"
// <Outlet> is where the other routes will show up. Here, Nav bar shows above route contents. You can move Outlet to change where things show

// This component will render on load.
export default function Root() {
  return (
    // Note: `className` props throughout this app leverage Tailwind CSS, an optional dependency.
    <div className="m-2.5">
      <Nav />
      <Outlet />
    </div>
  );
}
