import React, { useCallback, useEffect, useState } from 'react';
import { Oval } from 'react-loader-spinner';
import { FiX, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { useImageLoaded } from '../../hooks/useImageLoaded';

import {
  Content,
  Div,
  Img,
  NavigationNext,
  NavigationPrev,
  Slide,
  SpanClose,
  Wrapper,
  WrapperLoaded,
} from './ReactSimpleImageViewer.styled';

const ReactSimpleImageViewer = props => {
  const [currentIndex, setCurrentIndex] = useState(props.currentIndex ?? 0);
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);
  const [ref, loaded, onLoad] = useImageLoaded();

  const changeImage = useCallback(
    delta => {
      let nextIndex = (currentIndex + delta) % props.src.length;
      if (nextIndex < 0) nextIndex = props.src.length - 1;
      setCurrentIndex(nextIndex);
    },
    [currentIndex, props.src.length]
  );

  const handleClick = useCallback(
    event => {
      if (!event.target || !props.closeOnClickOutside) {
        return;
      }

      const checkId = event.target.id === 'ReactSimpleImageViewer';
      const checkClass = event.target.classList.contains(
        'react-simple-image-viewer__slide'
      );

      if (checkId || checkClass) {
        event.stopPropagation();
        props.onClose?.();
      }
    },
    [props]
  );

  const handleKeyDown = useCallback(
    event => {
      if (event.key === 'Escape') {
        props.onClose?.();
      }

      if (['ArrowLeft', 'h'].includes(event.key)) {
        changeImage(-1);
      }

      if (['ArrowRight', 'l'].includes(event.key)) {
        changeImage(1);
      }
    },
    [props, changeImage]
  );

  const handleWheel = useCallback(
    event => {
      if (event.wheelDeltaY > 0) {
        changeImage(-1);
      } else {
        changeImage(1);
      }
    },
    [changeImage]
  );

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);

    if (!props.disableScroll) {
      document.addEventListener('wheel', handleWheel);
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);

      if (!props.disableScroll) {
        document.removeEventListener('wheel', handleWheel);
      }
    };
  }, [handleKeyDown, handleWheel, props.disableScroll]);

  useEffect(() => {
    window.addEventListener('resize', () => {
      setWidth(window.innerWidth);
    });
    window.addEventListener('resize', () => {
      setHeight(window.innerHeight);
    });

    return () => {
      window.removeEventListener('resize', () => {
        setWidth(window.innerWidth);
      });
      window.removeEventListener('resize', () => {
        setHeight(window.innerHeight);
      });
    };
  }, [width, height]);

  return (
    <Wrapper
      id="ReactSimpleImageViewer"
      onKeyDown={handleKeyDown}
      onClick={handleClick}
      style={props.backgroundStyle}
    >
      <Div>
        <Content onClick={handleClick}>
          <Slide>
            {
              <Img
                onLoad={onLoad}
                ref={ref}
                src={props.src[currentIndex]}
                width={width}
                height={height}
                alt=""
              />
            }
            {loaded && (
              <WrapperLoaded>
                <Oval
                  height={80}
                  width={80}
                  color="#fff"
                  wrapperStyle={{}}
                  wrapperClass=""
                  visible={true}
                  ariaLabel="oval-loading"
                  secondaryColor="#4fa94d"
                  strokeWidth={2}
                  strokeWidthSecondary={2}
                />
              </WrapperLoaded>
            )}
          </Slide>
          <SpanClose onClick={() => props.onClose?.()}>
            <FiX />
          </SpanClose>

          {props.src.length > 1 && (
            <NavigationPrev onClick={() => changeImage(-1)}>
              <FiChevronLeft />
            </NavigationPrev>
          )}

          {props.src.length > 1 && (
            <NavigationNext onClick={() => changeImage(1)}>
              <FiChevronRight />
            </NavigationNext>
          )}
        </Content>
      </Div>
    </Wrapper>
  );
};

export default ReactSimpleImageViewer;
