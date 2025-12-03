import { motion } from 'motion/react';
import { CheckCircle, Wrench, Shield, Clock } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function About() {
  const values = [
    {
      icon: CheckCircle,
      title: 'Quality First',
      description: 'We never compromise on quality, using only the finest materials and proven techniques.',
    },
    {
      icon: Shield,
      title: 'Safety Focused',
      description: 'Our safety record is impeccable with zero major incidents in over two decades.',
    },
    {
      icon: Clock,
      title: 'Timely Delivery',
      description: 'We respect your time and consistently deliver projects on schedule.',
    },
    {
      icon: Wrench,
      title: 'Expert Craftsmanship',
      description: 'Our team of certified professionals brings decades of combined experience.',
    },
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="mb-8">
              <span className="inline-block px-4 py-2 bg-orange-100 text-orange-600 rounded-full text-sm font-medium mb-4">
                About BuildCraft
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-6">
                Building Canada's Future Since{' '}
                <span className="text-orange-500">1998</span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                For over 25 years, BuildCraft has been at the forefront of Canada's construction 
                industry, transforming skylines from Vancouver to Halifax. We've built our reputation 
                on unwavering commitment to quality, innovation, and client satisfaction.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                From humble beginnings as a small residential contractor, we've grown into one of 
                Canada's most trusted construction companies, handling projects of all scales while 
                maintaining our core values of integrity and excellence.
              </p>
            </div>

            {/* Values Grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 water-float water-flow relative"
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <value.icon className="w-6 h-6 text-orange-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-2">{value.title}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Images */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Main Image */}
            <div className="relative z-10">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1684497404598-6e844dff9cde?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjB0ZWFtJTIwaGFyZGhhdHxlbnwxfHx8fDE3NTkzMjA2MzV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Construction team with hardhats"
                className="w-full h-96 lg:h-[500px] object-cover rounded-2xl shadow-2xl"
              />
            </div>

            {/* Floating Stats Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="absolute -bottom-8 -left-8 bg-white rounded-2xl p-8 shadow-2xl border-l-4 border-orange-500"
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900 mb-2">500+</div>
                <div className="text-gray-600 text-sm">Projects Completed</div>
                <div className="text-orange-500 text-xs mt-1">Across Canada</div>
              </div>
            </motion.div>

            {/* Background Pattern */}
            <div className="absolute -top-8 -right-8 w-64 h-64 bg-orange-100 rounded-full -z-10 opacity-20"></div>
            <div className="absolute -bottom-16 -right-16 w-48 h-48 bg-blue-100 rounded-full -z-10 opacity-20"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}