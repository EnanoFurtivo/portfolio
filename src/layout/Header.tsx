import { ThemeToggle } from '@/theme';
import { Link } from 'react-router-dom';

export const Header: React.FC = () => {
  return (
    <header className="py-6 px-4 md:px-6 lg:px-8 border-b border-gray-300 dark:border-zinc-800">
      <nav className="flex justify-between items-center max-w-6xl mx-auto">
        <div className="flex items-center justify-start">
          <Link to="/" className="text-2xl font-bold mr-4">
            LMGR
          </Link>
          <div className="text-muted">[ work in progress ]</div>
        </div>
        <div className="flex items-center space-x-4">
          <Link to="#about" className="text-muted-foreground hover:text-foreground">
            About
          </Link>
          <Link to="#projects" className="text-muted-foreground hover:text-foreground">
            Projects
          </Link>
          <Link to="#contact" className="text-muted-foreground hover:text-foreground">
            Contact
          </Link>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
};
