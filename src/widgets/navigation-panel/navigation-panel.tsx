import { FC } from 'react';

import { Wrapper, NavigationPanelItemsWrapper } from './navigation-panel.styled';
import { NavigationPanelItem, NavigationPanelButton } from './ui';
import { PANEL_ITEMS } from './constants';
import { useLogic } from './lib';

export const NavigationPanel: FC = () => {
  const { isVisible, isInitialized, activeSectionId } = useLogic();

  return (
    <Wrapper
      $isInitialized={ isInitialized }
      $isVisible={ isVisible }
      data-testid='navigation-panel'
      id='navigation-panel'
    >
      <NavigationPanelButton activeSectionId={ activeSectionId } type='top' />
      <NavigationPanelItemsWrapper>
        {PANEL_ITEMS.map((props) => (
          <NavigationPanelItem key={ props.id } { ...props } activeSectionId={ activeSectionId } />
        ))}
      </NavigationPanelItemsWrapper>
      <NavigationPanelButton activeSectionId={ activeSectionId } type='bottom' />
    </Wrapper>
  );
};
