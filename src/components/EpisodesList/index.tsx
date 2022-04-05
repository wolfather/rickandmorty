import { FC, PureComponent } from 'react';
import { SectionList } from 'react-native';
import { Character, Episode } from '../../entities/characters.entity';
import { CharacterRow } from '../CharacterRow';

import { HeaderSectionList, EpisodeName, EpisodeDate, SnackTitle } from './styles';

type Props = {
    props: Episode[];
}

export const EpisodesList: FC<Props|PureComponent> = ({props}: Props) => {
    return (
        <SectionList
            sections={props}
            stickySectionHeadersEnabled={true}
            renderSectionHeader={({section}) => (
                <HeaderSectionList>
                    <EpisodeName>{section.name}</EpisodeName>
                    <EpisodeDate>Aired on: {section.air_date}</EpisodeDate>
                    <SnackTitle>CHARS ON EPISODE</SnackTitle>
                </HeaderSectionList>
            )}
            renderItem={({item}) => CharItem(item)}
            keyExtractor={(item) => `${item.id}`}
        />
    );
}

const CharItem = (item: Character) => <CharacterRow props={item} />