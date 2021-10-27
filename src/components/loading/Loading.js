import React, { useState } from 'react';
import LogoLoading from './LogoLoading';
import './loading.scss'
import { motion } from 'framer-motion'

const loadVariants = {
    initial: {
        opacity: 0,

    },
    visible: {
        opacity: 1,
        transition: {
            duration: 0.4
        }
    }
}

const Loading = ({loading, setLoading}) => {
    

    return (
        
        <div className="loading"
            variants={loadVariants}
            initial="hidden"
            animate="visible"
               
            >
            <LogoLoading loading={loading} setLoading={setLoading} />
            </div>
            
     );
}
 
export default Loading;