import { NavLink } from "react-router";
import { navLinks } from "../data/navigation";
export function Navigation() {
  return (
    <nav>
      {navLinks.map((item) => (
        <NavLink key={item.id} to={item.path}>
          {item.label}
        </NavLink>
      ))}
    </nav>
  );
}
