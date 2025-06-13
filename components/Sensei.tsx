import React, { useEffect } from 'react';
import { View, StyleSheet, Image, ViewStyle } from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withRepeat,
  withSequence,
  Easing,
} from 'react-native-reanimated';

type SenseiProps = {
  style?: ViewStyle;
};

export const SenseiWelcome = ({ style }: SenseiProps) => {
  const rotation = useSharedValue(0);
  const scale = useSharedValue(1);
  
  useEffect(() => {
    rotation.value = withRepeat(
      withSequence(
        withTiming(-0.1, { duration: 300, easing: Easing.inOut(Easing.quad) }),
        withTiming(0.1, { duration: 300, easing: Easing.inOut(Easing.quad) }),
        withTiming(0, { duration: 300, easing: Easing.inOut(Easing.quad) })
      ),
      2,
      true
    );
    
    scale.value = withRepeat(
      withSequence(
        withTiming(1.05, { duration: 1500, easing: Easing.inOut(Easing.quad) }),
        withTiming(1, { duration: 1500, easing: Easing.inOut(Easing.quad) })
      ),
      -1,
      true
    );
  }, []);
  
  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        { rotate: `${rotation.value}rad` },
        { scale: scale.value }
      ],
    };
  });
  
  return (
    <Animated.View style={[styles.container, style, animatedStyle]}>
      <Image
        source={{ uri: 'https://images.pexels.com/photos/6940413/pexels-photo-6940413.jpeg' }}
        style={styles.image}
        resizeMode="contain"
      />
    </Animated.View>
  );
};

export const SenseiDashboard = ({ style }: SenseiProps) => {
  const bounce = useSharedValue(0);
  
  useEffect(() => {
    bounce.value = withSequence(
      withTiming(1, { duration: 500, easing: Easing.inOut(Easing.quad) }),
      withTiming(0, { duration: 500, easing: Easing.inOut(Easing.quad) })
    );
  }, []);
  
  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        { translateY: bounce.value * -5 }
      ],
    };
  });
  
  return (
    <Animated.View style={[styles.container, style, animatedStyle]}>
      <Image
        source={{ uri: 'https://images.pexels.com/photos/6941021/pexels-photo-6941021.jpeg' }}
        style={styles.image}
        resizeMode="contain"
      />
    </Animated.View>
  );
};

export const SenseiProfile = ({ style }: SenseiProps) => {
  return (
    <View style={[styles.container, style]}>
      <Image
        source={{ uri: 'https://images.pexels.com/photos/6940432/pexels-photo-6940432.jpeg' }}
        style={styles.image}
        resizeMode="contain"
      />
    </View>
  );
};

export const SenseiSuccess = ({ style }: SenseiProps) => {
  const scale = useSharedValue(0);
  
  useEffect(() => {
    scale.value = withSequence(
      withTiming(1.2, { duration: 300, easing: Easing.inOut(Easing.quad) }),
      withTiming(1, { duration: 200, easing: Easing.inOut(Easing.quad) })
    );
  }, []);
  
  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: scale.value }],
    };
  });
  
  return (
    <Animated.View style={[styles.container, style, animatedStyle]}>
      <Image
        source={{ uri: 'https://images.pexels.com/photos/6940437/pexels-photo-6940437.jpeg' }}
        style={styles.image}
        resizeMode="contain"
      />
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
  },
});