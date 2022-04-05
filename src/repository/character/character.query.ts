import { gql } from '@apollo/client';

export const CHARACTERS_QUERY = gql`
    query fetchCharacters($page: Int) {
        characters(page: $page) {
            info {
                count, pages, next, prev
            }
            results {
                id, name, image
            }
        }
    }
`

export const CHARACTER_QUERY = gql`
    query fetchCharacter($id: ID!) {
        character(id: $id) {
            id,
            name,
            image,
            species,
            status,
            type
            episode {
                id,
                name,
                air_date,
                created,
                data: characters {
                    id, name, image
                }
            }
        }
    }
`