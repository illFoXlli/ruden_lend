import React, { useState, useCallback } from 'react';
import { render } from 'react-dom';
import ImageViewer from 'react-simple-image-viewer';
import {
  Img,
  ListItem,
  Preview,
  Text,
  Title,
  Wrapper,
  WrapperContent,
} from './Cases.styled';
import {
  imgDataMob,
  imgDataTab,
  imgDataDes,
  imgDataMobArray,
  imgDataTabArray,
  imgDataDesArray,
} from './ImgData';
import {
  useIsMobile,
  useIsTablet,
  useIsDesktop,
} from '../../hooks/uselsMobile';

const Cases = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);

  const openImageViewer = useCallback(index => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  }, []);

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };

  return (
    <>
      <Wrapper>
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
            {/* <picture>
            <source
              type="image/jpeg"
              media="screen and (min-width: 1360px)"
              srcSet={`
                    ${people1XXX1x} 1x,
                    ${people1XXX2x} 2x
                  `}
            />
            <source
              type="image/jpeg"
              media="screen and (min-width: 768px)"
              srcSet={`
                    ${people1LLL1x} 1x,
                    ${people1LLL2x} 2x
                  `}
            />
            <source
              type="image/jpeg"
              media="screen and (max-width: 767px)"
              srcSet={`
                    ${people1MMM1x} 1x,
                    ${people1MMM2x} 2x
                  `}
            />
            <Img
              type="image/web"
              srcSet={`
            ${people1Web2x} 2x,
            ${people1Web1x} 1x,
            `}
              src={people1Web1x}
              alt="фото"
            />
          </picture> */}
            {useIsMobile() &&
              imgDataMob.map((src, index) => (
                <li kye={index}>
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
                    <source
                      type="image/jpeg"
                      media="screen and (max-width: 767px)"
                      srcSet={`
                    ${src.imgMMM1x} 1x,
                    ${src.imgMMM2x} 2x
                  `}
                    />
                    <Img
                      srcSet={`
                    ${src.imgWeb2x} 2x,
                    ${src.imgWeb1x} 1x,
                    `}
                      src={src.imgWeb1x}
                      onClick={() => openImageViewer(index)}
                      width="300"
                      key={index}
                      style={{ margin: '2px' }}
                      alt=""
                    />
                  </picture>
                </li>
              ))}
            {useIsMobile() && isViewerOpen && (
              <ImageViewer
                src={imgDataMobArray}
                currentIndex={currentImage}
                disableScroll={false}
                closeOnClickOutside={true}
                onClose={closeImageViewer}
              />
            )}
            {useIsTablet() &&
              imgDataTab.map((src, index) => (
                <li kye={index}>
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
                      src={src.imgLLL1x}
                      onClick={() => openImageViewer(index)}
                      width="300"
                      key={index}
                      style={{ margin: '2px' }}
                      alt=""
                    />
                  </picture>
                </li>
              ))}
            {useIsTablet() && isViewerOpen && (
              <ImageViewer
                src={imgDataDesArray}
                currentIndex={currentImage}
                disableScroll={false}
                closeOnClickOutside={true}
                onClose={closeImageViewer}
              />
            )}
            {useIsDesktop() &&
              imgDataDes.map((src, index) => (
                <li kye={index}>
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
                      src={src.imgXXX1x}
                      onClick={() => openImageViewer(index)}
                      width="300"
                      key={index}
                      style={{ margin: '2px' }}
                      alt=""
                    />
                  </picture>
                </li>
              ))}
            {useIsDesktop() && isViewerOpen && (
              <ImageViewer
                src={imgDataDesArray}
                currentIndex={currentImage}
                disableScroll={false}
                closeOnClickOutside={true}
                onClose={closeImageViewer}
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
