/**
 * RX-NAF // ORBITAL TELEMETRY & TACTICAL AVIONICS SYSTEM
 * Theme Tokens & Color Palette Spec (UC-0079)
 */

export const colors = {
    // Brand & Action Primaries
    primary: "#164bff",
    "primary-container": "#2758ff",
    "on-primary": "#ffffff",
    "on-primary-container": "#dce1ff",

    // Secondary & Accents
    secondary: "#8a99ad",
    "secondary-container": "#232b38",
    "on-secondary": "#ffffff",
    "on-secondary-container": "#cfdbe9",

    // Tertiary / High-Energy Telemetry
    tertiary: "#00d2ff",
    "tertiary-container": "#003e4d",
    "on-tertiary": "#ffffff",

    // Neutral Cockpit Surfaces (Deep Navy / Charcoal Stack)
    surface: "#0b1322",
    "surface-dim": "#0b1322",
    "surface-bright": "#31394a",
    "surface-container-lowest": "#060e1d",
    "surface-container-low": "#0e1726",
    "surface-container": "#131e30",
    "surface-container-high": "#1a273c",
    "surface-container-highest": "#23324a",

    // Text & On-Surface Contrasts
    "on-surface": "#e2e8f0",
    "on-surface-variant": "#94a3b8",
    "inverse-surface": "#f1f5f9",
    "inverse-on-surface": "#0b1322",

    // Tactical Outlines & Chamfer Borders
    outline: "#334155",
    "outline-variant": "#1e293b",

    // Telemetry Status & DEFCON Alerts
    status: {
        nominal: "#10b981", // Link UP / Green
        warning: "#f59e0b", // Amber / Standby
        alert: "#ef4444", // DEFCON-3 / Critical 404
        info: "#06b6d4", // Avionics / Spec
    },
} as const;

// Types TypeScript dérivés pour l'autocomplétion et la sécurité de typage
export type ColorPalette = typeof colors;
export type ColorKey = keyof Omit<typeof colors, "status">;
export type StatusColorKey = keyof typeof colors.status;
