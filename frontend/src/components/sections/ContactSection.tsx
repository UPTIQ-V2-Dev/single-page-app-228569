import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { ContactForm } from '@/components/forms/ContactForm';
import { Mail, Phone, MapPin, Clock, MessageCircle, Calendar } from 'lucide-react';

const contactInfo = [
  {
    icon: Mail,
    title: 'Email Us',
    description: 'Send us an email anytime',
    details: 'hello@modernapp.com',
    action: 'mailto:hello@modernapp.com'
  },
  {
    icon: Phone,
    title: 'Call Us',
    description: 'Mon-Fri from 8am to 6pm',
    details: '+1 (555) 123-4567',
    action: 'tel:+15551234567'
  },
  {
    icon: MapPin,
    title: 'Visit Us',
    description: 'Come say hello at our office',
    details: '123 Innovation Street, San Francisco, CA 94102',
    action: '#'
  },
  {
    icon: Clock,
    title: 'Business Hours',
    description: 'Monday - Friday',
    details: '8:00 AM - 6:00 PM PST',
    action: '#'
  }
];

const quickActions = [
  {
    icon: MessageCircle,
    title: 'Live Chat',
    description: 'Chat with our team',
    available: true
  },
  {
    icon: Calendar,
    title: 'Schedule Call',
    description: '15-min consultation',
    available: true
  }
];

export const ContactSection = () => {
  return (
    <section id="contact" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4">
            Contact Us
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let's Build Something Amazing Together
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Ready to start your project? Get in touch with our team and let's discuss 
            how we can help bring your vision to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Form */}
          <div>
            <ContactForm />
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>
              <p className="text-muted-foreground mb-8">
                Have a question or want to work together? We'd love to hear from you. 
                Here are all the ways you can reach us.
              </p>
            </div>

            {/* Contact Methods */}
            <div className="grid gap-4">
              {contactInfo.map((item, index) => (
                <Card key={index} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-primary/10 rounded-lg">
                        <item.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold mb-1">{item.title}</h4>
                        <p className="text-sm text-muted-foreground mb-2">{item.description}</p>
                        <a 
                          href={item.action}
                          className="text-sm font-medium text-primary hover:underline"
                        >
                          {item.details}
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Quick Actions */}
            <div>
              <h4 className="font-semibold mb-4">Quick Actions</h4>
              <div className="grid gap-4">
                {quickActions.map((action, index) => (
                  <Card key={index} className="cursor-pointer hover:shadow-md transition-shadow">
                    <CardContent className="p-4">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-primary/10 rounded-lg">
                          <action.icon className="w-5 h-5 text-primary" />
                        </div>
                        <div className="flex-1">
                          <div className="font-medium">{action.title}</div>
                          <div className="text-sm text-muted-foreground">{action.description}</div>
                        </div>
                        {action.available && (
                          <div className="w-2 h-2 bg-green-500 rounded-full" />
                        )}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-center mb-8">Frequently Asked Questions</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                question: "What's your typical project timeline?",
                answer: "Project timelines vary based on complexity, but most web projects take 4-8 weeks from start to finish."
              },
              {
                question: "Do you offer ongoing maintenance?",
                answer: "Yes! We provide ongoing support and maintenance packages to keep your application running smoothly."
              },
              {
                question: "Can you work with our existing team?",
                answer: "Absolutely! We integrate seamlessly with your existing development team and processes."
              },
              {
                question: "What technologies do you use?",
                answer: "We use modern technologies like React, TypeScript, Node.js, and cloud platforms for scalable solutions."
              }
            ].map((faq, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <h4 className="font-semibold mb-2">{faq.question}</h4>
                  <p className="text-sm text-muted-foreground">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};