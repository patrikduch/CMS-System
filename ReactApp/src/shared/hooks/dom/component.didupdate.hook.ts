import { useRef, useEffect } from "react";

function useDidUpdate(callback: Function) {
  const hasMount = useRef(false);

  useEffect(() => {
    if (hasMount.current) {
      callback();
    } else {
      hasMount.current = true;
    }
  });
}

export default useDidUpdate;
