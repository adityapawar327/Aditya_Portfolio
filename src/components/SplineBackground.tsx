
import { useEffect, useState } from "react";

const SplineBackground = () => {
  const [loading, setLoading] = useState(true);
  const splineUrl = "https://my.spline.design/liquidmotion-jsoYm7xXwjXSx4dinkCnK3AF/";

  useEffect(() => {
    // Add event listener to detect when the iframe has loaded
    const handleIframeLoad = () => {
      setLoading(false);
    };

    const iframe = document.getElementById("spline-iframe") as HTMLIFrameElement;
    if (iframe) {
      iframe.addEventListener("load", handleIframeLoad);
    }

    return () => {
      if (iframe) {
        iframe.removeEventListener("load", handleIframeLoad);
      }
    };
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="neuro-flat p-8 animate-pulse-slow"></div>
        </div>
      )}
      <iframe
        id="spline-iframe"
        src={splineUrl}
        frameBorder="0"
        width="100%"
        height="100%"
        className="scale-110 opacity-60"
        title="3D Liquid Motion Background"
        allowFullScreen
      />
      <div className="absolute inset-0 bg-gradient-to-t from-neuro-black via-transparent to-transparent"></div>
    </div>
  );
};

export default SplineBackground;
