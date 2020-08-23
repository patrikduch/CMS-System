import { useEffect } from "react";

/**d.
 * @function useDidUnmount => Hooks component did unmount life-cycle method.
 * @param callback => Function that is going to be called.
 */
function useDidUnmount(callback: Function) {
  useEffect(() => {
    return () => {
      callback();
    };
  }, []);
}

export default useDidUnmount;
