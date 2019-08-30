export interface IYmaps {
    Map: IMap;
    multiRouter: IMultiRouter;
    ready: () => Promise<void>;
    templateLayoutFactory: IYmapsTemplateFactory;
}

export interface IMap {
    new(name: string, options: IMapOptions): IMap;
    geoObjects: IGeoObjects;
    container: IMapContainer;
}

interface IMapOptions {
    zoom: number;
    center: number[];
}

export interface IRouter {
    new(options: IRouterOptions, otherOptions: IRouterOtherOptions): IRouter;
    editor: IRouterEditor;
    getWayPoints: () => IWayPoints;
    model: IRouterModel;
}

interface IRouterOptions {
    referencePoints: number[][];
}

interface IRouterOtherOptions {
    boundsAutoApply: boolean;
    editorDrawOver: boolean;
    editorMidPointsType: string;
}

interface IMultiRouter {
    MultiRoute: IRouter
}

interface IRouterEditor {
    start: () => void;
}

interface IGeoObjects {
    add: (item: IRouter) => void;
}

interface IMapContainer {
    fitToViewport: () => void;
}

interface IWayPoints {
    events: IWayPointsEvents;
    each: (callback: (point: IWayPoint, i: number) => void) => void;
}

type TWayPointClb = (evt: IWayPointEvent) => void;

interface IWayPointsEvents {
    add: (name: string, callback: TWayPointClb) => void;
    remove: (name: string, callback: TWayPointClb) => void;
}

export interface IWayPointEvent {
    get: (name: string) => IWayPointEventTarget;
}

interface IWayPointEventTarget {
    properties: IWayPointEventTargetProperties;
    geometry: IWayPointEventTargetGeometry;
}

interface IWayPointEventTargetProperties {
    get: (name: string) => number;
}

interface IWayPointEventTargetGeometry {
    getCoordinates: () => number[];
}

interface IYmapsTemplateFactory {
    createClass: (name: string) => string;
}

interface IRouterModel {
    events: IWayPointsEvents;
    setReferencePoints: (coords: number[][]) => void;
}

export interface IWayPoint {
    options: IWayPointOptions;
}

interface IWayPointOptions {
    setName: (name: string) => void;
    set: ({ preset: string, iconContentLayout: string }) => void;
}