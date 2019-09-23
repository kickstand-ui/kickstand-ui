import { Prop } from '@stencil/core';

export default class Base {
    @Prop() cssClass: string;
    @Prop() htmlId: string;
}
