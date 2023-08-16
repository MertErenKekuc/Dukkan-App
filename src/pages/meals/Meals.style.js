import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'orange',
  },
  flatlistContent: {
    padding: 16,
  },
  mealItem: {
    marginBottom: 20,
    borderRadius: 8,
    borderWidth: 0.1,
    borderColor: '#ddd',
    overflow: 'hidden',
    position: 'relative',
  },
  mealImage: {
    width: '100%',
    height: 150,
    resizeMode: 'cover',
  },
  mealNameContainer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    padding: 5,
    alignItems: 'flex-end', 

  },
  mealName: {
    fontWeight: 'bold',
    fontSize: 22,
    textAlign: 'center',
    borderRadius: 8,
    color: 'white',
  },
});
