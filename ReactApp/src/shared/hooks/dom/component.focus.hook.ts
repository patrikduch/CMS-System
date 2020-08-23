import { useState, useRef, useEffect } from "react";

/**
 * @function useComponentVisible => Helper hook for handling refs inside React hooks components.
 * @param initialIsVisible => Initial boolean value representing that we are inside current  HTML element.
 */
function useComponentVisible(initialIsVisible: boolean) {
  const [isComponentVisible, setIsComponentVisible] = useState(
    initialIsVisible
  );
  const ref: any = useRef(null);

  const handleClickOutside = (event: any) => {
    if (ref.current && !ref.current.contains(event.target)) {
      setIsComponentVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  });

  return { ref, isComponentVisible, setIsComponentVisible };
}

export { useComponentVisible };
