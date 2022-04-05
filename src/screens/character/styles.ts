import styled from 'styled-components/native';

export const DetailContainer = styled.View`
    flex: 1;
`

export const RowInfo = styled.View`
    flex-direction: row;
    padding: 3%;
    align-content: center;
    background: ${({theme}) => theme.color.foreground}
`

export const AvatarLarge = styled.Image`
    width: 170px;
    height: 170px;
    align-self: center;
    border-radius: 130px;
`;

export const CharacterInfo = styled.View`
    flex-direction: row;
    margin: 3%;
    align-self: center;
`;

export const CharacterStatus = styled.View`
    margin-right: 10px;
    width: 20px;
    height: 20px;
    border-radius: 30px;
    ${props => (props.status  === 'Alive') ? {background: '#0f0'} : {background: '#f00'}};
`;