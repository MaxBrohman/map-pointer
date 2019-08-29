export interface IPointsListItemProps {
    name: string;
    id: number;
    onDelete: (id: number) => void;
    onEdit: (id: number) => void;
    onDragStart: (evt: React.DragEvent) => void;
    onDrop: (evt: React.DragEvent) => void;
    onDragOver: (evt: React.DragEvent) => void;
    onDragLeave: (evt: React.DragEvent) => void;
}