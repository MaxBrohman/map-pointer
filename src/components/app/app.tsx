import React from 'react';
import PointsList from '../point-list';
import MapContainer from '../map';
import PointNameInput from '../point-name-input';
import Spinner from '../spinner';
import { connect } from 'react-redux';
import { IState, IAppProps, IAppMapDispatchToProps, IAppMapStateToProps } from '../../typings';
import { Dispatch } from 'redux';
import { onAppLoaded, onNameInput, newPointAdded } from '../../actions';

import './app.sass';

class App extends React.Component<IAppProps> {
    public props: IAppProps;
    private inputBtnLabel: string;
    constructor(props: IAppProps){
        super(props);
        this.props = props;
        this.inputBtnLabel = 'AddPoint';
    };

    public componentDidMount(): void {
        this.props.onAppLoaded();
    }

    public render(): JSX.Element {
        const { name, onInput, onFormSubmit } = this.props;
        return (
            <div className="container d-flex align-items-stretch app-container">
                <div className="d-flex flex-column flex-grow-1 left-container">
                    <PointNameInput
                        btnLabel={ this.inputBtnLabel }
                        name ={ name }
                        onInput={ onInput }
                        onFormSubmit={ onFormSubmit }
                    />
                    <PointsList />
                </div>
                <div className="d-flex flex-column flex-grow-1">
                    <MapContainer />
                </div>
                { this.props.loading && <Spinner />}
            </div>
        );
    }
}

const mapStateToProps = (state: IState): IAppMapStateToProps => {
    return {
        loading: state.loading,
        error: state.error,
        name: state.newPointName
    }
};

const mapDispatchToProps = (dispatch: Dispatch): IAppMapDispatchToProps => {
    return {
        onAppLoaded: () => dispatch(onAppLoaded()),
        onInput: (name: string) => dispatch(onNameInput(name)),
		onFormSubmit: (name: string) => dispatch(newPointAdded(name))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);