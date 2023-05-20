import React from "react";
import { StyleSheet,Image,View } from 'react-native';

const ImageViewer=({ placeholderImageSource,selectedImage })=> {
const imageSource = selectedImage !==null ? {uri:selectedImage}:
placeholderImageSource;
  return (
    <View style={styles.buttonContainer}>
      <Image source={imageSource} style={styles.image} />
    </View>
  );
}

const styles = StyleSheet.create({
  
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,

  }
});

export default ImageViewer;