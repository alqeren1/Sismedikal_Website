import React from 'react';
import { ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

const ProductDisplay = ({ product }) => {
  const renderComposition = (composition) => {
    if (!composition || composition.length === 0) return null;
    if (typeof composition[0] === 'object') {
      return (
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-8"
        >
          <h3 className="text-xl font-semibold mb-4">Components</h3>
          <div className="grid gap-4">
            {composition.map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 * index }}
                className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              >
                <h4 className="font-medium text-lg">{item.name}</h4>
                {item.description && <p className="text-gray-600 mt-2">{item.description}</p>}
                {item.ref && <p className="text-sm text-gray-500 mt-2">REF: {item.ref}</p>}
              </motion.div>
            ))}
          </div>
        </motion.div>
      );
    }

    return (
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="mt-8"
      >
        <h3 className="text-xl font-semibold mb-4">Composition</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {composition.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.05 * index }}
              className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 hover:bg-gray-50 transition-colors"
            >
              {item}
            </motion.div>
          ))}
        </div>
      </motion.div>
    );
  };

  const renderSpecifications = (specs) => {
    if (!specs || Object.keys(specs).length === 0) return null;
    return (
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="mt-8"
      >
        <h3 className="text-xl font-semibold mb-4">Specifications</h3>
        <div className="bg-white rounded-lg shadow-sm border border-gray-100">
          {Object.entries(specs).map(([key, value], index) => (
            <motion.div 
              key={key}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 * index }}
              className="flex p-4 border-b border-gray-100 last:border-b-0 hover:bg-gray-50 transition-colors"
            >
              <span className="font-medium w-1/3 text-gray-700">{key}</span>
              <span className="text-gray-600 w-2/3">{value}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-xl shadow-lg overflow-hidden"
        >
          <div className="relative bg-gradient-to-r from-blue-600 to-blue-800 px-8 py-12 text-white">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl font-bold"
            >
              {product.name}
            </motion.h1>
            {product.subtitle && (
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="mt-4 text-xl text-blue-100"
              >
                {product.subtitle}
              </motion.p>
            )}
            {product.brand && (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="mt-2 text-blue-200"
              >
                Brand: {product.brand}
              </motion.div>
            )}
          </div>

          <div className="px-8 py-12">
            {product.description && (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="prose max-w-none"
              >
                <h3 className="text-xl font-semibold mb-4">Description</h3>
                <p className="text-gray-600 leading-relaxed">{product.description}</p>
              </motion.div>
            )}

            {renderSpecifications(product.specifications)}
            {renderComposition(product.composition)}

            {product.product_url && (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="mt-8"
              >
                
               
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProductDisplay;