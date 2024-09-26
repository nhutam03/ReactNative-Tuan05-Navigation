import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const DetailsScreen = ({ route }) => {
  const { product } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Chi tiết sản phẩm</Text>
      <Text style={styles.detailText}>Tên sản phẩm: {product.name}</Text>
      <Text style={styles.detailText}>Giá: {product.price}</Text>
      <Text style={styles.detailText}>Đánh giá: {product.rating} ({product.reviews} đánh giá)</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  detailText: {
    fontSize: 16,
    marginBottom: 10,
  },
});

export default DetailsScreen;
