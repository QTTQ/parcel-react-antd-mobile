import { Dimensions, PixelRatio } from 'react-native';
const {width, height} = Dimensions.get('window');

var getWidth = function getWidth (withPX) {
  return (withPX / 750) * width;
}

var getHeight =  function getHeight (heightPX) {
  return (heightPX / 1334) * height;
}

var getfontSizeScaler =  function getfontSizeScaler () {
  return PixelRatio.get()/PixelRatio.getFontScale();
}

var getRealPX =  function getRealPX(px) {
  const WIDTH = Dimensions.get('window').width;
  return Math.round((px / 2) * (PixelRatio.getPixelSizeForLayoutSize(WIDTH) / PixelRatio.get()) / 375);
}

global.getWidth = getRealPX;
global.getHeight = getRealPX;
global.getfontSizeScaler = getfontSizeScaler;
