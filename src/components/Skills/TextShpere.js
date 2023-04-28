// import React, { useEffect, useRef } from "react";
// import TagCloud from "TagCloud";
// import "./TextSphere.css";

// const TextSphere = () => {
//   const containerRef = useRef(null);

//   useEffect(() => {
//     const container = containerRef.current;
//     const texts = [
//         "HTML",
//         "CSS",
//         "GIT",
//         "JavaScript",
//         "React",
//         "Java",
//         ".NET",
//         "C",
//         "PHP",
//         "SQLServer",
//         "MySQL",
//         "Oracle",
//         "StarUML",
//         "Photoshop",
//         "PostMan",
//         "Arduino",
//         "Cybersecurity",
//         "Dialogflow",
//     ];
//     const options = {
//       radius: 300,
//       maxSpeed: "normal",
//       initSpeed: "normal",
//       keep: true,
//       loop: true,
//       lockX: true,
//       lockY: true,
//     };

//     TagCloud(container, texts, options);

//     return () => {
//       TagCloud(container, [], {});
//     };
//   }, []);

//   return (
//     <div className="text-sphere">
//       <span className="tagcloud" ref={containerRef}></span>
//     </div>
//   );
// };



// export default TextSphere;