import SectionTitle from '../common/SectionTitle';
import ContactForm from './ContactForm';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
  const contactInfo = [
    {
      icon: <FaPhone />,
      title: "Phone",
      info: "+1 (555) 123-4567",
      link: "tel:+15551234567"
    },
    {
      icon: <FaEnvelope />,
      title: "Email",
      info: "contact@BerimboloSecurity.com",
      link: "mailto:contact@BerimboloSecurity.com"
    },
    {
      icon: <FaMapMarkerAlt />,
      title: "Address",
      info: "123 Security Ave, NY 10001",
      link: "https://maps.google.com"
    }
  ];

  return (
    <section id="contact" className="py-20 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Contact Us"
          subtitle="Get in touch with our security experts today"
        />
        
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-8">
            <div className="prose dark:prose-invert max-w-none">
              <h3 className="text-2xl font-semibold mb-4 dark:text-white">Get In Touch</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Have questions about our security solutions? Our team is here to help you protect what matters most.
              </p>
            </div>
            
            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <a
                  key={index}
                  href={item.link}
                  className="flex items-center space-x-4 text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition duration-300"
                >
                  <div className="text-primary text-xl">{item.icon}</div>
                  <div>
                    <h4 className="font-medium dark:text-white">{item.title}</h4>
                    <p>{item.info}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;