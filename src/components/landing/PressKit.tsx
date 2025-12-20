import { motion } from "framer-motion";
import { Download, Image, FileText, Package } from "lucide-react";
import { Button } from "@/components/ui/button";

const pressAssets = [
  {
    icon: Image,
    title: "App Screenshots",
    description: "High-resolution screenshots for all devices",
    format: "PNG, 2x & 3x",
  },
  {
    icon: Package,
    title: "Logo Package",
    description: "Full logo suite in multiple formats",
    format: "SVG, PNG, EPS",
  },
  {
    icon: FileText,
    title: "Brand Guidelines",
    description: "Colors, typography, and usage rules",
    format: "PDF",
  },
];

const PressKit = () => {
  return (
    <section id="press" className="section-padding bg-muted/30">
      <div className="container-narrow mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="text-accent font-medium text-sm uppercase tracking-wider">
            For Media Partners
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
            Press Kit
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Download official assets for press coverage and media use. 
            All materials are free to use with proper attribution.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {pressAssets.map((asset, index) => (
            <motion.div
              key={asset.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card border border-border rounded-2xl p-6 text-center hover:border-accent/50 transition-colors"
            >
              <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <asset.icon className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">{asset.title}</h3>
              <p className="text-sm text-muted-foreground mb-3">{asset.description}</p>
              <span className="text-xs text-accent font-medium">{asset.format}</span>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center"
        >
          <Button variant="accent" size="lg" className="gap-2">
            <Download size={18} />
            Download Full Press Kit
          </Button>
          <p className="text-sm text-muted-foreground mt-4">
            For media inquiries, contact{" "}
            <a href="mailto:press@appname.com" className="text-accent hover:underline">
              press@appname.com
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default PressKit;
