import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Bot, TrendingUp, Rocket } from "lucide-react";

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const features = [
    {
      icon: Bot,
      title: "AI-First Infrastructure",
      description: "Every product integrates AI as a core driver of decision-making and automation.",
      color: "text-accent-blue bg-accent-blue"
    },
    {
      icon: TrendingUp,
      title: "Empowerment Through Technology",
      description: "We lower barriers for traders and investors to succeed globally.",
      color: "text-accent-green bg-accent-green"
    },
    {
      icon: Rocket,
      title: "Execution at Scale",
      description: "We deploy profitable, scalable platforms with real users and revenue.",
      color: "text-accent-gold bg-accent-gold"
    }
  ];

  return (
    <section id="about" className="py-20 bg-secondary" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.8 }}
          >
            <img
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&h=800"
              alt="Professional business team in modern office"
              className="rounded-2xl shadow-xl w-full h-auto"
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl lg:text-5xl font-black mb-6">
              Who We <span className="text-accent-green">Are</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Hybrid Holdings is a Delaware-based private holding company built at the intersection of finance, AI, and automation. We oversee and invest in cutting-edge platforms reshaping the future of trading, wealth-building, and digital community ecosystems.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Founded by Jamaur Johnson, a fintech entrepreneur with deep roots in both Wall Street and Main Street, Hybrid Holdings combines the agility of a startup with the power of institutional structure.
            </p>
            
            <div className="space-y-4">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  className="flex items-center space-x-4"
                >
                  <div className={`w-8 h-8 ${feature.color.split(' ')[1]} rounded-full flex items-center justify-center`}>
                    <feature.icon className={`${feature.color.split(' ')[0]} text-white text-sm`} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
