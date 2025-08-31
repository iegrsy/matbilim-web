// import { useEffect, useState } from 'react';

// const useFooterVisibility = () => {
//   const [isFooterVisible, setIsFooterVisible] = useState(false);

//   useEffect(() => {
//     const footer = document.querySelector('footer');

//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         setIsFooterVisible(entry.isIntersecting); // Footer görünürse durumu güncelle
//       },
//       { root: null, threshold: 0.1 }
//     );

//     if (footer) {
//       observer.observe(footer);
//     }

//     return () => {
//       if (footer) observer.unobserve(footer);
//     };
//   }, []);

//   return isFooterVisible;
// };

// export default useFooterVisibility;

// import { useEffect, useState } from 'react';

// const useFooterVisibility = () => {
//   const [isFooterVisible, setFooterVisible] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       const footerTriggerPoint = document.documentElement.scrollHeight - window.innerHeight - 100; // Tetikleme noktası
//       setFooterVisible(window.scrollY >= footerTriggerPoint);
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   return isFooterVisible;
// };

// export default useFooterVisibility;

import { useEffect, useState } from 'react';
import { debounce } from 'lodash';

const useFooterVisibility = () => {
  const [isFooterVisible, setFooterVisible] = useState(false);

  useEffect(() => {
    const handleScroll = debounce(() => {
      const footerTriggerPoint = document.documentElement.scrollHeight - window.innerHeight - 100;
      setFooterVisible(window.scrollY >= footerTriggerPoint);
    }, 100);

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return isFooterVisible;
};

export default useFooterVisibility;
