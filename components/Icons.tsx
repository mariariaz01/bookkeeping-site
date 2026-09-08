type IconProps = { className?: string };

const base = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function IconLayers({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <rect x="4" y="14" width="16" height="5" rx="1.5" />
      <rect x="4" y="8.5" width="16" height="5" rx="1.5" />
      <rect x="4" y="3" width="16" height="5" rx="1.5" />
    </svg>
  );
}

export function IconClock({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7v5l3.5 2" />
    </svg>
  );
}

export function IconCheckSquare({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <rect x="3.5" y="3.5" width="17" height="17" rx="3" />
      <path d="M8 12.5l2.5 2.5 5.5-6" />
    </svg>
  );
}

export function IconBarChart({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M4 20V4M4 20h16" />
      <rect x="7" y="13" width="3" height="7" />
      <rect x="12" y="9" width="3" height="11" />
      <rect x="17" y="5" width="3" height="15" />
    </svg>
  );
}

export function IconArrowUpRight({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M6 18L18 6M18 6H10M18 6v8" />
    </svg>
  );
}

export function IconArrowDownLeft({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M18 6L6 18M6 18h8M6 18v-8" />
    </svg>
  );
}

export function IconUsers({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <circle cx="9" cy="8" r="3.2" />
      <path d="M3.5 20c0-3.6 2.5-6 5.5-6s5.5 2.4 5.5 6" />
      <circle cx="17" cy="9" r="2.3" />
      <path d="M15.5 20c0-2.6 0.9-4.6 3-5.3" />
    </svg>
  );
}

export function IconReceipt({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M6 3h12v18l-2-1.4L14 21l-2-1.4L10 21l-2-1.4L6 21V3z" />
      <path d="M9 8h6M9 12h6M9 16h3" />
    </svg>
  );
}

export function IconFolderCheck({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M3 8V6a1.5 1.5 0 0 1 1.5-1.5h5L11 6h8.5A1.5 1.5 0 0 1 21 7.5V18a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 3 18V8z" />
      <path d="M9 13l2 2 4-4.5" />
    </svg>
  );
}

export function IconRefresh({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M20 12a8 8 0 1 1-2.6-5.9" />
      <path d="M20 3v5h-5" />
    </svg>
  );
}

export function IconBriefcase({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <rect x="3.5" y="8" width="17" height="11.5" rx="2" />
      <path d="M9 8V6.2A1.7 1.7 0 0 1 10.7 4.5h2.6A1.7 1.7 0 0 1 15 6.2V8" />
      <path d="M3.5 13.5h17" />
    </svg>
  );
}

export function IconHome({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M4 21V9l8-6 8 6v12" />
      <path d="M9 21v-7h6v7" />
    </svg>
  );
}

export function IconMedicalCross({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 8v8M8 12h8" />
    </svg>
  );
}

export function IconTooth({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M7 10c0-4 2-6.5 5-6.5s5 2.5 5 6.5c0 3.5-1.3 6-2.3 9-.3 1-.9 1.5-1.5 1.5-.5 0-1-.4-1.2-1.2L11 15l-1 3.3c-.2.8-.7 1.2-1.2 1.2-.6 0-1.2-.5-1.5-1.5-1-3-2.3-5.5-2.3-9z" />
    </svg>
  );
}

export function IconScale({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M12 3v18M7 21h10" />
      <path d="M12 6L5 8.5 3 14a4 4 0 0 0 4 2.5A4 4 0 0 0 11 14L9 8.5" />
      <path d="M12 6l7 2.5 2 5.5a4 4 0 0 1-4 2.5 4 4 0 0 1-4-2.5l2-5.5" />
    </svg>
  );
}

export function IconMegaphone({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M3 11l13-5v12L3 13z" />
      <path d="M16 8.5l4-1.5v10l-4-1.5" />
      <path d="M7 13.5l1 4.5h2l-.6-4" />
    </svg>
  );
}

export function IconUtensils({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M4 3v9a3 3 0 0 0 3 3v6M4 3h4M4 7h4" />
      <path d="M20 3v9a3 3 0 0 1-3 3v6M20 3h-4M20 7h-4" />
    </svg>
  );
}

export function IconBag({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M6 8h12l-1 12H7L6 8z" />
      <path d="M9 8V6a3 3 0 0 1 6 0v2" />
    </svg>
  );
}

export function IconCart({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M3 4h2l2.2 11.5a2 2 0 0 0 2 1.5h7.6a2 2 0 0 0 2-1.6L20 8H6.5" />
      <circle cx="9" cy="20" r="1.3" />
      <circle cx="17" cy="20" r="1.3" />
    </svg>
  );
}

export function IconHammerWrench({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M8 3.5a4 4 0 0 0-4 4c0 1 .3 1.8.8 2.5L3 12l1.5 1.5 2-1.8c.7.5 1.5.8 2.5.8a4 4 0 0 0 4-4" />
      <path d="M13 11l7 7-2 2-7-7" />
    </svg>
  );
}

export function IconPaintTool({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M14.5 3.5l2 2-8 8-3 1 1-3z" />
      <path d="M17 6l3 3" />
      <path d="M4 20l3-3" />
    </svg>
  );
}

export function IconRocket({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M12 2.5c2.5 3 3.5 6 3.5 9 0 2-.8 3.8-2 5.2M12 2.5c-2.5 3-3.5 6-3.5 9 0 2 .8 3.8 2 5.2" />
      <path d="M8.5 17.5L6 21l3.5-1M15.5 17.5L18 21l-3.5-1" />
      <circle cx="12" cy="10.5" r="2" />
    </svg>
  );
}

export function IconShield({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M12 3l7 3.2v5c0 4.6-3 8.2-7 9.8-4-1.6-7-5.2-7-9.8v-5L12 3z" />
    </svg>
  );
}

export function IconTarget({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <circle cx="12" cy="12" r="8.5" />
      <circle cx="12" cy="12" r="3.4" />
    </svg>
  );
}

export function IconPlug({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <rect x="9" y="2.5" width="6" height="9" rx="2" />
      <path d="M11 9v3M13 9v3" />
      <path d="M9 6.5H6.5A1.5 1.5 0 0 0 5 8v9a1.5 1.5 0 0 0 1.5 1.5h11A1.5 1.5 0 0 0 19 17V8a1.5 1.5 0 0 0-1.5-1.5H15" />
    </svg>
  );
}

export const icons = {
  layers: IconLayers,
  clock: IconClock,
  checkSquare: IconCheckSquare,
  barChart: IconBarChart,
  arrowUpRight: IconArrowUpRight,
  arrowDownLeft: IconArrowDownLeft,
  users: IconUsers,
  receipt: IconReceipt,
  folderCheck: IconFolderCheck,
  refresh: IconRefresh,
  briefcase: IconBriefcase,
  home: IconHome,
  medicalCross: IconMedicalCross,
  tooth: IconTooth,
  scale: IconScale,
  megaphone: IconMegaphone,
  utensils: IconUtensils,
  bag: IconBag,
  cart: IconCart,
  hammerWrench: IconHammerWrench,
  paintTool: IconPaintTool,
  rocket: IconRocket,
  shield: IconShield,
  target: IconTarget,
  plug: IconPlug,
};

export type IconName = keyof typeof icons;
