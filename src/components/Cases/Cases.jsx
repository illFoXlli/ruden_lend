import React, { useState, useCallback } from 'react';
import { v4 as uuidv4 } from 'uuid';

import {
  Img,
  Item,
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
  imgDataDesArray,
} from './ImgData';
import {
  useIsMobile,
  useIsTablet,
  useIsDesktop,
} from '../../hooks/uselsMobile';
import ReactSimpleImageViewer from '../ReactSimpleImageViewer/ReactSimpleImageViewer';

const Cases = ({ setShow }) => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);

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
                      alt=""
                    />
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
                      src={src.imgLLL1x}
                      onClick={() => openImageViewer(index)}
                      width="300"
                      key={index}
                      alt=""
                    />
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
                      src={src.imgXXX1x}
                      onClick={() => openImageViewer(index)}
                      width="300"
                      key={index}
                      alt=""
                    />
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
