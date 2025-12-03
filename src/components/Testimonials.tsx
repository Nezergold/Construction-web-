import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';
import { Avatar, AvatarImage, AvatarFallback } from './ui/avatar';

export function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'Homeowner',
      location: 'Vancouver, BC',
      rating: 5,
      content: "BuildCraft transformed our vision into reality with their exceptional craftsmanship. The attention to detail and professionalism throughout the entire process was outstanding. Our dream home exceeded all expectations!",
      avatar: 'SJ',
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'Property Developer',
      location: 'Toronto, ON',
      rating: 5,
      content: "Working with BuildCraft on our commercial project was seamless. They delivered on time, within budget, and the quality of work was impeccable. Highly recommend for any large-scale construction needs.",
      avatar: 'MC',
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      role: 'Business Owner',
      location: 'Calgary, AB',
      rating: 5,
      content: "The team at BuildCraft renovated our office space with minimal disruption to our operations. Their project management skills and attention to our business needs made the entire process stress-free.",
      avatar: 'ER',
    },
    {
      id: 4,
      name: 'David Thompson',
      role: 'Municipality Manager',
      location: 'Ottawa, ON',
      rating: 5,
      content: "BuildCraft has been our go-to contractor for municipal infrastructure projects. Their expertise in complex engineering challenges and commitment to safety standards is unmatched in the industry.",
      avatar: 'DT',
    },
    {
      id: 5,
      name: 'Lisa Park',
      role: 'Restaurant Owner',
      location: 'Montreal, QC',
      rating: 5,
      content: "From design to completion, BuildCraft delivered our restaurant renovation flawlessly. They understood our unique requirements and created a space that perfectly reflects our brand. Excellent communication throughout!",
      avatar: 'LP',
    },
    {
      id: 6,
      name: 'Robert Wilson',
      role: 'Real Estate Investor',
      location: 'Halifax, NS',
      rating: 5,
      content: "I've worked with many contractors over the years, but BuildCraft stands out for their reliability and quality. They've completed multiple projects for me, each one delivered on time and to the highest standards.",
      avatar: 'RW',
    },
  ];

  const stats = [
    { number: '98%', label: 'Client Satisfaction Rate' },
    { number: '4.9/5', label: 'Average Rating' },
    { number: '350+', label: 'Happy Clients' },
    { number: '25+', label: 'Years of Excellence' },
  ];

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-orange-500 text-white rounded-full text-sm font-medium mb-4">
            Client Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6">
            What Our Clients Say
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it. Here's what our satisfied clients across Canada 
            have to say about their experience working with BuildCraft.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
        >
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-3xl lg:text-4xl font-bold text-orange-500 mb-2"
              >
                {stat.number}
              </motion.div>
              <div className="text-gray-300 text-sm">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 water-float glass-morph relative"
            >
              {/* Quote Icon */}
              <div className="mb-6">
                <Quote className="w-8 h-8 text-orange-500" />
              </div>

              {/* Stars */}
              <div className="flex space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Content */}
              <p className="text-gray-200 leading-relaxed mb-6">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center space-x-4">
                <Avatar className="w-12 h-12">
                  <AvatarFallback className="bg-orange-500 text-white">
                    {testimonial.avatar}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-bold text-white">{testimonial.name}</div>
                  <div className="text-sm text-gray-300">{testimonial.role}</div>
                  <div className="text-xs text-orange-400">{testimonial.location}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <h3 className="text-2xl font-bold mb-4">Ready to Join Our Happy Clients?</h3>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Experience the BuildCraft difference for yourself. Contact us today for a free consultation 
            and let's start building your success story.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-medium transition-colors duration-300 water-ripple cursor-pointer"
            >
              Start Your Project
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-lg font-medium transition-all duration-300 water-flow"
            >
              Read More Reviews
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}