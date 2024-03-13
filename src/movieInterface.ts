interface Asset {
    name: string;
    assetType: string;
    assetUrl: string;
}

export interface Movie {
    id: string;
    name: string;
    assets: Asset[];
}