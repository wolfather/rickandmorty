import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { render, waitFor } from '@testing-library/react-native';
import { MockedProvider } from '@apollo/react-testing';
import { Character } from '.';

// import { singleCharacterStub } from '../../__mocks__/character.mock'

const route = {
    params: {id: '1'}
};

// jest.mock('../../__mocks__/character.mock');
jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');


describe('Character', () => {
    test('should be rendered', async() => {
        
        const { getByText } = render(
            <MockedProvider
                addTypename={false}>
                <NavigationContainer>
                    <Character route={route} navigation={jest.fn()}></Character>
                </NavigationContainer>
            </MockedProvider>
        );

        // const elProps = 
        // await new Promise(resolve => setTimeout(resolve, 0));
        waitFor(() => expect(getByText('Rick Sanchez')).toBeDefined());
        waitFor(() => expect(getByText('human')).toBeDefined());

    });
});