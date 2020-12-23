/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { IFormFieldData } from "./scripts/components/form-field/form-field";
import { IFormData } from "./scripts/components/form/form";
import { IFormFieldData as IFormFieldData1 } from "./scripts/components/form-field/form-field";
export namespace Components {
    interface KsAccordion {
        "size": 'sm' | 'md' | 'lg';
    }
    interface KsAccordionSlide {
        "expanded": boolean;
        "heading": string;
        "toggleSlide": () => Promise<void>;
    }
    interface KsAlert {
        "closeText": string;
        "color": 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'danger' | 'light' | 'dark';
        "dismissible": boolean;
        "display": boolean;
        "header": string;
        "hide": () => Promise<void>;
        "note": boolean;
        "show": () => Promise<void>;
    }
    interface KsAutocomplete {
        "debounce": number;
        "disabled": boolean;
        "inputId": string;
        "name": string;
        "required": boolean;
        "validate": () => Promise<IFormFieldData>;
        "value"?: string | number | boolean | any[] | null;
    }
    interface KsBadge {
        "color": 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'danger' | 'light' | 'dark';
        "hollow": boolean;
    }
    interface KsBreadcrumbs {
    }
    interface KsButton {
        "color": 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'danger' | 'light' | 'dark';
        "controls": string;
        "cssClass": string;
        "describedBy": string;
        "disabled": boolean;
        "display": 'solid' | 'hollow' | 'clear' | 'link';
        "download": boolean;
        "expanded": boolean;
        "haspopup": boolean;
        "hides": string;
        "href": string;
        "loading": boolean;
        "shows": string;
        "size": 'xs' | 'sm' | 'md' | 'lg' | 'xl';
        "tabIndex": number;
        "target": string;
        "type": 'button' | 'submit' | 'reset';
    }
    interface KsButtonBar {
        "stacked": boolean;
    }
    interface KsCard {
        "alt": string;
        "clickable": boolean;
        "collapse": 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';
        "href": string;
        "imgDirection": 'top' | 'bottom' | 'left' | 'right' | 'behind';
        "imgSrc": string;
        "lazy": boolean;
        "threshold": number;
    }
    interface KsCardBody {
        "cardSubtitle": string;
        "cardTitle": string;
    }
    interface KsCardFooter {
    }
    interface KsCarousel {
        "autoplay": boolean;
        "hideControls": boolean;
        "hideIndicators": boolean;
        "thumbnails": boolean;
        "timer": number;
    }
    interface KsCarouselSlide {
        "align": 'left' | 'center' | 'right';
        "alt": string;
        "clickable": boolean;
        "href": string;
        "lazy": boolean;
        "position": 'top' | 'center' | 'bottom';
        "src": string;
        "threshold": number;
    }
    interface KsCheckbox {
        "checked": boolean;
        "label": string;
        "name": string;
        "required": boolean;
        "requiredText": string;
        "tooltipSize": 'sm' | 'md' | 'lg' | 'xl';
        "tooltipText": string;
        "validate": () => Promise<IFormFieldData>;
    }
    interface KsChecklist {
        "disabled": boolean;
        "helpText": string;
        "invalid": boolean;
        "label": string;
        "name": string;
        "required": boolean;
        "requiredErrorMessage": string;
        "requiredText": string;
        "tooltipSize": 'sm' | 'md' | 'lg' | 'xl';
        "tooltipText": string;
        "type": 'checkbox' | 'radio';
        "validate": () => Promise<IFormFieldData>;
    }
    interface KsColumn {
        "position": 'start' | 'center' | 'end' | 'stretch';
    }
    interface KsDropdown {
        "close": () => Promise<void>;
        "collapse": 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';
        "color": 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'danger' | 'light' | 'dark';
        "display": 'solid' | 'hollow' | 'clear' | 'link';
        "hideIndicator": boolean;
        "hideText": boolean;
        "icon": string;
        "megaMenu": boolean;
        "position": 'left' | 'right';
        "text": string;
    }
    interface KsDropdownItem {
        "preventClose": boolean;
    }
    interface KsForm {
        "action": string;
        "enctype": 'application/x-www-form-urlencoded' | 'multipart/form-data' | 'text/plain';
        "errorMessage": string;
        "invalid": boolean;
        "method": 'get' | 'post';
        "target": '_self' | '_blank' | '_parent' | '_top';
    }
    interface KsFormField {
        "autocomplete"?: string;
        "badInputErrorMessage": string;
        "checked": boolean;
        "datalist": boolean;
        "debounce": number;
        "defaultErrorMessage": string;
        "disabled": boolean;
        "helpText": string;
        "hideLabel": boolean;
        "icon"?: string;
        "iconDirection": 'left' | 'right';
        "inline": boolean;
        "invalid": boolean;
        "label": string;
        "max"?: number;
        "maxErrorMessage": string;
        "maxlength"?: number;
        "maxlengthErrorMessage": string;
        "min"?: number;
        "minErrorMessage": string;
        "minlength"?: number;
        "minlengthErrorMessage": string;
        "name": string;
        "pattern"?: string;
        "patternErrorMessage": string;
        "placeholder": string;
        "required": boolean;
        "requiredErrorMessage": string;
        "requiredText": string;
        "step"?: number;
        "stepErrorMessage": string;
        "tooltipSize": 'sm' | 'md' | 'lg' | 'xl';
        "tooltipText": string;
        "type": 'autocomplete'
        | 'checkbox'
        | 'checklist'
        | 'color'
        | 'date'
        | 'email'
        | 'file'
        | 'hidden'
        | 'month'
        | 'number'
        | 'password'
        | 'radiolist'
        | 'range'
        | 'search'
        | 'select'
        | 'spin-box'
        | 'tel'
        | 'text'
        | 'textarea'
        | 'url';
        "typeErrorMessage": string;
        "validate": () => Promise<IFormFieldData>;
        "validateOnInput": boolean;
        "value"?: string | number | boolean | any[] | null;
    }
    interface KsGallery {
        "gutter": 'none' | 'xxxs' | 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'xxxl';
        "heading": string;
        "itemWidth": string;
        "src": string;
    }
    interface KsIcon {
        "icon": string;
        "label": string;
        "labelledBy": string;
        "rotate": '0' | '45' | '90' | '135' | '180' | '225' | '270' | '360' | '-45' | '-90' | '-135' | '-180' | '-225' | '-270' | '-360';
    }
    interface KsImg {
        "alt": string;
        "lazy": boolean;
        "src": string;
        "threshold": number;
    }
    interface KsLoading {
        "icon": string;
        "message": string;
        "showMessage": boolean;
    }
    interface KsLoadingOverlay {
        "absolute": boolean;
        "hide": () => Promise<void>;
        "icon": string;
        "message": string;
        "show": () => Promise<void>;
        "showMessage": boolean;
        "size": 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
    }
    interface KsMenuBar {
        "altText": string;
        "collapse": 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';
        "color": 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'danger' | 'light' | 'dark';
        "fixed": 'top' | 'bottom';
        "inverted": boolean;
        "logoUrl": string;
        "tagline": string;
    }
    interface KsMenuGroup {
        "position": 'left' | 'right';
    }
    interface KsMenuItem {
    }
    interface KsMenuRow {
    }
    interface KsModal {
        "hide": () => Promise<void>;
        "modalTitle": string;
        "preventClose": boolean;
        "show": () => Promise<void>;
        "size": 'sm' | 'md' | 'lg';
    }
    interface KsModalFooter {
    }
    interface KsOverlay {
        "absolute": boolean;
        "hide": () => Promise<void>;
        "preventClose": boolean;
        "show": () => Promise<void>;
        "theme": 'dark' | 'light';
        "titleId": string;
    }
    interface KsProgressBar {
        "color": 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'danger' | 'light' | 'dark' | 'link';
        "description": string;
        "hideDescription": boolean;
        "hideProgressLabel": boolean;
        "progressLabel": string;
        "size": 'xs' | 'sm' | 'md' | 'lg';
        "value": number;
    }
    interface KsRadio {
        "checked": boolean;
        "inline": boolean;
        "label": string;
        "name": string;
    }
    interface KsResponsiveEmbed {
        "aspectRatio": string;
    }
    interface KsRow {
        "gutter": 'none' | 'xxxs' | 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'xxxl';
        "position": 'start' | 'center' | 'end';
    }
    interface KsSideDrawer {
        "headerText": string;
        "hide": () => Promise<void>;
        "position": 'left' | 'right';
        "show": () => Promise<void>;
        "size": 'sm' | 'md' | 'lg' | 'xl';
    }
    interface KsSpinBox {
        "disabled": boolean;
        "inputId": string;
        "invalid": boolean;
        "max": number;
        "min": number;
        "name": string;
        "required": boolean;
        "step": number;
        "validate": () => Promise<IFormFieldData>;
        "value"?: string | number | boolean | any[] | null;
    }
    interface KsSwitch {
        "checked": boolean;
        "disable": boolean;
        "label": string;
        "name": string;
    }
    interface KsTab {
        "tabText": string;
    }
    interface KsTabs {
        "align": 'start' | 'center' | 'end' | 'justified';
        "label": string;
        "position": 'top' | 'bottom' | 'left' | 'right';
    }
    interface KsTooltip {
        "disable": boolean;
        "hideDecoration": boolean;
        "position": 'top' | 'bottom' | 'left' | 'right';
        "size": 'sm' | 'md' | 'lg' | 'xl';
        "text": string;
    }
}
declare global {
    interface HTMLKsAccordionElement extends Components.KsAccordion, HTMLStencilElement {
    }
    var HTMLKsAccordionElement: {
        prototype: HTMLKsAccordionElement;
        new (): HTMLKsAccordionElement;
    };
    interface HTMLKsAccordionSlideElement extends Components.KsAccordionSlide, HTMLStencilElement {
    }
    var HTMLKsAccordionSlideElement: {
        prototype: HTMLKsAccordionSlideElement;
        new (): HTMLKsAccordionSlideElement;
    };
    interface HTMLKsAlertElement extends Components.KsAlert, HTMLStencilElement {
    }
    var HTMLKsAlertElement: {
        prototype: HTMLKsAlertElement;
        new (): HTMLKsAlertElement;
    };
    interface HTMLKsAutocompleteElement extends Components.KsAutocomplete, HTMLStencilElement {
    }
    var HTMLKsAutocompleteElement: {
        prototype: HTMLKsAutocompleteElement;
        new (): HTMLKsAutocompleteElement;
    };
    interface HTMLKsBadgeElement extends Components.KsBadge, HTMLStencilElement {
    }
    var HTMLKsBadgeElement: {
        prototype: HTMLKsBadgeElement;
        new (): HTMLKsBadgeElement;
    };
    interface HTMLKsBreadcrumbsElement extends Components.KsBreadcrumbs, HTMLStencilElement {
    }
    var HTMLKsBreadcrumbsElement: {
        prototype: HTMLKsBreadcrumbsElement;
        new (): HTMLKsBreadcrumbsElement;
    };
    interface HTMLKsButtonElement extends Components.KsButton, HTMLStencilElement {
    }
    var HTMLKsButtonElement: {
        prototype: HTMLKsButtonElement;
        new (): HTMLKsButtonElement;
    };
    interface HTMLKsButtonBarElement extends Components.KsButtonBar, HTMLStencilElement {
    }
    var HTMLKsButtonBarElement: {
        prototype: HTMLKsButtonBarElement;
        new (): HTMLKsButtonBarElement;
    };
    interface HTMLKsCardElement extends Components.KsCard, HTMLStencilElement {
    }
    var HTMLKsCardElement: {
        prototype: HTMLKsCardElement;
        new (): HTMLKsCardElement;
    };
    interface HTMLKsCardBodyElement extends Components.KsCardBody, HTMLStencilElement {
    }
    var HTMLKsCardBodyElement: {
        prototype: HTMLKsCardBodyElement;
        new (): HTMLKsCardBodyElement;
    };
    interface HTMLKsCardFooterElement extends Components.KsCardFooter, HTMLStencilElement {
    }
    var HTMLKsCardFooterElement: {
        prototype: HTMLKsCardFooterElement;
        new (): HTMLKsCardFooterElement;
    };
    interface HTMLKsCarouselElement extends Components.KsCarousel, HTMLStencilElement {
    }
    var HTMLKsCarouselElement: {
        prototype: HTMLKsCarouselElement;
        new (): HTMLKsCarouselElement;
    };
    interface HTMLKsCarouselSlideElement extends Components.KsCarouselSlide, HTMLStencilElement {
    }
    var HTMLKsCarouselSlideElement: {
        prototype: HTMLKsCarouselSlideElement;
        new (): HTMLKsCarouselSlideElement;
    };
    interface HTMLKsCheckboxElement extends Components.KsCheckbox, HTMLStencilElement {
    }
    var HTMLKsCheckboxElement: {
        prototype: HTMLKsCheckboxElement;
        new (): HTMLKsCheckboxElement;
    };
    interface HTMLKsChecklistElement extends Components.KsChecklist, HTMLStencilElement {
    }
    var HTMLKsChecklistElement: {
        prototype: HTMLKsChecklistElement;
        new (): HTMLKsChecklistElement;
    };
    interface HTMLKsColumnElement extends Components.KsColumn, HTMLStencilElement {
    }
    var HTMLKsColumnElement: {
        prototype: HTMLKsColumnElement;
        new (): HTMLKsColumnElement;
    };
    interface HTMLKsDropdownElement extends Components.KsDropdown, HTMLStencilElement {
    }
    var HTMLKsDropdownElement: {
        prototype: HTMLKsDropdownElement;
        new (): HTMLKsDropdownElement;
    };
    interface HTMLKsDropdownItemElement extends Components.KsDropdownItem, HTMLStencilElement {
    }
    var HTMLKsDropdownItemElement: {
        prototype: HTMLKsDropdownItemElement;
        new (): HTMLKsDropdownItemElement;
    };
    interface HTMLKsFormElement extends Components.KsForm, HTMLStencilElement {
    }
    var HTMLKsFormElement: {
        prototype: HTMLKsFormElement;
        new (): HTMLKsFormElement;
    };
    interface HTMLKsFormFieldElement extends Components.KsFormField, HTMLStencilElement {
    }
    var HTMLKsFormFieldElement: {
        prototype: HTMLKsFormFieldElement;
        new (): HTMLKsFormFieldElement;
    };
    interface HTMLKsGalleryElement extends Components.KsGallery, HTMLStencilElement {
    }
    var HTMLKsGalleryElement: {
        prototype: HTMLKsGalleryElement;
        new (): HTMLKsGalleryElement;
    };
    interface HTMLKsIconElement extends Components.KsIcon, HTMLStencilElement {
    }
    var HTMLKsIconElement: {
        prototype: HTMLKsIconElement;
        new (): HTMLKsIconElement;
    };
    interface HTMLKsImgElement extends Components.KsImg, HTMLStencilElement {
    }
    var HTMLKsImgElement: {
        prototype: HTMLKsImgElement;
        new (): HTMLKsImgElement;
    };
    interface HTMLKsLoadingElement extends Components.KsLoading, HTMLStencilElement {
    }
    var HTMLKsLoadingElement: {
        prototype: HTMLKsLoadingElement;
        new (): HTMLKsLoadingElement;
    };
    interface HTMLKsLoadingOverlayElement extends Components.KsLoadingOverlay, HTMLStencilElement {
    }
    var HTMLKsLoadingOverlayElement: {
        prototype: HTMLKsLoadingOverlayElement;
        new (): HTMLKsLoadingOverlayElement;
    };
    interface HTMLKsMenuBarElement extends Components.KsMenuBar, HTMLStencilElement {
    }
    var HTMLKsMenuBarElement: {
        prototype: HTMLKsMenuBarElement;
        new (): HTMLKsMenuBarElement;
    };
    interface HTMLKsMenuGroupElement extends Components.KsMenuGroup, HTMLStencilElement {
    }
    var HTMLKsMenuGroupElement: {
        prototype: HTMLKsMenuGroupElement;
        new (): HTMLKsMenuGroupElement;
    };
    interface HTMLKsMenuItemElement extends Components.KsMenuItem, HTMLStencilElement {
    }
    var HTMLKsMenuItemElement: {
        prototype: HTMLKsMenuItemElement;
        new (): HTMLKsMenuItemElement;
    };
    interface HTMLKsMenuRowElement extends Components.KsMenuRow, HTMLStencilElement {
    }
    var HTMLKsMenuRowElement: {
        prototype: HTMLKsMenuRowElement;
        new (): HTMLKsMenuRowElement;
    };
    interface HTMLKsModalElement extends Components.KsModal, HTMLStencilElement {
    }
    var HTMLKsModalElement: {
        prototype: HTMLKsModalElement;
        new (): HTMLKsModalElement;
    };
    interface HTMLKsModalFooterElement extends Components.KsModalFooter, HTMLStencilElement {
    }
    var HTMLKsModalFooterElement: {
        prototype: HTMLKsModalFooterElement;
        new (): HTMLKsModalFooterElement;
    };
    interface HTMLKsOverlayElement extends Components.KsOverlay, HTMLStencilElement {
    }
    var HTMLKsOverlayElement: {
        prototype: HTMLKsOverlayElement;
        new (): HTMLKsOverlayElement;
    };
    interface HTMLKsProgressBarElement extends Components.KsProgressBar, HTMLStencilElement {
    }
    var HTMLKsProgressBarElement: {
        prototype: HTMLKsProgressBarElement;
        new (): HTMLKsProgressBarElement;
    };
    interface HTMLKsRadioElement extends Components.KsRadio, HTMLStencilElement {
    }
    var HTMLKsRadioElement: {
        prototype: HTMLKsRadioElement;
        new (): HTMLKsRadioElement;
    };
    interface HTMLKsResponsiveEmbedElement extends Components.KsResponsiveEmbed, HTMLStencilElement {
    }
    var HTMLKsResponsiveEmbedElement: {
        prototype: HTMLKsResponsiveEmbedElement;
        new (): HTMLKsResponsiveEmbedElement;
    };
    interface HTMLKsRowElement extends Components.KsRow, HTMLStencilElement {
    }
    var HTMLKsRowElement: {
        prototype: HTMLKsRowElement;
        new (): HTMLKsRowElement;
    };
    interface HTMLKsSideDrawerElement extends Components.KsSideDrawer, HTMLStencilElement {
    }
    var HTMLKsSideDrawerElement: {
        prototype: HTMLKsSideDrawerElement;
        new (): HTMLKsSideDrawerElement;
    };
    interface HTMLKsSpinBoxElement extends Components.KsSpinBox, HTMLStencilElement {
    }
    var HTMLKsSpinBoxElement: {
        prototype: HTMLKsSpinBoxElement;
        new (): HTMLKsSpinBoxElement;
    };
    interface HTMLKsSwitchElement extends Components.KsSwitch, HTMLStencilElement {
    }
    var HTMLKsSwitchElement: {
        prototype: HTMLKsSwitchElement;
        new (): HTMLKsSwitchElement;
    };
    interface HTMLKsTabElement extends Components.KsTab, HTMLStencilElement {
    }
    var HTMLKsTabElement: {
        prototype: HTMLKsTabElement;
        new (): HTMLKsTabElement;
    };
    interface HTMLKsTabsElement extends Components.KsTabs, HTMLStencilElement {
    }
    var HTMLKsTabsElement: {
        prototype: HTMLKsTabsElement;
        new (): HTMLKsTabsElement;
    };
    interface HTMLKsTooltipElement extends Components.KsTooltip, HTMLStencilElement {
    }
    var HTMLKsTooltipElement: {
        prototype: HTMLKsTooltipElement;
        new (): HTMLKsTooltipElement;
    };
    interface HTMLElementTagNameMap {
        "ks-accordion": HTMLKsAccordionElement;
        "ks-accordion-slide": HTMLKsAccordionSlideElement;
        "ks-alert": HTMLKsAlertElement;
        "ks-autocomplete": HTMLKsAutocompleteElement;
        "ks-badge": HTMLKsBadgeElement;
        "ks-breadcrumbs": HTMLKsBreadcrumbsElement;
        "ks-button": HTMLKsButtonElement;
        "ks-button-bar": HTMLKsButtonBarElement;
        "ks-card": HTMLKsCardElement;
        "ks-card-body": HTMLKsCardBodyElement;
        "ks-card-footer": HTMLKsCardFooterElement;
        "ks-carousel": HTMLKsCarouselElement;
        "ks-carousel-slide": HTMLKsCarouselSlideElement;
        "ks-checkbox": HTMLKsCheckboxElement;
        "ks-checklist": HTMLKsChecklistElement;
        "ks-column": HTMLKsColumnElement;
        "ks-dropdown": HTMLKsDropdownElement;
        "ks-dropdown-item": HTMLKsDropdownItemElement;
        "ks-form": HTMLKsFormElement;
        "ks-form-field": HTMLKsFormFieldElement;
        "ks-gallery": HTMLKsGalleryElement;
        "ks-icon": HTMLKsIconElement;
        "ks-img": HTMLKsImgElement;
        "ks-loading": HTMLKsLoadingElement;
        "ks-loading-overlay": HTMLKsLoadingOverlayElement;
        "ks-menu-bar": HTMLKsMenuBarElement;
        "ks-menu-group": HTMLKsMenuGroupElement;
        "ks-menu-item": HTMLKsMenuItemElement;
        "ks-menu-row": HTMLKsMenuRowElement;
        "ks-modal": HTMLKsModalElement;
        "ks-modal-footer": HTMLKsModalFooterElement;
        "ks-overlay": HTMLKsOverlayElement;
        "ks-progress-bar": HTMLKsProgressBarElement;
        "ks-radio": HTMLKsRadioElement;
        "ks-responsive-embed": HTMLKsResponsiveEmbedElement;
        "ks-row": HTMLKsRowElement;
        "ks-side-drawer": HTMLKsSideDrawerElement;
        "ks-spin-box": HTMLKsSpinBoxElement;
        "ks-switch": HTMLKsSwitchElement;
        "ks-tab": HTMLKsTabElement;
        "ks-tabs": HTMLKsTabsElement;
        "ks-tooltip": HTMLKsTooltipElement;
    }
}
declare namespace LocalJSX {
    interface KsAccordion {
        "size"?: 'sm' | 'md' | 'lg';
    }
    interface KsAccordionSlide {
        "expanded"?: boolean;
        "heading"?: string;
    }
    interface KsAlert {
        "closeText"?: string;
        "color"?: 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'danger' | 'light' | 'dark';
        "dismissible"?: boolean;
        "display"?: boolean;
        "header"?: string;
        "note"?: boolean;
        "onHidden"?: (event: CustomEvent<any>) => void;
        "onShown"?: (event: CustomEvent<any>) => void;
    }
    interface KsAutocomplete {
        "debounce"?: number;
        "disabled"?: boolean;
        "inputId"?: string;
        "name"?: string;
        "onChanged"?: (event: CustomEvent<IFormFieldData>) => void;
        "required"?: boolean;
        "value"?: string | number | boolean | any[] | null;
    }
    interface KsBadge {
        "color"?: 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'danger' | 'light' | 'dark';
        "hollow"?: boolean;
    }
    interface KsBreadcrumbs {
    }
    interface KsButton {
        "color"?: 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'danger' | 'light' | 'dark';
        "controls"?: string;
        "cssClass"?: string;
        "describedBy"?: string;
        "disabled"?: boolean;
        "display"?: 'solid' | 'hollow' | 'clear' | 'link';
        "download"?: boolean;
        "expanded"?: boolean;
        "haspopup"?: boolean;
        "hides"?: string;
        "href"?: string;
        "loading"?: boolean;
        "shows"?: string;
        "size"?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
        "tabIndex"?: number;
        "target"?: string;
        "type"?: 'button' | 'submit' | 'reset';
    }
    interface KsButtonBar {
        "stacked"?: boolean;
    }
    interface KsCard {
        "alt"?: string;
        "clickable"?: boolean;
        "collapse"?: 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';
        "href"?: string;
        "imgDirection"?: 'top' | 'bottom' | 'left' | 'right' | 'behind';
        "imgSrc"?: string;
        "lazy"?: boolean;
        "threshold"?: number;
    }
    interface KsCardBody {
        "cardSubtitle"?: string;
        "cardTitle"?: string;
    }
    interface KsCardFooter {
    }
    interface KsCarousel {
        "autoplay"?: boolean;
        "hideControls"?: boolean;
        "hideIndicators"?: boolean;
        "thumbnails"?: boolean;
        "timer"?: number;
    }
    interface KsCarouselSlide {
        "align"?: 'left' | 'center' | 'right';
        "alt"?: string;
        "clickable"?: boolean;
        "href"?: string;
        "lazy"?: boolean;
        "position"?: 'top' | 'center' | 'bottom';
        "src"?: string;
        "threshold"?: number;
    }
    interface KsCheckbox {
        "checked"?: boolean;
        "label"?: string;
        "name"?: string;
        "onChanged"?: (event: CustomEvent<IFormFieldData>) => void;
        "required"?: boolean;
        "requiredText"?: string;
        "tooltipSize"?: 'sm' | 'md' | 'lg' | 'xl';
        "tooltipText"?: string;
    }
    interface KsChecklist {
        "disabled"?: boolean;
        "helpText"?: string;
        "invalid"?: boolean;
        "label"?: string;
        "name"?: string;
        "onChecked"?: (event: CustomEvent<IFormFieldData>) => void;
        "required"?: boolean;
        "requiredErrorMessage"?: string;
        "requiredText"?: string;
        "tooltipSize"?: 'sm' | 'md' | 'lg' | 'xl';
        "tooltipText"?: string;
        "type"?: 'checkbox' | 'radio';
    }
    interface KsColumn {
        "position"?: 'start' | 'center' | 'end' | 'stretch';
    }
    interface KsDropdown {
        "collapse"?: 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';
        "color"?: 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'danger' | 'light' | 'dark';
        "display"?: 'solid' | 'hollow' | 'clear' | 'link';
        "hideIndicator"?: boolean;
        "hideText"?: boolean;
        "icon"?: string;
        "megaMenu"?: boolean;
        "onDropdownClosed"?: (event: CustomEvent<any>) => void;
        "onDropdownOpened"?: (event: CustomEvent<any>) => void;
        "position"?: 'left' | 'right';
        "text"?: string;
    }
    interface KsDropdownItem {
        "onCloseDropdown"?: (event: CustomEvent<any>) => void;
        "preventClose"?: boolean;
    }
    interface KsForm {
        "action"?: string;
        "enctype"?: 'application/x-www-form-urlencoded' | 'multipart/form-data' | 'text/plain';
        "errorMessage"?: string;
        "invalid"?: boolean;
        "method"?: 'get' | 'post';
        "onSubmitted"?: (event: CustomEvent<IFormData>) => void;
        "target"?: '_self' | '_blank' | '_parent' | '_top';
    }
    interface KsFormField {
        "autocomplete"?: string;
        "badInputErrorMessage"?: string;
        "checked"?: boolean;
        "datalist"?: boolean;
        "debounce"?: number;
        "defaultErrorMessage"?: string;
        "disabled"?: boolean;
        "helpText"?: string;
        "hideLabel"?: boolean;
        "icon"?: string;
        "iconDirection"?: 'left' | 'right';
        "inline"?: boolean;
        "invalid"?: boolean;
        "label"?: string;
        "max"?: number;
        "maxErrorMessage"?: string;
        "maxlength"?: number;
        "maxlengthErrorMessage"?: string;
        "min"?: number;
        "minErrorMessage"?: string;
        "minlength"?: number;
        "minlengthErrorMessage"?: string;
        "name"?: string;
        "onBlurred"?: (event: CustomEvent<any>) => void;
        "onUpdated"?: (event: CustomEvent<IFormFieldData>) => void;
        "pattern"?: string;
        "patternErrorMessage"?: string;
        "placeholder"?: string;
        "required"?: boolean;
        "requiredErrorMessage"?: string;
        "requiredText"?: string;
        "step"?: number;
        "stepErrorMessage"?: string;
        "tooltipSize"?: 'sm' | 'md' | 'lg' | 'xl';
        "tooltipText"?: string;
        "type"?: 'autocomplete'
        | 'checkbox'
        | 'checklist'
        | 'color'
        | 'date'
        | 'email'
        | 'file'
        | 'hidden'
        | 'month'
        | 'number'
        | 'password'
        | 'radiolist'
        | 'range'
        | 'search'
        | 'select'
        | 'spin-box'
        | 'tel'
        | 'text'
        | 'textarea'
        | 'url';
        "typeErrorMessage"?: string;
        "validateOnInput"?: boolean;
        "value"?: string | number | boolean | any[] | null;
    }
    interface KsGallery {
        "gutter"?: 'none' | 'xxxs' | 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'xxxl';
        "heading"?: string;
        "itemWidth"?: string;
        "src"?: string;
    }
    interface KsIcon {
        "icon"?: string;
        "label"?: string;
        "labelledBy"?: string;
        "rotate"?: '0' | '45' | '90' | '135' | '180' | '225' | '270' | '360' | '-45' | '-90' | '-135' | '-180' | '-225' | '-270' | '-360';
    }
    interface KsImg {
        "alt"?: string;
        "lazy"?: boolean;
        "src"?: string;
        "threshold"?: number;
    }
    interface KsLoading {
        "icon"?: string;
        "message"?: string;
        "showMessage"?: boolean;
    }
    interface KsLoadingOverlay {
        "absolute"?: boolean;
        "icon"?: string;
        "message"?: string;
        "showMessage"?: boolean;
        "size"?: 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
    }
    interface KsMenuBar {
        "altText"?: string;
        "collapse"?: 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';
        "color"?: 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'danger' | 'light' | 'dark';
        "fixed"?: 'top' | 'bottom';
        "inverted"?: boolean;
        "logoUrl"?: string;
        "tagline"?: string;
    }
    interface KsMenuGroup {
        "position"?: 'left' | 'right';
    }
    interface KsMenuItem {
    }
    interface KsMenuRow {
    }
    interface KsModal {
        "modalTitle"?: string;
        "preventClose"?: boolean;
        "size"?: 'sm' | 'md' | 'lg';
    }
    interface KsModalFooter {
    }
    interface KsOverlay {
        "absolute"?: boolean;
        "onHidden"?: (event: CustomEvent<any>) => void;
        "onShown"?: (event: CustomEvent<any>) => void;
        "preventClose"?: boolean;
        "theme"?: 'dark' | 'light';
        "titleId"?: string;
    }
    interface KsProgressBar {
        "color"?: 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'danger' | 'light' | 'dark' | 'link';
        "description"?: string;
        "hideDescription"?: boolean;
        "hideProgressLabel"?: boolean;
        "progressLabel"?: string;
        "size"?: 'xs' | 'sm' | 'md' | 'lg';
        "value"?: number;
    }
    interface KsRadio {
        "checked"?: boolean;
        "inline"?: boolean;
        "label"?: string;
        "name"?: string;
        "onSelected"?: (event: CustomEvent<any>) => void;
    }
    interface KsResponsiveEmbed {
        "aspectRatio"?: string;
    }
    interface KsRow {
        "gutter"?: 'none' | 'xxxs' | 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'xxxl';
        "position"?: 'start' | 'center' | 'end';
    }
    interface KsSideDrawer {
        "headerText"?: string;
        "position"?: 'left' | 'right';
        "size"?: 'sm' | 'md' | 'lg' | 'xl';
    }
    interface KsSpinBox {
        "disabled"?: boolean;
        "inputId"?: string;
        "invalid"?: boolean;
        "max"?: number;
        "min"?: number;
        "name"?: string;
        "onUpdated"?: (event: CustomEvent<any>) => void;
        "required"?: boolean;
        "step"?: number;
        "value"?: string | number | boolean | any[] | null;
    }
    interface KsSwitch {
        "checked"?: boolean;
        "disable"?: boolean;
        "label"?: string;
        "name"?: string;
        "onUpdated"?: (event: CustomEvent<any>) => void;
    }
    interface KsTab {
        "tabText"?: string;
    }
    interface KsTabs {
        "align"?: 'start' | 'center' | 'end' | 'justified';
        "label"?: string;
        "position"?: 'top' | 'bottom' | 'left' | 'right';
    }
    interface KsTooltip {
        "disable"?: boolean;
        "hideDecoration"?: boolean;
        "position"?: 'top' | 'bottom' | 'left' | 'right';
        "size"?: 'sm' | 'md' | 'lg' | 'xl';
        "text"?: string;
    }
    interface IntrinsicElements {
        "ks-accordion": KsAccordion;
        "ks-accordion-slide": KsAccordionSlide;
        "ks-alert": KsAlert;
        "ks-autocomplete": KsAutocomplete;
        "ks-badge": KsBadge;
        "ks-breadcrumbs": KsBreadcrumbs;
        "ks-button": KsButton;
        "ks-button-bar": KsButtonBar;
        "ks-card": KsCard;
        "ks-card-body": KsCardBody;
        "ks-card-footer": KsCardFooter;
        "ks-carousel": KsCarousel;
        "ks-carousel-slide": KsCarouselSlide;
        "ks-checkbox": KsCheckbox;
        "ks-checklist": KsChecklist;
        "ks-column": KsColumn;
        "ks-dropdown": KsDropdown;
        "ks-dropdown-item": KsDropdownItem;
        "ks-form": KsForm;
        "ks-form-field": KsFormField;
        "ks-gallery": KsGallery;
        "ks-icon": KsIcon;
        "ks-img": KsImg;
        "ks-loading": KsLoading;
        "ks-loading-overlay": KsLoadingOverlay;
        "ks-menu-bar": KsMenuBar;
        "ks-menu-group": KsMenuGroup;
        "ks-menu-item": KsMenuItem;
        "ks-menu-row": KsMenuRow;
        "ks-modal": KsModal;
        "ks-modal-footer": KsModalFooter;
        "ks-overlay": KsOverlay;
        "ks-progress-bar": KsProgressBar;
        "ks-radio": KsRadio;
        "ks-responsive-embed": KsResponsiveEmbed;
        "ks-row": KsRow;
        "ks-side-drawer": KsSideDrawer;
        "ks-spin-box": KsSpinBox;
        "ks-switch": KsSwitch;
        "ks-tab": KsTab;
        "ks-tabs": KsTabs;
        "ks-tooltip": KsTooltip;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "ks-accordion": LocalJSX.KsAccordion & JSXBase.HTMLAttributes<HTMLKsAccordionElement>;
            "ks-accordion-slide": LocalJSX.KsAccordionSlide & JSXBase.HTMLAttributes<HTMLKsAccordionSlideElement>;
            "ks-alert": LocalJSX.KsAlert & JSXBase.HTMLAttributes<HTMLKsAlertElement>;
            "ks-autocomplete": LocalJSX.KsAutocomplete & JSXBase.HTMLAttributes<HTMLKsAutocompleteElement>;
            "ks-badge": LocalJSX.KsBadge & JSXBase.HTMLAttributes<HTMLKsBadgeElement>;
            "ks-breadcrumbs": LocalJSX.KsBreadcrumbs & JSXBase.HTMLAttributes<HTMLKsBreadcrumbsElement>;
            "ks-button": LocalJSX.KsButton & JSXBase.HTMLAttributes<HTMLKsButtonElement>;
            "ks-button-bar": LocalJSX.KsButtonBar & JSXBase.HTMLAttributes<HTMLKsButtonBarElement>;
            "ks-card": LocalJSX.KsCard & JSXBase.HTMLAttributes<HTMLKsCardElement>;
            "ks-card-body": LocalJSX.KsCardBody & JSXBase.HTMLAttributes<HTMLKsCardBodyElement>;
            "ks-card-footer": LocalJSX.KsCardFooter & JSXBase.HTMLAttributes<HTMLKsCardFooterElement>;
            "ks-carousel": LocalJSX.KsCarousel & JSXBase.HTMLAttributes<HTMLKsCarouselElement>;
            "ks-carousel-slide": LocalJSX.KsCarouselSlide & JSXBase.HTMLAttributes<HTMLKsCarouselSlideElement>;
            "ks-checkbox": LocalJSX.KsCheckbox & JSXBase.HTMLAttributes<HTMLKsCheckboxElement>;
            "ks-checklist": LocalJSX.KsChecklist & JSXBase.HTMLAttributes<HTMLKsChecklistElement>;
            "ks-column": LocalJSX.KsColumn & JSXBase.HTMLAttributes<HTMLKsColumnElement>;
            "ks-dropdown": LocalJSX.KsDropdown & JSXBase.HTMLAttributes<HTMLKsDropdownElement>;
            "ks-dropdown-item": LocalJSX.KsDropdownItem & JSXBase.HTMLAttributes<HTMLKsDropdownItemElement>;
            "ks-form": LocalJSX.KsForm & JSXBase.HTMLAttributes<HTMLKsFormElement>;
            "ks-form-field": LocalJSX.KsFormField & JSXBase.HTMLAttributes<HTMLKsFormFieldElement>;
            "ks-gallery": LocalJSX.KsGallery & JSXBase.HTMLAttributes<HTMLKsGalleryElement>;
            "ks-icon": LocalJSX.KsIcon & JSXBase.HTMLAttributes<HTMLKsIconElement>;
            "ks-img": LocalJSX.KsImg & JSXBase.HTMLAttributes<HTMLKsImgElement>;
            "ks-loading": LocalJSX.KsLoading & JSXBase.HTMLAttributes<HTMLKsLoadingElement>;
            "ks-loading-overlay": LocalJSX.KsLoadingOverlay & JSXBase.HTMLAttributes<HTMLKsLoadingOverlayElement>;
            "ks-menu-bar": LocalJSX.KsMenuBar & JSXBase.HTMLAttributes<HTMLKsMenuBarElement>;
            "ks-menu-group": LocalJSX.KsMenuGroup & JSXBase.HTMLAttributes<HTMLKsMenuGroupElement>;
            "ks-menu-item": LocalJSX.KsMenuItem & JSXBase.HTMLAttributes<HTMLKsMenuItemElement>;
            "ks-menu-row": LocalJSX.KsMenuRow & JSXBase.HTMLAttributes<HTMLKsMenuRowElement>;
            "ks-modal": LocalJSX.KsModal & JSXBase.HTMLAttributes<HTMLKsModalElement>;
            "ks-modal-footer": LocalJSX.KsModalFooter & JSXBase.HTMLAttributes<HTMLKsModalFooterElement>;
            "ks-overlay": LocalJSX.KsOverlay & JSXBase.HTMLAttributes<HTMLKsOverlayElement>;
            "ks-progress-bar": LocalJSX.KsProgressBar & JSXBase.HTMLAttributes<HTMLKsProgressBarElement>;
            "ks-radio": LocalJSX.KsRadio & JSXBase.HTMLAttributes<HTMLKsRadioElement>;
            "ks-responsive-embed": LocalJSX.KsResponsiveEmbed & JSXBase.HTMLAttributes<HTMLKsResponsiveEmbedElement>;
            "ks-row": LocalJSX.KsRow & JSXBase.HTMLAttributes<HTMLKsRowElement>;
            "ks-side-drawer": LocalJSX.KsSideDrawer & JSXBase.HTMLAttributes<HTMLKsSideDrawerElement>;
            "ks-spin-box": LocalJSX.KsSpinBox & JSXBase.HTMLAttributes<HTMLKsSpinBoxElement>;
            "ks-switch": LocalJSX.KsSwitch & JSXBase.HTMLAttributes<HTMLKsSwitchElement>;
            "ks-tab": LocalJSX.KsTab & JSXBase.HTMLAttributes<HTMLKsTabElement>;
            "ks-tabs": LocalJSX.KsTabs & JSXBase.HTMLAttributes<HTMLKsTabsElement>;
            "ks-tooltip": LocalJSX.KsTooltip & JSXBase.HTMLAttributes<HTMLKsTooltipElement>;
        }
    }
}
