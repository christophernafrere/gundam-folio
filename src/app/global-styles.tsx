import { colors } from "@/lib/colors";
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    *,
    *::before,
    *::after {
        box-sizing: border-box;
    }

    html {
        scroll-behavior: smooth;
        background-color: ${colors["surface-container-lowest"]};
    }

    body {
        margin: 0;
        min-height: 100vh;

        color: ${colors["on-surface"]};
        background-color: ${colors["surface-container-lowest"]};

        /*
         * RX-NAF // ORBITAL GRID
         * Tactical Avionics Background
         */
        background-image:
            linear-gradient(
                ${colors["outline-variant"]} 1px,
                transparent 1px
            ),
            linear-gradient(
                90deg,
                ${colors["outline-variant"]} 1px,
                transparent 1px
            );

        background-size: 32px 32px;
        background-position: -1px -1px;

        font-family: var(--font-space-grotesk), sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    ::selection {
        background-color: ${colors.primary};
        color: ${colors["on-primary"]};
    }

    a {
        color: inherit;
        text-decoration: none;
    }

    button,
    input,
    textarea,
    select {
        font: inherit;
    }

    button {
        cursor: pointer;
    }

    img,
    video,
    svg {
        max-width: 100%;
    }

    @media (prefers-reduced-motion: reduce) {
        html {
            scroll-behavior: auto;
        }
    }

    h1, h2, h3, h4, h5, h6 {
        margin: 0;
    }

    main {
        padding: 16px;
    }
`;

export default GlobalStyles;
