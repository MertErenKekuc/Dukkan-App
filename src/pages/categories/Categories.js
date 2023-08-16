import React, { useState, useEffect } from 'react';
import { SafeAreaView, View, FlatList, Text, Image, TouchableOpacity } from 'react-native';
import axios from 'axios';
import { API_CATEGORIES_URL } from '@env';
import styles from './Categories.style';

function Categories({ navigation }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(API_CATEGORIES_URL);
      setData(response.data.categories || []);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const navigateToMeals = (category) => {
    navigation.navigate('Meals', { category });
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.flatlistItem}
      onPress={() => navigateToMeals(item.strCategory)}
    >
      <Image source={{ uri: item.strCategoryThumb }} style={styles.categoryImage} />
      <Text style={styles.categoryName}>{item.strCategory}</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.flatlist_container}>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item.idCategory}
        />
      </View>
    </SafeAreaView>
  );
}

export default Categories;
