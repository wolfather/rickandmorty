import styled from 'styled-components/native';

export const HeaderSectionList = styled.View`
    padding: 1% 5%;
    background: #333;
`

export const DefaultText = styled.Text`
    color: ${({theme}) => theme.color.secondary};
`;

export const EpisodeName = styled(DefaultText)`
    font-size: 16px;
`

export const EpisodeDate = styled(DefaultText)`
    font-size: 13px;
`

export const SnackTitle = styled.Text`
    margin: 2% 0;
    align-self: center;
    font-size: 14px;
    color: #333;
    padding: 2% 3%;
    border-radius: 20px;
    background: #fff;
`