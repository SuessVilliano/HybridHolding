import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Home, GraduationCap, Heart, Leaf, Shield, Users, ArrowRight } from "lucide-react";

export default function MissionSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const missionPillars = [
    {
      icon: Home,
      title: "Affordable Housing",
      description: "Partnering with 3D-printed construction companies to reduce building costs and end homelessness through sustainable housing solutions.",
      color: "text-accent-blue bg-accent-blue"
    },
    {
      icon: GraduationCap,
      title: "Financial Education",
      description: "Offering free educational programs, mentorship, and Hybrid Academy courses to empower individuals with trading and financial literacy.",
      color: "text-accent-green bg-accent-green"
    },
    {
      icon: Heart,
      title: "Community Impact",
      description: "Dedicating 5-10% of annual profits to non-profits, charities, and community funds focused on housing and financial empowerment.",
      color: "text-accent-gold bg-accent-gold"
    }
  ];

  const esgCommitments = [
    {
      icon: Leaf,
      title: "Environmental",
      description: "Green construction advocacy and sustainable practices",
      color: "text-accent-green"
    },
    {
      icon: Users,
      title: "Social",
      description: "Affordable housing and financial literacy programs",
      color: "text-accent-blue"
    },
    {
      icon: Shield,
      title: "Governance",
      description: "Transparent operations and stakeholder collaboration",
      color: "text-accent-gold"
    }
  ];

  return (
    <section id="mission" className="py-20 bg-background" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-black mb-6">
            Our <span className="text-accent-gold">Mission</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto mb-8">
            At Hybrid Holdings, our mission is to build a better world by empowering individuals through financial literacy, innovative trading systems, and sustainable giving. We believe success is only meaningful when it's shared.
          </p>
          <div className="bg-gradient-to-r from-accent-blue/20 via-accent-green/20 to-accent-gold/20 p-8 rounded-2xl">
            <p className="text-2xl font-bold mb-4">
              "We are not just traders — we are <span className="text-accent-green">change makers</span>."
            </p>
            <p className="text-lg text-muted-foreground">
              Harnessing financial innovation to empower individuals, provide affordable housing, and end homelessness through sustainable practices and dedicated giving.
            </p>
          </div>
        </motion.div>

        {/* Responsive Mission Flow Visualization */}
        <div className="relative mb-20">
          {/* Desktop 3D View */}
          <div className="hidden md:block relative perspective-1000 w-full h-[500px] mb-16">
            {/* Central Hub */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 1.2, delay: 0.3 }}
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20"
            >
              <div className="w-40 h-40 bg-gradient-to-br from-accent-blue via-accent-green to-accent-gold rounded-full flex items-center justify-center shadow-2xl border-4 border-white/20">
                <div className="text-white text-center">
                  <Heart className="text-4xl mx-auto mb-2" />
                  <div className="text-sm font-bold">HYBRID<br />HOLDINGS</div>
                </div>
              </div>
            </motion.div>

            {/* Connecting Lines */}
            <svg className="absolute inset-0 w-full h-full" style={{ zIndex: 1 }}>
              <defs>
                <linearGradient id="line-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="hsl(var(--accent-blue))" />
                  <stop offset="50%" stopColor="hsl(var(--accent-green))" />
                  <stop offset="100%" stopColor="hsl(var(--accent-gold))" />
                </linearGradient>
              </defs>
              {/* Lines connecting center to each pillar */}
              <motion.line
                x1="50%" y1="50%"
                x2="25%" y2="25%"
                stroke="url(#line-gradient)"
                strokeWidth="2"
                strokeDasharray="8,4"
                opacity="0.4"
                initial={{ pathLength: 0 }}
                animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
                transition={{ duration: 1.5, delay: 1 }}
              />
              <motion.line
                x1="50%" y1="50%"
                x2="75%" y2="25%"
                stroke="url(#line-gradient)"
                strokeWidth="2"
                strokeDasharray="8,4"
                opacity="0.4"
                initial={{ pathLength: 0 }}
                animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
                transition={{ duration: 1.5, delay: 1.2 }}
              />
              <motion.line
                x1="50%" y1="50%"
                x2="50%" y2="80%"
                stroke="url(#line-gradient)"
                strokeWidth="2"
                strokeDasharray="8,4"
                opacity="0.4"
                initial={{ pathLength: 0 }}
                animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
                transition={{ duration: 1.5, delay: 1.4 }}
              />
            </svg>

            {/* Mission Pillars */}
            {missionPillars.map((pillar, index) => {
              const positions = [
                { top: '10%', left: '10%' },
                { top: '10%', right: '10%' },
                { bottom: '10%', left: '50%', transform: 'translateX(-50%)' }
              ];
              
              return (
                <motion.div
                  key={pillar.title}
                  initial={{ opacity: 0, scale: 0.5, y: 50 }}
                  animate={isInView ? { 
                    opacity: 1, 
                    scale: 1, 
                    y: 0
                  } : { opacity: 0, scale: 0.5, y: 50 }}
                  transition={{ 
                    duration: 1,
                    delay: 0.5 + index * 0.2
                  }}
                  className="absolute z-10"
                  style={positions[index]}
                >
                  <Card className="glass-card w-56 p-6 hover:transform hover:scale-110 transition-all duration-500 shadow-xl border border-white/20">
                    <CardContent className="p-0 text-center">
                      <div className={`w-12 h-12 ${pillar.color.split(' ')[1]} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                        <pillar.icon className="text-white text-xl" />
                      </div>
                      <h3 className="text-lg font-bold mb-3">{pillar.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {pillar.description.substring(0, 100)}...
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>

          {/* Mobile Vertical Flow */}
          <div className="md:hidden space-y-8 mb-16">
            {/* Central Mission Statement */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 1.2 }}
              className="text-center"
            >
              <div className="w-24 h-24 bg-gradient-to-br from-accent-blue via-accent-green to-accent-gold rounded-full flex items-center justify-center mx-auto mb-4 shadow-xl">
                <Heart className="text-white text-2xl" />
              </div>
              <h3 className="text-xl font-bold">Hybrid Holdings Mission</h3>
              <p className="text-muted-foreground text-sm mt-2">Empowering communities through social impact</p>
            </motion.div>

            {/* Vertical Flow with Arrows */}
            {missionPillars.map((pillar, index) => (
              <motion.div
                key={`mobile-${pillar.title}`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                transition={{ duration: 0.8, delay: 0.3 + index * 0.2 }}
                className="relative"
              >
                <Card className="glass-card p-6 hover:transform hover:scale-105 transition-all duration-300">
                  <CardContent className="p-0">
                    <div className="flex items-start space-x-4">
                      <div className={`w-12 h-12 ${pillar.color.split(' ')[1]} rounded-xl flex items-center justify-center flex-shrink-0`}>
                        <pillar.icon className="text-white text-xl" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-bold mb-2">{pillar.title}</h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {pillar.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                {/* Arrow pointing to next item */}
                {index < missionPillars.length - 1 && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 0.6 } : { opacity: 0 }}
                    transition={{ duration: 0.5, delay: 1 + index * 0.2 }}
                    className="flex justify-center my-4"
                  >
                    <ArrowRight className="text-accent-blue transform rotate-90" size={24} />
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* ESG Integration */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h3 className="text-3xl font-bold text-center mb-8">
            ESG Integration at <span className="text-accent-blue">Hybrid Holdings</span>
          </h3>
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {esgCommitments.map((commitment, index) => (
              <motion.div
                key={commitment.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
              >
                <Card className="text-center p-6 glass-card rounded-xl h-full">
                  <CardContent className="p-0">
                    <commitment.icon className={`${commitment.color} text-4xl mb-4 mx-auto`} />
                    <h4 className="font-bold text-lg mb-2">{commitment.title}</h4>
                    <p className="text-sm text-muted-foreground">{commitment.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Impact Stats */}
          <div className="bg-gradient-to-r from-accent-blue/10 to-accent-green/10 p-8 rounded-2xl">
            <h4 className="text-2xl font-bold text-center mb-6">Our Commitment in Action</h4>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-accent-green mb-2">5-10%</div>
                <div className="text-sm text-muted-foreground">Annual Profits to Social Impact</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent-blue mb-2">Free</div>
                <div className="text-sm text-muted-foreground">Hybrid Academy Access</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent-gold mb-2">3D</div>
                <div className="text-sm text-muted-foreground">Printed Housing Partnerships</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent-green mb-2">100%</div>
                <div className="text-sm text-muted-foreground">Transparent ESG Reporting</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}