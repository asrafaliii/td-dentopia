import React from 'react';
import PropTypes from 'prop-types';

const alignmentMap = {
  start: 'text-left items-start',
  center: 'text-center items-center',
  end: 'text-right items-end',
};

const SectionTitle = ({ subtitle, title, align = 'center', className = "" }) => {
  const alignmentClasses = alignmentMap[align] || alignmentMap.center;

  return (
    <div className={`w-full flex flex-col mb-10 md:mb-16 ${alignmentClasses} ${className}`}>
      
      {/* Subtitle with Animated Soft Pulse */}
      {subtitle && (
        <div className="flex items-center gap-3 mb-5 group">
          {/* Decorative Dot & Line */}
          {(align === 'center' || align === 'start') && (
            <span className="flex items-center">
              <span className="w-2 h-2 bg-sky-500 rounded-full animate-pulse" />
              <span className="w-6 h-[1.5px] bg-sky-200" />
            </span>
          )}
          
          <span className="text-sky-600 font-extrabold text-[11px] md:text-xs uppercase tracking-[0.3em] bg-sky-50 px-3 py-1 rounded-md transition-colors group-hover:bg-sky-100">
            {subtitle}
          </span>

          {/* Decorative Dot & Line */}
          {(align === 'center' || align === 'end') && (
            <span className="flex items-center">
              <span className="w-6 h-[1.5px] bg-sky-200" />
              <span className="w-2 h-2 bg-sky-500 rounded-full opacity-50" />
            </span>
          )}
        </div>
      )}

      {/* Title with Modern Heavy Weight */}
      {title && (
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-slate-900 leading-[1.1] max-w-4xl tracking-tight">
          {title}
          <span className="text-sky-500 ml-1 inline-block">.</span>
        </h2>
      )}

      {/* Aesthetic Underline Accent for 'start' alignment */}
      {align === 'start' && (
        <div className="mt-6 flex gap-1">
          <div className="w-12 h-1.5 bg-sky-600 rounded-full" />
          <div className="w-2 h-1.5 bg-sky-200 rounded-full" />
        </div>
      )}
    </div>
  );
};

SectionTitle.propTypes = {
  subtitle: PropTypes.string,
  title: PropTypes.node.isRequired,
  align: PropTypes.oneOf(['start', 'center', 'end']),
  className: PropTypes.string,
};

export default SectionTitle;