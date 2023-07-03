import * as React from 'react';
import { Text, TouchableOpacity, StyleSheet, View } from 'react-native';
import { Header } from '@rneui/themed';

export default class Videos extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <View>
          <Header
            backgroundColor={'#EFCFD4'}
            centerComponent={{
              text: 'Videos',
              style: { color: 'white', fontSize: 30, borderRadius: 50 },
            }}
          />
        </View>

        <View>
          <Text style={styles.videosCaption}>Choose An Activity</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  videosCaption: {
    fontSize: 20,
    color: 'black',
    marginLeft: 75,
    marginTop: 10,
  },
});
