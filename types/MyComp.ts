export interface MyCompProps {
    text: string;
    speed: number;
    duration: number;
    backgroundColor: string;
    mode: "Light-mode" | "Autumn-mode" | "Dark-mode"
}

export const defaultMyCompProps: MyCompProps = { text: "This is an example component", speed:  100, duration: 1000, mode: "Light-mode", backgroundColor: "white" }
