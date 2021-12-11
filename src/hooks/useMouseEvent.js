import { useState, useEffect } from "react";
import debouce from "lodash.debounce";

const useMousePosition = () => {
  const [mousePosition, setMousePosition] = useState({ x: null, y: null });
  const updateMousePosition = debouce(
    (ev) =>
      setMousePosition({
        x: ev.clientX,
        y: ev.clientY,
      }),
    100
  );
  // 1000 in 100 -> 1
  debounce(fn, 100);

  useEffect(() => {
    window.addEventListener("mousemove", updateMousePosition);
    return () => window.removeEventListener("mousemove", updateMousePosition);
  }, []);
  return mousePosition; //{x:1231,y:12313}
};

export default useMousePosition;
