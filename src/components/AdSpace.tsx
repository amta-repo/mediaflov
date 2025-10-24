import { Card } from "@/components/ui/card";

interface AdSpaceProps {
  slot: string;
  height?: string;
}

const AdSpace = ({ slot, height = "250px" }: AdSpaceProps) => {
  return (
    <Card className="w-full glass-card overflow-hidden" style={{ minHeight: height }}>
      <div className="flex items-center justify-center h-full p-8 bg-muted/30">
        <div className="text-center space-y-2">
          <p className="text-sm text-muted-foreground">Advertisement</p>
          <p className="text-xs text-muted-foreground">Ad Slot: {slot}</p>
         <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8254053876036461"
     crossorigin="anonymous"></script>
<!-- First Set Ads -->
<ins class="adsbygoogle"
     style="display:block"
     data-ad-client="ca-pub-8254053876036461"
     data-ad-slot="4804085791"
     data-ad-format="auto"
     data-full-width-responsive="true"></ins>
<script>
     (adsbygoogle = window.adsbygoogle || []).push({});
</script>
          <div className="text-xs text-muted-foreground mt-4 max-w-xs">
            Replace this component with your Google AdSense script
          </div>
        </div>
      </div>
    </Card>
  );
};

export default AdSpace;
