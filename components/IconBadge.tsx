import { icons, type IconName } from "./Icons";

const sizes = {
  sm: { box: "w-9 h-9 rounded-lg", icon: "w-[18px] h-[18px]" },
  md: { box: "w-11 h-11 rounded-xl", icon: "w-5 h-5" },
};

export default function IconBadge({
  name,
  size = "md",
  className = "",
}: {
  name: IconName;
  size?: "sm" | "md";
  className?: string;
}) {
  const Icon = icons[name];
  const s = sizes[size];
  return (
    <span className={`inline-flex items-center justify-center shrink-0 bg-plum/10 dark:bg-cream/10 text-plum dark:text-cream ${s.box} ${className}`}>
      <Icon className={s.icon} />
    </span>
  );
}
