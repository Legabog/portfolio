import { FC, useLayoutEffect, useState } from 'react';

import { Wrapper } from './navigation-panel.styled';
import { NavigationPanelItem, NavigationPanelButton } from './ui';

export const NavigationPanel: FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [isInitalized, setIsInitialized] = useState<boolean>(false);

  const firstSectionRef = document.getElementById('first-section');

  useLayoutEffect(() => {
    const observer = new IntersectionObserver(
      ([{ isIntersecting }]) => {
        setIsVisible(!isIntersecting);
        if (!isIntersecting) setIsInitialized(true);
      },
      { threshold: 0.001 },
    );

    if (firstSectionRef) observer.observe(firstSectionRef);

    return () => {
      if (firstSectionRef) observer.unobserve(firstSectionRef);
    };
  }, [firstSectionRef, isVisible]);

  return (
    <Wrapper $isInitalized={ isInitalized } $isVisible={ isVisible } data-testid='navigation-panel'>
      <NavigationPanelButton type='top' />
      <NavigationPanelItem />
      <NavigationPanelItem />
      <NavigationPanelItem />
      <NavigationPanelButton type='bottom' />
    </Wrapper>
  );
};
