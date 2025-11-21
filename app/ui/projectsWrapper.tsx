// "use client";

// import { motion, useScroll, useTransform } from "framer-motion";
// import { useRef } from "react";

// export default function ProjectsWrapper({ children }: { children: React.ReactNode }) {
//   const ref = useRef(null);

//   const { scrollYProgress } = useScroll({
//     target: ref,
//     offset: ["start 85%", "end 10%"],
//   });

//   // TÍTULO — sobe de baixo, estaciona no centro
//   const titleY = useTransform(scrollYProgress, [0, 0.25], [120, 0]);
//   const titleOpacity = useTransform(scrollYProgress, [0, 0.25], [0, 1]);

//   // BLUR do título (novo transform separado)
//   const titleBlur = useTransform(scrollYProgress, [0.25, 0.55], [0, 18]);

//   // CARDS
//   const cardsY = useTransform(scrollYProgress, [0.25, 0.55], [120, 0]);
//   const cardsOpacity = useTransform(scrollYProgress, [0.30, 0.55], [0, 1]);

//   return (
//     <section ref={ref} className="relative w-full">

//       {/* ÁREA DO TÍTULO — ele fica parado no centro */}
//       <div className="relative h-[140vh] flex items-center justify-center">

//         <motion.h2
//           style={{
//             y: titleY,
//             opacity: titleOpacity,
//           }}
//           transition={{
//             type: "spring",
//             stiffness: 50,
//             damping: 20,
//           }}
//           className="
//             text-[12vw] font-bold leading-none text-primary/20
//             pointer-events-none select-none
//             absolute top-1/2 -translate-y-1/2
//           "
//         >
//           Projects
//         </motion.h2>
//       </div>

//       {/* CARDS — sobem enquanto o título fica parado */}
//       <motion.div
//         style={{
//           opacity: cardsOpacity,
//           y: cardsY,
//         }}
//         className="flex flex-col gap-24 pb-40"
//       >
//         {children}
//       </motion.div>
//     </section>
//   );
// }