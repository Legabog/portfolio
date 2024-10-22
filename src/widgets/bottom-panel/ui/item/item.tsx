import { FC, useState } from 'react';
import { useTranslations } from 'next-intl';

import { Wrapper, A, Tooltip } from './item.styled';

export const Item: FC<Icon.Props> = ({ Icon, color, id }) => {
  const t = useTranslations('BottomPanel');
  const tooltip = t(`tooltip-${id}`);
  const [mouseIn, setMouseIn] = useState<number>(0);

  const onClickHandler = () => window.scrollTo({ top: id === '1' ? 0 : 830, behavior: 'smooth' });

  return (
    <Wrapper
      $hoverColor={ color }
      data-testid='item'
      onClick={ onClickHandler }
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
