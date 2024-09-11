export const Footer: React.FC = () => {
  return (
    <footer className="py-6 px-4 md:px-6 lg:px-8 border-t border-gray-300 dark:border-zinc-800">
      <div className="max-w-6xl mx-auto text-center text-muted-foreground">
        © {new Date().getFullYear()} Luciano Martin Godoy Romanutti. All rights
        reserved.
      </div>
    </footer>
  );
};
