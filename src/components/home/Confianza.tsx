import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { Users, TrendingUp, Award, Zap } from "lucide-react";

interface CounterProps {
  to: number;
  suffix?: string;
  duration?: number;
}

function Counter({ to, suffix = "", duration = 2 }: CounterProps) {
  const motionValue = useMotionValue(0);
  const rounded = useTransform(motionValue, (v) => Math.round(v));

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.6,
  });

  useEffect(() => {
    if (!inView) return;

    const controls = animate(motionValue, to, {
      duration,
      ease: [0.16, 1, 0.3, 1],
    });

    return controls.stop;
  }, [inView]);

  return (
    <span ref={ref}>
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  );
}

const stats = [
  {
    num: 500,
    suffix: "+",
    label: "Emprendedores",
    sub: "en la comunidad",
    icon: Users,
    color: "#1A56DB",
  },
  {
    num: 50,
    suffix: "+",
    label: "Empresas Padrino",
    sub: "aliadas estratégicas",
    icon: Award,
    color: "#7C3AED",
  },
  {
    num: 120,
    suffix: "+",
    label: "Proyectos",
    sub: "acelerados",
    icon: Zap,
    color: "#1A56DB",
  },
  {
    num: 3,
    suffix: " años",
    label: "Trayectoria",
    sub: "en Argentina",
    icon: TrendingUp,
    color: "#7C3AED",
  },
];

const Confianza = () => {
  return (
    <section className="bg-white py-16">

      <div className="w-full px-6 lg:px-20">

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 text-center">

          {stats.map((stat, i) => {
            const Icon = stat.icon;

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: i * 0.1,
                }}
                className="flex flex-col items-center"
              >

                {/* icon */}

                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mb-6"
                  style={{
                    border: `2px solid ${stat.color}40`,
                    color: stat.color,
                  }}
                >
                  <Icon size={26} />
                </div>

                {/* number */}

                <p
                  className="text-4xl lg:text-5xl font-bold mb-3"
                  style={{ color: stat.color }}
                >
                  <Counter to={stat.num} suffix={stat.suffix} />
                </p>

                {/* label */}

                <p className="text-sm font-semibold uppercase tracking-wider text-gray-700">
                  {stat.label}
                </p>

                <p className="text-xs text-gray-500 mt-1">
                  {stat.sub}
                </p>

                {/* línea decorativa */}

                <div
                  className="w-8 h-[2px] mt-4"
                  style={{ backgroundColor: stat.color }}
                />

              </motion.div>
            );
          })}

        </div>

      </div>

    </section>
  );
};

export default Confianza;