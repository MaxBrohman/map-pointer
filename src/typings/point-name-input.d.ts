export interface IMapFormDispatchToProps {
    onInput: (name: string) => void;
    onFormSubmit: (name: string) => void;
}

export interface IPointNameInputProps extends IMapFormDispatchToProps {
    name: string;
}