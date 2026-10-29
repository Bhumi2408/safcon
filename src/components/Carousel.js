"use client";

import { Children, useCallback, useEffect, useRef, useState } from "react";
import Icon from "@/components/Icon";

// Looping, autoplaying slide carousel.
// `breakpoints` = [[minWidth, slidesPerView], ...] ascending; base is `perView`.
export default function Carousel({
  children,
  perView = 1,
  breakpoints = [],
  gap = 20,
  delay = 3000,
  speed = 500,
  pauseOnHover = false,
  arrows = false,
  arrowClass = "",
  slideClass = "",
}) {
  const items = Children.toArray(children);
  const [view, setView] = useState(breakpoints.length ? breakpoints[breakpoints.length - 1][1] : perView);
  const [index, setIndex] = useState(0);
  const [animate, setAnimate] = useState(true);
  // loop clones are added only in the browser so the server HTML has no duplicate headings
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const paused = useRef(false);

  useEffect(() => {
    const update = () => {
      let v = perView;
      for (const [min, n] of breakpoints) if (window.innerWidth >= min) v = n;
      setView(v);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, [perView, breakpoints]);

  const next = useCallback(() => {
    setAnimate(true);
    setIndex((i) => i + 1);
  }, []);

  const prev = () => {
    if (index === 0) {
      setAnimate(false);
      setIndex(items.length);
      requestAnimationFrame(() =>
        requestAnimationFrame(() => {
          setAnimate(true);
          setIndex(items.length - 1);
        })
      );
    } else {
      setAnimate(true);
      setIndex(index - 1);
    }
  };

  useEffect(() => {
    const t = setInterval(() => {
      if (!paused.current) next();
    }, delay);
    return () => clearInterval(t);
  }, [delay, next]);

  // jump back to the real first slide once we've slid onto the cloned ones
  const onTransitionEnd = () => {
    if (index >= items.length) {
      setAnimate(false);
      setIndex(index - items.length);
    }
  };

  const slides = mounted ? [...items, ...items.slice(0, view)] : items;
  const slideWidth = `calc((100% - ${gap * (view - 1)}px) / ${view})`;

  return (
    <div
      className="relative"
      onMouseEnter={() => pauseOnHover && (paused.current = true)}
      onMouseLeave={() => (paused.current = false)}
    >
      <div className="overflow-hidden">
        <div
          className="flex"
          onTransitionEnd={onTransitionEnd}
          style={{
            gap,
            transform: `translateX(calc(-${index} * (${slideWidth} + ${gap}px)))`,
            transition: animate ? `transform ${speed}ms ease` : "none",
          }}
        >
          {slides.map((child, i) => (
            <div key={i} className={`shrink-0 ${slideClass}`} style={{ width: slideWidth }}>
              {child}
            </div>
          ))}
        </div>
      </div>
      {arrows && (
        <>
          <button type="button" aria-label="Previous" onClick={prev} className={`absolute top-1/2 -translate-y-1/2 ${arrowClass} -left-[60px]`}>
            <Icon name="chevron-left" className="h-6 w-6" />
          </button>
          <button type="button" aria-label="Next" onClick={next} className={`absolute top-1/2 -translate-y-1/2 ${arrowClass} -right-[60px]`}>
            <Icon name="chevron-right" className="h-6 w-6" />
          </button>
        </>
      )}
    </div>
  );
}
