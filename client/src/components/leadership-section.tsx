import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, Code, Bot, Trophy, UserPlus, Handshake } from "lucide-react";

export default function LeadershipSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const achievements = [
    {
      icon: TrendingUp,
      text: "8+ years trading experience",
      color: "text-accent-green"
    },
    {
      icon: Code,
      text: "Fintech product architect",
      color: "text-accent-blue"
    },
    {
      icon: Bot,
      text: "AI-integrated systems builder",
      color: "text-accent-gold"
    },
    {
      icon: Trophy,
      text: "Former athlete, serial entrepreneur",
      color: "text-accent-green"
    }
  ];

  return (
    <section id="leadership" className="py-20 bg-background" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-black mb-6">
            Our <span className="text-accent-green">Leadership</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Visionary leaders driving innovation at the intersection of finance, technology, and artificial intelligence.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Jamaur Johnson */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
          >
            <Card className="glass-card rounded-2xl p-8 text-center h-full">
              <CardContent className="p-0">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400"
                  alt="Jamaur Johnson - Founder & CEO"
                  className="w-32 h-32 rounded-full mx-auto mb-6 object-cover border-4 border-accent-blue"
                />
                <h3 className="text-2xl font-bold mb-2">Jamaur Johnson</h3>
                <p className="text-accent-blue mb-4">Founder & CEO</p>
                <ul className="text-sm text-muted-foreground space-y-2 text-left">
                  {achievements.map((achievement, index) => (
                    <li key={index} className="flex items-center">
                      <achievement.icon className={`${achievement.color} mr-2 h-4 w-4`} />
                      {achievement.text}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>
          
          {/* Advisory Board Placeholder */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Card className="glass-card rounded-2xl p-8 text-center h-full">
              <CardContent className="p-0">
                <div className="w-32 h-32 rounded-full mx-auto mb-6 bg-gradient-to-r from-accent-blue to-accent-green flex items-center justify-center">
                  <UserPlus className="text-white text-4xl" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Advisory Board</h3>
                <p className="text-accent-green mb-4">Coming Soon</p>
                <p className="text-sm text-muted-foreground">
                  We're assembling a world-class advisory board of industry veterans, institutional investors, and technology leaders.
                </p>
              </CardContent>
            </Card>
          </motion.div>
          
          {/* Strategic Partners */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Card className="glass-card rounded-2xl p-8 text-center h-full">
              <CardContent className="p-0">
                <div className="w-32 h-32 rounded-full mx-auto mb-6 bg-gradient-to-r from-accent-gold to-accent-blue flex items-center justify-center">
                  <Handshake className="text-white text-4xl" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Strategic Partners</h3>
                <p className="text-accent-gold mb-4">Join Our Team</p>
                <p className="text-sm text-muted-foreground">
                  Interested in joining our leadership team? We're always looking for exceptional talent.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
