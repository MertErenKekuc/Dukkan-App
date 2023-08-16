import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  mealItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 0.6,
    borderBottomColor: '#ccc',
  },
  mealImage: {
    width: 200,
    height: 200,
    borderRadius: 20,
    marginRight: 16,
    resizeMode: 'cover',
    
  },
  mealNameContainer: {
    flex: 1,
    marginLeft: 5,
  },
  mealName: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'black',
  },
  mealCategory: {
    fontSize: 16,
    color: '#666',
    marginTop: 6,
  },
  ingredient: {
    fontSize: 16,
    marginBottom: 8,
  },
  instructions: {
    fontSize: 16,
    marginTop: 16,
    paddingHorizontal: 16,
    lineHeight: 24,
    marginBottom: 20,
  },
  youtubeButton: {  
    color: 'red',
    marginTop: 25,
    marginHorizontal: 110,
    alignItems: 'center',
    borderRadius: 25,
  },
  youtubeButtonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default styles;
