import type { CSSProperties, FocusEvent, KeyboardEvent, ReactNode } from "react";
import { useEffect, useState } from "react";
import type { LucideIcon } from "lucide-react";
import { ArrowRight, Check, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

const motionBars = [
  { width: "74%", offset: "0%", delay: "0s" },
  { width: "56%", offset: "12%", delay: "0.16s" },
  { width: "82%", offset: "6%", delay: "0.32s" },
  { width: "63%", offset: "18%", delay: "0.48s" },
  { width: "70%", offset: "9%", delay: "0.64s" },
];

export interface ServiceFlipCardProps {
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  icon: LucideIcon;
  index?: number;
  color?: string;
  cta?: ReactNode;
  className?: string;
}

function withOpacity(hex: string, opacity: number) {
  const normalized = hex.replace("#", "");
  const raw =
    normalized.length === 3
      ? normalized
          .split("")
          .map((char) => `${char}${char}`)
          .join("")
      : normalized;

  if (raw.length !== 6) {
    return `rgb(205 4 11 / ${opacity})`;
  }

  const red = Number.parseInt(raw.slice(0, 2), 16);
  const green = Number.parseInt(raw.slice(2, 4), 16);
  const blue = Number.parseInt(raw.slice(4, 6), 16);
  return `rgb(${red} ${green} ${blue} / ${opacity})`;
}

export default function ServiceFlipCard({
  title,
  subtitle,
  description,
  features,
  icon: Icon,
  index = 0,
  color = "#CD040B",
  cta,
  className,
}: ServiceFlipCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [coarsePointer, setCoarsePointer] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(hover: none), (pointer: coarse)");
    const update = () => setCoarsePointer(mediaQuery.matches);

    update();
    mediaQuery.addEventListener("change", update);

    return () => mediaQuery.removeEventListener("change", update);
  }, []);

  const primaryGlow = withOpacity(color, 0.16);
  const primaryBorder = withOpacity(color, 0.14);
  const primaryWash = withOpacity(color, 0.06);
  const softPrimaryWash = withOpacity(color, 0.03);

  const flipOpen = () => {
    if (!coarsePointer) {
      setIsFlipped(true);
    }
  };

  const flipClosed = () => {
    if (!coarsePointer) {
      setIsFlipped(false);
    }
  };

  const handleClick = () => {
    if (coarsePointer) {
      setIsFlipped((current) => !current);
    }
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      setIsFlipped((current) => !current);
    }

    if (event.key === "Escape") {
      setIsFlipped(false);
    }
  };

  const handleBlur = (event: FocusEvent<HTMLDivElement>) => {
    if (!event.currentTarget.contains(event.relatedTarget)) {
      setIsFlipped(false);
    }
  };

  return (
    <div
      role="button"
      tabIndex={0}
      aria-pressed={isFlipped}
      aria-label={`${title} service card`}
      onMouseEnter={flipOpen}
      onMouseLeave={flipClosed}
      onFocus={flipOpen}
      onBlur={handleBlur}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      className={cn(
        "group relative h-[24rem] w-full cursor-pointer [perspective:1800px]",
        className,
      )}
      style={
        {
          "--service-primary": color,
        } as CSSProperties
      }
    >
      <div
        className={cn(
          "relative h-full w-full [transform-style:preserve-3d] transition-transform duration-700",
          isFlipped ? "[transform:rotateY(180deg)]" : "[transform:rotateY(0deg)]",
        )}
        style={{ transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)" }}
      >
        <div
          className={cn(
            "absolute inset-0 overflow-hidden rounded-[1.9rem] border bg-[linear-gradient(180deg,#ffffff_0%,#fafafa_100%)] p-6 shadow-soft [backface-visibility:hidden]",
            isFlipped ? "opacity-0" : "opacity-100",
          )}
          style={{ borderColor: primaryBorder }}
        >
          <div
            className="absolute inset-0"
            style={{
              background: `radial-gradient(circle at top right, ${primaryWash}, transparent 34%), linear-gradient(180deg, ${softPrimaryWash}, transparent 56%)`,
            }}
          />

          <div className="relative flex h-full flex-col">
            <div className="flex items-start justify-between gap-4">
              <div className="rounded-full border border-black/10 bg-white/92 px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.24em] text-muted-foreground">
                Service 0{index + 1}
              </div>
              <div className="flex items-center gap-1.5">
                {[0, 1, 2].map((dot) => (
                  <span
                    key={dot}
                    className={cn("h-2 w-2 rounded-full", dot === 0 ? "bg-primary" : "bg-black/10")}
                  />
                ))}
              </div>
            </div>

            <div className="relative mt-7 flex flex-1 items-center justify-center">
              <div className="absolute inset-x-1/2 top-1/2 h-40 w-[82%] -translate-x-1/2 -translate-y-1/2 rounded-[2rem] border border-black/[0.06] bg-white/75 blur-[0.4px]" />
              <div className="absolute inset-x-7 top-1/2 -translate-y-1/2 space-y-3">
                {motionBars.map((bar) => (
                  <div
                    key={`${title}-${bar.delay}`}
                    className="service-card-scan h-3 rounded-full"
                    style={{
                      width: bar.width,
                      marginLeft: bar.offset,
                      animationDelay: bar.delay,
                      background: `linear-gradient(90deg, ${withOpacity(color, 0.04)} 0%, ${withOpacity(color, 0.18)} 50%, ${withOpacity(color, 0.04)} 100%)`,
                    }}
                  />
                ))}
              </div>

              <div
                className="service-card-float relative z-10 flex h-[5.5rem] w-[5.5rem] items-center justify-center rounded-[1.75rem] border border-white/30 text-white shadow-[0_24px_52px_rgba(0,0,0,0.12)]"
                style={{
                  background: `linear-gradient(135deg, ${color} 0%, #a20208 100%)`,
                  boxShadow: `0 24px 48px ${primaryGlow}`,
                }}
              >
                <Icon className="h-9 w-9" />
              </div>

              <div
                className="absolute bottom-7 left-1/2 h-5 w-32 -translate-x-1/2 rounded-full blur-2xl"
                style={{ backgroundColor: primaryGlow }}
              />
            </div>

            <div className="border-t border-black/8 pt-5">
              <div className="flex items-center gap-2 text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-primary/80">
                <Sparkles className="h-3.5 w-3.5" />
                {coarsePointer ? "Tap to explore" : "Hover to explore"}
              </div>
              <h3 className="mt-3 text-[1.42rem] font-display font-semibold leading-tight text-foreground">
                {title}
              </h3>
              <p className="mt-2 line-clamp-2 text-sm leading-6 text-muted-foreground">
                {subtitle}
              </p>
            </div>
          </div>
        </div>

        <div
          className={cn(
            "absolute inset-0 flex h-full w-full flex-col overflow-hidden rounded-[1.9rem] border bg-[linear-gradient(180deg,#ffffff_0%,#f8f8f8_100%)] p-6 shadow-soft [backface-visibility:hidden] [transform:rotateY(180deg)]",
            isFlipped ? "opacity-100" : "opacity-0",
          )}
          style={{ borderColor: primaryBorder }}
        >
          <div
            className="absolute inset-0"
            style={{
              background: `radial-gradient(circle at top right, ${primaryWash}, transparent 36%), linear-gradient(180deg, rgba(255,255,255,0) 0%, ${softPrimaryWash} 100%)`,
            }}
          />

          <div className="relative z-10 flex h-full flex-col">
            <div className="flex items-start gap-3">
              <div
                className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl text-white"
                style={{
                  background: `linear-gradient(135deg, ${color} 0%, #a20208 100%)`,
                  boxShadow: `0 18px 35px ${primaryGlow}`,
                }}
              >
                <Icon className="h-5 w-5" />
              </div>

              <div className="min-w-0">
                <p className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-primary/80">
                  Built around real operations
                </p>
                <h3 className="mt-1 text-[1.28rem] font-display font-semibold leading-tight text-foreground">
                  {title}
                </h3>
              </div>
            </div>

            <p className="mt-5 line-clamp-4 text-sm leading-7 text-muted-foreground">
              {description}
            </p>

            <div className="mt-5 grid gap-3">
              {features.slice(0, 4).map((feature) => (
                <div key={feature} className="flex items-start gap-3 text-sm text-foreground/88">
                  <div
                    className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-md"
                    style={{ backgroundColor: withOpacity(color, 0.1) }}
                  >
                    <Check className="h-3.5 w-3.5 text-primary" />
                  </div>
                  <span className="leading-6">{feature}</span>
                </div>
              ))}
            </div>

            <div className="mt-auto border-t border-black/8 pt-4">
              <div onClickCapture={(event) => event.stopPropagation()}>
                {cta ?? (
                  <div
                    className="inline-flex items-center gap-2 text-sm font-semibold text-primary"
                    style={{ color }}
                  >
                    Learn more
                    <ArrowRight className="h-4 w-4" />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
