import { Download } from "lucide-react";
import { useLanguage } from "../context/languageContext";
import { DownloadButtonProps } from "@/types/downloadButton";

export default function DownloadButton({ bgTransparent, justifyStart, shadowType, className}: DownloadButtonProps) {
  const { t } = useLanguage();

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/cv.pdf";
    link.download = "Curriculo-AndersonMiranda.pdf";
    link.click();
  };

  return (
    <div
      className={`buttonBaseClasses cursor-pointer ${shadowType} ${
        bgTransparent ? "bg-transparent" : "bg-secondary"
      } ${justifyStart ? "justify-start" : "justify-center"} ${className}`}
      onClick={handleDownload}
    >
      <Download size={18} />
      <span>{t("resume", "nav")}</span>
    </div>
  );
}
