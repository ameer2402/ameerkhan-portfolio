import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import emailjs from "emailjs-com";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive",
      });
      return;
    }

    emailjs
        .send(
            import.meta.env.VITE_EMAILJS_SERVICE_ID || "YOUR_SERVICE_ID",
            import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "YOUR_TEMPLATE_ID",
            {
              name: formData.name,
              email: formData.email,
              message: formData.message,
              title: "New Portfolio Message",
            },
            import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "YOUR_PUBLIC_KEY"
        )
        .then(() => {
          // Optional: Send auto-reply if you have a second template configured
          /*
          emailjs.send(
              import.meta.env.VITE_EMAILJS_SERVICE_ID,
              "YOUR_AUTO_REPLY_TEMPLATE_ID", 
              {
                to_name: formData.name,
                send_to: formData.email,
              },
              import.meta.env.VITE_EMAILJS_PUBLIC_KEY
          );
          */
          toast({
            title: "Message Sent",
            description: "Your message has been delivered successfully.",
          });
          setFormData({ name: "", email: "", message: "" });
        })
        .catch(() => {
          toast({
            title: "Sending Failed",
            description: "There was an issue sending your message. Please try again later.",
            variant: "destructive",
          });
        });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "ameerkhan20241a0497@gmail.com",
      href: "mailto:ameerkhan20241a0497@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 9553005205",
      href: "tel:+919553005205",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Hyderabad, Telangana",
      href: null,
    },
  ];

  return (
      <section id="contact" className="py-20 relative">
        <div className="container mx-auto px-4">
          <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Get In <span className="gradient-text">Touch</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Let's discuss your next project
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="space-y-8"
            >
              <div>
                <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                <p className="text-muted-foreground mb-8">
                  Feel free to reach out for collaborations, opportunities, or
                  just a friendly chat about technology!
                </p>
              </div>


              {contactInfo.map((info, index) => (
                  <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="flex items-start gap-4"
                  >
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0">
                      <info.icon className="text-white" size={20} />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">
                        {info.label}
                      </p>
                      {info.href ? (
                          <a
                              href={info.href}
                              className="text-foreground font-medium hover:text-primary transition-colors"
                          >
                            {info.value}
                          </a>
                      ) : (
                          <p className="text-foreground font-medium">{info.value}</p>
                      )}
                    </div>
                  </motion.div>
              ))}

              <div className="pt-8">
                <p className="text-sm text-muted-foreground mb-4">
                  Connect with me:
                </p>
                <div className="flex gap-4">
                  <a
                      href="https://github.com/ameer2402"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-lg glass-card flex items-center justify-center hover:bg-primary hover:text-white transition-all hover-lift"
                      title="GitHub"
                  >
                    <FaGithub className="w-5 h-5" />
                  </a>
                  <a
                      href="https://www.linkedin.com/in/ameerkhan-dev/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-lg glass-card flex items-center justify-center hover:bg-primary hover:text-white transition-all hover-lift"
                      title="LinkedIn"
                  >
                    <FaLinkedin className="w-5 h-5" />
                  </a>
                  <a
                      href="https://leetcode.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-lg glass-card flex items-center justify-center hover:bg-primary hover:text-white transition-all hover-lift"
                      title="LeetCode"
                  >
                    <span className="font-bold font-mono text-lg text-center leading-none">{'</>'}</span>
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
              <form
                  onSubmit={handleSubmit}
                  className="glass-card p-8 rounded-2xl space-y-6"
              >
                <div>
                  <label
                      htmlFor="name"
                      className="block text-sm font-medium mb-2"
                  >
                    Name
                  </label>
                  <Input
                      id="name"
                      type="text"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                      }
                      className="bg-background/50"
                  />
                </div>

                <div>
                  <label
                      htmlFor="email"
                      className="block text-sm font-medium mb-2"
                  >
                    Email
                  </label>
                  <Input
                      id="email"
                      type="email"
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                      }
                      className="bg-background/50"
                  />
                </div>

                <div>
                  <label
                      htmlFor="message"
                      className="block text-sm font-medium mb-2"
                  >
                    Message
                  </label>
                  <Textarea
                      id="message"
                      placeholder="Your message..."
                      rows={5}
                      value={formData.message}
                      onChange={(e) =>
                          setFormData({ ...formData, message: e.target.value })
                      }
                      className="bg-background/50 resize-none"
                  />
                </div>

                <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity text-white"
                    size="lg"
                >
                  <Send className="mr-2" size={18} />
                  Send Message
                </Button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
  );
};

export default Contact;
