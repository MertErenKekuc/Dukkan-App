import React, { useState, useEffect } from 'react';
import { SafeAreaView, View, Text, Image, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import axios from 'axios';
import { Linking } from 'react-native';
import styles from './Details.style';
import { useRoute } from '@react-navigation/native';


const Details = () => {
  const route = useRoute();
  const [meal, setMeal] = useState(null);

  useEffect(() => {
    fetchData();
  }, [route.params.mealName]);

  const fetchData = async () => {
    try {
      const mealName = route.params.mealName;
      const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${mealName}`;

      const response = await axios.get(url);
      const meals = response.data.meals || [];
      if (meals.length > 0) {
        setMeal(meals[0]);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  if (!meal) {
    return null;
  }

  const renderIngredient = (item) => (
    <Text style={styles.ingredient}>{item}</Text>
  );

  const openYoutubeLink = () => {
    if (meal.strYoutube) {
      Linking.openURL(meal.strYoutube);
    } else {
      console.warn('Youtube link not available for this meal.');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        ListHeaderComponent={
          <View style={styles.mealItem}>
            <Image source={{ uri: meal.strMealThumb }} style={styles.mealImage} />
            <View style={styles.mealNameContainer}>
              <Text style={styles.mealName}>{meal.strMeal}</Text>
              <Text style={styles.mealCategory}>{meal.strCategory}</Text>
            </View>
          </View>
        }
        data={meal.strIngredientArray}
        renderItem={({ item }) => renderIngredient(item)}
        keyExtractor={(item, index) => index.toString()}
        ListFooterComponent={
          <>
            <TouchableOpacity onPress={openYoutubeLink} style={[styles.youtubeButton, { backgroundColor: 'red' }]}>
              <Text style={styles.youtubeButtonText}>Watch on Youtube</Text>
            </TouchableOpacity>
            <Text style={[styles.instructions, { marginTop: 20 }]}>{meal.strInstructions}</Text>
          </>
        }
      />
    </SafeAreaView>
  );
}

export default Details;

