import { Component, h, Prop, Host, Event, EventEmitter, ComponentInterface, State, Element, Method } from '@stencil/core';
import { IFormFieldData, ICustomInput } from '../form-field';
import { keyCodes } from '../../../utils/componentUtils';

@Component({
    tag: 'ks-autocomplete',
    styleUrl: 'autocomplete.scss'
})
export class Autocomplete implements ComponentInterface, ICustomInput {
    autocompleteId = `autocomplete_${autocompleteIds++}`;
    $select: HTMLSelectElement;
    $input: HTMLInputElement;
    $options: HTMLOptionElement[];
    $selectedOption: HTMLOptionElement;
    $dropdownOptions: HTMLUListElement[];
    focusIndex: number = 0;
    $dropdown: HTMLElement;

    @Element() $el: HTMLElement;

    @Prop({ mutable: true }) value?: string | number | boolean | any[] | null = '';
    @Prop() required: boolean;
    @Prop() disabled: boolean;
    @Prop() name: string;
    @Prop() inputId: string;
    @Prop() debounce: number = 0;
    @Prop() size: 'sm' | 'md' | 'lg' = 'md';
    @Prop() inputClass: string;
    @Prop() autoExpand: boolean = false;

    @State() isExpanded: boolean = false;
    @State() isValid: boolean = true;
    @State() $filteredOptions: HTMLOptionElement[];
    @State() searchTerm: string;

    @Event() changed!: EventEmitter<IFormFieldData>;
    @Event() cleared!: EventEmitter;

    @Method()
    async validate() {
        return this.validateField();
    }

    componentWillLoad() {
        this.$options = Array.from(this.$el.querySelectorAll('option')) as HTMLOptionElement[];
        this.$filteredOptions = this.$options;
    }

    componentDidRender() {
        this.$select.value = this.value.toString();
        this.$dropdownOptions = Array.from(this.$el.querySelectorAll('.option'));
        window.addEventListener('click', (e: MouseEvent) => {
            let isPreventClose = this.$el.contains(e.target as HTMLElement);

            if (isPreventClose)
                return;

            this.isExpanded = false;
        });
    }

    private getValue(): string {
        return typeof this.value === 'number' 
            ? this.value.toString() 
            : (this.value || '').toString();
    }

    private validateField() {
        this.isValid = this.$select.checkValidity();

        let fieldData: IFormFieldData = {
            name: this.name,
            value: this.value,
            isValid: this.isValid,
            validity: this.$select.validity
        };

        return fieldData;
    }

    private keyUpHandler(e: KeyboardEvent) {
        switch (e.keyCode) {
            case keyCodes.LEFT_ARROW:
            case keyCodes.RIGHT_ARROW:
            case keyCodes.UP_ARROW:
            case keyCodes.ENTER:
            case keyCodes.SHIFT:
                // ignore otherwise the menu will show
                break;
            case keyCodes.ESC:
                this.hideOptions();
                break;
            case keyCodes.DOWN_ARROW:
                this.onTextBoxDownPressed();
                break;
            case keyCodes.TAB:
                this.hideOptions();
                break;
            default:
                this.onTextBoxType();
        }
    }

    private blurHandler() {
        const timeout = setTimeout(() => {
            this.hideOptions();
            this.changed.emit(this.validateField());
        }, 200);
        
        setTimeout(() => {
            if (this.$dropdown.contains(document.activeElement))
                clearTimeout(timeout);
        });
    }

    private onOptionKeyupHandler(e: KeyboardEvent, option: HTMLOptionElement, index: number) {
        switch (e.keyCode) {
            case keyCodes.SPACE:
            case keyCodes.ENTER:
                this.selectValue(option, index);
                break;
            case keyCodes.ESC:
                this.hideOptions();
                break;
            case keyCodes.UP_ARROW:
                this.selectPrevOption();
                break;
            case keyCodes.DOWN_ARROW:
                this.selectNextOption();
                break;
            case keyCodes.TAB:
                this.hideOptions();
                break;
            default:
                break;
        }
    }

    private selectPrevOption() {
        this.focusIndex--;

        if (this.focusIndex < 0) {
            this.focusIndex = -1;
            this.$input.focus();
        } else {
            this.$dropdownOptions[this.focusIndex].focus();
        }
    }

    private selectNextOption() {
        this.focusIndex++;

        if (this.focusIndex < this.$dropdownOptions.length) {
            this.$dropdownOptions[this.focusIndex].focus();
        } else {
            this.focusIndex = this.$dropdownOptions.length - 1;
        }
    }

    private onTextBoxDownPressed() {
        this.filterOptions();
        this.showOptions();
        this.focusIndex = 0;
        setTimeout(() => this.$dropdownOptions[this.focusIndex].focus(), 100);
    }

    private onTextBoxType() {
        this.filterOptions();
        this.showOptions();
        this.resetSelectInput();
    }

    private resetSelectInput() {
        this.$options.forEach(x => x.removeAttribute('selected'));
    }

    private filterOptions() {
        this.searchTerm = this.$input.value.trim().toLowerCase();

        this.$filteredOptions = this.searchTerm
            && this.$options.filter(o => o.getAttribute('search')?.toLowerCase().includes(this.searchTerm)
                || o.innerText.toLowerCase().includes(this.searchTerm))
            || this.$options;
    }
    private clearSearchTerm() {
        this.$input.value = '';
        this.$select.value = '';
        this.changed.emit(this.validateField());
        this.cleared.emit();
        this.filterOptions();
    }

    private optionClickHandler(option: HTMLOptionElement, index: number) {
        this.selectValue(option, index);
    }

    private showOptions() {
        this.isExpanded = true;
        this.$dropdown.style.maxHeight = '12rem';
    }

    private hideOptions() {
        this.isExpanded = false;
        this.$dropdown.style.maxHeight = '0px';
    }

    private selectValue(option: HTMLOptionElement, index: number) {
        this.$selectedOption = option;
        this.$select.value = option.value || option.innerText;
        this.value = option.value || option.innerText;
        this.focusIndex = index;
        this.$input.focus();
        this.$input.value = option.innerText;
        this.hideOptions();
        this.changed.emit(this.validateField());
    }

    private focusHandler() {
        if(this.autoExpand)
            this.showOptions();
    }

    render() {
        let selectProps = {
            'disabled': this.disabled,
            'required': this.required,
            'name': this.name,
            ['aria-hidden']: 'true',
            'tabindex': '-1',
            'class': 'sr-only',
            'value': this.getValue()
        }

        let inputProps = {
            'disabled': this.disabled,
            'required': this.required
        }

        return (
            <Host class="ks-autocomplete">
                <select ref={e => this.$select = e} {...selectProps}>
                    <slot />
                </select>
                <div class="autocomplete">
                    <input
                        aria-owns={`autocomplete-options-${this.autocompleteId}`}
                        class={`search-field size-${this.size} ${this.inputClass ? this.inputClass : ''}`}
                        autocapitalize="none"
                        type="text"
                        autocomplete="off"
                        aria-autocomplete="list"
                        aria-invalid={`${!this.isValid}`}
                        role="combobox"
                        id={this.inputId}
                        aria-expanded={`${this.isExpanded}`}
                        onKeyUp={(e) => this.keyUpHandler(e)}
                        onBlur={() => this.blurHandler()}
                        onFocus={() => this.focusHandler()}
                        value={this.getValue()}
                        ref={e => this.$input = e}
                        {...inputProps}
                    />
                    <span class="input-icons">
                        {this.searchTerm ? <ks-button class="clear-button" size="xs" display="clear" button-class="text-md" color="dark" onClick={() => this.clearSearchTerm()}><ks-icon icon="times" label="clear"></ks-icon></ks-button> : ''}
                        <ks-icon icon="search" class="search-icon"></ks-icon>
                    </span>
                    <ul id={`autocomplete-options-${this.autocompleteId}`} class="dropdown-options" role="listbox" ref={el => this.$dropdown = el}>
                        {this.$filteredOptions.map((x, i) => (
                            <li
                                role="option"
                                class="option"
                                tabindex="-1"
                                aria-selected="false"
                                data-option-value={i}
                                id={`autocomplete_${this.autocompleteId}_option_${i}`}
                                onClick={() => this.optionClickHandler(x, i)}
                                onKeyUp={(e) => this.onOptionKeyupHandler(e, x, i)}
                            >
                                {x.innerText}
                            </li>
                        ))}
                    </ul>
                    <div aria-live="polite" role="status" class="sr-only">
                        {this.$filteredOptions.length} results available.
                    </div>
                </div>
            </Host>
        );
    }
}

let autocompleteIds = 0;