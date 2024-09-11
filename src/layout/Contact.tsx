import { Button } from "@/components/ui/button";
import { MailIcon, MessageCircleIcon } from "lucide-react";

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="text-center mt-16">
      <h2 className="text-3xl font-bold mb-4 ">Ponte en Contacto</h2>
      <p className="text-lg text-muted-foreground mb-8">
        ¿Interesado en trabajar juntos? ¡No dudes en ponerte en contacto!
      </p>
      <div className="flex gap-4 align-middle justify-center">
        <Button variant="outline">
          <MailIcon className="mr-2 h-4 w-4" />
          Email
        </Button>
        <Button variant="outline">
          <MessageCircleIcon className="mr-2 h-4 w-4" />
          WhatsApp
        </Button>
      </div>
    </section>
  );
};
