import React from 'react';
import { View, Image, Text } from "react-native";
import styles from './styles';
import { RectButton } from 'react-native-gesture-handler';

import heartOutlineIcon from '../../assets/images/icons/heart-outline.png';
import unfavoriteIcon from '../../assets/images/icons/unfavorite.png';
import whatsappIcon from '../../assets/images/icons/whatsapp.png';

function TeacherItem() {
  return (
    <View style={styles.container} >
      <View style={styles.profile} >
        <Image
          style={styles.avatar}
          source={{ uri: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80"}}
        />

        <View style={styles.profileInfo}>
          <Text style={styles.name}>Hugo Henrique</Text>
          <Text style={styles.subject}>Química</Text>
        </View>

      </View>

      <Text style={styles.bio}>
          Mussum Ipsum, cacilds vidis litro abertis. Paisis, filhis, espiritis santis. Manduma pindureta quium dia nois paga. 
          {'\n'} {'\n'}
          In elementis mé pra quem é amistosis quis leo. Leite de capivaris, leite de mula manquis sem cabeça.          
        </Text>

        <View style={styles.footer}>
          <Text style={styles.price}>
            Preço/hora {'  '}
            <Text style={styles.priceValue}>R$ 20,00</Text>
          </Text>

          <View style={styles.buttonsContainer}>

            <RectButton style={[styles.favoriteButton, styles.favorited]}>
              <Image source={heartOutlineIcon} />
            </RectButton>

            <RectButton style={styles.contactButton}>
              <Image source={whatsappIcon} />
              <Text style={styles.contactButtonText}>Entrar em contato</Text>
            </RectButton>
          </View>

        </View>
    </View>
  );
}

export default TeacherItem;