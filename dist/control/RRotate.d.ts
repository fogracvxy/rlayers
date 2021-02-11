import React from 'react';
import { Map as Map } from 'ol';
import { Rotate as OLRRotate } from 'ol/control';
import { Options } from 'ol/control/Rotate';
import { default as RControlBase, RControlProps } from './RControlBase';
export interface RRotateProps extends RControlProps {
    label?: string;
    autoHide?: boolean;
}
export default class RRotate extends RControlBase<RRotateProps, null> {
    ol: OLRRotate;
    constructor(props: Readonly<RRotateProps>, context: React.Context<Map>);
    toOLProps(props: RRotateProps): Options;
}
//# sourceMappingURL=RRotate.d.ts.map