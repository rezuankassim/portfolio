import GithubIcon from './GithubIcon';
import LinkedInIcon from './LinkedInIcon';
import MailIcon from './MailIcon';

const Footer = () => {
  return (
    <footer className="mx-auto flex max-w-5xl justify-between gap-x-28 pb-32">
      <span className="text-lg font-light uppercase">Contact</span>

      <div className="grid flex-1 grid-cols-3 gap-x-3">
        <button className="flex items-center justify-center gap-x-2 rounded-md border border-[#C6C6C6] py-3 font-light">
          <MailIcon />
          <span>Send an email</span>
        </button>

        <button className="flex items-center justify-center gap-x-2 rounded-md border border-[#C6C6C6] py-3 font-light">
          <LinkedInIcon />
          <span>LinkedIn</span>
        </button>

        <button className="flex items-center justify-center gap-x-2 rounded-md border border-[#C6C6C6] py-3 font-light">
          <GithubIcon />
          <span>Github</span>
        </button>
      </div>
    </footer>
  );
};

export default Footer;
