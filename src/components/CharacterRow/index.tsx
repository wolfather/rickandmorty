import { FC, memo, useEffect } from 'react';
import { Character } from '../../entities/characters.entity';
import { TouchableCharacterContainer, CharacterName, CharacterAvatar } from '../../shared/presentation/styles';

type Props = {
    props: Character;
}

const _CharacterRow: FC<Props> = ({props}: Props) => {
    useEffect(() => {
        return () => {};
    }, []);
    
    return (
        <TouchableCharacterContainer testID='container'>
            <CharacterAvatar testID='avatarImage' source={{uri: `${props.image}`}} />
            <CharacterName>{props.name}</CharacterName>
        </TouchableCharacterContainer>
    )
}

export const CharacterRow = memo(_CharacterRow);