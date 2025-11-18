import { Download } from "lucide-react";

type ButtonProps = {
    children: React.ReactNode;
};

export default function Button({children}: ButtonProps) {
  return (
      <a
        href={"/"}
        className="flex items-center gap-1 bg-surface rounded-sm py-2.5 px-2"
      >
        <span>
          <Download className="size-3.5" />
        </span>
        <span>{children}</span>
      </a>
  );
}
