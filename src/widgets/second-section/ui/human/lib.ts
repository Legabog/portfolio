import { useThemeStore } from '@widgets/header';
import { HUMAN_VARIANTS } from './constants';

export const useLogic = () => {
  const { themeType } = useThemeStore();

  const conditionSplineScene = `https://prod.spline.design/${HUMAN_VARIANTS[themeType]}/scene.splinecode`;

  return { conditionSplineScene };
};
