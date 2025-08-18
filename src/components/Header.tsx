import { Link } from "react-router-dom";
import { navItems, GITHUB_URL } from "../constants/navigation";
import { Logo } from "./icons/Logo";
import { GitHubIcon } from "./icons/GithubIcon";
import { LogoText } from "./icons/LogoText";

export default function Header() {
  return (
    <nav
      className="w-full bg-white shadow-sm"
      style={{ boxShadow: "0px 0px 6px 0px rgba(0, 0, 0, 0.17)" }}
    >
      <div className="flex h-16 w-full items-center justify-between px-24">
        <div className="flex items-center">
          <Link to="/" className="flex items-center gap-2">
            <Logo />
            <LogoText />
          </Link>
        </div>

        <div className="flex items-center gap-10">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className="text-gray-blue text-base font-normal transition-colors hover:text-black"
            >
              {item.label}
            </Link>
          ))}

          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="border-gray-blue flex items-center justify-center gap-2.5 rounded-lg border px-2.5 py-2 transition-colors hover:bg-gray-50"
          >
            <div className="flex items-center gap-2.5">
              <GitHubIcon />
              <span className="text-gray-blue text-sm font-normal hover:text-black">
                GitHub
              </span>
            </div>
          </a>
        </div>
      </div>
    </nav>
  );
}
