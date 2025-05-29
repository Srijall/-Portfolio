    import { VelocityScroll } from "../magicui/scroll-based-velocity";
    import { GridBackground } from "../ui/grid-background";

    export function ScrollBasedVelocityDemo() {
        return (
            <GridBackground className="min-screen-150">
        <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
            <VelocityScroll defaultVelocity={3}> Innovate • Create • Elevate • </VelocityScroll>
            <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 "></div>
            <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4"></div>
        </div>
            </GridBackground>
        );
    }
    