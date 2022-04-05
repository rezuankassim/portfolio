import MoonIcon from './MoonIcon';

const Header = () => {
  return (
    <nav className="mx-auto flex max-w-5xl items-center justify-between py-10">
      <div>
        <span className="text-2xl font-medium">rez.</span>
      </div>
      <ul className="flex items-center gap-x-7">
        <li>
          <span className="text-lg">Projects</span>
        </li>
        <li>
          <span className="text-lg">Resume</span>
        </li>
        <li>
          <span className="text-lg">Contact</span>
        </li>
        <li>
          <button className="block">
            <MoonIcon />
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
