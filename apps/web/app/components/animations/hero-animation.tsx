'use client'

import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import Image from 'next/image';
import Globe from '@/public/globe.png';

interface NodeProps {
  label: string;
  status: 'completed' | 'processing' | 'waiting';
  time?: string;
  x: number;
  y: number;
}

const Node: React.FC<NodeProps> = ({ label, status, time, x, y }) => (
  <div
    className={`absolute bg-white rounded-lg shadow-md p-2 sm:p-3 w-[120px] sm:w-[160px] bg-opacity-95 ${
      status === 'completed' ? 'border-l-[3px] border-l-green-500' :
      status === 'processing' ? 'border-l-[3px] border-l-blue-500' :
      'border-l-[3px] border-l-gray-500'
    }`}
    style={{ 
      left: x, 
      top: y,
      transform: 'translate(-50%, -50%)'
    }}
  >
    <div className="font-medium text-xs sm:text-sm text-gray-900">{label}</div>
    <div className="mt-1 space-y-0.5">
      <div className="text-[8px] sm:text-[10px] text-gray-500 font-medium">
        {status.toUpperCase()}
      </div>
      {time && <div className="text-[8px] sm:text-[10px] text-gray-500">{time}</div>}
    </div>
  </div>
);

interface Point {
  x: number;
  y: number;
}

interface ArrowProps {
  start: Point;
  end: Point;
  status: 'completed' | 'processing' | 'pending';
}

const Arrow: React.FC<ArrowProps> = ({ start, end, status }) => {
  const [progress, setProgress] = useState(0);
  const controls = useAnimation();

  const dx = end.x - start.x;
  const dy = end.y - start.y;
  const length = Math.sqrt(dx * dx + dy * dy);
  const ux = dx / length;
  const uy = dy / length;

  const shortenBy = typeof window !== 'undefined' && window.innerWidth < 640 ? 20 : 30;
  const actualStart = {
    x: start.x + ux * shortenBy,
    y: start.y + uy * shortenBy
  };
  const actualEnd = {
    x: end.x - ux * shortenBy,
    y: end.y - uy * shortenBy
  };

  const actualDx = actualEnd.x - actualStart.x;
  const actualDy = actualEnd.y - actualStart.y;
  const angle = Math.atan2(actualDy, actualDx) * 180 / Math.PI;

  useEffect(() => {
    controls.start({ width: '100%' });
  }, [controls]);

  return (
    <div className="absolute" style={{ 
      left: actualStart.x, 
      top: actualStart.y, 
      width: Math.sqrt(actualDx * actualDx + actualDy * actualDy), 
      height: 1.3,
      transformOrigin: '0 0',
      transform: `rotate(${angle}deg)`,
    }}>
      <motion.div
        className={`relative h-full ${
          status === 'completed' ? 'bg-green-500' : 
          status === 'processing' ? 'bg-blue-500' : 
          'bg-gray-500'
        }`}
        initial={{ width: 0 }}
        animate={{ width: '100%' }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "linear"
        }}
        //@ts-expect-error idk why this is not working
        onUpdate={(latest) => setProgress(parseFloat(latest.width) / 100)}
      />
      
      <motion.div
        className={`absolute ${
          status === 'completed' ? 'border-green-500' : 
          status === 'processing' ? 'border-blue-500' : 
          'border-gray-500'
        }`}
        style={{
          width: 0,
          height: 0,
          borderTop: '4px solid transparent',
          borderBottom: '4px solid transparent',
          borderLeft: '6px solid currentColor',
          transform: 'translateX(100%)',
          left: `${progress * 100}%`,
          top: '-3px'
        }}
      />
    </div>
  );
};

export default function FinancialDataFlow() {
  const [dimensions, setDimensions] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 0,
    height: typeof window !== 'undefined' ? window.innerHeight : 0,
  });
  console.log(dimensions);
  

  useEffect(() => {
    const handleResize = () => {
      setDimensions({
        width: typeof window !== 'undefined' ? window.innerWidth : 0,
        height: typeof window !== 'undefined' ? window.innerHeight : 0,
      });
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);

  const getResponsivePosition = (baseX: number, baseY: number) => {
    const scale = typeof window !== 'undefined' && window.innerWidth < 640 ? 0.7 : 1;
    return {
      x: baseX * scale,
      y: baseY * scale,
    };
  };

  const nodes = [
    { id: '1', label: 'Raw Financial Data', status: 'completed' as const, time: '21 sesconds', ...getResponsivePosition(100, 100) },
    { id: '2', label: 'Data Cleaning', status: 'completed' as const, time: '2 mins', ...getResponsivePosition(100, 300) },
    { id: '3', label: 'Market Analysis', status: 'processing' as const, time: '5 mins', ...getResponsivePosition(280, 200) },
    { id: '4', label: 'Risk Assessment', status: 'processing' as const, time: '4 mins', ...getResponsivePosition(460, 300) },
    { id: '5', label: 'Final Report', status: 'waiting' as const, time: 'Not started', ...getResponsivePosition(460, 100) },
  ];

  const getArrows = () => {
    const scale = typeof window !== 'undefined' && window.innerWidth < 640 ? 0.7 : 1;
    return [
      { 
        start: { x: 100 * scale, y: 103 * scale }, 
        end: { x: 100 * scale, y: 280 * scale }, 
        status: 'completed' as const 
      },
      { 
        start: { x: 160 * scale, y: 300 * scale }, 
        end: { x: 300 * scale, y: 230 * scale }, 
        status: 'completed' as const 
      },
      { 
        start: { x: 270 * scale, y: 230 * scale }, 
        end: { x: 400 * scale, y: 330 * scale }, 
        status: 'processing' as const 
      },
      { 
        start: { x: 460 * scale, y: 300 * scale }, 
        end: { x: 460 * scale, y: 130 * scale }, 
        status: 'waiting' as const 
      },
    ];
  };

  return (
    <div className="flex items-center justify-center p-4 relative">
      <Image src={Globe} alt="Globe" className="absolute h-[260px] sm:h-[310px] w-[600px] top-4 sm:top-10 sm:left-6 inset-0 w-full z-0 rounded-xl opacity-80" />
      <div className="ml-4 relative h-[300px] sm:h-[440px] w-full max-w-3xl rounded-xl z-10">
        {nodes.map((node) => (
          <Node key={node.id} {...node} />
        ))}
        {getArrows().map((arrow, index) => (
          //@ts-expect-error idk why this is not working
          <Arrow key={index} {...arrow} />
        ))}
      </div>
    </div>
  );
}