import { Link } from "react-router-dom";

interface LayoutProps {
  children: React.ReactNode;
  fullWidth?: boolean;
}

function Layout({ children, fullWidth = false }: LayoutProps) {
  if (fullWidth) {
    return (
      <div className="min-h-screen bg-white font-mono text-black">
        {children}
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white font-mono text-black">
      <div className="max-w-2xl px-6 py-8">
        {/* Main content */}
        <main>
          {children}
        </main>

        {/* Simple footer */}
        <footer className="mt-16 pt-8 border-t border-gray-300">
          <p className="text-sm text-gray-600">
            © 2024 Adam Cutts
          </p>
        </footer>
      </div>
    </div>
  );
}

export default Layout;