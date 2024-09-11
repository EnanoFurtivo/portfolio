import { Button } from "@/components/ui/button";
import { useEffect } from "react";
import { Link } from "react-router-dom";

export const ErrorPage: React.FC = () => {
  useEffect(() => {
    console.error("An error occurred");
  }, []);

  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-4">Oops! Something went wrong</h1>
      <p className="text-xl text-muted-foreground mb-8">
        We're sorry, but an error occurred while processing your request.
      </p>
      <img
        src="/placeholder.svg?height=200&width=200"
        alt="Error Illustration"
        className="w-48 h-48 mx-auto mb-8"
      />
      <div className="space-x-4">
        <Link to="/">
          <Button variant="outline">Return to Home</Button>
        </Link>
      </div>
    </div>
  );
};
