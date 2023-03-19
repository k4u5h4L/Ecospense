/**
 * Checks if the device is iOS or not.
 * @returns true if iOS, false otherwise.
 */
export const isItOniOS = (): boolean => {
    if (navigator) {
        return (
            [
                "iPad Simulator",
                "iPhone Simulator",
                "iPod Simulator",
                "iPad",
                "iPhone",
                "iPod",
            ].includes(navigator.platform) ||
            // iPad on iOS 13 detection
            (navigator.userAgent.includes("Mac") && "ontouchend" in document)
        );
    }

    return false;
};
