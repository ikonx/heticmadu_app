import React, { useState, useEffect, FunctionComponent } from 'react';
import { Image, TouchableOpacity, TouchableOpacityProps } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import Icon from '@src/components/atoms/Icons/Icon';
import styled from 'styled-components';
import Theme from '@src/styleGuide/Theme';
import { IconName } from '@src/assets/icons/IconName.enum';
import StyledAvatarTouchable from './Avatar.style';

export interface IAvatar extends TouchableOpacityProps {}

const StyledImage = styled(Image)`
  width: 88px;
  height: 88px;
  border-radius: 100px;
  border: ${Theme.Borders.blackBorder};
`;

const Avatar: FunctionComponent<IAvatar> = () => {
  const [image, setImage] = useState(null);

  useEffect(() => {
    (async () => {
      if (Constants.platform.ios) {
        const {
          status,
        } = await ImagePicker.requestCameraRollPermissionsAsync();
        if (status !== 'granted') {
          alert(
            'Désolé, nous avons besoin des autorisations pour acceder à la galerie photo',
          );
        }
      }
    })();
  }, []);

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  return (
    <StyledAvatarTouchable onPress={pickImage}>
      {image ? (
        <StyledImage
          source={{ uri: image }}
          // style={{
          //   width: 88,
          //   height: 88,
          //   borderRadius: 100,
          // }}
        />
      ) : (
        <Icon
          name={IconName.CAMERA}
          height={32}
          width={32}
          fill={Theme.Colors.mainPurple}
        />
      )}
    </StyledAvatarTouchable>
  );
};

export default Avatar;
