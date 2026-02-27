// ── AMES Site Icons ────────────────────────────────────────────────────────────

export const CloseIcon = ({ size = 24, color = "currentColor" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M18 6 6 18M6 6l12 12" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

export const MenuIcon = ({ size = 24, color = "currentColor" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 12H21" stroke={color} strokeWidth="2" strokeLinecap="round" />
        <path d="M3 6H21" stroke={color} strokeWidth="2" strokeLinecap="round" />
        <path d="M3 18H21" stroke={color} strokeWidth="2" strokeLinecap="round" />
    </svg>
);

export const ArrowRightIcon = ({ size = 24, color = "currentColor" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5 12H19M19 12L13 6M19 12L13 18" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

export const InstagramIcon = ({ size = 24, color = "currentColor" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" stroke={color} strokeWidth="2" strokeLinecap="round" />
    </svg>
);

export const LinkedinIcon = ({ size = 24, color = "currentColor" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="2" y="9" width="4" height="12" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="4" cy="4" r="2" stroke={color} strokeWidth="1.8" />
    </svg>
);

export const YoutubeIcon = ({ size = 24, color = "currentColor" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.54C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" stroke={color} fill={color} strokeWidth="0.5" />
    </svg>
);
