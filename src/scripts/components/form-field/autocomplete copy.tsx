// import { Component, h, Prop, Host, Event, EventEmitter, ComponentInterface, State, Element } from '@stencil/core';
// import { IFormFieldData } from './form-field';
// import { keyCodes } from '../../utils/componentUtils';

// interface ExtendedOption extends HTMLOptionElement {
//     search: string;
// }

// @Component({
//     tag: 'ks-autocomplete',
//     styleUrl: 'form-field.scss'
// })
// export class Autocomplete implements ComponentInterface {
//     autocompleteId = `autocomplete_${autocompleteIds++}`;
//     $select: HTMLSelectElement;
//     $input: HTMLInputElement;
//     $options: ExtendedOption[];
//     $filteredOptions: ExtendedOption[];
//     $selectedOption: ExtendedOption;
//     $dropdownOptions: HTMLUListElement[];
//     focusIndex: number = -1;

//     @Element() $el: HTMLElement;

//     @Prop({ mutable: true }) value?: string | number | any[] | null = '';
//     @Prop() required: boolean;
//     @Prop() disabled: boolean;
//     @Prop() name: string;
//     @Prop() inputId: string;

//     @State() isExpanded: boolean = false;

//     @Event() changed!: EventEmitter<IFormFieldData>;

//     componentDidRender() {
//         this.$options = Array.from(this.$select.children) as ExtendedOption[];
//         this.$filteredOptions = this.$options;

//         window.addEventListener('click', (e: MouseEvent) => {
//             let isPreventClose = this.$el.contains(e.target as HTMLElement);

//             if (isPreventClose)
//                 return;

//             this.isExpanded = false;
//         });
//     }

//     // private validateField() {
//     //     let fieldData: IFormFieldData = {
//     //         isValid: this.$select.checkValidity(),
//     //         value: this.value,
//     //         validity: this.$select.validity,
//     //         name: this.name
//     //     };

//     //     return fieldData;
//     // }

//     private onKeyupHandler(e: KeyboardEvent) {
//         switch (Number(e.code)) {
//             case keyCodes.LEFT_ARROW:
//             case keyCodes.RIGHT_ARROW:
//             case keyCodes.UP_ARROW:
//             case keyCodes.SPACE:
//             case keyCodes.ENTER:
//             case keyCodes.SHIFT:
//                 // ignore otherwise the menu will show
//                 break;
//             case keyCodes.ESC:
//                 this.hideMenu();
//                 break;
//             case keyCodes.DOWN_ARROW:
//                 this.onTextBoxDownPressed();
//                 break;
//             case keyCodes.TAB:
//                 this.hideMenu();
//                 break;
//             default:
//                 this.onTextBoxType();
//         }
//     }

//     private onOptionKeyupHandler(e: KeyboardEvent, option: ExtendedOption, index: number) {
//         switch (Number(e.code)) {
//             case keyCodes.SPACE:
//             case keyCodes.ENTER:
//                 this.selectValue(option, index);
//                 break;
//             case keyCodes.ESC:
//                 this.hideMenu();
//                 break;
//             case keyCodes.UP_ARROW:
//                 this.selectPrevOption();
//                 break;
//             case keyCodes.DOWN_ARROW:
//                 this.selectNextOption();
//                 break;
//             case keyCodes.TAB:
//                 this.hideMenu();
//                 break;
//             default:
//                 break;
//         }
//     }

//     private selectPrevOption() {
//         this.focusIndex--;

//         if(this.focusIndex < 0) {
//             this.focusIndex = -1;
//             this.$input.focus();
//         } else {
//             this.$dropdownOptions[this.focusIndex].focus();
//         }
//     }

//     private selectNextOption() {
//         this.focusIndex++;

//         if(this.focusIndex < this.$dropdownOptions.length) {
//             this.$dropdownOptions[this.focusIndex].focus();
//         } else {
//             this.focusIndex = this.$dropdownOptions.length - 1;
//         }
//     }

//     private onTextBoxDownPressed() {
//         this.filterOptions();
//         this.focusIndex = 0;
//         this.$dropdownOptions[this.focusIndex].focus();
//     }

//     private onTextBoxType() {
//         if (this.$input.value.trim().length > 0) {
//             this.filterOptions();
//             this.showMenu();
//         }

//         this.resetSelectInput();
//     }

//     private resetSelectInput() {
//         this.$options.forEach(x => x.removeAttribute('selected'));
//     }

//     private filterOptions() {
//         let searchTerm = this.$input.value.trim().toLowerCase();

//         this.$filteredOptions = searchTerm.trim().length > 0
//             ? this.$options
//             : this.$options.filter(o => o.search
//                 ? o.search.toLowerCase().includes(searchTerm)
//                 : o.innerText.toLowerCase().includes(searchTerm));
//     }

//     private optionClickHandler(option: ExtendedOption, index: number) {
//         this.selectValue(option, index);
//     }

//     private showMenu() {
//         this.isExpanded = true;
//     }

//     private hideMenu() {
//         this.isExpanded = false;
//     }

//     private selectValue(option: ExtendedOption, index: number) {
//         this.$selectedOption = option;
//         this.$select.value = option.value;
//         this.focusIndex = index;
//         this.isExpanded = false;
//         this.$input.focus();
//     }

//     render() {

//         let props = {
//             'disabled': this.disabled,
//             'required': this.required
//         }
//         return (
//             <Host class="ks-autocomplete">
//                 <span>This is a test</span>
//                 <select 
//                     name={this.name} 
//                     aria-hidden="true" 
//                     tabindex="-1" 
//                     class="sr-only" 
//                     ref={e => this.$select = e} 
//                     {...props}
//                     >
//                     <slot />
//                 </select>
//                 <div class="autocomplete">
//                     <input
//                         aria-owns={`autocomplete-options-${this.autocompleteId}`}
//                         class="form-input"
//                         autocapitalize="none"
//                         type="text"
//                         autocomplete="off"
//                         aria-autocomplete="list"
//                         role="combobox"
//                         id={this.inputId}
//                         aria-expanded={this.isExpanded}
//                         onKeyUp={(e) => this.onKeyupHandler(e)}
//                         ref={e => this.$input = e}
//                     />
//                     <ks-icon icon="search" class="search-icon"></ks-icon>
//                     <ul id={`autocomplete-options-${this.autocompleteId}`} class="dropdown-options" role="listbox">
//                         {this.$dropdownOptions = this.$filteredOptions.map((x, i) => (
//                             <li
//                                 role="option"
//                                 class="option"
//                                 tabindex="-1"
//                                 aria-selected="false"
//                                 data-option-value={i}
//                                 id={`autocomplete_${this.autocompleteId}_option_${i}`}
//                                 onClick={() => this.optionClickHandler(x, i)}
//                                 onKeyUp={(e) => this.onOptionKeyupHandler(e, x, i)}
//                             >
//                                 {x.innerText}
//                             </li>
//                         ))}
//                         {this.$dropdownOptions}
//                     </ul>
//                     <div aria-live="polite" role="status" class="sr-only">
//                         {this.$filteredOptions.length} results available.
//                     </div>
//                 </div>
//             </Host>
//         );
//     }
// }

// let autocompleteIds = 0;