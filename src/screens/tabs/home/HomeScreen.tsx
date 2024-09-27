import React, { useState } from "react";
import { View, Text, Pressable, FlatList, TextInput, ActivityIndicator, Dimensions } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { Image } from "expo-image";
import { Ionicons } from '@expo/vector-icons';
import { useCategories } from '../../../hooks/useCategories';
import { useProductsInCategory } from '../../../hooks/useProductsInCategory';
import Banner from "@/src/components/Banner";

const blurhash = "|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[";

const { width } = Dimensions.get('window');
const numColumns = 4;
const itemWidth = width / numColumns;

const HomeScreen: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategoryId, setSelectedCategoryId] = useState("");
  const navigation = useNavigation<NavigationProp<any>>();
  const { categories, loading: categoriesLoading, error: categoriesError } = useCategories();
  const { products, loading: productsLoading, error: productsError } = useProductsInCategory(selectedCategoryId);

  const renderCategoryItem = ({ item }: { item: Category }) => (
    <Pressable 
      style={{ width: itemWidth }} 
      className="items-center mb-4" 
      onPress={() => setSelectedCategoryId(item.id)}
    >
      <View className="w-16 h-16 bg-gray-100 rounded-full justify-center items-center">
        <Text className="text-4xl">{item.icon}</Text>
      </View>
      <Text className="text-xs mt-1 text-center">{item.name}</Text>
    </Pressable>
  );

  const renderProductItem = ({ item }: { item: Product }) => (
    <View className="flex-row items-center mb-2">
      <Image
        source={{ uri: item.image }}
        placeholder={blurhash}
        contentFit="cover"
        transition={1000}
        className="w-16 h-16 rounded-md mr-2"
      />
      <Text>{item.name}</Text>
    </View>
  );

  if (categoriesLoading) {
    return (
      <View className="flex-1 justify-center items-center">
        <ActivityIndicator size="large" color="#0cc0df" />
      </View>
    );
  }

  if (categoriesError) {
    return (
      <View className="flex-1 justify-center items-center">
        <Text className="text-red-500">Error loading categories: {categoriesError}</Text>
      </View>
    );
  }

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="px-4 py-2 pt-0">
        <View className="flex-row space-x-2 items-center">
          <View className="w-20 h-20 overflow-hidden">
            <Image
              source={require("../../../../assets/images/icon.png")}
              placeholder={blurhash}
              contentFit="cover"
              transition={1000}
              className="w-full h-full flex-1"
            />
          </View>
          <View className="mt-2 flex-row items-center bg-gray-100 rounded-full p-2 w-3/4">
            <TextInput
              className="flex-1 ml-2"
              placeholder="What are you looking for"
              value={searchQuery}
              onChangeText={setSearchQuery}
            />
            <Ionicons name="search-outline" size={20} color="gray" />
          </View>
        </View>
        <View className="flex-row items-center justify-between mt-2">
          <View className="flex-row items-center w-[45%]">
            <Ionicons name="location-outline" size={16} color="black" />
            <Text className="font-medium mx-1 text-[10px]">Downtown Dubai</Text>
            <Ionicons name="chevron-down" size={16} color="black" />
          </View>
          <View className="flex-row items-center">
            <View className="flex-row items-center">
              <Ionicons name="speedometer-outline" size={20} color="black" />
              <View className="ml-2">
                <Text className="w-14 text-[10px]">Earliest</Text>
                <Text className="w-14 text-[10px]">Delivary</Text>
              </View>
            </View>
            <View className="flex-row items-center bg-slate-200 rounded-lg pr-2">
              <View className="bg-white flex-col items-center text-center px-2 py-1 rounded-lg m-1">
                <Text className="text-[8px] font-light text-red-600">Tue</Text>
                <Text className="text-[8px] text-red-600 font-medium">22</Text>
              </View>
              <Text className="ml-1 text-[10px]">5pm-9pm</Text>
            </View>
          </View>
        </View>
      </View>

      <View className="px-4 h-[28%]">
        <Banner />
      </View>

      <View className="mt-6">
        <View className="flex-row justify-between items-center px-4 mb-5">
          <Text className="text-lg font-semibold">Shop by Category</Text>
          <Pressable>
            <Text className="text-black border border-black p-1 px-3 text-sm">View All</Text>
          </Pressable>
        </View>
        <FlatList
          data={categories}
          renderItem={renderCategoryItem}
          keyExtractor={(item) => item.id}
          numColumns={numColumns}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: 4 }}
        />
      </View>

      {selectedCategoryId && (
        <View className="mt-6 mb-4 px-4">
          <Text className="text-lg font-semibold mb-2">Products in Category</Text>
          {productsLoading ? (
            <ActivityIndicator size="small" color="#0cc0df" />
          ) : productsError ? (
            <Text className="text-red-500">Error loading products: {productsError}</Text>
          ) : (
            <FlatList
              data={products}
              renderItem={({ item }: { item: any }) => (
                <View className="flex-row items-center mb-2">
                  <Image
                    source={{ uri: item.image }}
                    placeholder={blurhash}
                    contentFit="cover"
                    transition={1000}
                    className="w-16 h-16 rounded-md mr-2"
                  />
                  <Text>{item.name}</Text>
                </View>
              )}
              keyExtractor={(item) => item.id}
            />
          )}
        </View>
      )}
    </SafeAreaView>
  );
};

export default React.memo(HomeScreen);