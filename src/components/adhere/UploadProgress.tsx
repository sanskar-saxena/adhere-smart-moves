import { motion } from "framer-motion";
import { CheckCircle2, XCircle } from "lucide-react";
import { SPRING_EASE } from "@/lib/motion";

type UploadStatus = "uploading" | "success" | "error";

interface UploadProgressProps {
  fileName: string;
  progress: number;
  status: UploadStatus;
  onRetry?: () => void;
  onRemove?: () => void;
}

const UploadProgress = ({ fileName, progress, status, onRetry, onRemove }: UploadProgressProps) => (
  <motion.div
    initial={{ opacity: 0, y: 8 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -8 }}
    transition={{ duration: 0.3, ease: SPRING_EASE }}
    className="rounded-2xl border bg-card p-4 shadow-card"
  >
    <div className="flex items-center gap-3">
      {/* Thumbnail placeholder */}
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-muted/60 flex-shrink-0 overflow-hidden">
        <svg className="h-5 w-5 text-muted-foreground/50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
          <rect x="3" y="3" width="18" height="18" rx="3" />
          <circle cx="8.5" cy="8.5" r="1.5" />
          <path d="M21 15l-5-5L5 21" />
        </svg>
      </div>

      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between">
          <span className="text-[13px] font-medium text-card-foreground truncate">{fileName}</span>
          {status === "success" && <CheckCircle2 className="h-4 w-4 text-success flex-shrink-0" strokeWidth={2.5} />}
          {status === "error" && (
            <button onClick={onRetry} className="text-[11px] font-semibold text-destructive hover:text-destructive/80 transition-colors">
              Retry
            </button>
          )}
          {status === "uploading" && (
            <span className="font-mono text-[11px] text-muted-foreground">{Math.round(progress)}%</span>
          )}
        </div>

        {/* Progress bar */}
        <div className="mt-1.5 h-1 rounded-full bg-muted overflow-hidden">
          <motion.div
            className={`h-full rounded-full ${
              status === "error" ? "bg-destructive" : status === "success" ? "bg-success" : "bg-primary"
            }`}
            initial={{ width: "0%" }}
            animate={{ width: status === "error" ? "100%" : `${progress}%` }}
            transition={{ duration: 0.4, ease: SPRING_EASE }}
          />
        </div>

        {status === "error" && (
          <p className="text-[11px] text-destructive mt-1">Upload failed. Tap to retry.</p>
        )}
      </div>

      {onRemove && (
        <button onClick={onRemove} className="text-muted-foreground/40 hover:text-muted-foreground transition-colors p-1">
          <XCircle className="h-4 w-4" />
        </button>
      )}
    </div>
  </motion.div>
);

export default UploadProgress;
