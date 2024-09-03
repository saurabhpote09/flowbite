import React from 'react';

const Icon = ({ IconComponent, darkMode }) => {
  return (
    <div className={`${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
      <IconComponent className={'size-6'} />
    </div>
  );
};

export default Icon;
