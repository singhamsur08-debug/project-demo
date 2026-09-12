import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { websiteData } from '../data/websiteData';

interface CounterProps {
  end: number;
  suffix?: string;
  duration?: number;
  decimals?: boolean;
}

const AnimatedCounter: React.FC<CounterProps> = ({ end, suffix = '', duration = 1.8 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      // easeOutQuart
      const easeProgress = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeProgress * end));

      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        setCount(end);
      }
    };

    window.requestAnimationFrame(step);
  }, [isInView, end, duration]);

  return (
    <span ref={ref} className="font-serif font-semibold text-3xl sm:text-4xl md:text-5xl text-[#171717]">
      {end === 1 ? '01' : count}
      <span className="text-[#B89B5E] text-2xl sm:text-3xl md:text-4xl ml-0.5">{suffix}</span>
    </span>
  );
};

export const Stats: React.FC = () => {
  return (
    <section id="stats" className="relative z-20 bg-[#F2ECE1] border-b border-[#E6DECE] py-12 md:py-16">
      <div className="container-custom">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-[#E6DECE]/80">
          {websiteData.stats.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`flex flex-col items-center text-center px-4 ${idx > 0 ? 'pt-6 sm:pt-0' : ''}`}
            >
              <div className="mb-2">
                <AnimatedCounter end={stat.value} suffix={stat.suffix} />
              </div>
              <h3 className="font-sans font-medium text-sm md:text-base text-[#171717] tracking-wide">
                {stat.label}
              </h3>
              {stat.description && (
                <p className="text-xs text-[#77716A] mt-1 max-w-[200px] leading-relaxed hidden sm:block">
                  {stat.description}
                </p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
