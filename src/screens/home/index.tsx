import { useQuery } from '@apollo/client';
import { useNavigation } from '@react-navigation/native';
import { FlatList, Text } from 'react-native';
import { CHARACTERS_QUERY } from '../../repository/character/character.query';

import { Character, Container } from './style';
import { TouchableCharacterContainer, CharacterAvatar, CharacterName,  } from '../../shared/presentation/styles';

export const Home = () => {
    const { loading, error, data } = useQuery(CHARACTERS_QUERY, {variables: {page: 1}});

    const navigation = useNavigation();

    if(loading) {
        return <Text>Carregando...</Text>
    }

    if(error) {
        return <Text>{error.message}</Text>
    }

    return (
        <Container>
            <FlatList
                data={data.characters.results}
                keyExtractor={item => `${item.id}`}
                renderItem={({item}) => (
                    <TouchableCharacterContainer onPress={() => {
                        navigation.navigate('character', {
                            id: item.id, 
                            title: item.name
                        })
                    }}>
                        <CharacterAvatar source={{uri: item.image}} />
                        <CharacterName>{item.name}</CharacterName>
                    </TouchableCharacterContainer>
                )}
            />
        </Container>
    )
}