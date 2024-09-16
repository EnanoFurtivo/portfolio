import { MailOutlined, WhatsAppOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import urls from '@/data/urls.json';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="text-center mt-16">
      <h2 className="text-3xl font-bold mb-4 ">Ponte en Contacto</h2>
      <p className="text-lg text-muted-foreground mb-8">¿Interesado en trabajar juntos? ¡No dudes en ponerte en contacto!</p>
      <div className="flex gap-4 align-middle justify-center">
        <Button icon={<MailOutlined />} href={urls.mail}>
          Email
        </Button>
        <Button icon={<WhatsAppOutlined />} href={urls.whatsapp}>
          WhatsApp
        </Button>
      </div>
    </section>
  );
};
