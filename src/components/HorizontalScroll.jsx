import { useRef, useEffect } from "react";

const HorizontalScroll = ({ children, className = "" }) => {
  const scrollRef = useRef();

  const mouseDownHandle = (e) => {
    const oldX = e.pageX;
    const scrollLeft = scrollRef.current.scrollLeft;

    const mouseMoveHandle = (e) => {
      const newX = e.pageX;
      const offset = newX - oldX;
      scrollRef.current.scrollLeft = scrollLeft - offset;
    };

    const mouseUpHandle = () => {
      window.removeEventListener('mousemove', mouseMoveHandle);
      window.removeEventListener('mouseup', mouseUpHandle);
    };

    window.addEventListener('mousemove', mouseMoveHandle);
    window.addEventListener('mouseup', mouseUpHandle);
  };

  const wheelHandler = (e) => {
    e.preventDefault();
    scrollRef.current.scrollLeft += e.deltaY;
  };

  useEffect(() => {
    scrollRef.current.addEventListener('wheel', wheelHandler);

    return () => {
      scrollRef.current.removeEventListener('wheel', wheelHandler);
    };
  }, []);

  return (
    <div ref={scrollRef} className={className} onMouseDown={mouseDownHandle}>
      {children}
    </div>
  );
};

export default HorizontalScroll;