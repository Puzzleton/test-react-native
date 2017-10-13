import React, { Component } from "react";
import { ScrollView, Image, Text, Dimensions } from "react-native";

class Main extends Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        <Image
          resizeMode={"contain"}
          style={styles.image}
          source={{uri: "http://78.media.tumblr.com/c562f3d86eabf8810cb022fe7558d744/tumblr_oto1lvE1Vl1v6ix7xo1_1280.png"}}
        />
      </ScrollView>
    )
  }
}

const win = Dimensions.get('window');

const styles = {
  container: {
    flex: 1,
  },
  
  image: {
    alignSelf: 'stretch',
    width: win.width,
    height: win.height,
  }
}

export default Main;
