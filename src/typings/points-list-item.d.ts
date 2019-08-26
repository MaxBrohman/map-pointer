export interface IPLIMapDispatchToProps {
    onDelete: (id: number) => void;
}

export interface IPointsListItemProps extends IPLIMapDispatchToProps {
    name: string;
    id: number;
}