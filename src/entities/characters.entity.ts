export interface Character {
    id?: string|number;
    data?: any;
    name?: string;
    status?: string;
    species?: string;
    type?: string;
    gender?: string;
    origin?: Location;
    location?: Location;
    image?: string;
    episode?: Episode[];
    created?: string;
}

export interface Episode {
    id?: string|number;
    name?: string;
    air_date?: string;
    episode?: string;
    characters?: Character[];
    data?: Character[];
    created?: string;
}

export interface Location {
    id?: string|number;
    name?: string;
    type?: string;
    dimension?: string;
    residents?: Character[];
    created?: string;
}