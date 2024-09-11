import { Button } from "@/components/ui/button";
import { useEffect } from "react";
import { Link } from "react-router-dom";

export const NotFoundPage: React.FC = () => {
  useEffect(() => {
    console.error("404 - Page Not Found");
  }, []);

  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
      <p className="text-xl text-muted-foreground mb-8">
        Oops! The page you're looking for doesn't exist.
      </p>
      <img
        src="/placeholder.svg?height=200&width=200"
        alt="404 Illustration"
        className="w-48 h-48 mx-auto mb-8"
      />
      <Link to="/">
        <Button>Return to Home</Button>
      </Link>
    </div>
  );
};
