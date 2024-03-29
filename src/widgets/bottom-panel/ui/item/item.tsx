import { FC, useState } from 'react';
import { useTranslations } from 'next-intl';

import { Wrapper, A, Tooltip } from './item.styled';

export const Item: FC<Icon.Props> = ({ Icon, color, id }) => {
  const t = useTranslations('BottomPanel');
  const tooltip = t(`tooltip-${id}`);
  const [mouseIn, setMouseIn] = useState<number>(0);

  return (
    <Wrapper
      $hoverColor={ color }
      data-testid='item'
      onMouseEnter={ () => setMouseIn(1) }
      onMouseLeave={ () => setMouseIn(2) }
    >
      <A data-testid='tooltip' title={ tooltip }>
        <Tooltip $mouseIn={ mouseIn }>{tooltip}</Tooltip>
        <Icon />
      </A>
    </Wrapper>
  );
};
