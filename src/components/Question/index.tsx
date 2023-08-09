import { Dimensions, Text } from 'react-native';
import Animated, { Keyframe } from 'react-native-reanimated';

import { Option } from '../Option';
import { styles } from './styles';

type QuestionProps = {
  title: string;
  alternatives: string[];
}

type Props = {
  question: QuestionProps;
  alternativeSelected?: number | null;
  setAlternativeSelected?: (value: number) => void;
}

const SCREEN_WIDTH = Dimensions.get('window').width;

export function Question({ question, alternativeSelected, setAlternativeSelected }: Props) {

  /** 💡 FIRST WAY OF WORK WITH KEYFRAMES **/
  const enteringKeyframe = new Keyframe({
    0: {
      opacity: 0,
      transform: [
        { translateX: SCREEN_WIDTH },
        { rotate: '90deg' }
      ]
    },
    70: {
      opacity: 0.3
    },
    100: {
      opacity: 1,
      transform: [
        { translateX: 0 },
        { rotate: '0deg' }
      ]
    }
  });

  /** 💡 SECOND WAY OF WORK WITH KEYFRAMES **/
  const exitingKeyframe = new Keyframe({
    from: {
      opacity: 1,
      transform: [
        { translateX: 0 },
        { rotate: '0deg' }
      ]
    },
    to: {
      opacity: 0,
      transform: [
        { translateX: SCREEN_WIDTH * (-1) },
        { rotate: '0deg' }
      ]
    }
  });

  return (
    <Animated.View
      entering={enteringKeyframe.duration(400)}
      exiting={exitingKeyframe.duration(400)}
      style={styles.container}
    >
      <Text style={styles.title}>
        {question.title}
      </Text>

      {
        question.alternatives.map((alternative, index) => (
          <Option
            key={index}
            title={alternative}
            checked={alternativeSelected === index}
            onPress={() => setAlternativeSelected && setAlternativeSelected(index)}
          />
        ))
      }
    </Animated.View>
  );
}