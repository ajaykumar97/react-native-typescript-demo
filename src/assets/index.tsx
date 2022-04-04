import {Platform} from 'react-native';

interface fonts {
  regular: string;
  semiBold: string;
}

const fonts: fonts | undefined = Platform.select({
  ios: {
    regular: 'Arial',
    semiBold: 'Arial',
  },
  android: {
    regular: 'Arial',
    semiBold: 'Arial',
  },
});

const icons = {
  icBackArrowWhite: require('./icons/icBackArrowWhite.png'),
};

export {fonts, icons};
