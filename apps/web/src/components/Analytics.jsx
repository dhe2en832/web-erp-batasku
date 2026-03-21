import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const Analytics = () => {
  const location = useLocation();

  useEffect(() => {
    // Track page views
    if (typeof gtag !== 'undefined') {
      gtag('config', 'G-3J0X3CXCCJ', {
        page_path: location.pathname,
      });
    }
  }, [location]);

  // Custom tracking functions
  const trackEvent = (eventName, parameters = {}) => {
    if (typeof gtag !== 'undefined') {
      gtag('event', eventName, parameters);
    }
  };

  // Track button clicks
  const trackButtonClick = (buttonName, location = 'header') => {
    trackEvent('button_click', {
      button_name: buttonName,
      location: location,
    });
  };

  // Track form submissions
  const trackFormSubmission = (formName) => {
    trackEvent('form_submit', {
      form_name: formName,
    });
  };

  // Track blog interactions
  const trackBlogRead = (blogTitle) => {
    trackEvent('blog_read', {
      blog_title: blogTitle,
    });
  };

  // Track CTA clicks
  const trackCTAClick = (ctaText, page) => {
    trackEvent('cta_click', {
      cta_text: ctaText,
      page: page,
    });
  };

  // Expose tracking functions globally
  useEffect(() => {
    window.analytics = {
      trackEvent,
      trackButtonClick,
      trackFormSubmission,
      trackBlogRead,
      trackCTAClick,
    };
  }, []);

  return null; // This component doesn't render anything
};

export default Analytics;
