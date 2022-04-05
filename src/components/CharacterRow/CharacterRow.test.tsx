import React from 'react';
import { render, waitFor } from '@testing-library/react-native';
import 'jest-styled-components';
import { CharacterRow } from '.';
import { Character } from '../../entities/characters.entity';

const stub: Character = {
    name: 'Char Name',
    image: 'https://someurl.com/image.png'
};

describe('CharacterRow', () => {
    test('should receive props', () => {
        const {getByTestId} = render(<CharacterRow props={stub} />);

        const characterAvatarProps = getByTestId('avatarImage').props;
        expect(characterAvatarProps).toHaveProperty('source', {'uri': stub.image});
    });

    test('Should render container, avatar and name', async() => {
        const { getByText, getByTestId } = render(<CharacterRow props={stub} />);

        const container = getByTestId('container');
        waitFor(() => expect(container).toBeTruthy());
        
        const characterAvatar = getByTestId('avatarImage');
        waitFor(() => expect(characterAvatar).toBeTruthy());

        const CharacterName = getByText(stub.name);
        waitFor(() => expect(CharacterName).toBeTruthy());
    });
});