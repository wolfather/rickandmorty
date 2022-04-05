import { Text } from "react-native";
import { EpisodesList } from "../../components/EpisodesList";
import { Loading } from "../../components/Loading";
import { useSingleCharacter } from "../../Hooks/single-character/usesinglecharacter.hook";

import { DetailContainer, RowInfo, AvatarLarge, CharacterInfo, CharacterStatus } from './styles';

export const Character = ({route, navigation}) => {
    const { id } = route.params;

    const { loading, error, data } = useSingleCharacter(Number(id));
    
    if(loading) {
        return <Loading/>
    }

    if(error) {
        return <Text>{error.message}</Text>
    }

    return (
        <DetailContainer>
            <RowInfo>
                <AvatarLarge source={{uri: data.character.image}} />
                <CharacterInfo>
                    <CharacterStatus
                        status={data.character.status}>
                    </CharacterStatus>
                    <Text>{data.character.species}</Text>
                    <Text>{data.character.types}</Text>
                </CharacterInfo>
            </RowInfo>

            <EpisodesList props={data.character.episode}/>
        </DetailContainer>
    )
}
