import React, { useState, useRef, useCallback } from 'react';
import { View, Text, Pressable, Dimensions } from 'react-native';
import { Image } from 'expo-image';
import Carousel from 'react-native-reanimated-carousel';

const { width } = Dimensions.get('window');

const bannerData = [
  {
    id: '1',
    image: 'https://cdn.pixabay.com/photo/2022/08/01/07/59/vegetables-7357585_640.png',
    title: '50% CASHBACK',
    subtitle: 'ON GROCERIES',
    buttonText: 'Try it out now',
  },
  {
    id: '2',
    image: 'https://www.bansalsupermarket.com/upload/category/grocery_staples/loose_grocessary.png',
    title: 'FREE DELIVERY',
    subtitle: 'ON ORDERS OVER $50',
    buttonText: 'Shop now',
  },
  {
    id: '3',
    image: 'https://wallpapers.com/images/featured/grocery-png-7n8tethb1vm67com.jpg',
    title: 'FRESH PRODUCE',
    subtitle: 'LOCALLY SOURCED',
    buttonText: 'Explore',
  },
];

const Banner: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef<any>(null);

  const handleSnapToItem = useCallback((index: number) => {
    setActiveIndex(index);
  }, []);

  const handlePressIndicator = useCallback((index: number) => {
    carouselRef.current?.scrollTo({ index, animated: true });
  }, []);

  const renderItem = useCallback(({ item }: { item: typeof bannerData[0] }) => (
    <View className="w-full h-40 bg-yellow-500 rounded-lg overflow-hidden">
      <Image
        source={{ uri: item.image }}
        className="absolute inset-0 h-full w-40 -bottom-6 -right-2"
        contentFit="cover"
      />
      <View className="absolute inset-0 bg-opacity-30 p-4 flex justify-between rounded-lg">
        <View>
          <Text className="text-black text-2xl font-bold">{item.title}</Text>
          <Text className="text-black text-lg">{item.subtitle}</Text>
        </View>
        <Pressable className="bg-black rounded-lg px-4 py-2 self-start mt-4">
          <Text className="text-white font-medium">{item.buttonText}</Text>
        </Pressable>
      </View>
    </View>
  ), []);

  return (
    <View className="mt-4 mb-6">
      <Carousel
        ref={carouselRef}
        loop
        width={width - 32}
        height={160}
        autoPlay={true}
        data={bannerData}
        scrollAnimationDuration={1000}
        onSnapToItem={handleSnapToItem}
        renderItem={renderItem}
        autoPlayInterval={5000}
      />
      <View className="flex-row justify-center mt-2 relative top-1/2">
        {bannerData.map((_, index) => (
          <Pressable
            key={index}
            className={`w-12 h-2 rounded-full ml-2 ${
              index === activeIndex ? 'bg-primary' : 'bg-gray-300'
            }`}
            onPress={() => handlePressIndicator(index)}
          />
        ))}
      </View>
    </View>
  );
};

export default Banner;