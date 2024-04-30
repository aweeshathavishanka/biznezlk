"use client";

const Video = () => {
  return (
    <div className=" w-full">
      <video width="320" height="240" controls preload="none">
        <source
          src="/service-provider/public/BIZNEZ.lk Final 01.mp4"
          type="video/mp4"
        />
      </video>
    </div>
  );
};

export default Video;
