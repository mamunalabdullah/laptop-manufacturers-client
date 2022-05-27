import React from "react";
import video from "../../assets/video.mp4";

const UsbMember = () => {
  return (
    <div className="p-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 justify-center items-center">
        <div className="flex flex-col items-center justify-center shadow-lg rounded-lg px-5">
          <h2 className="text-2xl font-bold">Windows 11</h2>
          <p>
            Windows 11 is the latest major release of Microsoft's Windows NT
            operating system, released in October 2021. It is a free upgrade to
            its predecessor, Windows 10 (2015), available for any Windows 10
            devices that meet the new Windows 11 system requirements. Windows 11
            features major changes to the Windows shell influenced by the
            canceled Windows 10X, including a redesigned Start menu, the
            replacement of its "live tiles" with a separate "Widgets" panel on
            the taskbar, the ability to create tiled sets of windows that can be
            minimized and restored from the taskbar as a group, and new gaming
            technologies inherited from Xbox Series X and Series S such as Auto
            HDR and DirectStorage on compatible hardware. Internet Explorer (IE)
            has been replaced by the Chromium-based Microsoft Edge as the
            default web browser like its predecessor, Windows 10, and Microsoft
            Teams is integrated into the Windows shell. Microsoft also announced
            plans to allow more flexibility in software that can be distributed
            via Microsoft Store, and to support Android apps on Windows 11
            (including a partnership with Amazon to make its app store available
            for the function).
          </p>
          <button className="btn btn-primary font-bold my-6">
            Read More
          </button>
        </div>
        <div>
          <video
            className="rounded-lg"
            controls
            muted
            autoPlay
            src={video}
          ></video>
        </div>
      </div>
    </div>
  );
};

export default UsbMember;
