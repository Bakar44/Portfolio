import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import profilePic from "./assets/profile.jpg"; // Adjust the path if needed

const Portfolio = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white text-blue-600 p-6 border-4 border-blue-600">
      {/* Profile Picture */}
      <motion.img 
        src={profilePic} 
        alt="Abubakkar Tariq" 
        className="w-40 h-40 rounded-full object-cover mb-4 border-4 border-blue-600"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      />

      {/* Name */}
      <motion.h1 
        className="text-4xl font-bold border-4 border-blue-600 px-6 py-2 rounded-xl mb-6"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        Abubakkar Tariq
      </motion.h1>

      {/* Information Boxes */}
      <motion.div 
        className="w-full max-w-md space-y-4"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <InfoBox 
          title="Subjects" 
          content="Urdu, Physics, Biology" 
          details="Here is some detailed information about the subjects, such as course descriptions, interesting projects, and achievements."
        />
        <InfoBox 
          title="Experience" 
          content="3 Batches" 
          details="Details about my experience: the roles I played, projects handled, and skills developed during these batches."
        />
        <InfoBox 
          title="Class" 
          content="O Level" 
          details="Additional info about the class: curriculum details, study methods, and extra-curricular activities."
        />
        <InfoBox 
          title="Result" 
          content="100%" 
          details="A detailed breakdown of the results, including subject-wise scores, overall performance, and recognitions."
        />
      </motion.div>
    </div>
  );
};

const InfoBox = ({ title, content, details }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div 
      onClick={() => setIsOpen(!isOpen)}
      className="border-2 border-blue-600 px-4 py-2 text-lg rounded-lg shadow-md cursor-pointer"
      whileHover={{ scale: 1.05 }}
      layout
    >
      <div>
        <strong>{title}:</strong> {content}
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="mt-2 overflow-hidden"
          >
            {details}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Portfolio;
