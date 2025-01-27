import { FC } from 'react';

import { Button } from './navigation-panel-item.styled';
import { Props } from './types';
import { useLogic } from './lib';

export const NavigationPanelItem: FC<Props> = ({ sectionId, activeSectionId }) => {
  const { isActive, throttledOnClick } = useLogic({ sectionId, activeSectionId });

  return <Button $isActive={ isActive } onClick={ throttledOnClick } />;
};
