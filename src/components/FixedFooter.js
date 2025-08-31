// import React from 'react';
// import useFooterVisibility from './useFooterVisibility'; // Custom hook
// import './FixedFooter.css'; // Stil dosyasını ekleyin

// const FixedFooter = ({ children }) => {
//   const isFooterVisible = useFooterVisibility();

//   return (
//     <section
//       className={`fixed-footer ${
//         isFooterVisible ? 'footer-visible' : ''
//       }`}
//     >
//       {children}
//     </section>
//   );
// };

// export default FixedFooter;

import React from 'react';
import useFooterVisibility from './useFooterVisibility'; // Custom hook
import './FixedFooter.css'; // Stil dosyasını ekleyin

const FixedFooter = ({ children }) => {
  const isFooterVisible = useFooterVisibility(); // Görünürlük durumunu kontrol et

  return (
    <section
      className={`fixed-footer ${isFooterVisible ? 'footer-visible' : ''}`}
      style={{
        position: isFooterVisible ? 'relative' : 'fixed', // Dinamik pozisyon
      }}
    >
      {children}
    </section>
  );
};

export default FixedFooter;
