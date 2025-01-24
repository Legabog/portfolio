import { FC } from 'react';

import { Button } from './navigation-panel-item.styled';
import { Props } from './types';

export const NavigationPanelItem: FC<Props> = ({ sectionId, activeSectionId }) => {
  const isActive = activeSectionId === sectionId;

  return <Button $isActive={ isActive } />;
};
