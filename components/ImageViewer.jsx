import { StyleSheet, Image } from 'react-native';

const PlaceholderImage = require('../assets/sticker-smash-assets/images/background-image.png');

export default function ImageViewer({ selectedImage }) {
  const imageSource = selectedImage !== null ? { uri: selectedImage } : PlaceholderImage;
  return <Image source={imageSource} style={styles.image} />;
}

const styles = StyleSheet.create({  
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
});
