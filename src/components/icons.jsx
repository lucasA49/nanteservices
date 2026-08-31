// Lightweight inline SVG icon set (Heroicons-outline style, 24x24, currentColor).
// Decorative by default (aria-hidden) — pass className to size/color from callers.

const base = {
  fill: 'none',
  viewBox: '0 0 24 24',
  strokeWidth: 1.75,
  stroke: 'currentColor',
  'aria-hidden': 'true',
}

export function IconSparkles({ className = 'w-6 h-6' }) {
  return (
    <svg {...base} className={className}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.456-2.456L14.25 6l1.035-.259a3.375 3.375 0 0 0 2.456-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456Z"
      />
    </svg>
  )
}

export function IconLeaf({ className = 'w-6 h-6' }) {
  return (
    <svg {...base} className={className}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M20.25 3.75c-9 0-16.5 6-16.5 15 0 .414.336.75.75.75 9 0 15-6.75 15-15.75 0-.414-.336-.75-.75-.75Z"
      />
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5 12 12" />
    </svg>
  )
}

export function IconWrench({ className = 'w-6 h-6' }) {
  return (
    <svg {...base} className={className}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085Z"
      />
    </svg>
  )
}

export function IconTruck({ className = 'w-6 h-6' }) {
  return (
    <svg {...base} className={className}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v11.177m0-11.177L12 4.5m2.25 3.073L16.5 4.5m-6.75 3.073V18.75M2.25 14.25V6.375c0-.621.504-1.125 1.125-1.125H9.75"
      />
    </svg>
  )
}

export function IconKey({ className = 'w-6 h-6' }) {
  return (
    <svg {...base} className={className}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15.75 5.25a3 3 0 0 1 3 3m3 0a6 6 0 0 1-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1 1 21.75 8.25Z"
      />
    </svg>
  )
}

export function IconCar({ className = 'w-6 h-6' }) {
  return (
    <svg {...base} className={className}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4.5 15.75 5.68 9.902A2.25 2.25 0 0 1 7.884 8.25h8.232a2.25 2.25 0 0 1 2.204 1.652l1.18 5.848M4.5 15.75h15M4.5 15.75a1.5 1.5 0 0 0-1.5 1.5v.75c0 .414.336.75.75.75H4.5m15-3a1.5 1.5 0 0 1 1.5 1.5v.75a.75.75 0 0 1-.75.75H19.5"
      />
      <circle cx="7.5" cy="15.75" r="1.5" />
      <circle cx="16.5" cy="15.75" r="1.5" />
    </svg>
  )
}

export function IconShield({ className = 'w-6 h-6' }) {
  return (
    <svg {...base} className={className}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z"
      />
    </svg>
  )
}

export function IconClock({ className = 'w-6 h-6' }) {
  return (
    <svg {...base} className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
    </svg>
  )
}

export function IconBadge({ className = 'w-6 h-6' }) {
  return (
    <svg {...base} className={className}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
      />
    </svg>
  )
}

export function IconPhone({ className = 'w-6 h-6' }) {
  return (
    <svg {...base} className={className}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.25 6.75c0 8.284 6.716 15 15 15h1.5a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106a1.125 1.125 0 0 0-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97a1.125 1.125 0 0 0 .417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
      />
    </svg>
  )
}

export function IconMail({ className = 'w-6 h-6' }) {
  return (
    <svg {...base} className={className}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.007 1.872l-7.5 5.006a2.25 2.25 0 0 1-2.486 0l-7.5-5.006A2.25 2.25 0 0 1 2.25 6.993V6.75"
      />
    </svg>
  )
}

export function IconMapPin({ className = 'w-6 h-6' }) {
  return (
    <svg {...base} className={className}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
      />
    </svg>
  )
}

export function IconMenu({ className = 'w-6 h-6' }) {
  return (
    <svg {...base} className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5" />
    </svg>
  )
}

export function IconClose({ className = 'w-6 h-6' }) {
  return (
    <svg {...base} className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
    </svg>
  )
}

export function IconArrowRight({ className = 'w-5 h-5' }) {
  return (
    <svg {...base} className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
    </svg>
  )
}

export function IconCheckCircle({ className = 'w-6 h-6' }) {
  return (
    <svg {...base} className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="m9 12.75 2.25 2.25 6-6M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
    </svg>
  )
}

export function IconAlertTriangle({ className = 'w-6 h-6' }) {
  return (
    <svg {...base} className={className}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"
      />
    </svg>
  )
}

export function IconDroplet({ className = 'w-6 h-6' }) {
  return (
    <svg {...base} className={className}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 3.75c3.5 4.5 6 7.708 6 10.5a6 6 0 1 1-12 0c0-2.792 2.5-6 6-10.5Z"
      />
    </svg>
  )
}

export function IconSponge({ className = 'w-6 h-6' }) {
  return (
    <svg {...base} className={className}>
      <rect x="3" y="12" width="14.25" height="7.5" rx="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="7" cy="15.75" r="0.75" />
      <circle cx="10.5" cy="15.75" r="0.75" />
      <circle cx="14" cy="15.75" r="0.75" />
      <circle cx="18" cy="5.75" r="1.5" />
      <circle cx="21" cy="8.25" r="0.85" />
      <circle cx="15" cy="7.5" r="0.6" />
    </svg>
  )
}

export function IconSteeringWheel({ className = 'w-6 h-6' }) {
  return (
    <svg {...base} className={className}>
      <circle cx="12" cy="12" r="8.25" />
      <circle cx="12" cy="12" r="2.25" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3.75v6M6.05 16.5l5.187-3M17.95 16.5l-5.187-3" />
    </svg>
  )
}

// Brand glyphs (filled, currentColor) — for social media links, not the outline set above.
const brandBase = { viewBox: '0 0 24 24', fill: 'currentColor', 'aria-hidden': 'true' }

export function IconInstagram({ className = 'w-6 h-6' }) {
  return (
    <svg {...brandBase} className={className}>
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  )
}

export function IconTiktok({ className = 'w-6 h-6' }) {
  return (
    <svg {...brandBase} className={className}>
      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
    </svg>
  )
}

export function IconSnapchat({ className = 'w-6 h-6' }) {
  return (
    <svg {...brandBase} className={className}>
      <path d="M12.206.793c.99 0 4.347.276 5.93 3.821.529 1.193.403 3.219.299 4.847l-.003.06c-.012.18-.022.345-.03.51.075.045.203.09.401.09.3-.016.659-.12 1.033-.301.165-.088.344-.104.464-.104.182 0 .359.029.509.09.45.149.734.479.734.838.015.449-.39.839-1.213 1.168-.089.029-.209.075-.344.119-.45.135-1.139.36-1.333.81-.09.224-.061.524.12.868l.015.015c.06.136 1.526 3.475 4.791 4.014.255.044.435.27.42.509 0 .075-.015.149-.045.225-.24.569-1.273.988-3.146 1.271-.059.091-.12.375-.164.57-.029.179-.074.36-.134.553-.076.271-.27.405-.555.405h-.03c-.135 0-.313-.031-.538-.074-.36-.075-.765-.135-1.273-.135-.3 0-.599.015-.913.074-.6.104-1.123.464-1.723.884-.853.599-1.826 1.288-3.294 1.288-.06 0-.119-.015-.18-.015h-.149c-1.468 0-2.427-.675-3.279-1.288-.599-.42-1.107-.779-1.707-.884-.314-.045-.629-.074-.928-.074-.54 0-.958.089-1.272.149-.211.043-.391.074-.54.074-.374 0-.523-.224-.583-.42-.061-.192-.09-.389-.135-.567-.046-.181-.105-.494-.166-.57-1.918-.222-2.95-.642-3.189-1.226-.031-.063-.052-.15-.055-.225-.015-.243.165-.465.42-.509 3.264-.54 4.73-3.879 4.791-4.02l.016-.029c.18-.345.224-.645.119-.869-.195-.434-.884-.658-1.332-.809-.121-.029-.24-.074-.346-.119-1.107-.435-1.257-.93-1.197-1.273.09-.479.674-.793 1.168-.793.146 0 .27.029.383.074.42.194.789.3 1.104.3.234 0 .384-.06.465-.105l-.046-.569c-.098-1.626-.225-3.651.307-4.837C7.392 1.077 10.739.809 11.727.809l.419-.016h.06z" />
    </svg>
  )
}
