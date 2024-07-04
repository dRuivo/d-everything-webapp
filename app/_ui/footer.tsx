import { SunIcon, MoonIcon } from "@heroicons/react/24/outline";


export default function Footer() {

  return (
    <footer className="footer justify-between">
      <p>Copyright  © {new Date().getFullYear()} dRuivo. All rights reserved.</p>
      <label className="swap swap-rotate justify-end">
        {/* this hidden checkbox controls the state */}
        <input type="checkbox" className="theme-controller" value="dark" />
        {/* sun icon */}
        <SunIcon className="swap-off size-8 fill-current" />
        {/* moon icon */}
        <MoonIcon className="swap-on size-8 fill-current" />
      </label>
    </footer>
  )
}