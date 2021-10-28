import React from 'react';
import LogoLoading from './LogoLoading';
import './loading.scss'
import { motion } from 'framer-motion'

const Loading = ({loading, setLoading}) => {
    

    return (
        
        <motion.div className="loading"
            initial={{ opacity: 0, scale: 10 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{duration: 3}}
        >
            <LogoLoading loading={loading} setLoading={setLoading} />
            </motion.div>
            
     );
}
 
export default Loading;