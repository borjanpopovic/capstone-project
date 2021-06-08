import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

:root {
  --border-dark: 	hsl(215, 50%, 23%);  // Prussian Blue 1D3557
     --primary: hsl(105, 55%, 96%);  // Honeydew F1FAEE
     --primary-light: ;
     --primary-lightest:  ;
     --primary-dark: ;
     --primary-darkest:  ;
     --secondary: 	hsl(182, 43%, 76%); // Powder Blue A8DADC
     --secondary-light: ;
     --secondary-lightest:  ;
     --secondary-dark:  ;
     --white: #ecf8f8;
     --black: #211103;

     --ff-sans: "Open sans", sans-serif;
     --ff-serif: serif;

     --fs-200: 0.75rem;
     --fs-300: 1rem;
     --fs-400: 1.25rem;
     --fs-500: 1.375rem;
     --fs-600: 1.75rem;
     --fs-900: 2.125rem;
   }

   *,
   *::before,
   *::after {
     box-sizing: border-box;
     background: var(--primary);
     font-family: var(--ff-sans);
   }

   h1, h2, h3 {
     line-height: 1.2;
   }

   body, h1, h2, h3, p {
     margin: 0;
   }

   body {
     line-height: 1.5;
     font-size: 1.25rem; /* var(--fs-400) */
   }

   ul[class],
   ol[class] {
     list-style: none;
     padding: 0;
     margin: 0;
   }

   ul[class] li,
   ol[class] li {
     list-style: none;
     padding: 0;
   }

   img {
     max-width: 100%;
     height: auto;
     display: block;
   }

    `;
