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

        {/* 3D Mission Flow Visualization */}
        <div className="relative mb-20">
          {/* 3D Container */}
          <div className="relative perspective-1000 w-full h-96 md:h-[500px] mb-16">
            {/* Central Hub */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotateY: -180 }}
              animate={isInView ? { opacity: 1, scale: 1, rotateY: 0 } : { opacity: 0, scale: 0.8, rotateY: -180 }}
              transition={{ duration: 1.2, delay: 0.3 }}
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20"
            >
              <div className="w-32 h-32 md:w-40 md:h-40 bg-gradient-to-br from-accent-blue via-accent-green to-accent-gold rounded-full flex items-center justify-center shadow-2xl border-4 border-white/20">
                <div className="text-white text-center">
                  <Heart className="text-3xl md:text-4xl mx-auto mb-2" />
                  <div className="text-xs md:text-sm font-bold">HYBRID<br />HOLDINGS</div>
                </div>
              </div>
            </motion.div>

            {/* Mission Pillars arranged in 3D space */}
            {missionPillars.map((pillar, index) => {
              const positions = [
                { top: '15%', left: '15%', transform: 'rotateX(15deg) rotateY(-30deg)' },
                { top: '15%', right: '15%', transform: 'rotateX(15deg) rotateY(30deg)' },
                { bottom: '15%', left: '50%', transform: 'translateX(-50%) rotateX(-15deg)' }
              ];
              
              return (
                <motion.div
                  key={pillar.title}
                  initial={{ opacity: 0, scale: 0.5, rotateX: 90 }}
                  animate={isInView ? { 
                    opacity: 1, 
                    scale: 1, 
                    rotateX: 0,
                    y: [0, -10, 0]
                  } : { opacity: 0, scale: 0.5, rotateX: 90 }}
                  transition={{ 
                    duration: 1,
                    delay: 0.5 + index * 0.2,
                    y: {
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 0.5
                    }
                  }}
                  className="absolute"
                  style={positions[index]}
                >
                  <Card className="glass-card w-48 md:w-56 p-6 hover:transform hover:scale-110 transition-all duration-500 shadow-xl border border-white/20">
                    <CardContent className="p-0 text-center">
                      <div className={`w-12 h-12 ${pillar.color.split(' ')[1]} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                        <pillar.icon className="text-white text-xl" />
                      </div>
                      <h3 className="text-lg font-bold mb-3">{pillar.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {pillar.description.substring(0, 80)}...
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}

            {/* Connecting Lines */}
            {[0, 1, 2].map((index) => (
              <motion.div
                key={`line-${index}`}
                initial={{ opacity: 0, pathLength: 0 }}
                animate={isInView ? { opacity: 0.3, pathLength: 1 } : { opacity: 0, pathLength: 0 }}
                transition={{ duration: 1.5, delay: 1 + index * 0.2 }}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              >
                <svg width="400" height="400" className="overflow-visible">
                  <motion.path
                    d={`M 200 200 L ${index === 0 ? '50 50' : index === 1 ? '350 50' : '200 350'}`}
                    stroke="url(#gradient)"
                    strokeWidth="2"
                    fill="none"
                    strokeDasharray="5,5"
                    initial={{ pathLength: 0 }}
                    animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
                    transition={{ duration: 1.5, delay: 1 + index * 0.2 }}
                  />
                  <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="hsl(var(--accent-blue))" />
                      <stop offset="50%" stopColor="hsl(var(--accent-green))" />
                      <stop offset="100%" stopColor="hsl(var(--accent-gold))" />
                    </linearGradient>
                  </defs>
                </svg>
              </motion.div>
            ))}
          </div>

          {/* Interactive Mission Details */}
          <div className="grid md:grid-cols-3 gap-8">
            {missionPillars.map((pillar, index) => (
              <motion.div
                key={`detail-${pillar.title}`}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.8, delay: 1.5 + index * 0.1 }}
                className="group"
              >
                <Card className="glass-card rounded-2xl p-6 h-full hover:transform hover:scale-105 transition-all duration-500 cursor-pointer border border-white/10 hover:border-white/30">
                  <CardContent className="p-0">
                    <div className="flex items-center mb-4">
                      <div className={`w-12 h-12 ${pillar.color.split(' ')[1]} rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300`}>
                        <pillar.icon className="text-white text-xl" />
                      </div>
                      <ArrowRight className="text-accent-blue opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    <h3 className="text-xl font-bold mb-3 group-hover:text-accent-blue transition-colors duration-300">
                      {pillar.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed text-sm">
                      {pillar.description}
                    </p>
                  </CardContent>
                </Card>
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