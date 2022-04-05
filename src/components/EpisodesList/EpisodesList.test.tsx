import React from 'react';
import { render, waitFor } from '@testing-library/react-native';
import { EpisodesList } from '.';

import { episodesMock } from '../../__mocks__/episodes.mock';
// jest.mock('../../__mocks__/episodes.mock');

describe('EpisodesList', () => {
    test('List length', async() => {
        const {getByText} = render(<EpisodesList props={episodesMock} />);

        // const title = getByText('Pilot');

        waitFor(() => expect(getByText('Pilot')).toBeDefined());
    })
})