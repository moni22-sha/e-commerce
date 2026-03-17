/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ShoppingBag, 
  ShoppingCart,
  Clock,
  MousePointerClick,
  Zap, 
  Smartphone, 
  Search, 
  LayoutDashboard, 
  CheckCircle2, 
  ArrowRight, 
  Menu, 
  X, 
  ChevronDown,
  Globe,
  MessageSquare,
  Phone,
  Mail,
  MapPin,
  BarChart3,
  ShieldCheck,
  Package,
  CreditCard,
  Truck,
  Users,
  Tag
} from 'lucide-react';

// --- Components ---

const Logo = () => (
  <div className="flex items-center group cursor-pointer">
    <span className="text-2xl font-display font-bold tracking-tighter">thebot.</span>
  </div>
);

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: 'https://www.botdigitalsolutions.com/' },
    { name: 'Approach', href: '#approach' },
    { name: 'Features', href: '#features' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-[#050505]/80 backdrop-blur-md py-4 border-bottom border-white/5' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Logo />

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-sm font-medium text-white/70 hover:text-white transition-colors flex items-center gap-1"
            >
              {link.name}
            </a>
          ))}
        </div>

        <div className="hidden lg:block">
          <a 
            href="https://freeaudit.thebot.agency/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2.5 rounded-full brand-gradient text-white text-sm font-semibold hover:scale-105 transition-all duration-300 shadow-lg shadow-brand-primary/20 inline-block"
          >
            Free Audit Tool
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-[#050505] border-t border-white/10 p-6 lg:hidden"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  className="text-lg font-medium text-white/70 hover:text-white"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <a 
                href="https://freeaudit.thebot.agency/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 w-full px-6 py-3 rounded-full border border-white/20 text-sm font-semibold hover:bg-white hover:text-black transition-all inline-block text-center"
              >
                Free Audit Tool
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-0 left-1/4 w-full max-w-4xl h-96 bg-brand-primary/10 blur-[120px] rounded-full -z-10"></div>
      <div className="absolute bottom-0 right-1/4 w-full max-w-4xl h-96 bg-brand-secondary/5 blur-[120px] rounded-full -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8">
            <div className="w-2 h-2 rounded-full bg-brand-primary animate-pulse"></div>
            <span className="text-xs font-bold uppercase tracking-widest text-white/60">Powering the future of ecommerce</span>
          </div>
          
          <h1 className="text-5xl lg:text-8xl font-display font-bold tracking-tight mb-8 leading-[0.9]">
            AI-Driven Ecommerce <br />
            <span className="gradient-text">& Technology Solutions.</span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg lg:text-xl text-white/60 mb-12 leading-relaxed">
            We help modern businesses scale faster through AI-powered insights, 
            and scalable technology strategy we designed for global growth.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="w-full sm:w-auto px-8 py-4 rounded-lg brand-gradient text-white font-bold hover:scale-105 transition-transform flex items-center justify-center gap-2 shadow-lg shadow-brand-primary/20">
              Book a Demo <ArrowRight size={18} />
            </button>
            <a 
              href="https://freeaudit.thebot.agency/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 rounded-lg border border-white/20 font-bold hover:bg-white/5 transition-colors inline-block text-center"
            >
              Run Free Audit
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const ProblemSection = () => {
  const issues = [
    { title: 'Slow Loading Speed', icon: <Clock className="text-brand-secondary" /> },
    { title: 'Abandoned Carts', icon: <ShoppingCart className="text-brand-primary" /> },
    { title: 'Poor Mobile Experience', icon: <Smartphone className="text-brand-accent" /> },
    { title: 'Complex Checkout', icon: <CreditCard className="text-brand-secondary" /> },
    { title: 'Weak Product Structure', icon: <LayoutDashboard className="text-brand-primary" /> },
    { title: 'No Clear CTA', icon: <MousePointerClick className="text-brand-accent" /> },
  ];

  return (
    <section className="py-24 bg-white/2">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl lg:text-5xl font-display font-bold mb-8">
              Why Most Ecommerce <br />
              <span className="text-white/40">Websites Fail to Sell</span>
            </h2>
            <p className="text-lg text-white/60 mb-8 leading-relaxed">
              Many ecommerce stores fail because they are built using templates without considering performance and user behavior. These issues lead to high bounce rates and abandoned carts.
            </p>
            <div className="space-y-4">
              {['High bounce rates', 'Low conversion rates', 'Abandoned carts', 'Reduced customer trust'].map((item) => (
                <div key={item} className="flex items-center gap-3 text-white/80">
                  <CheckCircle2 size={18} className="text-brand-secondary" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            {issues.map((issue, idx) => (
              <motion.div 
                key={issue.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.1 }}
                className="glass-card p-6 flex flex-col gap-4 group hover:border-brand-primary/30 transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-brand-primary/10 transition-colors">
                  {issue.icon}
                </div>
                <h3 className="font-semibold text-sm">{issue.title}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const ApproachSection = () => {
  const steps = [
    {
      title: "Performance-Optimized",
      desc: "Speed is critical. We ensure fast loading, lightweight, and scalable stores capable of handling high traffic.",
      icon: <Zap size={24} />
    },
    {
      title: "Conversion-Focused",
      desc: "Clear product presentation, easy navigation, and simplified checkout to reduce friction and improve sales.",
      icon: <BarChart3 size={24} />
    },
    {
      title: "Mobile-First Experience",
      desc: "Fully responsive and optimized for mobile users, ensuring a seamless experience on any screen size.",
      icon: <Smartphone size={24} />
    },
    {
      title: "Unique-Ready Structure",
      desc: "Unique-friendly URLs, optimized product pages, and category structures to rank and attract organic traffic.",
      icon: <Search size={24} />
    }
  ];

  return (
    <section id="approach" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-6xl font-display font-bold mb-6">Our Approach</h2>
          <p className="text-white/60 max-w-2xl mx-auto">We build ecommerce websites with a focus on performance, usability, and business growth.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, idx) => (
            <div key={idx} className="glass-card p-8 hover:bg-white/10 transition-colors group">
              <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {step.icon}
              </div>
              <h3 className="text-xl font-bold mb-4">{step.title}</h3>
              <p className="text-white/50 text-sm leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FeaturesSection = () => {
  const features = [
    { 
      name: "Product Catalog", 
      desc: "AI-powered search and filtering for seamless discovery.",
      icon: <Package size={24} />,
    },
    { 
      name: "Secure Checkout", 
      desc: "Enterprise-grade security with multi-layer encryption.",
      icon: <ShieldCheck size={24} />,
    },
    { 
      name: "Payment Gateway", 
      desc: "Support for 100+ global payment methods.",
      icon: <CreditCard size={24} />,
    },
    { 
      name: "Order Tracking", 
      desc: "Real-time updates and automated notifications.",
      icon: <Truck size={24} />,
    },
    { 
      name: "Customer Accounts", 
      desc: "Personalized dashboards and loyalty integration.",
      icon: <Users size={24} />,
    },
    { 
      name: "Discounts & Offers", 
      desc: "Dynamic pricing and smart coupon management.",
      icon: <Tag size={24} />,
    },
  ];

  return (
    <section id="features" className="relative py-24 bg-white/2 overflow-hidden">
      {/* Glacier Effect Backgrounds */}
      <div className="absolute top-0 right-0 w-full max-w-4xl h-96 bg-brand-secondary/10 blur-[120px] rounded-full -z-10 opacity-30"></div>
      <div className="absolute bottom-0 left-0 w-full max-w-4xl h-96 bg-white/5 blur-[120px] rounded-full -z-10 opacity-20"></div>
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-6xl font-display font-bold mb-6">
            Powerful <span className="text-white/40">Features</span>
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            Everything you need to build, manage, and scale your global ecommerce empire.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ 
                opacity: 1, 
                y: [0, -8, 0],
              }}
              transition={{ 
                opacity: { duration: 0.5, delay: idx * 0.1 },
                y: {
                  duration: 6 + idx,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: idx * 0.2
                }
              }}
              viewport={{ once: true }}
              className="glass-card p-8 group hover:border-brand-secondary/30 transition-all duration-500 flex flex-col justify-between relative overflow-hidden h-full"
            >
              {/* Frosty Shimmer Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none"></div>
              <div className="absolute -top-[100%] -left-[100%] w-[300%] h-[300%] bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.02)_0%,transparent_50%)] pointer-events-none animate-pulse"></div>
              
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6 group-hover:bg-brand-secondary/10 group-hover:scale-110 transition-all">
                  {React.cloneElement(f.icon as React.ReactElement, { className: "text-white group-hover:text-brand-secondary transition-colors" })}
                </div>
                <h3 className="text-xl font-bold mb-3">{f.name}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{f.desc}</p>
              </div>
              <div className="mt-8 opacity-0 group-hover:opacity-100 transition-opacity relative z-10">
                <div className="text-xs font-bold uppercase tracking-widest text-brand-secondary flex items-center gap-2">
                  Learn More <ArrowRight size={14} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const PricingSection = () => {
  const plans = [
    {
      name: "Get Started Plan",
      hours: "10 hours",
      price: "$800",
      desc: "Businesses looking for expert execution on a specific marketing task every week.",
      features: [
        "10 hours of dedicated work per week",
        "1 focused task per week",
        "Optimized strategy execution"
      ]
    },
    {
      name: "Boost Plan",
      hours: "20 hours",
      price: "$2,000",
      desc: "Businesses ready to scale with more execution, strategic work audits, and optimizations.",
      features: [
        "20 hours of dedicated work per week",
        "2 focused tasks per week",
        "Weekly work audit & performance review"
      ],
      popular: true
    },
    {
      name: "Full Force Agency Plan",
      hours: "30+ hours",
      price: "$3,200",
      desc: "Businesses that need an end-to-end digital marketing team to take full control.",
      features: [
        "30+ hours of dedicated work per week",
        "3 high-priority tasks per week",
        "Deep-dive business analysis"
      ]
    }
  ];

  return (
    <section id="pricing" className="relative py-24 overflow-hidden">
      {/* Glacier Effect Backgrounds */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-6xl h-[600px] bg-brand-secondary/10 blur-[150px] rounded-full -z-10 opacity-50"></div>
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-white/5 blur-[120px] rounded-full -z-10"></div>
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-brand-secondary/5 blur-[120px] rounded-full -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-6xl font-display font-bold mb-6">Flexible Growth Plans</h2>
          <p className="text-white/60 max-w-2xl mx-auto">Choose a plan that fits your business needs and scale as you grow.</p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {plans.map((plan, idx) => (
            <motion.div 
              key={idx} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ 
                opacity: 1, 
                y: [0, -12, 0],
              }}
              viewport={{ once: true }}
              transition={{ 
                opacity: { duration: 0.5, delay: idx * 0.1 },
                y: {
                  duration: 8 + idx,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: idx * 0.3
                }
              }}
              whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
              className={`glass-card p-10 flex flex-col relative overflow-hidden transition-all duration-500 ${plan.popular ? 'border-brand-primary/50 scale-105 z-10 shadow-2xl shadow-brand-primary/20 bg-white/10' : 'border-white/10'}`}
            >
              {/* Frosty Shimmer Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none"></div>
              {plan.popular && <div className="absolute inset-0 bg-brand-primary/5 pointer-events-none"></div>}
              <div className="absolute -top-[100%] -left-[100%] w-[300%] h-[300%] bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_0%,transparent_50%)] pointer-events-none animate-pulse"></div>
              
              {plan.popular && (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5, duration: 0.3 }}
                  className="absolute -top-0 left-1/2 -translate-x-1/2 px-6 py-1.5 brand-gradient text-white text-[10px] font-black rounded-full uppercase tracking-[0.2em] shadow-lg shadow-brand-primary/30"
                >
                  Most Popular
                </motion.div>
              )}
              <div className="mb-8">
                <h3 className={`text-sm font-bold uppercase tracking-widest mb-2 ${plan.popular ? 'text-brand-primary' : 'text-white/60'}`}>{plan.name}</h3>
                <div className={`text-4xl font-bold mb-2 ${plan.popular ? 'text-white' : 'text-white/90'}`}>{plan.hours}</div>
                <p className="text-white/40 text-sm">{plan.desc}</p>
              </div>
              
              <div className="mb-8">
                <div className="text-3xl font-bold">
                  {plan.price} <span className="text-lg text-white/40 font-normal">/ Month</span>
                </div>
                <div className="text-xs text-white/30 mt-1">$80-$100 per hour</div>
              </div>

              <div className="flex-grow space-y-4 mb-10">
                <div className={`text-sm font-bold ${plan.popular ? 'text-brand-primary' : 'text-white/80'}`}>What's Included?</div>
                {plan.features.map((f, i) => (
                  <div key={i} className="flex items-start gap-3 text-sm text-white/50">
                    <CheckCircle2 size={16} className={`${plan.popular ? 'text-brand-primary' : 'text-white/80'} mt-0.5`} />
                    <span className={plan.popular ? 'text-white/70' : ''}>{f}</span>
                  </div>
                ))}
              </div>

              <a 
                href="https://freeaudit.thebot.agency/"
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full py-4 rounded-lg font-bold transition-all inline-block text-center ${plan.popular ? 'brand-gradient text-white shadow-lg shadow-brand-primary/20 hover:scale-[1.02]' : 'border border-white/20 hover:bg-white/5'}`}
              >
                Free Audit Tool
              </a>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Glacier Bottom Divider */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-secondary/30 to-transparent"></div>
      <div className="absolute -bottom-24 left-1/2 -translate-x-1/2 w-full max-w-4xl h-48 bg-brand-secondary/5 blur-[100px] rounded-full -z-10"></div>
    </section>
  );
};

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 bg-white/2">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-4xl lg:text-6xl font-display font-bold mb-8">Let's Connect <span className="text-white/40">Now</span></h2>
            <p className="text-lg text-white/60 mb-12">Fill out the form below and our team will get back to you shortly.</p>
            
            <div className="space-y-8">
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 rounded-full bg-brand-primary/10 flex items-center justify-center">
                  <Mail className="text-brand-primary" />
                </div>
                <div>
                  <div className="text-sm text-white/40">Email Us</div>
                  <div className="text-lg font-medium">sales@thebot.agency</div>
                </div>
              </div>
              
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 rounded-full bg-brand-secondary/10 flex items-center justify-center">
                  <Phone className="text-brand-secondary" />
                </div>
                <div>
                  <div className="text-sm text-white/40">Call Us</div>
                  <div className="text-lg font-medium">+91 9892969648</div>
                </div>
              </div>

              <div className="flex items-center gap-6">
                <div className="w-12 h-12 rounded-full bg-brand-accent/10 flex items-center justify-center">
                  <MapPin className="text-brand-accent" />
                </div>
                <div>
                  <div className="text-sm text-white/40">Mumbai Office</div>
                  <div className="text-lg font-medium">1007/1008 A, Mahavir Platinum, Mumbai</div>
                </div>
              </div>
            </div>
          </div>

          <div className="glass-card p-10">
            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-white/40">First Name</label>
                  <input type="text" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-brand-primary/50" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-white/40">Last Name</label>
                  <input type="text" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-brand-primary/50" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-white/40">Work Email</label>
                <input type="email" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-brand-primary/50" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-white/40">Phone Number</label>
                <input type="tel" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-brand-primary/50" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-white/40">Message</label>
                <textarea rows={4} className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-brand-primary/50"></textarea>
              </div>
              <button className="w-full py-4 rounded-lg brand-gradient text-white font-bold hover:scale-[1.02] transition-transform shadow-lg shadow-brand-primary/20">
                Book Demo
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-20 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 mb-20">
          <div className="col-span-2 lg:col-span-1">
            <div className="mb-6">
              <Logo />
            </div>
            <p className="text-white/40 text-sm leading-relaxed">
              Building high-performance ecommerce platforms that drive growth and revenue for B2C businesses.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-sm mb-6 uppercase tracking-widest">Services</h4>
            <ul className="space-y-4 text-sm text-white/40">
              <li><a href="#" className="hover:text-white transition-colors">Web Development</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Unique Optimization</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Lead Generation</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Branding</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-sm mb-6 uppercase tracking-widest">Industries</h4>
            <ul className="space-y-4 text-sm text-white/40">
              <li><a href="#" className="hover:text-white transition-colors">B2B Businesses</a></li>
              <li><a href="#" className="hover:text-white transition-colors">B2C Businesses</a></li>
              <li><a href="#" className="hover:text-white transition-colors">SaaS Companies</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Startups</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-sm mb-6 uppercase tracking-widest">Company</h4>
            <ul className="space-y-4 text-sm text-white/40">
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

          <div className="col-span-2 md:col-span-1">
            <h4 className="font-bold text-sm mb-6 uppercase tracking-widest">Follow Us</h4>
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 cursor-pointer">
                <Globe size={18} className="text-white/60" />
              </div>
              <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 cursor-pointer">
                <MessageSquare size={18} className="text-white/60" />
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:row items-center justify-between pt-10 border-t border-white/5 text-xs text-white/30">
          <p>© 2024 TheBot. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">Terms & Conditions</a>
            <a href="#" className="hover:text-white">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen selection:bg-white selection:text-black">
      <Navbar />
      <main>
        <Hero />
        <ProblemSection />
        <ApproachSection />
        <FeaturesSection />
        <PricingSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
