import Image from "next/image";
import logoFilled from "../../public/press-kit/ac-logo-light-bg.svg";
import logoOutlined from "../../public/press-kit/ac-logo-dark-bg.svg";

type BrandLockupProps = {
  variant?: "horizontal" | "stacked";
  size?: "sm" | "md" | "lg";
  theme?: "light" | "dark";
};

const sizeConfig = {
  sm: { icon: 28, text: "text-lg", gap: "gap-2", iconClass: "w-7 h-7" },
  md: { icon: 40, text: "text-2xl", gap: "gap-3", iconClass: "w-10 h-10" },
  lg: { icon: 64, text: "text-5xl", gap: "gap-4", iconClass: "w-16 h-16" },
};

export function BrandLockup({
  variant = "horizontal",
  size = "md",
  theme = "light",
}: BrandLockupProps) {
  const config = sizeConfig[size];
  const logoSrc = theme === "dark" ? logoOutlined : logoFilled;
  const textColor = theme === "dark" ? "text-white" : "text-[#1F1D1D]";

  if (variant === "stacked") {
    return (
      <div className="flex flex-col items-center gap-3">
        <Image
          src={logoSrc}
          alt="AlteredCraft logo"
          width={config.icon * 1.5}
          height={config.icon * 1.5}
          unoptimized
          className={size === "lg" ? "w-24 h-24" : size === "md" ? "w-14 h-14" : "w-10 h-10"}
        />
        <span
          className={`font-[family-name:var(--font-plus-jakarta)] font-semibold ${config.text} ${textColor} tracking-tight`}
        >
          <span style={{ color: "#D4B84A" }}>/</span>altered craft
        </span>
      </div>
    );
  }

  return (
    <div className={`flex items-center ${config.gap}`}>
      <Image
        src={logoSrc}
        alt="AlteredCraft logo"
        width={config.icon}
        height={config.icon}
        unoptimized
        className={config.iconClass}
      />
      <span
        className={`font-[family-name:var(--font-plus-jakarta)] font-semibold ${config.text} ${textColor} tracking-tight`}
      >
        <span style={{ color: "#D4B84A" }}>/</span>altered craft
      </span>
    </div>
  );
}
