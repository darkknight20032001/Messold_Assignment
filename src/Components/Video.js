import React from "react";

const Video = () => {
  return (
    <div>
      <video
        class="max_img_opt_vid artisanvideo lazy"
        id="myvideo"
        width="100%"
        height="100%"
        playsinline="playsinline"
        disablepictureinpicture="true"
        controlslist="nodownload"
        preload="none"
        aria-label="Bear Hybrid"
        data-uw-node-idx="621"
        poster="https://cdn.shopify.com/s/files/1/2090/3151/files/Salt_lamp.00_00_00_00.Still003.jpg?v=1639060837"
        loop=""
        muted=""
        autoplay=""
      >
        <source
          src="https://cdn.shopify.com/s/files/1/2090/3151/files/READ_YOUR_HOROSCOPE_FOR_THE_DAY.mp4?v=1648715174"
          type="video/mp4"
        />
      </video>
    </div>
  );
};

export default Video;
