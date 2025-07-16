// "use client";

// import { useEffect } from "react";
// import LocomotiveScroll from "locomotive-scroll";
// import "locomotive-scroll/dist/locomotive-scroll.css";

// export default function SmoothScrollWrapper({ children }) {
//   useEffect(() => {
//     const scroll = new LocomotiveScroll({
//       el: document.querySelector("#scroll-container"),
//       smooth: true,
//       //   lerp: 0.1,
//     });

//     return () => {
//       scroll.destroy();
//     };
//   }, []);

//   return <div id="scroll-container">{children}</div>;
// }
