interface AdBannerProps {
  position: string;
  className?: string;
}

export function AdBanner({ position, className = "" }: AdBannerProps) {
  return (
    <div className={`py-8 ${className}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="bg-card/50 border border-border/50 rounded-lg p-4 text-center">
          {/* AdSense placeholder - Replace with actual AdSense code */}
          <div
            className="min-h-[90px] md:min-h-[120px] flex items-center justify-center bg-secondary/30 rounded-md"
            data-ad-slot={position}
          >
            <p className="text-xs text-muted-foreground">
              Espace publicitaire Google AdSense
              <br />
              <span className="text-[10px]">Position: {position}</span>
            </p>
          </div>
          {/* 
            Pour activer AdSense, remplacez le contenu ci-dessus par :
            <ins
              className="adsbygoogle"
              style={{ display: "block" }}
              data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
              data-ad-slot="XXXXXXXXXX"
              data-ad-format="auto"
              data-full-width-responsive="true"
            />
            <script>
              (adsbygoogle = window.adsbygoogle || []).push({});
            </script>
          */}
        </div>
      </div>
    </div>
  );
}

export function AdSidebar({ position }: { position: string }) {
  return (
    <div className="sticky top-24">
      <div className="bg-card/50 border border-border/50 rounded-lg p-4">
        <div
          className="min-h-[250px] flex items-center justify-center bg-secondary/30 rounded-md"
          data-ad-slot={position}
        >
          <p className="text-xs text-muted-foreground text-center">
            Espace publicitaire
            <br />
            Google AdSense
            <br />
            <span className="text-[10px]">{position}</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export function AdInArticle({ position }: { position: string }) {
  return (
    <div className="my-8 py-4 border-y border-border/50">
      <div
        className="min-h-[250px] flex items-center justify-center bg-card/50 rounded-lg"
        data-ad-slot={position}
      >
        <p className="text-xs text-muted-foreground text-center">
          Publicité Google AdSense
          <br />
          <span className="text-[10px]">{position}</span>
        </p>
      </div>
    </div>
  );
}
