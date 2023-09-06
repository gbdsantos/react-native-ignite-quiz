import { useEffect } from 'react';
import { Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';
import {
  BlurMask,
  Canvas,
  Path,
  runTiming,
  Skia,
  useValue
} from '@shopify/react-native-skia';

import { styles } from './styles';
import { THEME } from '../../styles/theme';

type Props = TouchableOpacityProps & {
  checked: boolean;
  title: string;
}

const CHECK_SIZE = 28;
const CHECK_STROKE = 2;

export function Option({ checked, title, ...rest }: Props) {
  const percentage = useValue(0);

  const RADIUS = (CHECK_SIZE - CHECK_STROKE) / 2;
  const path = Skia.Path.Make();

  path.addCircle(CHECK_SIZE, CHECK_SIZE, RADIUS);

  useEffect(() => {
    if (checked) {
      runTiming(percentage, 1, { duration: 700 });
    } else {
      runTiming(percentage, 0, { duration: 700 });
    }
  }, [checked]);

  return (
    <TouchableOpacity
      style={
        [
          styles.container,
          checked && styles.checked
        ]
      }
      {...rest}
    >
      <Text style={styles.title}>
        {title}
      </Text>

      <Canvas style={{ height: CHECK_SIZE * 2, width: CHECK_SIZE * 2 }}>
        <Path
          color={THEME.COLORS.GREY_500}
          path={path}
          strokeWidth={CHECK_STROKE}
          style="stroke"
        />

        <Path
          color={THEME.COLORS.BRAND_LIGHT}
          path={path}
          start={0}
          end={percentage}
          strokeWidth={CHECK_STROKE}
          style="stroke"
        />
        <BlurMask blur={1} style="solid" />
      </Canvas>
    </TouchableOpacity>
  );
}