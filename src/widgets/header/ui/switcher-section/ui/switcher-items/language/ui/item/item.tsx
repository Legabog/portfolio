'use client';

import { FC } from 'react';

import { useTranslations, useLocale } from 'next-intl';

import { useHoverRandomLettersAnimation } from '@shared/hooks';
import { useSoundEffectsStore } from '@widgets/header';
import { Locale, usePathname, useRouter } from '@locales';
import { ItemWrapper, A, Text } from './item.styled';
import { Props } from './types';

export const Item: FC<Props> = ({ id, text }) => {
  const locale = useLocale() as Locale;
  const router = useRouter();
  const pathname = usePathname();
  const { play } = useSoundEffectsStore();

  const t = useTranslations('Header.language');
  const tooltip = t(`tooltip-${id}`);
  const isActive = locale === text;

  const { animate, clear, generatedString } = useHoverRandomLettersAnimation(text);

  const handleChange = (locale: Locale) => {
    play('click-1.wav');
    router.replace(pathname, { locale, scroll: false });
  };

  return (
    <ItemWrapper
      key={ id }
      data-testid={ `switcher-item-${id}` }
      onClick={ () => handleChange(text) }
      onMouseEnter={ animate }
      onMouseLeave={ clear }
    >
      <A $isActvie={ isActive } data-testid={ `switcher-item-tooltip-${id}` } title={ tooltip }>
        <Text>{generatedString}</Text>
      </A>
    </ItemWrapper>
  );
};
