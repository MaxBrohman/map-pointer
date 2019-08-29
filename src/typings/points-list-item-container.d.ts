export interface IPLICMapDispatchToProps {
    onDelete: (id: number) => void;
    onInput: (id: number, name: string) => void;
    onFormSubmit: (id: number) => void;
    onEdit: (id: number) => void;
    onItemDrag: (id: number, evt: React.DragEvent) => void;
    onItemDrop: (id: number, evt: React.DragEvent) => void;
}

export interface IPointsListItemContainerProps extends IPLICMapDispatchToProps {
    name: string;
    id: number;
    isEditing: boolean;
}