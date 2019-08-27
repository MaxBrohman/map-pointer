export interface IPointsListItemProps {
    name: string;
    id: number;
    onDelete: (id: number) => void;
    onEdit: (id: number) => void;
}