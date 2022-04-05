import { useQuery } from "@apollo/client";
import { CHARACTER_QUERY } from "../../repository/character/character.query";

export const useSingleCharacter = (id: number) => {
    const { loading, error, data } = useQuery(CHARACTER_QUERY, {variables: {id}});

    return {loading, error, data};
}
