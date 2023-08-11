import { StyleSheet } from 'react-native';

import { THEME } from '../../styles/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME.COLORS.GREY_800,
  },
  history: {
    padding: 32,
  },
  swipeableContainer: {
    backgroundColor: THEME.COLORS.DANGER_LIGHT,
    borderRadius: 6,
    height: 90,
    marginBottom: 12,
    width: '100%'
  },
  swipeableRemove: {
    alignItems: 'center',
    backgroundColor: THEME.COLORS.DANGER_LIGHT,
    borderRadius: 6,
    justifyContent: 'center',
    height: 90,
    width: 90
  }
});