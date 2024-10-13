/* eslint-disable react/prop-types */
import { motion } from 'framer-motion';

const FadeInSection = ({ children }) => (
  <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 1 }}
  >
    {children}
  </motion.div>
);

export default FadeInSection;
