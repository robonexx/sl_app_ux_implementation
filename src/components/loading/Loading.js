import React, { useState } from 'react';
import LogoLoading from './LogoLoading';
import './loading.scss'
import { motion } from 'framer-motion'

const Loading = ({loading, setLoading}) => {
    

    return (
        
        <div className="loading">
            <LogoLoading loading={loading} setLoading={setLoading} />
            </div>
            
     );
}
 
export default Loading;