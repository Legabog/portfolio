import { FC } from 'react';

import { Button } from './navigation-panel-item.styled';
import { Props } from './types';
import { useLogic } from './lib';

export const NavigationPanelItem: FC<Props> = ({ sectionId, activeSectionId, id }) => {
  const { isActive, throttledOnClick, title } = useLogic({ sectionId, activeSectionId });

  return (
    <Button
      $isActive={ isActive }
      data-testid={ `navigation-${id}` }
      title={ title }
      onClick={ throttledOnClick }
    />
  );
};
