import React from "react";

import {cn} from "@/lib/utils";
import {
    IconCloudflare,
    IconFigma,
    IconFirebase,
    IconGit,
    IconJest,
    IconMySQL,
    IconNextJS,
    IconNodeJS,
    IconPostgres,
    IconPrisma,
    IconPython,
    IconReactJS,
    IconTailwindcss,
    IconTypescript,
    IconVite,
    LogosArchlinux,
    SkillIconsDocker,
    DeviconElixir,
    VscodeIconsFileTypeCpp3,
    SkillIconsGraphqlDark,
    SkillIconsGodotLight,
    SkillIconsGolang,
} from "@/components/icons";

interface MarqueeProps {
    children: React.ReactNode;
    direction?: "left" | "up";
    pauseOnHover?: boolean;
    reverse?: boolean;
    fade?: boolean;
    className?: string;
}

const range = (start: number, end: number): number[] => Array.from({length: end - start}, (_, k) => k + start);

function Marquee(props: MarqueeProps) {
    const {children, direction = "left", pauseOnHover = false, reverse = false, fade = false, className} = props;

    const ifToRightOrToBottom = (direction: string) => {
        if (direction === "left") {
            return "to right";
        } else {
            return "to bottom";
        }
    };

    return (
        <div
            className={cn("group flex gap-4 overflow-hidden", direction === "left" ? "flex-row" : "flex-col", className)}
            data-testid="marquee"
            style={{
                maskImage: fade
                    ? `linear-gradient(${
                          ifToRightOrToBottom(direction)
                          // direction === "left" ? "to right" : "to bottom"
                      }, transparent 0%, rgba(0, 0, 0, 1.0) 10%, rgba(0, 0, 0, 1.0) 90%, transparent 100%)`
                    : undefined,
                WebkitMaskImage: fade
                    ? `linear-gradient(${
                          ifToRightOrToBottom(direction)
                          // direction === "left" ? "to right" : "to bottom"
                      }, transparent 0%, rgba(0, 0, 0, 1.0) 10%, rgba(0, 0, 0, 1.0) 90%, transparent 100%)`
                    : undefined,
            }}
        >
            {range(0, 2).map((i) => (
                <div
                    key={i}
                    className={cn(
                        "flex shrink-0 justify-around gap-4 [--gap:1rem]",
                        direction === "left" ? "animate-marquee-left flex-row" : "animate-marquee-up flex-col",
                        pauseOnHover && "group-hover:[animation-play-state:paused]",
                        reverse && "direction-reverse",
                    )}
                    data-testid={`marquee-child-${i + 1}`}
                >
                    {children}
                </div>
            ))}
        </div>
    );
}

export function Techs() {
    return (
        <div className="mb-1 flex h-fit flex-col gap-1 overflow-hidden rounded-xl p-1">
            <Marquee fade pauseOnHover className="">
                <IconTypescript height="48" width="48" />
                <IconTailwindcss height="48" width="48" />
                <IconPrisma height="48" width="48" />
                <IconNextJS height="48" width="48" />
                <IconReactJS height="48" width="48" />
                <IconFirebase height="48" width="48" />
                <IconPython height="48" width="48" />
                <IconNodeJS height="48" width="48" />
                <IconPostgres height="48" width="48" />
                <VscodeIconsFileTypeCpp3 height="48" width="48" />
                <IconFigma height="48" width="48" />
                <SkillIconsGolang height="48" width="48" />
                <IconJest height="48" width="48" />
                <SkillIconsGraphqlDark height="48" width="48" />
            </Marquee>
            <Marquee fade pauseOnHover reverse className="mt-2">
                <DeviconElixir height="48" width="48" />
                <SkillIconsDocker height="48" width="48" />
                <LogosArchlinux height="48" width="48" />
                <SkillIconsGodotLight height="48" width="48" />
                <VscodeIconsFileTypeCpp3 height="48" width="48" />
                <IconPrisma height="48" width="48" />
                <IconMySQL height="48" width="48" />
                <IconFirebase height="48" width="48" />
                <IconFigma height="48" width="48" />
                <IconGit height="48" width="48" />
                <IconVite height="48" width="48" />
                <IconReactJS height="48" width="48" />
                <IconCloudflare height="48" width="48" />
                <IconTypescript height="48" width="48" />
                <IconJest height="48" width="48" />
                <IconNodeJS height="48" width="48" />
            </Marquee>
        </div>
    );
}
