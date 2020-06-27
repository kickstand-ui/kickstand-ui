/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface KsAccordion {
        "size": string;
    }
    interface KsAccordionSlide {
        "expanded": boolean;
        "heading": string;
        "toggleSlide": () => Promise<void>;
    }
    interface KsAlert {
        "color": 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'danger' | 'light' | 'dark';
        "header": string;
        "note": boolean;
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
        "expanded": boolean;
        "haspopup": boolean;
        "hideText": boolean;
        "hides": string;
        "href": string;
        "icon": string;
        "iconDirection": 'left' | 'right';
        "loading": boolean;
        "shows": string;
        "size": 'xs' | 'sm' | 'md' | 'lg' | 'xl';
        "tabIndex": number;
        "type": 'button' | 'submit' | 'reset';
    }
    interface KsCard {
        "alt": string;
        "clickable": boolean;
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
    interface KsColumn {
        "position": 'start' | 'center' | 'end' | 'stretch';
    }
    interface KsCrumb {
        "text": string;
        "url": string;
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
    interface KsFormField {
        "autocomplete"?: string;
        "badInputErrorMessage": string;
        "defaultErrorMessage": string;
        "disabled": boolean;
        "helpText": string;
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
        "pattern"?: string;
        "patternErrorMessage": string;
        "placeholder": string;
        "required": boolean;
        "requiredErrorMessage": string;
        "requiredText": string;
        "step"?: number;
        "stepErrorMessage": string;
        "tooltipText": string;
        "type": 'text' | 'tel' | 'url' | 'password' | 'date' | 'email' | 'search' | 'number' | 'hidden' | 'textarea';
        "typeErrorMessage": string;
        "value"?: string | number | null;
    }
    interface KsIcon {
        "icon": 'bars' | 'chevron' | 'close' | 'danger' | 'info' | string;
        "rotate": '0' | '45' | '90' | '135' | '180' | '225' | '270' | '360' | '-45' | '-90' | '-135' | '-180' | '-225' | '-270' | '-360';
    }
    interface KsImg {
        "alt": string;
        "lazy": boolean;
        "src": string;
        "threshold": number;
    }
    interface KsLoading {
        "message": string;
        "showMessage": boolean;
        "type": 'spinner' | 'ellipsis';
    }
    interface KsLoadingOverlay {
        "absolute": boolean;
        "hide": () => Promise<void>;
        "message": string;
        "show": () => Promise<void>;
        "showMessage": boolean;
        "size": 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
        "type": 'spinner' | 'ellipsis';
    }
    interface KsMenuBar {
        "altText": string;
        "collapse": 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';
        "color": 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'danger' | 'light' | 'dark';
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
    interface KsRow {
        "noGutter": boolean;
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
        "labelId": string;
        "max": number;
        "min": number;
        "spinBoxId": string;
        "step": number;
        "value": number;
    }
    interface KsTab {
        "controls": string;
    }
    interface KsTabList {
        "content": boolean;
        "disable": boolean;
        "hideDecoration": boolean;
        "name": string;
        "position": string;
        "show": boolean;
        "size": string;
    }
    interface KsTabPanel {
        "tabId": string;
    }
    interface KsTabs {
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
    interface HTMLKsColumnElement extends Components.KsColumn, HTMLStencilElement {
    }
    var HTMLKsColumnElement: {
        prototype: HTMLKsColumnElement;
        new (): HTMLKsColumnElement;
    };
    interface HTMLKsCrumbElement extends Components.KsCrumb, HTMLStencilElement {
    }
    var HTMLKsCrumbElement: {
        prototype: HTMLKsCrumbElement;
        new (): HTMLKsCrumbElement;
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
    interface HTMLKsFormFieldElement extends Components.KsFormField, HTMLStencilElement {
    }
    var HTMLKsFormFieldElement: {
        prototype: HTMLKsFormFieldElement;
        new (): HTMLKsFormFieldElement;
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
    interface HTMLKsTabElement extends Components.KsTab, HTMLStencilElement {
    }
    var HTMLKsTabElement: {
        prototype: HTMLKsTabElement;
        new (): HTMLKsTabElement;
    };
    interface HTMLKsTabListElement extends Components.KsTabList, HTMLStencilElement {
    }
    var HTMLKsTabListElement: {
        prototype: HTMLKsTabListElement;
        new (): HTMLKsTabListElement;
    };
    interface HTMLKsTabPanelElement extends Components.KsTabPanel, HTMLStencilElement {
    }
    var HTMLKsTabPanelElement: {
        prototype: HTMLKsTabPanelElement;
        new (): HTMLKsTabPanelElement;
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
        "ks-badge": HTMLKsBadgeElement;
        "ks-breadcrumbs": HTMLKsBreadcrumbsElement;
        "ks-button": HTMLKsButtonElement;
        "ks-card": HTMLKsCardElement;
        "ks-card-body": HTMLKsCardBodyElement;
        "ks-card-footer": HTMLKsCardFooterElement;
        "ks-carousel": HTMLKsCarouselElement;
        "ks-carousel-slide": HTMLKsCarouselSlideElement;
        "ks-column": HTMLKsColumnElement;
        "ks-crumb": HTMLKsCrumbElement;
        "ks-dropdown": HTMLKsDropdownElement;
        "ks-dropdown-item": HTMLKsDropdownItemElement;
        "ks-form-field": HTMLKsFormFieldElement;
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
        "ks-row": HTMLKsRowElement;
        "ks-side-drawer": HTMLKsSideDrawerElement;
        "ks-spin-box": HTMLKsSpinBoxElement;
        "ks-tab": HTMLKsTabElement;
        "ks-tab-list": HTMLKsTabListElement;
        "ks-tab-panel": HTMLKsTabPanelElement;
        "ks-tabs": HTMLKsTabsElement;
        "ks-tooltip": HTMLKsTooltipElement;
    }
}
declare namespace LocalJSX {
    interface KsAccordion {
        "size"?: string;
    }
    interface KsAccordionSlide {
        "expanded"?: boolean;
        "heading"?: string;
    }
    interface KsAlert {
        "color"?: 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'danger' | 'light' | 'dark';
        "header"?: string;
        "note"?: boolean;
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
        "expanded"?: boolean;
        "haspopup"?: boolean;
        "hideText"?: boolean;
        "hides"?: string;
        "href"?: string;
        "icon"?: string;
        "iconDirection"?: 'left' | 'right';
        "loading"?: boolean;
        "shows"?: string;
        "size"?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
        "tabIndex"?: number;
        "type"?: 'button' | 'submit' | 'reset';
    }
    interface KsCard {
        "alt"?: string;
        "clickable"?: boolean;
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
    interface KsColumn {
        "position"?: 'start' | 'center' | 'end' | 'stretch';
    }
    interface KsCrumb {
        "text"?: string;
        "url"?: string;
    }
    interface KsDropdown {
        "collapse"?: 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';
        "color"?: 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'danger' | 'light' | 'dark';
        "display"?: 'solid' | 'hollow' | 'clear' | 'link';
        "hideIndicator"?: boolean;
        "hideText"?: boolean;
        "icon"?: string;
        "megaMenu"?: boolean;
        "position"?: 'left' | 'right';
        "text"?: string;
    }
    interface KsDropdownItem {
        "onCloseDropdown"?: (event: CustomEvent<any>) => void;
        "preventClose"?: boolean;
    }
    interface KsFormField {
        "autocomplete"?: string;
        "badInputErrorMessage"?: string;
        "defaultErrorMessage"?: string;
        "disabled"?: boolean;
        "helpText"?: string;
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
        "onUpdated"?: (event: CustomEvent<{ validity: ValidityState, value: string | number }>) => void;
        "pattern"?: string;
        "patternErrorMessage"?: string;
        "placeholder"?: string;
        "required"?: boolean;
        "requiredErrorMessage"?: string;
        "requiredText"?: string;
        "step"?: number;
        "stepErrorMessage"?: string;
        "tooltipText"?: string;
        "type"?: 'text' | 'tel' | 'url' | 'password' | 'date' | 'email' | 'search' | 'number' | 'hidden' | 'textarea';
        "typeErrorMessage"?: string;
        "value"?: string | number | null;
    }
    interface KsIcon {
        "icon"?: 'bars' | 'chevron' | 'close' | 'danger' | 'info' | string;
        "rotate"?: '0' | '45' | '90' | '135' | '180' | '225' | '270' | '360' | '-45' | '-90' | '-135' | '-180' | '-225' | '-270' | '-360';
    }
    interface KsImg {
        "alt"?: string;
        "lazy"?: boolean;
        "src"?: string;
        "threshold"?: number;
    }
    interface KsLoading {
        "message"?: string;
        "showMessage"?: boolean;
        "type"?: 'spinner' | 'ellipsis';
    }
    interface KsLoadingOverlay {
        "absolute"?: boolean;
        "message"?: string;
        "showMessage"?: boolean;
        "size"?: 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
        "type"?: 'spinner' | 'ellipsis';
    }
    interface KsMenuBar {
        "altText"?: string;
        "collapse"?: 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';
        "color"?: 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'danger' | 'light' | 'dark';
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
    interface KsRow {
        "noGutter"?: boolean;
        "position"?: 'start' | 'center' | 'end';
    }
    interface KsSideDrawer {
        "headerText"?: string;
        "position"?: 'left' | 'right';
        "size"?: 'sm' | 'md' | 'lg' | 'xl';
    }
    interface KsSpinBox {
        "labelId"?: string;
        "max"?: number;
        "min"?: number;
        "onUpdated"?: (event: CustomEvent<any>) => void;
        "spinBoxId"?: string;
        "step"?: number;
        "value"?: number;
    }
    interface KsTab {
        "controls"?: string;
    }
    interface KsTabList {
        "content"?: boolean;
        "disable"?: boolean;
        "hideDecoration"?: boolean;
        "name"?: string;
        "position"?: string;
        "show"?: boolean;
        "size"?: string;
    }
    interface KsTabPanel {
        "tabId"?: string;
    }
    interface KsTabs {
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
        "ks-badge": KsBadge;
        "ks-breadcrumbs": KsBreadcrumbs;
        "ks-button": KsButton;
        "ks-card": KsCard;
        "ks-card-body": KsCardBody;
        "ks-card-footer": KsCardFooter;
        "ks-carousel": KsCarousel;
        "ks-carousel-slide": KsCarouselSlide;
        "ks-column": KsColumn;
        "ks-crumb": KsCrumb;
        "ks-dropdown": KsDropdown;
        "ks-dropdown-item": KsDropdownItem;
        "ks-form-field": KsFormField;
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
        "ks-row": KsRow;
        "ks-side-drawer": KsSideDrawer;
        "ks-spin-box": KsSpinBox;
        "ks-tab": KsTab;
        "ks-tab-list": KsTabList;
        "ks-tab-panel": KsTabPanel;
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
            "ks-badge": LocalJSX.KsBadge & JSXBase.HTMLAttributes<HTMLKsBadgeElement>;
            "ks-breadcrumbs": LocalJSX.KsBreadcrumbs & JSXBase.HTMLAttributes<HTMLKsBreadcrumbsElement>;
            "ks-button": LocalJSX.KsButton & JSXBase.HTMLAttributes<HTMLKsButtonElement>;
            "ks-card": LocalJSX.KsCard & JSXBase.HTMLAttributes<HTMLKsCardElement>;
            "ks-card-body": LocalJSX.KsCardBody & JSXBase.HTMLAttributes<HTMLKsCardBodyElement>;
            "ks-card-footer": LocalJSX.KsCardFooter & JSXBase.HTMLAttributes<HTMLKsCardFooterElement>;
            "ks-carousel": LocalJSX.KsCarousel & JSXBase.HTMLAttributes<HTMLKsCarouselElement>;
            "ks-carousel-slide": LocalJSX.KsCarouselSlide & JSXBase.HTMLAttributes<HTMLKsCarouselSlideElement>;
            "ks-column": LocalJSX.KsColumn & JSXBase.HTMLAttributes<HTMLKsColumnElement>;
            "ks-crumb": LocalJSX.KsCrumb & JSXBase.HTMLAttributes<HTMLKsCrumbElement>;
            "ks-dropdown": LocalJSX.KsDropdown & JSXBase.HTMLAttributes<HTMLKsDropdownElement>;
            "ks-dropdown-item": LocalJSX.KsDropdownItem & JSXBase.HTMLAttributes<HTMLKsDropdownItemElement>;
            "ks-form-field": LocalJSX.KsFormField & JSXBase.HTMLAttributes<HTMLKsFormFieldElement>;
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
            "ks-row": LocalJSX.KsRow & JSXBase.HTMLAttributes<HTMLKsRowElement>;
            "ks-side-drawer": LocalJSX.KsSideDrawer & JSXBase.HTMLAttributes<HTMLKsSideDrawerElement>;
            "ks-spin-box": LocalJSX.KsSpinBox & JSXBase.HTMLAttributes<HTMLKsSpinBoxElement>;
            "ks-tab": LocalJSX.KsTab & JSXBase.HTMLAttributes<HTMLKsTabElement>;
            "ks-tab-list": LocalJSX.KsTabList & JSXBase.HTMLAttributes<HTMLKsTabListElement>;
            "ks-tab-panel": LocalJSX.KsTabPanel & JSXBase.HTMLAttributes<HTMLKsTabPanelElement>;
            "ks-tabs": LocalJSX.KsTabs & JSXBase.HTMLAttributes<HTMLKsTabsElement>;
            "ks-tooltip": LocalJSX.KsTooltip & JSXBase.HTMLAttributes<HTMLKsTooltipElement>;
        }
    }
}
