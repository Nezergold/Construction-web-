import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calendar, MapPin, DollarSign, Users } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Projects() {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'residential', label: 'Residential' },
    { id: 'commercial', label: 'Commercial' },
    { id: 'infrastructure', label: 'Infrastructure' },
  ];

  const projects = [
    {
      id: 1,
      title: 'Luxury Waterfront Residence',
      category: 'residential',
      location: 'Vancouver, BC',
      budget: '$2.5M',
      duration: '18 months',
      team: '12 specialists',
      image: 'https://images.unsplash.com/photo-1580063665421-4c9cbe9ec11b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXNpZGVudGlhbCUyMGhvdXNlJTIwY29uc3RydWN0aW9ufGVufDF8fHx8MTc1OTQyOTU5MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      description: 'Modern 5-bedroom luxury home with panoramic ocean views and sustainable design.',
      tags: ['Luxury', 'Sustainable', 'Waterfront'],
    },
    {
      id: 2,
      title: 'Downtown Office Complex',
      category: 'commercial',
      location: 'Toronto, ON',
      budget: '$15M',
      duration: '24 months',
      team: '45 specialists',
      image: 'https://images.unsplash.com/photo-1693661391267-ad955aeeb564?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tZXJjaWFsJTIwYnVpbGRpbmclMjBjb25zdHJ1Y3Rpb258ZW58MXx8fHwxNzU5NDA4ODA4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      description: '25-story modern office building with LEED certification and smart building technology.',
      tags: ['LEED Certified', 'Smart Building', 'High-rise'],
    },
    {
      id: 3,
      title: 'Highway Infrastructure Project',
      category: 'infrastructure',
      location: 'Calgary, AB',
      budget: '$8M',
      duration: '12 months',
      team: '30 specialists',
      image: 'https://images.unsplash.com/photo-1759061021321-e4fa5d656f38?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBidWlsZGluZyUyMGNvbnN0cnVjdGlvbiUyMHNpdGV8ZW58MXx8fHwxNzU5NDI5NTg5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      description: '15km highway expansion with advanced drainage systems and eco-friendly materials.',
      tags: ['Infrastructure', 'Highway', 'Eco-friendly'],
    },
    {
      id: 4,
      title: 'Boutique Shopping Center',
      category: 'commercial',
      location: 'Montreal, QC',
      budget: '$6M',
      duration: '15 months',
      team: '25 specialists',
      image: 'https://images.unsplash.com/photo-1627640268913-91cfd4675b65?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjB3b3JrZXJzJTIwYnVpbGRpbmclMjBtb2Rlcm58ZW58MXx8fHwxNzU5NDI5NTg5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      description: 'Mixed-use development with retail spaces, restaurants, and underground parking.',
      tags: ['Mixed-use', 'Retail', 'Underground Parking'],
    },
    {
      id: 5,
      title: 'Suburban Family Homes',
      category: 'residential',
      location: 'Ottawa, ON',
      budget: '$4M',
      duration: '20 months',
      team: '18 specialists',
      image: 'https://images.unsplash.com/photo-1684497404598-6e844dff9cde?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjB0ZWFtJTIwaGFyZGhhdHxlbnwxfHx8fDE3NTkzMjA2MzV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      description: '8-unit residential development with modern amenities and energy-efficient design.',
      tags: ['Multi-unit', 'Energy Efficient', 'Modern'],
    },
    {
      id: 6,
      title: 'Bridge Reconstruction',
      category: 'infrastructure',
      location: 'Halifax, NS',
      budget: '$12M',
      duration: '18 months',
      team: '35 specialists',
      image: 'https://images.unsplash.com/photo-1665152998573-9ddafb89278f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjBlcXVpcG1lbnQlMjBleGNhdmF0b3J8ZW58MXx8fHwxNzU5NDI5NTkwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      description: 'Major bridge reconstruction with seismic upgrades and enhanced safety features.',
      tags: ['Bridge', 'Seismic Upgrade', 'Safety'],
    },
  ];

  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-2 bg-orange-100 text-orange-600 rounded-full text-sm font-medium mb-4">
            Our Portfolio
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-6">
            Projects That Define Excellence
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Explore our diverse portfolio of successful construction projects across Canada, 
            showcasing our expertise in residential, commercial, and infrastructure development.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <Button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              variant={activeCategory === category.id ? 'default' : 'outline'}
              className={`px-6 py-2 transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-orange-500 text-white hover:bg-orange-600'
                  : 'text-gray-600 hover:text-orange-500 hover:border-orange-500'
              }`}
            >
              {category.label}
            </Button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="wait">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden water-float water-flow relative"
              >
                {/* Project Image */}
                <div className="relative h-64 overflow-hidden">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  
                  {/* Tags */}
                  <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                    {project.tags.slice(0, 2).map((tag, tagIndex) => (
                      <Badge
                        key={tagIndex}
                        className="bg-white/20 text-white border-white/30 backdrop-blur-sm"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-orange-500 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Project Details */}
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <MapPin className="w-4 h-4 text-orange-500" />
                      <span>{project.location}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <DollarSign className="w-4 h-4 text-orange-500" />
                      <span>{project.budget}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <Calendar className="w-4 h-4 text-orange-500" />
                      <span>{project.duration}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <Users className="w-4 h-4 text-orange-500" />
                      <span>{project.team}</span>
                    </div>
                  </div>

                  {/* View Details Button */}
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="w-full group-hover:bg-orange-500 group-hover:text-white group-hover:border-orange-500 transition-all duration-300 water-ripple"
                  >
                    View Details
                  </Button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Load More Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button 
            size="lg" 
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-orange-500 hover:bg-orange-600 px-8 py-4 water-ripple cursor-pointer"
          >
            View All Projects
          </Button>
        </motion.div>
      </div>
    </section>
  );
}