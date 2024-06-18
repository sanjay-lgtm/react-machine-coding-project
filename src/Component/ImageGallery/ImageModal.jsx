// src/components/ImageModal.js
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const backdrop = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 }
};

const modal = {
    hidden: { y: "-100vh", opacity: 0 },
    visible: { y: "0", opacity: 1, transition: { delay: 0.5 } }
};

const ImageModal = ({ src, onClose }) => {
    return (
        <AnimatePresence exitBeforeEnter>
            <motion.div className='fixed top-0 left-0 w-full h-full bg-black bg-opacity-75 flex items-center justify-center z-50' variants={backdrop} initial="hidden" animate="visible" exit="hidden" onClick={onClose}>
                <motion.div className='bg-white rounded-lg overflow-hidden' variants={modal} onClick={(e) => e.stopPropagation()}>
                    <img src={src} alt='Selected' className='w-full h-full object-cover' />
                    <button onClick={onClose} className='absolute top-4 right-4 text-white bg-red-500 px-4 py-2 rounded'>Close</button>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
};

export default ImageModal;
