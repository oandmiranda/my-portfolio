export type AnimationProps = {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  animation?: AnimationType;
  trigger?: TriggerType;
};

export type AnimationType = "fade" | "secondary" | "slideUp";
export type TriggerType = "mount" | "scroll";