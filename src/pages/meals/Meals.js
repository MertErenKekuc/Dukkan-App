import React, { useState, useEffect } from 'react';
import { SafeAreaView, View, FlatList, Text, Image, TouchableOpacity } from 'react-native';
import axios from 'axios';
import styles from './Meals.style';

function Meals({ route, navigation }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, [route.params]);

  const fetchData = async () => {
    try {
      const category = route.params ? route.params.category : null;
      const url = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`;

      const response = await axios.get(url);
      setData(response.data.meals || []);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleMealPress = (mealName) => {
    navigation.navigate('Details', { mealName });
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.mealItem} onPress={() => handleMealPress(item.strMeal)}>
      <Image source={{ uri: item.strMealThumb }} style={styles.mealImage} />
      <View style={styles.mealNameContainer}>
        <Text style={styles.mealName}>{item.strMeal}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.idMeal}
        contentContainerStyle={styles.flatlistContent}
      />
    </SafeAreaView>
  );
}

export default Meals;
