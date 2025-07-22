import React from 'react';

const Ping = () => {
  return (
    <div className="relative flex items-center justify-center w-6 h-6">
      {/* Dalga efekti */}
      <span className="absolute inline-flex h-3 w-3 animate-ping rounded-full bg-pink-500 opacity-75 scale-125"></span>

      {/* Sabit nokta */}
      <span className="relative inline-flex h-2 w-2 rounded-full bg-pink-500"></span>
    </div>
  );
};

export default Ping;
