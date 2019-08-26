export interface IMapProps {
    router: any;
}

export interface IMapEvent extends Event {
    get: (type: string) => IAdress[];
}