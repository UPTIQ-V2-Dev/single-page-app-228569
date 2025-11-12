import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, Users, Award, Target, Zap, Shield } from 'lucide-react';

const features = [
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'Built for speed with cutting-edge technology that delivers instant results.'
  },
  {
    icon: Shield,
    title: 'Secure & Reliable',
    description: 'Enterprise-grade security with 99.9% uptime guarantee and data protection.'
  },
  {
    icon: Users,
    title: 'Team Collaboration',
    description: 'Seamless collaboration tools that keep your team connected and productive.'
  },
  {
    icon: Target,
    title: 'Goal-Oriented',
    description: 'Purpose-built features that help you achieve your business objectives.'
  }
];

const stats = [
  { number: '10K+', label: 'Happy Customers' },
  { number: '99.9%', label: 'Uptime' },
  { number: '24/7', label: 'Support' },
  { number: '150+', label: 'Countries' }
];

const values = [
  'Innovation-driven development',
  'Customer-centric approach',
  'Scalable and maintainable code',
  'Transparent communication',
  'Continuous improvement',
  'Security-first mindset'
];

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4">
            About Us
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Crafting Digital Excellence Since 2020
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            We're a passionate team of designers, developers, and strategists dedicated to 
            creating exceptional digital experiences that drive real business results.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                {stat.number}
              </div>
              <div className="text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left Content */}
          <div>
            <h3 className="text-3xl font-bold mb-6">
              Building Tomorrow's Solutions Today
            </h3>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              With over 4 years of experience in the digital landscape, we've helped 
              thousands of businesses transform their ideas into reality. Our approach 
              combines cutting-edge technology with human-centered design to create 
              solutions that not only look great but perform exceptionally.
            </p>
            
            {/* Values List */}
            <div className="space-y-3 mb-8">
              {values.map((value, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-muted-foreground">{value}</span>
                </div>
              ))}
            </div>

            <Button size="lg">
              <Award className="mr-2 h-5 w-5" />
              View Our Work
            </Button>
          </div>

          {/* Right Content - Features Grid */}
          <div className="grid gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">{feature.title}</h4>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Mission Statement */}
        <div className="text-center max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-primary/10 via-background to-secondary/10 rounded-2xl p-8 md:p-12 border">
            <h3 className="text-2xl md:text-3xl font-bold mb-6">Our Mission</h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              "To empower businesses of all sizes with innovative digital solutions that 
              drive growth, enhance user experiences, and create lasting value. We believe 
              that great technology should be accessible, reliable, and transformative."
            </p>
            <div className="flex items-center justify-center gap-4 mt-8">
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium">Team of 50+ Experts</span>
              </div>
              <div className="hidden sm:block w-px h-6 bg-border" />
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium">Industry Recognition</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};