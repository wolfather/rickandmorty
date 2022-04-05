import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    justify-content: center;
    padding: 0 3%;
`;

export const Character = styled.TouchableOpacity`
    margin-bottom: 10px;
    padding: 3%;
    flex-direction: row;
    align-items: center;
    background: #fff;
`;

export const CharacterName = styled.Text`
    font-size: 16px;
`;

export const CharacterAvatar = styled.Image`
    margin-right: 5%;
    height: 140px;
    width: 140px;
    border-radius: 90px;
`;