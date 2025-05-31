import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import AnimatedCounter from "@/components/animated-counter";

export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero-bg min-h-screen flex items-center relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-accent-blue rounded-full filter blur-3xl"
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-green rounded-full filter blur-3xl"
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 3 }}
        />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl lg:text-7xl font-black leading-tight mb-6">
              Building a <span className="bg-gradient-to-r from-accent-blue via-accent-green to-accent-gold bg-clip-text text-transparent">Better World</span> Through Fintech Innovation
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Hybrid Holdings empowers individuals through financial literacy, innovative trading systems, and sustainable giving. We harness our success to create opportunities for others, investing in affordable housing and community development.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button
                onClick={() => scrollToSection("portfolio")}
                className="bg-accent-blue hover:bg-accent-blue/80 px-8 py-4 text-lg font-semibold transition-all duration-300 transform hover:scale-105"
              >
                Explore Our Portfolio
              </Button>
              <Button
                onClick={() => scrollToSection("investors")}
                variant="outline"
                className="border-accent-green text-accent-green hover:bg-accent-green hover:text-white px-8 py-4 text-lg font-semibold transition-all duration-300 transform hover:scale-105"
              >
                Investor Relations
              </Button>
            </div>
            
            {/* Live Stats */}
            <div className="grid grid-cols-3 gap-6 text-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="text-3xl font-bold text-accent-green stats-counter">
                  <AnimatedCounter target={50} suffix="M+" />
                </div>
                <div className="text-sm text-muted-foreground">Capital</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <div className="text-3xl font-bold text-accent-blue stats-counter">
                  <AnimatedCounter target={10000} suffix="+" />
                </div>
                <div className="text-sm text-muted-foreground">Active Traders</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <div className="text-3xl font-bold text-accent-gold stats-counter">
                  <AnimatedCounter target={4} suffix="+" />
                </div>
                <div className="text-sm text-muted-foreground">Platforms</div>
              </motion.div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <img
              src="https://images.unsplash.com/photo-1559526324-4b87b5e36e44?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&h=800"
              alt="Digital financial technology and AI infrastructure visualization"
              className="rounded-2xl shadow-2xl w-full h-auto"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
