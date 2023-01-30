import { useEffect, useRef, useState } from 'react';

export const useImageLoaded = () => {
  const [loaded, setLoaded] = useState(true);
  const ref = useRef();

  const onLoad = () => {
    setLoaded(ref.current?.complete?.state?.loaded);
  };

  useEffect(() => {
    if (ref.current && ref.current.complete) {
      onLoad();
    }
  });

  return [ref, loaded, onLoad];
};
