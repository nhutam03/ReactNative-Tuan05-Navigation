import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, Modal, TouchableOpacity, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const { width } = Dimensions.get('window');

const ProductScreen = () => {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedColor, setSelectedColor] = useState(null);

  const product = {
    id: 1,
    name: 'Điện Thoại Vsmart Joy 3 - Hàng chính hãng',
    price: '1.790.000 đ',
    rating: '★★★★☆',
    reviews: 828,
    image: require('./img/blue.png'),
    colors: [
      { colorName: 'Sliver', colorCode: '#C0C0C0', imageUrl: require('./img/sliver.png') },
      { colorName: 'Red', colorCode: '#FF0000', imageUrl: require('./img/red.png') },
      { colorName: 'Black', colorCode: '#000000', imageUrl: require('./img/black.png') },
      { colorName: 'Blue', colorCode: '#0000FF', imageUrl: require('./img/blue.png')},
    ],
  };

  const handleColorChange = (color) => {
    setSelectedColor(color);
    setModalVisible(false);
  };

  const productImage = selectedColor ? selectedColor.imageUrl : product.image;

  return (
    <View style={styles.container}>
      <View style={styles.productContainer}>
        <Image style={styles.productImage} source={productImage } />
        <View style={styles.textContainer}>
          <Text style={styles.productTitle}>{product.name}</Text>
          <Text style={styles.productRating}>{product.rating} ({product.reviews} đánh giá)</Text>
          <Text style={styles.productPrice}>{product.price}</Text>
          <Text style={styles.discountText}>Ở đâu rẻ hơn hoàn tiền</Text>
        </View>
        <TouchableOpacity style={styles.colorSelector} onPress={() => setModalVisible(true)}>
          <Text style={styles.colorText}>4 MÀU - CHỌN LOẠI</Text>
          <Text style={styles.arrowIcon}>→</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buyButton}
          onPress={() => navigation.navigate('Details', { product })}
        >
          <Text style={styles.buyText}>CHỌN MUA</Text>
        </TouchableOpacity>
      </View>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalView}>
            <Image style={styles.modalImage} source={product.image} />
            <Text style={styles.modalTitle}>{product.name}</Text>
            <Text>Chọn một màu bên dưới:</Text>
            {product.colors.map((color, index) => (
              <TouchableOpacity
                key={index}
                style={[styles.colorOption, { backgroundColor: color.colorCode }]}
                onPress={() => handleColorChange(color)}
              />
            ))}
            <TouchableOpacity
              style={styles.doneButton}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.doneButtonText}>XONG</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  productContainer: {
    width: width - 40,
    alignItems: 'center',
    padding: 20,
    borderRadius: 10,
    marginHorizontal: 10,
  },
  productImage: {
    resizeMode: 'contain',
    marginBottom: 10,
  },
  textContainer: {
    alignItems: 'flex-start', 
    width: '100%',
    marginBottom: 10,
  },
  productTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'left',
    marginBottom: 10,
  },
  productRating: {
    fontSize: 14,
    color: '#ffcc00',
    textAlign: 'left',
    marginBottom: 5,
  },
  productPrice: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#e60000',
    textAlign: 'left',
    marginBottom: 5,
  },
  discountText: {
    fontSize: 12,
    color: '#e60000',
    textAlign: 'left',
  },
  colorSelector: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginBottom: 10,
    width: '100%',
  },
  colorText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  arrowIcon: {
    fontSize: 16,
    color: '#000',
  },
  buyButton: {
    backgroundColor: '#ff0000',
    paddingVertical: 15,
    borderRadius: 5,
    width: '100%', 
    justifyContent: 'center',
    alignItems: 'center',
  },
  buyText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalView: {
    width: width - 50,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
  },
  modalImage: {
    width: 80,
    height: 150,
    resizeMode: 'contain',
    marginBottom: 10,
  },
  modalTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  colorOption: {
    width: 200,
    height: 40,
    marginBottom: 10,
    borderRadius: 5,
  },
  doneButton: {
    backgroundColor: '#4B69FF',
    paddingVertical: 10,
    paddingHorizontal: 50,
    borderRadius: 5,
    marginTop: 20,
  },
  doneButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default ProductScreen;
