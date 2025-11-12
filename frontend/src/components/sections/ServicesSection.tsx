import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Code, 
  Smartphone, 
  Cloud, 
  Database, 
  Palette, 
  BarChart3, 
  ArrowRight,
  CheckCircle,
  Star
} from 'lucide-react';

const services = [
  {
    icon: Code,
    title: 'Web Development',
    description: 'Custom web applications built with modern technologies like React, Next.js, and TypeScript.',
    features: ['Responsive Design', 'SEO Optimized', 'Fast Performance', 'Secure Code'],
    price: 'From $2,999',
    popular: false
  },
  {
    icon: Smartphone,
    title: 'Mobile Development',
    description: 'Native and cross-platform mobile apps for iOS and Android with exceptional user experience.',
    features: ['iOS & Android', 'React Native', 'App Store Ready', 'Push Notifications'],
    price: 'From $4,999',
    popular: true
  },
  {
    icon: Cloud,
    title: 'Cloud Solutions',
    description: 'Scalable cloud infrastructure and deployment solutions for modern applications.',
    features: ['AWS/Azure/GCP', 'Auto Scaling', 'DevOps Setup', '99.9% Uptime'],
    price: 'From $1,999',
    popular: false
  },
  {
    icon: Database,
    title: 'Backend Development',
    description: 'Robust API development and database design for scalable backend systems.',
    features: ['RESTful APIs', 'Database Design', 'Authentication', 'Real-time Features'],
    price: 'From $3,499',
    popular: false
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    description: 'Beautiful and intuitive user interface design that converts visitors into customers.',
    features: ['User Research', 'Wireframing', 'Prototyping', 'Design Systems'],
    price: 'From $1,499',
    popular: false
  },
  {
    icon: BarChart3,
    title: 'Analytics & SEO',
    description: 'Data-driven insights and search engine optimization to grow your business.',
    features: ['Google Analytics', 'SEO Audit', 'Performance Tracking', 'Reporting'],
    price: 'From $899',
    popular: false
  }
];

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'CEO, TechStart',
    content: 'Outstanding work! They delivered our project on time and exceeded our expectations.',
    rating: 5
  },
  {
    name: 'Mike Chen',
    role: 'CTO, GrowthCo',
    content: 'Professional team with excellent technical skills. Highly recommended!',
    rating: 5
  }
];

export const ServicesSection = () => {
  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-24">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4">
            Our Services
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Complete Digital Solutions
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            From concept to launch, we provide end-to-end digital services that help 
            your business grow and succeed in the modern marketplace.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className={`relative hover:shadow-lg transition-all duration-300 ${
                service.popular ? 'ring-2 ring-primary shadow-lg scale-105' : ''
              }`}
            >
              {service.popular && (
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  Most Popular
                </Badge>
              )}
              <CardHeader>
                <div className="p-3 bg-primary/10 rounded-lg w-fit mb-4">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
                <CardDescription className="text-base">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
                <div className="flex items-center justify-between">
                  <div className="text-2xl font-bold text-primary">{service.price}</div>
                  <Button variant="outline" size="sm" onClick={scrollToContact}>
                    Get Quote
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Process Section */}
        <div className="bg-muted/30 rounded-2xl p-8 md:p-12 mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">Our Development Process</h3>
            <p className="text-muted-foreground">
              A proven methodology that ensures quality deliverables and successful projects.
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Discovery', description: 'Understanding your needs and goals' },
              { step: '02', title: 'Planning', description: 'Creating detailed project roadmap' },
              { step: '03', title: 'Development', description: 'Building with best practices' },
              { step: '04', title: 'Launch', description: 'Deploying and ongoing support' }
            ].map((phase, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
                  {phase.step}
                </div>
                <h4 className="font-semibold mb-2">{phase.title}</h4>
                <p className="text-sm text-muted-foreground">{phase.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold mb-4">What Our Clients Say</h3>
          <p className="text-muted-foreground">Don't just take our word for it</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-6">
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-muted-foreground mb-4 italic">
                "{testimonial.content}"
              </p>
              <div>
                <div className="font-semibold">{testimonial.name}</div>
                <div className="text-sm text-muted-foreground">{testimonial.role}</div>
              </div>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold mb-4">Ready to Start Your Project?</h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help bring your ideas to life with our expertise and passion for excellence.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" onClick={scrollToContact}>
              Start Your Project
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg">
              Schedule Consultation
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};