import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { BarChart3, Users, Settings, Trophy, Brain, GraduationCap, Mic, CheckSquare, Check } from "lucide-react";

export default function PortfolioSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const mainPlatforms = [
    {
      icon: BarChart3,
      title: "HybridFunding.co",
      subtitle: "The Flagship Prop Firm",
      description: "A proprietary trading firm offering retail traders funded accounts, challenge programs, and live capital backed by institutional-grade risk systems and AI risk modeling.",
      features: [
        "Real capital. Real opportunity.",
        "Simulated assessments with live tracking",
        "Funded in Forex, Futures, Crypto"
      ],
      color: "text-accent-green bg-accent-green"
    },
    {
      icon: Users,
      title: "TradeHybrid.club",
      subtitle: "Our Community Hub",
      description: "A social platform and financial education network for thousands of modern traders. Includes webinars, masterclasses, live sessions, and mentorships.",
      features: [
        "AI-curated learning paths",
        "Live chat, rooms, badges, ranks",
        "24/7 global trading tribe"
      ],
      color: "text-accent-blue bg-accent-blue"
    },
    {
      icon: Settings,
      title: "Trade Hybrid Pro",
      subtitle: "Advanced Tools & Terminal",
      description: "Premium dashboards and trader utilities, including automation tools, analytics, indicators, and portfolio builders — all powered by AI and smart APIs.",
      features: [
        "MT5/MT4 integrations",
        "Copy trading pipelines",
        "Smart trading bots and scripts"
      ],
      color: "text-accent-gold bg-accent-gold"
    },
    {
      icon: Trophy,
      title: "Trade House Battles",
      subtitle: "Gamified Trading Competitions",
      description: "A bracket-style battle arena for traders to prove their edge in real time. Think March Madness for market wizards — with rankings, rewards, and reputation on the line.",
      features: [
        "Team or solo entry",
        "Real-time performance tracking",
        "Auto-synced with funded trader data"
      ],
      color: "text-accent-green bg-accent-green"
    }
  ];

  const developmentAssets = [
    {
      icon: Brain,
      title: "Market Buddy AI",
      description: "AI-powered market analysis and insights",
      href: "https://www.marketbuddyai.com",
      color: "text-accent-blue"
    },
    {
      icon: GraduationCap,
      title: "Hybrid Academy",
      description: "Certified education programs",
      color: "text-accent-green"
    },
    {
      icon: Mic,
      title: "Trade Hybrid Agents",
      description: "AI-powered trading assistants",
      href: "https://tradehybridagents.com",
      color: "text-accent-gold"
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-background" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-black mb-6">
            Our <span className="text-accent-blue">Portfolio</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive ecosystem of fintech platforms driving innovation across trading, education, and AI infrastructure.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {mainPlatforms.map((platform, index) => (
            <motion.div
              key={platform.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <Card className="glass-card rounded-2xl p-8 group hover:transform hover:scale-105 transition-all duration-300 h-full">
                <CardContent className="p-0">
                  <div className="flex items-center mb-6">
                    <div className={`w-12 h-12 ${platform.color.split(' ')[1]} rounded-xl flex items-center justify-center mr-4`}>
                      <platform.icon className="text-white text-xl" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold">{platform.title}</h3>
                      <p className={platform.color.split(' ')[0]}>{platform.subtitle}</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-6">
                    {platform.description}
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    {platform.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <Check className={`${platform.color.split(' ')[0]} mr-2 h-4 w-4`} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
        
        {/* Additional Assets in Development */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold text-center mb-8">Additional Assets in Development</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {developmentAssets.map((asset, index) => (
              <motion.div
                key={asset.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
              >
                {asset.href ? (
                  <a href={asset.href} target="_blank" rel="noopener noreferrer">
                    <Card className="text-center p-6 glass-card rounded-xl h-full hover:transform hover:scale-105 transition-all duration-300 cursor-pointer">
                      <CardContent className="p-0">
                        <asset.icon className={`${asset.color} text-3xl mb-4 mx-auto`} />
                        <h4 className="font-semibold mb-2">{asset.title}</h4>
                        <p className="text-sm text-muted-foreground">{asset.description}</p>
                      </CardContent>
                    </Card>
                  </a>
                ) : (
                  <Card className="text-center p-6 glass-card rounded-xl h-full">
                    <CardContent className="p-0">
                      <asset.icon className={`${asset.color} text-3xl mb-4 mx-auto`} />
                      <h4 className="font-semibold mb-2">{asset.title}</h4>
                      <p className="text-sm text-muted-foreground">{asset.description}</p>
                    </CardContent>
                  </Card>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
