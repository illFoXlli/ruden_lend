import React, { useState, useCallback } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Oval } from 'react-loader-spinner';

import {
  Img,
  Item,
  ListItem,
  Preview,
  Text,
  Title,
  Wrapper,
  WrapperContent,
  WrapperLoaded,
} from './Cases.styled';
import {
  imgDataMob,
  imgDataTab,
  imgDataDes,
  imgDataMobArray,
  imgDataDesArray,
} from './ImgData';
import {
  useIsMobile,
  useIsTablet,
  useIsDesktop,
} from '../../hooks/uselsMobile';
import ReactSimpleImageViewer from '../ReactSimpleImageViewer/ReactSimpleImageViewer';
import { useImageLoaded } from '../../hooks/useImageLoaded';

const Cases = ({ setShow }) => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const [ref1, loaded1, onLoad1] = useImageLoaded();
  const [ref2, loaded2, onLoad2] = useImageLoaded();
  const [ref3, loaded3, onLoad3] = useImageLoaded();

  const openImageViewer = useCallback(index => {
    setCurrentImage(index);
    setIsViewerOpen(true);
    setShow(true);
    // eslint-disable-next-line
  }, []);

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
    setShow(false);
  };
  // console.log('loaded :>> ', loaded);
  // console.log('ref.current.complete :>> ', ref.current?.complete?.state.loaded);
  return (
    <>
      <Wrapper currentImage={currentImage}>
        <WrapperContent>
          <Preview>This is what we do</Preview>
          <Title>Business Cases</Title>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto,
            sapiente!
          </Text>
        </WrapperContent>
        <div>
          <ListItem>
            {useIsMobile() &&
              imgDataMob.map((src, index) => (
                <Item key={uuidv4()}>
                  <picture>
                    <source
                      type="image/jpeg"
                      media="screen and (min-width: 1360px)"
                      srcSet={`
                    ${src.imgMMM1x} 1x,
                    ${src.imgMMM2x} 2x
                  `}
                    />
                    <source
                      type="image/jpeg"
                      media="screen and (min-width: 768px)"
                      srcSet={`
                    ${src.imgMMM1x} 1x,
                    ${src.imgMMM2x} 2x
                  `}
                    />

                    <Img
                      ref={ref1}
                      onLoad={onLoad1}
                      srcSet={`
                    ${src.imgWeb2x} 2x,
                    ${src.imgWeb1x} 1x,
                    `}
                      src={src.imgWeb1x}
                      onClick={() => openImageViewer(index)}
                      width="300"
                      key={index}
                      alt=""
                    />
                    {loaded1 && (
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
                  </picture>
                </Item>
              ))}
            {useIsMobile() && isViewerOpen && (
              <ReactSimpleImageViewer
                src={imgDataMobArray}
                currentIndex={currentImage}
                disableScroll={true}
                closeOnClickOutside={false}
                onClose={closeImageViewer}
              />
            )}
            {useIsTablet() &&
              imgDataTab.map((src, index) => (
                <Item key={uuidv4()}>
                  <picture>
                    <source
                      type="image/jpeg"
                      media="screen and (min-width: 1360px)"
                      srcSet={`
                    ${src.imgLLL1x} 1x,
                    ${src.imgLLL2x} 2x
                  `}
                    />
                    <source
                      type="image/jpeg"
                      media="screen and (min-width: 768px)"
                      srcSet={`
                    ${src.imgLLL1x} 1x,
                    ${src.imgLLL2x} 2x
                  `}
                    />
                    <source
                      type="image/jpeg"
                      media="screen and (max-width: 767px)"
                      srcSet={`
                    ${src.imgLLL1x} 1x,
                    ${src.imgLLL2x} 2x
                  `}
                    />
                    <Img
                      ref={ref2}
                      onLoad={onLoad2}
                      src={src.imgLLL1x}
                      onClick={() => openImageViewer(index)}
                      width="300"
                      key={index}
                      alt=""
                    />
                    {loaded2 && (
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
                  </picture>
                </Item>
              ))}
            {useIsTablet() && isViewerOpen && (
              <ReactSimpleImageViewer
                src={imgDataDesArray}
                currentIndex={currentImage}
                disableScroll={true}
                closeOnClickOutside={true}
                onClose={closeImageViewer}
                backgroundStyle={{ background: 'rgba(0, 0, 0, 0.4)' }}
              />
            )}
            {useIsDesktop() &&
              imgDataDes.map((src, index) => (
                <Item key={uuidv4()}>
                  <picture>
                    <source
                      type="image/jpeg"
                      media="screen and (min-width: 1360px)"
                      srcSet={`
                    ${src.imgXXX1x} 1x,
                    ${src.imgXXX2x} 2x
                  `}
                    />
                    <source
                      type="image/jpeg"
                      media="screen and (min-width: 768px)"
                      srcSet={`
                    ${src.imgXXX1x} 1x,
                    ${src.imgXXX2x} 2x
                  `}
                    />
                    <source
                      type="image/jpeg"
                      media="screen and (max-width: 767px)"
                      srcSet={`
                    ${src.imgXXX1x} 1x,
                    ${src.imgXXX2x} 2x
                  `}
                    />
                    <Img
                      ref={ref3}
                      onLoad={onLoad3}
                      src={src.imgXXX1x}
                      onClick={() => openImageViewer(index)}
                      width="300"
                      key={index}
                      alt=""
                    />
                    {loaded3 && (
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
                  </picture>
                </Item>
              ))}
            {useIsDesktop() && isViewerOpen && (
              <ReactSimpleImageViewer
                src={imgDataDesArray}
                currentIndex={currentImage}
                disableScroll={true}
                closeOnClickOutside={true}
                onClose={closeImageViewer}
                backgroundStyle={{ background: 'rgba(0, 0, 0, 0.4)' }}
              />
            )}
          </ListItem>
        </div>
      </Wrapper>
      <div className="slide-container"></div>
    </>
  );
};

export default Cases;
