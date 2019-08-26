export interface IAppMapDispatchToProps {
    onAppLoaded: () => void;
}

export interface IAppMapStateToProps {
    loading: boolean;
    error: boolean;
}

export interface IAppProps extends IAppMapDispatchToProps, IAppMapStateToProps {
}