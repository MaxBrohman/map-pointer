export interface IMapProps {
    points: number[];
    onPointChoice: (coords: number[]) => void;
}

export interface IMapEvent extends Event {
    get: (type: string) => IAdress[];
}
