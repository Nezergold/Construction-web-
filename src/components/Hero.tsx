import { motion } from 'motion/react';
import { ArrowRight, Award, Users, Calendar } from 'lucide-react';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Hero() {
  const stats = [
    { icon: Award, label: 'Years Experience', value: '25+' },
    { icon: Users, label: 'Projects Completed', value: '500+' },
    { icon: Calendar, label: 'Happy Clients', value: '350+' },
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1627640268913-91cfd4675b65?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjB3b3JrZXJzJTIwYnVpbGRpbmclMjBtb2Rlcm58ZW58MXx8fHwxNzU5NDI5NTg5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Construction workers building modern structure"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-white">
            {/* Curved Banner */}
            <motion.div
              initial={{ opacity: 0, y: -30, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 1, delay: 0.2, type: "spring", stiffness: 100 }}
              className="mb-10 md:mb-12 flex justify-center"
            >
              <div className="curved-banner px-10 md:px-16 lg:px-20 py-5 md:py-6 lg:py-7">
                <span className="curved-text text-white text-base md:text-lg lg:text-xl xl:text-2xl">
                  🇨🇦 Canada's Premier Construction Company
                </span>
              </div>
            </motion.div>

            {/* Main Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mb-6 text-center"
            >
              <h1 className="text-4xl md:text-5xl lg:text-7xl xl:text-8xl font-bold leading-tight mb-6 text-shadow-lg">
                Building Tomorrow's{' '}
                <span className="text-orange-500 drop-shadow-lg">Canada</span>{' '}
                Today
              </h1>
              <p className="text-lg md:text-xl lg:text-2xl text-gray-100 leading-relaxed max-w-3xl font-medium mx-auto">
                From residential homes to commercial complexes, we've been transforming 
                Canada's landscape for over 25 years with unmatched craftsmanship and innovation.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 mb-12 w-full max-w-lg justify-center"
            >
              <Button 
                size="lg" 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-orange-500 hover:bg-orange-600 text-white px-6 md:px-8 py-3 md:py-4 water-ripple font-semibold w-full sm:w-auto cursor-pointer"
              >
                Start Your Project
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button 
                size="lg" 
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-orange-500/20 border-2 border-orange-500 text-white hover:bg-orange-500 hover:border-orange-600 backdrop-blur-sm px-6 md:px-8 py-3 md:py-4 transition-all duration-300 font-semibold w-full sm:w-auto cursor-pointer"
              >
                View Our Work
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8"
            >
              {stats.map((stat, index) => (
                <div key={index} className="text-center p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
                  <div className="flex justify-center mb-3">
                    <stat.icon className="w-8 h-8 md:w-10 md:h-10 text-orange-500" />
                  </div>
                  <div className="text-2xl md:text-3xl font-bold text-white mb-2 text-shadow">{stat.value}</div>
                  <div className="text-xs md:text-sm text-gray-200 font-medium">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Floating Cards */}
          <div className="hidden lg:block relative xl:ml-8">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="space-y-6"
            >
              {/* Card 1 */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="bg-white rounded-2xl p-6 shadow-2xl ml-12 water-float glass-morph relative"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <Award className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">Licensed & Insured</h3>
                    <p className="text-gray-600 text-sm">Fully certified across Canada</p>
                  </div>
                </div>
              </motion.div>

              {/* Card 2 */}
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="bg-white rounded-2xl p-6 shadow-2xl water-float glass-morph relative"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Users className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">Expert Team</h3>
                    <p className="text-gray-600 text-sm">50+ skilled professionals</p>
                  </div>
                </div>
              </motion.div>

              {/* Card 3 */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                className="bg-white rounded-2xl p-6 shadow-2xl ml-8 water-float glass-morph relative"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                    <Calendar className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">On-Time Delivery</h3>
                    <p className="text-gray-600 text-sm">98% projects completed on schedule</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-white rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}