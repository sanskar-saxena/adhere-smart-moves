import { Upload, Camera, Clipboard } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ScanUploaderProps {
  onScan: () => void;
}

const ScanUploader = ({ onScan }: ScanUploaderProps) => (
  <div className="space-y-3">
    <div
      onClick={onScan}
      className="group rounded-3xl border-2 border-dashed border-border bg-muted/15 p-12 flex flex-col items-center justify-center gap-4 cursor-pointer hover:border-primary/30 hover:bg-primary/3 transition-all duration-300 active:scale-[0.99]"
    >
      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/8 transition-all duration-300 group-hover:bg-primary/14 group-hover:scale-105">
        <Upload className="h-7 w-7 text-primary" strokeWidth={1.5} />
      </div>
      <div className="text-center">
        <p className="font-semibold text-foreground text-[14px]">Drop a menu photo</p>
        <p className="text-[12px] text-muted-foreground mt-1">Photo, screenshot, or delivery app screen</p>
      </div>
    </div>

    <div className="grid grid-cols-2 gap-2.5">
      <Button variant="outline" size="lg" onClick={onScan} className="active:scale-[0.97]">
        <Camera className="mr-2 h-4 w-4" /> Take Photo
      </Button>
      <Button variant="outline" size="lg" onClick={onScan} className="active:scale-[0.97]">
        <Clipboard className="mr-2 h-4 w-4" /> Paste Menu
      </Button>
    </div>
  </div>
);

export default ScanUploader;
