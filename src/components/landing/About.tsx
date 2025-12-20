import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const benefits = [
  "Intuitive interface designed for everyone",
  "Works offline – no internet needed",
  "Regular updates with new features",
  "24/7 customer support available",
  "Privacy-first approach to your data",
];

const About = () => {
  return (
    <section id="about" className="section-padding">
      <div className="container-narrow mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">
              About
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 mb-6">
              Built for People Who Value Their Time
            </h2>
            <p className="text-muted-foreground text-lg mb-6">
              We created this app with a simple mission: help people focus on what matters most. 
              No complicated features, no steep learning curve – just a beautifully designed tool 
              that works the way you think.
            </p>
            <p className="text-muted-foreground mb-8">
              Whether you're managing personal projects, tracking habits, or coordinating with 
              a team, our app adapts to your workflow and helps you stay organized effortlessly.
            </p>

            {/* Benefits List */}
            <ul className="space-y-3">
              {benefits.map((benefit) => (
                <li key={benefit} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-foreground">{benefit}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-square rounded-3xl bg-gradient-to-br from-accent/20 via-accent/10 to-transparent p-8 lg:p-12">
              <div className="w-full h-full rounded-2xl bg-card border border-border shadow-xl flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="text-6xl font-bold text-gradient mb-4">2M+</div>
                  <p className="text-muted-foreground text-lg">
                    Tasks completed by our users
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
