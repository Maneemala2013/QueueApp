import { StyleSheet, Text, View } from 'react-native';

export default function MoreInfo({route, navigation}) {
    return (
      <View styles={styles.container}>
        <Text>More Info</Text>
      </View>
    );
  }

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
    }
)