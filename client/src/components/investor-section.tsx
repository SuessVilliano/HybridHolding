import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Layers, Cog, Target, Shield, Sprout, Handshake, RefreshCw, Crown } from "lucide-react";

export default function InvestorSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const whyInvestReasons = [
    {
      icon: Layers,
      title: "Vertical Integration",
      description: "Our brands feed each other — from acquisition funnels to education to monetization via funded accounts.",
      color: "text-accent-blue bg-accent-blue"
    },
    {
      icon: Cog,
      title: "Tech-Driven Revenue",
      description: "We automate nearly all back-office operations, reducing burn and boosting scale.",
      color: "text-accent-green bg-accent-green"
    },
    {
      icon: Target,
      title: "Proven Product-Market Fit",
      description: "Every product has live users, traction, and community growth.",
      color: "text-accent-gold bg-accent-gold"
    },
    {
      icon: Shield,
      title: "Ownership and IP Control",
      description: "All core platforms, codebases, and branding are in-house.",
      color: "text-accent-blue bg-accent-blue"
    }
  ];

  const investmentOpportunities = [
    {
      icon: Sprout,
      title: "Seed-Stage Capital",
      description: "Early funding rounds",
      color: "text-accent-green"
    },
    {
      icon: Handshake,
      title: "Joint Ventures",
      description: "Platform licensing partnerships",
      color: "text-accent-blue"
    },
    {
      icon: RefreshCw,
      title: "Convertible Notes",
      description: "Equity positions available",
      color: "text-accent-gold"
    },
    {
      icon: Crown,
      title: "Strategic Partners",
      description: "Partner allocations",
      color: "text-accent-green"
    }
  ];

  return (
    <section id="investors" className="py-20 bg-secondary" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl lg:text-5xl font-black mb-6">
              Why Invest <span className="text-accent-gold">With Us?</span>
            </h2>
            
            <div className="space-y-6 mb-8">
              {whyInvestReasons.map((reason, index) => (
                <motion.div
                  key={reason.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  className="flex items-start space-x-4"
                >
                  <div className={`w-8 h-8 ${reason.color.split(' ')[1]} rounded-full flex items-center justify-center mt-1 flex-shrink-0`}>
                    <reason.icon className="text-white text-sm" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">{reason.title}</h3>
                    <p className="text-muted-foreground">{reason.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button className="bg-accent-gold hover:bg-accent-gold/80 text-black px-8 py-4 font-semibold transition-all duration-300 transform hover:scale-105">
                Download Investor Deck
              </Button>
              <Button
                onClick={() => scrollToSection("contact")}
                variant="outline"
                className="border-accent-blue text-accent-blue hover:bg-accent-blue hover:text-white px-8 py-4 font-semibold transition-all duration-300 transform hover:scale-105"
              >
                Schedule Discovery Call
              </Button>
            </motion.div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <img
              src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&h=800"
              alt="Global financial networks visualization"
              className="rounded-2xl shadow-xl w-full h-auto"
            />
          </motion.div>
        </div>
        
        {/* Investment Opportunities */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold text-center mb-8">Investment Opportunities</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {investmentOpportunities.map((opportunity, index) => (
              <motion.div
                key={opportunity.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
              >
                <Card className="text-center p-6 glass-card rounded-xl h-full">
                  <CardContent className="p-0">
                    <opportunity.icon className={`${opportunity.color} text-3xl mb-4 mx-auto`} />
                    <h4 className="font-semibold mb-2">{opportunity.title}</h4>
                    <p className="text-sm text-muted-foreground">{opportunity.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
