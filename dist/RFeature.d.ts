import React from 'react';
import { Map as Map, MapBrowserEvent } from 'ol';
import { Feature } from 'ol';
import { StyleLike } from 'ol/style/Style';
import Geometry from 'ol/geom/Geometry';
import { RVectorContextType } from './context';
import { ReactLayersBase } from './REvent';
export interface RFeatureProps {
    geometry?: Geometry;
    style?: StyleLike;
    properties?: Record<string, unknown>;
    feature?: Feature;
    onClick?: (e: MapBrowserEvent) => boolean | void;
    onSingleClick?: (e: MapBrowserEvent) => boolean | void;
    onDblClick?: (e: MapBrowserEvent) => boolean | void;
    onPointerDrag?: (e: MapBrowserEvent) => boolean | void;
    onPointerDragEnd?: (e: MapBrowserEvent) => boolean | void;
    onPointerMove?: (e: MapBrowserEvent) => boolean | void;
    onPointerEnter?: (e: MapBrowserEvent) => boolean | void;
    onPointerLeave?: (e: MapBrowserEvent) => boolean | void;
}
export default class RFeature extends ReactLayersBase<RFeatureProps, null> {
    static pointerEvents: string[];
    static contextType: React.Context<any>;
    static lastFeatureEntered: undefined | Feature;
    static lastFeatureDragged: undefined | Feature;
    static hitTolerance: number;
    ol: Feature;
    context: RVectorContextType;
    onchange: () => boolean | void;
    constructor(props: Readonly<RFeatureProps>, context: React.Context<RVectorContextType>);
    static initEventRelay(map: Map): void;
    static eventRelay(e: MapBrowserEvent): boolean;
    refresh(): void;
    componentDidMount(): void;
    componentWillUnmount(): void;
    render(): JSX.Element;
}
//# sourceMappingURL=RFeature.d.ts.map