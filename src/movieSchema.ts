import { Movie } from './movieInterface';

export const movies: Movie[] = [
    {
        id: "1",
        name: "Dune",
        assets: [
            {
                name: 'Song',
                assetType: 'audio',
                assetUrl: 'https://www.youtube.com/watch?v=U2Qp5pL3ovA',
            },
            {
                name: 'Trailer',
                assetType: 'video',
                assetUrl: 'https://www.youtube.com/watch?v=U2Qp5pL3ovA',
            },
        ],
    },
    {
        id: "2",
        name: "Finding Nemo",
        assets: [
            {
                name: 'Song',
                assetType: 'audio',
                assetUrl: 'https://www.youtube.com/watch?v=_inKs4eeHiI',
            },
            {
                name: 'Trailer',
                assetType: 'video',
                assetUrl: 'https://www.youtube.com/watch?v=_inKs4eeHiI',
            },
            {
                name: 'Po',
                assetType: 'character',
                assetUrl: 'https://www.youtube.com/watch?v=_inKs4eeHiI',
            },
        ],
    },
];