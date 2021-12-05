/* tslint:disable */
/* auto-generated angular directive proxies */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, NgZone } from '@angular/core';
import { ProxyCmp, proxyOutputs } from './angular-component-lib/utils';

import { Components } from 'kickstand-ui';


export declare interface KsAccordion extends Components.KsAccordion {}

@ProxyCmp({
  inputs: ['size']
})
@Component({
  selector: 'ks-accordion',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['size']
})
export class KsAccordion {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface KsAccordionSlide extends Components.KsAccordionSlide {}

@ProxyCmp({
  inputs: ['expanded', 'heading'],
  methods: ['toggleSlide']
})
@Component({
  selector: 'ks-accordion-slide',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['expanded', 'heading']
})
export class KsAccordionSlide {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface KsAlert extends Components.KsAlert {
  /**
   *  
   */
  shown: EventEmitter<CustomEvent<any>>;
  /**
   *  
   */
  hidden: EventEmitter<CustomEvent<any>>;

}

@ProxyCmp({
  inputs: ['closeText', 'color', 'dismissible', 'display', 'header', 'hideIcon', 'icon', 'note'],
  methods: ['show', 'hide']
})
@Component({
  selector: 'ks-alert',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['closeText', 'color', 'dismissible', 'display', 'header', 'hideIcon', 'icon', 'note']
})
export class KsAlert {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['shown', 'hidden']);
  }
}

import { IFormFieldData as IAutocompleteIFormFieldData } from 'kickstand-ui';
export declare interface KsAutocomplete extends Components.KsAutocomplete {
  /**
   *  
   */
  changed: EventEmitter<CustomEvent<IAutocompleteIFormFieldData>>;
  /**
   *  
   */
  cleared: EventEmitter<CustomEvent<any>>;

}

@ProxyCmp({
  inputs: ['autoExpand', 'debounce', 'disabled', 'inputClass', 'inputId', 'name', 'required', 'size', 'value'],
  methods: ['validate']
})
@Component({
  selector: 'ks-autocomplete',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['autoExpand', 'debounce', 'disabled', 'inputClass', 'inputId', 'name', 'required', 'size', 'value']
})
export class KsAutocomplete {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['changed', 'cleared']);
  }
}


export declare interface KsBadge extends Components.KsBadge {}

@ProxyCmp({
  inputs: ['color', 'hollow']
})
@Component({
  selector: 'ks-badge',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['color', 'hollow']
})
export class KsBadge {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface KsBreadcrumbs extends Components.KsBreadcrumbs {}

@ProxyCmp({
  inputs: ['hrefProp', 'linkTag']
})
@Component({
  selector: 'ks-breadcrumbs',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['hrefProp', 'linkTag']
})
export class KsBreadcrumbs {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface KsButton extends Components.KsButton {
  /**
   *  
   */
  clicked: EventEmitter<CustomEvent<MouseEvent>>;
  /**
   *  
   */
  blurred: EventEmitter<CustomEvent<any>>;

}

@ProxyCmp({
  inputs: ['buttonClass', 'color', 'controls', 'cssClass', 'describedBy', 'disabled', 'display', 'download', 'expanded', 'haspopup', 'hides', 'href', 'hrefProp', 'linkTag', 'loading', 'loadingIcon', 'loadingMessage', 'loadingTheme', 'showLoadingMessage', 'shows', 'size', 'target', 'type']
})
@Component({
  selector: 'ks-button',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['buttonClass', 'color', 'controls', 'cssClass', 'describedBy', 'disabled', 'display', 'download', 'expanded', 'haspopup', 'hides', 'href', 'hrefProp', 'linkTag', 'loading', 'loadingIcon', 'loadingMessage', 'loadingTheme', 'showLoadingMessage', 'shows', 'size', 'target', 'type']
})
export class KsButton {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['clicked', 'blurred']);
  }
}


export declare interface KsButtonBar extends Components.KsButtonBar {}

@ProxyCmp({
  inputs: ['stacked']
})
@Component({
  selector: 'ks-button-bar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['stacked']
})
export class KsButtonBar {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface KsCard extends Components.KsCard {}

@ProxyCmp({
  inputs: ['alt', 'clickable', 'collapse', 'href', 'hrefProp', 'imgAspectRatio', 'imgDirection', 'imgHeight', 'imgSrc', 'imgWidth', 'lazy', 'linkTag', 'threshold']
})
@Component({
  selector: 'ks-card',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['alt', 'clickable', 'collapse', 'href', 'hrefProp', 'imgAspectRatio', 'imgDirection', 'imgHeight', 'imgSrc', 'imgWidth', 'lazy', 'linkTag', 'threshold']
})
export class KsCard {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface KsCardBody extends Components.KsCardBody {}

@ProxyCmp({
  inputs: ['cardSubtitle', 'cardTitle']
})
@Component({
  selector: 'ks-card-body',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['cardSubtitle', 'cardTitle']
})
export class KsCardBody {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface KsCardFooter extends Components.KsCardFooter {}


@Component({
  selector: 'ks-card-footer',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>'
})
export class KsCardFooter {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface KsCarousel extends Components.KsCarousel {}

@ProxyCmp({
  inputs: ['autoplay', 'hideControls', 'hideIndicators', 'pauseText', 'playText', 'thumbnails', 'timer']
})
@Component({
  selector: 'ks-carousel',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['autoplay', 'hideControls', 'hideIndicators', 'pauseText', 'playText', 'thumbnails', 'timer']
})
export class KsCarousel {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface KsCarouselSlide extends Components.KsCarouselSlide {}

@ProxyCmp({
  inputs: ['align', 'alt', 'clickable', 'href', 'hrefProp', 'imgAspectRatio', 'imgHeight', 'imgWidth', 'lazy', 'linkTag', 'position', 'src', 'threshold']
})
@Component({
  selector: 'ks-carousel-slide',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['align', 'alt', 'clickable', 'href', 'hrefProp', 'imgAspectRatio', 'imgHeight', 'imgWidth', 'lazy', 'linkTag', 'position', 'src', 'threshold']
})
export class KsCarouselSlide {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}

import { IFormFieldData as ICheckboxIFormFieldData } from 'kickstand-ui';
export declare interface KsCheckbox extends Components.KsCheckbox {
  /**
   *  
   */
  changed: EventEmitter<CustomEvent<ICheckboxIFormFieldData>>;

}

@ProxyCmp({
  inputs: ['checked', 'disabled', 'indeterminate', 'label', 'name', 'required', 'requiredText', 'tooltipLabel', 'tooltipSize', 'tooltipText'],
  methods: ['validate']
})
@Component({
  selector: 'ks-checkbox',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['checked', 'disabled', 'indeterminate', 'label', 'name', 'required', 'requiredText', 'tooltipLabel', 'tooltipSize', 'tooltipText']
})
export class KsCheckbox {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['changed']);
  }
}

import { IFormFieldData as IChecklistIFormFieldData } from 'kickstand-ui';
export declare interface KsChecklist extends Components.KsChecklist {
  /**
   *  
   */
  checked: EventEmitter<CustomEvent<IChecklistIFormFieldData>>;

}

@ProxyCmp({
  inputs: ['disabled', 'helpText', 'invalid', 'label', 'name', 'required', 'requiredErrorMessage', 'requiredText', 'tooltipLabel', 'tooltipSize', 'tooltipText', 'type'],
  methods: ['validate']
})
@Component({
  selector: 'ks-checklist',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['disabled', 'helpText', 'invalid', 'label', 'name', 'required', 'requiredErrorMessage', 'requiredText', 'tooltipLabel', 'tooltipSize', 'tooltipText', 'type']
})
export class KsChecklist {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['checked']);
  }
}


export declare interface KsColumn extends Components.KsColumn {}

@ProxyCmp({
  inputs: ['position']
})
@Component({
  selector: 'ks-column',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['position']
})
export class KsColumn {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface KsDropdown extends Components.KsDropdown {
  /**
   *  
   */
  shown: EventEmitter<CustomEvent<any>>;
  /**
   *  
   */
  hidden: EventEmitter<CustomEvent<any>>;

}

@ProxyCmp({
  inputs: ['collapse', 'color', 'disabled', 'display', 'hideIndicator', 'hideText', 'icon', 'loading', 'megaMenu', 'position', 'size', 'text'],
  methods: ['hide', 'show']
})
@Component({
  selector: 'ks-dropdown',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['collapse', 'color', 'disabled', 'display', 'hideIndicator', 'hideText', 'icon', 'loading', 'megaMenu', 'position', 'size', 'text']
})
export class KsDropdown {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['shown', 'hidden']);
  }
}


export declare interface KsDropdownItem extends Components.KsDropdownItem {
  /**
   *  
   */
  closeDropdown: EventEmitter<CustomEvent<any>>;

}

@ProxyCmp({
  inputs: ['preventClose']
})
@Component({
  selector: 'ks-dropdown-item',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['preventClose']
})
export class KsDropdownItem {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['closeDropdown']);
  }
}

import { IFormData as IFormIFormData } from 'kickstand-ui';
export declare interface KsForm extends Components.KsForm {
  /**
   *  
   */
  submitted: EventEmitter<CustomEvent<IFormIFormData>>;
  /**
   *  
   */
  cleared: EventEmitter<CustomEvent<any>>;

}

@ProxyCmp({
  inputs: ['action', 'enctype', 'errorMessage', 'formClass', 'inline', 'invalid', 'method', 'target'],
  methods: ['clear', 'submit']
})
@Component({
  selector: 'ks-form',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['action', 'enctype', 'errorMessage', 'formClass', 'inline', 'invalid', 'method', 'target']
})
export class KsForm {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['submitted', 'cleared']);
  }
}

import { IFormFieldData as IFormFieldIFormFieldData } from 'kickstand-ui';
export declare interface KsFormField extends Components.KsFormField {
  /**
   *  
   */
  updated: EventEmitter<CustomEvent<IFormFieldIFormFieldData>>;
  /**
   *  
   */
  blurred: EventEmitter<CustomEvent<any>>;
  /**
   *  
   */
  cleared: EventEmitter<CustomEvent<any>>;

}

@ProxyCmp({
  inputs: ['accept', 'autoExpand', 'autocomplete', 'badInputErrorMessage', 'capture', 'checked', 'datalist', 'debounce', 'defaultErrorMessage', 'disabled', 'helpText', 'hideLabel', 'icon', 'iconDirection', 'indeterminate', 'inline', 'inputClass', 'invalid', 'label', 'max', 'maxErrorMessage', 'maxlength', 'maxlengthErrorMessage', 'min', 'minErrorMessage', 'minlength', 'minlengthErrorMessage', 'multiple', 'name', 'pattern', 'patternErrorMessage', 'placeholder', 'required', 'requiredErrorMessage', 'requiredText', 'size', 'step', 'stepErrorMessage', 'tooltipLabel', 'tooltipSize', 'tooltipText', 'type', 'typeErrorMessage', 'validateOnInput', 'value', 'webkitdirectory'],
  methods: ['validate']
})
@Component({
  selector: 'ks-form-field',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['accept', 'autoExpand', 'autocomplete', 'badInputErrorMessage', 'capture', 'checked', 'datalist', 'debounce', 'defaultErrorMessage', 'disabled', 'helpText', 'hideLabel', 'icon', 'iconDirection', 'indeterminate', 'inline', 'inputClass', 'invalid', 'label', 'max', 'maxErrorMessage', 'maxlength', 'maxlengthErrorMessage', 'min', 'minErrorMessage', 'minlength', 'minlengthErrorMessage', 'multiple', 'name', 'pattern', 'patternErrorMessage', 'placeholder', 'required', 'requiredErrorMessage', 'requiredText', 'size', 'step', 'stepErrorMessage', 'tooltipLabel', 'tooltipSize', 'tooltipText', 'type', 'typeErrorMessage', 'validateOnInput', 'value', 'webkitdirectory']
})
export class KsFormField {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['updated', 'blurred', 'cleared']);
  }
}


export declare interface KsGallery extends Components.KsGallery {}

@ProxyCmp({
  inputs: ['gutter', 'heading', 'href', 'hrefProp', 'itemWidth', 'linkTag', 'linkText', 'nextButtonText', 'prevButtonText']
})
@Component({
  selector: 'ks-gallery',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['gutter', 'heading', 'href', 'hrefProp', 'itemWidth', 'linkTag', 'linkText', 'nextButtonText', 'prevButtonText']
})
export class KsGallery {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface KsIcon extends Components.KsIcon {}

@ProxyCmp({
  inputs: ['icon', 'label', 'labelledBy']
})
@Component({
  selector: 'ks-icon',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['icon', 'label', 'labelledBy']
})
export class KsIcon {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface KsImg extends Components.KsImg {}

@ProxyCmp({
  inputs: ['alt', 'aspectRatio', 'fallbackSrc', 'height', 'lazy', 'src', 'threshold', 'width']
})
@Component({
  selector: 'ks-img',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['alt', 'aspectRatio', 'fallbackSrc', 'height', 'lazy', 'src', 'threshold', 'width']
})
export class KsImg {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface KsLoading extends Components.KsLoading {}

@ProxyCmp({
  inputs: ['icon', 'message', 'showMessage']
})
@Component({
  selector: 'ks-loading',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['icon', 'message', 'showMessage']
})
export class KsLoading {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface KsLoadingOverlay extends Components.KsLoadingOverlay {}

@ProxyCmp({
  inputs: ['absolute', 'icon', 'message', 'showMessage', 'size', 'theme'],
  methods: ['show', 'hide']
})
@Component({
  selector: 'ks-loading-overlay',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['absolute', 'icon', 'message', 'showMessage', 'size', 'theme']
})
export class KsLoadingOverlay {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface KsMenuBar extends Components.KsMenuBar {}

@ProxyCmp({
  inputs: ['altText', 'collapse', 'color', 'fixed', 'hrefProp', 'inverted', 'linkTag', 'logoUrl', 'tagline']
})
@Component({
  selector: 'ks-menu-bar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['altText', 'collapse', 'color', 'fixed', 'hrefProp', 'inverted', 'linkTag', 'logoUrl', 'tagline']
})
export class KsMenuBar {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface KsMenuGroup extends Components.KsMenuGroup {}

@ProxyCmp({
  inputs: ['position']
})
@Component({
  selector: 'ks-menu-group',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['position']
})
export class KsMenuGroup {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface KsMenuItem extends Components.KsMenuItem {}


@Component({
  selector: 'ks-menu-item',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>'
})
export class KsMenuItem {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface KsMenuRow extends Components.KsMenuRow {}


@Component({
  selector: 'ks-menu-row',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>'
})
export class KsMenuRow {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface KsModal extends Components.KsModal {}

@ProxyCmp({
  inputs: ['modalTitle', 'preventClose', 'size'],
  methods: ['show', 'hide']
})
@Component({
  selector: 'ks-modal',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['modalTitle', 'preventClose', 'size']
})
export class KsModal {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface KsModalFooter extends Components.KsModalFooter {}


@Component({
  selector: 'ks-modal-footer',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>'
})
export class KsModalFooter {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface KsOverlay extends Components.KsOverlay {
  /**
   *  
   */
  shown: EventEmitter<CustomEvent<any>>;
  /**
   *  
   */
  hidden: EventEmitter<CustomEvent<any>>;

}

@ProxyCmp({
  inputs: ['absolute', 'preventClose', 'theme', 'titleId'],
  methods: ['show', 'hide']
})
@Component({
  selector: 'ks-overlay',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['absolute', 'preventClose', 'theme', 'titleId']
})
export class KsOverlay {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['shown', 'hidden']);
  }
}


export declare interface KsProgressBar extends Components.KsProgressBar {}

@ProxyCmp({
  inputs: ['color', 'description', 'hideDescription', 'hideProgressLabel', 'progressLabel', 'size', 'value']
})
@Component({
  selector: 'ks-progress-bar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['color', 'description', 'hideDescription', 'hideProgressLabel', 'progressLabel', 'size', 'value']
})
export class KsProgressBar {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface KsRadio extends Components.KsRadio {
  /**
   *  
   */
  selected: EventEmitter<CustomEvent<any>>;

}

@ProxyCmp({
  inputs: ['checked', 'disabled', 'inline', 'label', 'name']
})
@Component({
  selector: 'ks-radio',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['checked', 'disabled', 'inline', 'label', 'name']
})
export class KsRadio {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['selected']);
  }
}


export declare interface KsResponsiveEmbed extends Components.KsResponsiveEmbed {}

@ProxyCmp({
  inputs: ['aspectRatio']
})
@Component({
  selector: 'ks-responsive-embed',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['aspectRatio']
})
export class KsResponsiveEmbed {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface KsRow extends Components.KsRow {}

@ProxyCmp({
  inputs: ['gutter', 'position']
})
@Component({
  selector: 'ks-row',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['gutter', 'position']
})
export class KsRow {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface KsScrollToTop extends Components.KsScrollToTop {}

@ProxyCmp({
  inputs: ['color', 'display', 'size', 'threshold']
})
@Component({
  selector: 'ks-scroll-to-top',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['color', 'display', 'size', 'threshold']
})
export class KsScrollToTop {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface KsSideDrawer extends Components.KsSideDrawer {}

@ProxyCmp({
  inputs: ['headerText', 'position', 'size'],
  methods: ['hide', 'show']
})
@Component({
  selector: 'ks-side-drawer',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['headerText', 'position', 'size']
})
export class KsSideDrawer {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface KsSpinBox extends Components.KsSpinBox {
  /**
   *  
   */
  updated: EventEmitter<CustomEvent<any>>;

}

@ProxyCmp({
  inputs: ['disabled', 'inputClass', 'inputId', 'invalid', 'max', 'min', 'name', 'required', 'size', 'step', 'value'],
  methods: ['validate']
})
@Component({
  selector: 'ks-spin-box',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['disabled', 'inputClass', 'inputId', 'invalid', 'max', 'min', 'name', 'required', 'size', 'step', 'value']
})
export class KsSpinBox {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['updated']);
  }
}


export declare interface KsSwitch extends Components.KsSwitch {
  /**
   *  
   */
  updated: EventEmitter<CustomEvent<any>>;

}

@ProxyCmp({
  inputs: ['checked', 'disable', 'label', 'name']
})
@Component({
  selector: 'ks-switch',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['checked', 'disable', 'label', 'name']
})
export class KsSwitch {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['updated']);
  }
}


export declare interface KsTab extends Components.KsTab {}

@ProxyCmp({
  inputs: ['tabText']
})
@Component({
  selector: 'ks-tab',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['tabText']
})
export class KsTab {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface KsTabs extends Components.KsTabs {}

@ProxyCmp({
  inputs: ['align', 'label', 'position']
})
@Component({
  selector: 'ks-tabs',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['align', 'label', 'position']
})
export class KsTabs {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface KsTooltip extends Components.KsTooltip {}

@ProxyCmp({
  inputs: ['disable', 'hideDecoration', 'position', 'size', 'text']
})
@Component({
  selector: 'ks-tooltip',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['disable', 'hideDecoration', 'position', 'size', 'text']
})
export class KsTooltip {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}
