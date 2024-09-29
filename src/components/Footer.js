import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer footer-center bg-white text-base-content rounded p-10 shadow-md">
      <nav className="grid md:grid-flow-col grid-flow-row gap-4">
        <Link to="/" className="hover:underline font-bold">HOME</Link>
        <Link to="/Overview" className="hover:underline font-bold">OVERVIEW</Link>
        <Link to="/AboutMe" className="hover:underline font-bold">ABOUT ME</Link>
        <Link to="/SkillPengalaman" className="hover:underline font-bold">SKILL & PENGALAMAN</Link>
      </nav>
      <nav>
        <div className="grid grid-flow-col gap-4">
          {/* Instagram Logo (Hitam) */}
          <a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="black"
              className="fill-current"
            >
              <path d="M12 2.163c3.204 0 3.584.012 4.849.07 1.366.062 2.633.333 3.608 1.308.975.975 1.246 2.242 1.308 3.608.058 1.265.07 1.645.07 4.849s-.012 3.584-.07 4.849c-.062 1.366-.333 2.633-1.308 3.608-.975.975-2.242 1.246-3.608 1.308-1.265.058-1.645.07-4.849.07s-3.584-.012-4.849-.07c-1.366-.062-2.633-.333-3.608-1.308-.975-.975-1.246-2.242-1.308-3.608-.058-1.265-.07-1.645-.07-4.849s.012-3.584.07-4.849c.062-1.366.333-2.633 1.308-3.608.975-.975 2.242-1.246 3.608-1.308 1.265-.058 1.645-.07 4.849-.07zm0-2.163c-3.271 0-3.667.014-4.947.072-1.602.072-3.017.334-4.167 1.484-1.15 1.15-1.412 2.565-1.484 4.167-.058 1.28-.072 1.676-.072 4.947s.014 3.667.072 4.947c.072 1.602.334 3.017 1.484 4.167 1.15 1.15 2.565 1.412 4.167 1.484 1.28.058 1.676.072 4.947.072s3.667-.014 4.947-.072c1.602-.072 3.017-.334 4.167-1.484 1.15-1.15 1.412-2.565 1.484-4.167.058-1.28.072-1.676.072-4.947s-.014-3.667-.072-4.947c-.072-1.602-.334-3.017-1.484-4.167-1.15-1.15-2.565-1.412-4.167-1.484-1.28-.058-1.676-.072-4.947-.072z" />
              <path d="M12 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 0 0-2.881 1.44 1.44 0 0 0 0 2.881z" />
            </svg>
          </a>
          {/* TikTok Logo (Hitam) */}
          <a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="black"
              className="fill-current"
            >
              <path d="M12.859 3v12.248c0 3.242-2.644 5.883-5.888 5.883-3.246 0-5.892-2.641-5.892-5.883 0-3.244 2.646-5.883 5.892-5.883.424 0 .831.044 1.238.123v2.29c-.407-.102-.815-.161-1.238-.161-1.966 0-3.569 1.603-3.569 3.567 0 1.967 1.603 3.567 3.569 3.567 1.965 0 3.571-1.603 3.571-3.567v-9.676h2.262c.202 1.428 1.211 2.444 2.638 2.648v2.285c-2.715 0-4.902-2.185-4.902-4.896h-2.261v-.138z" />
            </svg>
          </a>
          {/* Facebook Logo (Hitam) */}
          <a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="black"
              className="fill-current"
            >
              <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.494v-9.293h-3.122v-3.622h3.122v-2.672c0-3.1 1.894-4.788 4.662-4.788 1.325 0 2.464.099 2.794.143v3.24h-1.917c-1.504 0-1.794.715-1.794 1.762v2.314h3.587l-.467 3.622h-3.12v9.293h6.118c.731 0 1.324-.593 1.324-1.324v-21.351c0-.732-.593-1.325-1.325-1.325z" />
            </svg>
          </a>
        </div>
      </nav>
      <aside>
        <p className="font-bold">Copyright By ShaniaAmaliaMirza</p>
      </aside>
    </footer>
  );
};

export default Footer;
