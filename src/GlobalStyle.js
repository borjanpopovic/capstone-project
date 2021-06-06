import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
* {
    box-sizing: border-box;
}

body {
    font-family: sans-serif;
    font-size: 1.125rem;
    background: var(--primary);
}

:root {
    --primary: rgb(233, 231, 231);
}
`;
