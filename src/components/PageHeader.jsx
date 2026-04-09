import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { FiChevronRight, FiHome } from 'react-icons/fi';

const PageHeader = ({ title, description }) => {
  const location = useLocation();
  const paths = location.pathname.split('/').filter(Boolean);
  
  // Updated Branding
  const siteName = "Dentopia";
  const seoTitle = `${title} | ${siteName} - Merul Badda, Dhaka`;
  const currentUrl = `https://fatihadentalcare.com${location.pathname}`;
  const defaultDesc = "Professional dental care at Dentopia, Merul Badda. Best dental surgery and implant centre in Dhaka.";

  return (
    <>
      <Helmet>
        <title>{seoTitle}</title>
        <meta name="description" content={description || defaultDesc} />
        <link rel="canonical" href={currentUrl} />
        {/* Local SEO Meta */}
        <meta name="geo.region" content="BD-13" />
        <meta name="geo.placename" content="Merul Badda, Dhaka" />
      </Helmet>

      {/* Modern Page Header Section */}
      <div className="relative bg-[#ffffff] border-b border-slate-100 overflow-hidden pt-20 lg:pt-24">
        {/* Subtle Brand Accent - Sky Blue Gradient */}
        <div className="absolute top-0 right-0 w-1/4 h-full bg-sky-50/50 -skew-x-12 translate-x-10 z-0" />
        
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 lg:py-24 relative z-10">
          <div className="flex flex-col gap-5">
            
            {/* Clean & Accessible Breadcrumb */}
            <nav className="flex items-center gap-2 text-[10px] sm:text-[11px] font-bold uppercase tracking-[2.5px] text-slate-400">
              <Link to="/" className="hover:text-sky-600 transition-colors flex items-center gap-1.5">
                <FiHome size={14} className="mb-0.5" /> Home
              </Link>
              
              {paths.map((path, index) => {
                const url = '/' + paths.slice(0, index + 1).join('/');
                const isLast = index === paths.length - 1;
                
                return (
                  <React.Fragment key={index}>
                    <FiChevronRight className="text-slate-300" size={14} />
                    {isLast ? (
                      <span className="text-sky-600 truncate max-w-[120px] sm:max-w-none">
                        {decodeURIComponent(path).replace(/-/g, ' ')}
                      </span>
                    ) : (
                      <Link to={url} className="hover:text-sky-600 transition-colors">
                        {decodeURIComponent(path).replace(/-/g, ' ')}
                      </Link>
                    )}
                  </React.Fragment>
                );
              })}
            </nav>

            {/* Title with Bold Modern Typography */}
            <div className="relative">
              <h1 className="text-5xl lg:text-7xl font-black text-slate-900 tracking-tight leading-none">
                {title}
                <span className="text-sky-500 inline-block ml-1 animate-pulse">.</span>
              </h1>
              {/* Secondary Accent Line */}
              <div className="mt-6 flex items-center gap-3">
                <div className="w-16 h-1.5 bg-sky-600 rounded-full" />
                <div className="w-3 h-1.5 bg-slate-200 rounded-full" />
              </div>
            </div>

            {/* Description - Optimized for Readability */}
            {description && (
              <p className="text-slate-500 max-w-2xl text-base lg:text-lg font-medium leading-relaxed mt-2 border-l-2 border-slate-100 pl-6">
                {description}
              </p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default PageHeader;