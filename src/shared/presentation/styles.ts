import styled from 'styled-components/native';

export const CharacterContainer = styled.View`
    padding: 3%;
    margin-bottom: 13px;
    background: ${({theme}) => theme.color.foreground};
    flex-direction: row;
    align-items: center;
`
export const TouchableCharacterContainer = styled.TouchableOpacity`
    padding: 3%;
    margin-bottom: 13px;
    background: ${({theme}) => theme.color.foreground};
    flex-direction: row;
    align-items: center;
`


export const CharacterAvatar = styled.Image`
    border-radius: 50px;
    width: 100px;
    height: 100px;
    margin-right: 3%;
`
export const CharacterName = styled.Text`
    color: ${({theme}) => theme.color.primary};
    font-size: ${({theme}) => theme.font.size.medium};
`