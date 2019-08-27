export interface IAppMapDispatchToProps {
    onAppLoaded: () => void;
    onInput: (name: string) => void;
    onFormSubmit: (name: string) => void;
}

export interface IAppMapStateToProps {
    loading: boolean;
    error: boolean;
    name: string;
}

export interface IAppProps extends IAppMapDispatchToProps, IAppMapStateToProps {
}