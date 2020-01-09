import { useEffect, useRef } from "react";

export const onScrollDirection = (sectionOne, sectionTwo, direction) => {
  if (direction === "up") {
    sectionOne.classList.remove("bg-spin-down")
    sectionTwo.classList.remove("bg-spin-down")
    sectionOne.classList.add("bg-spin-up")
    sectionTwo.classList.add("bg-spin-up")
  } else {
    sectionOne.classList.remove("bg-spin-up")
    sectionTwo.classList.remove("bg-spin-up")
    sectionOne.classList.add("bg-spin-down")
    sectionTwo.classList.add("bg-spin-down")
  }
};

export const usePrevious = value => {
  const ref = useRef();

  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
};