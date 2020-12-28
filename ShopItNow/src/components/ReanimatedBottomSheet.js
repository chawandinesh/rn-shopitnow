import * as React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Animated from 'react-native-reanimated';
import BottomSheet from 'reanimated-bottom-sheet';
 
export default function App() {
    const fall = new Animated.Value(1)
  const renderContent = () => (
    <View
      style={{
        backgroundColor: 'white',
        padding: 16,
        height: 450,
      }}
    >
      <Text>Swipe down to close</Text>
    </View>
  );

  const renderHeader = () => (
     <View>

      <Text style={{position:'absolute', textAlign:'center', width: '100%'}}>Header</Text>
      <View >

      </View>

     </View>
   
  );
  const sheetRef = React.useRef(null);
 
  return (
    <View>
      <View
        style={{
          flex: 1,
          backgroundColor: 'papayawhip',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Button
          title="Open Bottom Sheet"
          onPress={() => sheetRef.current.snapTo(0)}
        />
         <Button
          title="close Bottom Sheet"
          onPress={() => sheetRef.current.snapTo(1)}
        />
      </View>
      <BottomSheet
        ref={sheetRef}
        snapPoints={[200,0]}
        borderRadius={10}
        callbackNode={fall}
        initialSnap={1}
        renderHeader={renderHeader}
        enabledGestureInteraction
        renderContent={renderContent}
      />
    </View>
  );
}