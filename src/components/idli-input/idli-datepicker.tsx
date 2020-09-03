import {Component, Event, EventEmitter, h, Prop} from '@stencil/core';

@Component({
    tag: 'idli-datepicker',
    styleUrl: 'idli-datepicker.scss',
    shadow: true
})
export class IdliDatepicker {
    /**
     * The input field label.
     */
    @Prop() label: string;

    /**
     * The input field value.
     */
    @Prop() value: string;

    /**
     * The button size.
     * Possible values are: `"sm"`, `"md"`, `"lg"`. Defaults to `"md"`.
     */
    @Prop() size: 'sm' | 'md' | 'lg' = 'md';

    /**
     * Button variants
     * Possible values are `"default"`, `"dashed"`. Defaults to `"default"`.
     */
    @Prop() variant: 'default' | 'dashed' = 'default';

    /**
     * If true, the form will be in inline format. Defaults to `false`.
     */
    @Prop() inline: boolean = false;

    /**
     * Button variants
     * Possible values are `"date"`, `"datetime"` and `"time"`. Defaults to `"date"`.
     */
    @Prop() type: 'date' | 'datetime' | 'time' = 'date';

    /**
     * If true, the user cannot interact with the button. Defaults to `false`.
     */
    @Prop() disabled: boolean = false;

    /**
     * If true, required icon is show. Defaults to `false`.
     */
    @Prop() required: boolean = false;

    /**
     * On change of input a CustomEvent 'inputChange' will be triggered. Event details contains parent event, oldValue, newValue of input.
     */
    @Event() inputChange: EventEmitter;

    getCssClasses() {
        const cls = [];
        cls.push(this.getVariantClass());
        cls.push(this.getSizeClass());
        cls.push(this.getInlineClass());
        cls.push(this.getTypeClass());
        if (this.required)
            cls.push("required");
        return cls.join(" ");
    }

    getVariantClass() {
        let variant = "variant-";
        if (!this.variant)
            variant = variant + 'default';
        else
            variant = variant + this.variant;
        return variant;
    }

    getSizeClass() {
        let size = "size-";
        if (!this.size)
            size = size + 'md';
        else
            size = size + this.size;
        return size;
    }

    getTypeClass() {
        let type = "type-";
        if (!this.type)
            type = type + 'text';
        else
            type = type + this.type;
        return type;
    }

    getInlineClass() {
        let inline = "";
        if (this.inline)
            inline = 'inline';
        return inline;
    }

    toLocaleISOString(newDate) {
        const zOffsetMs = newDate.getTimezoneOffset() * 60 * 1000;
        const localTimeMs = newDate - zOffsetMs;
        const date = new Date(localTimeMs);
        const utcOffsetHr = newDate.getTimezoneOffset() / 60;
        const utcOffsetSign = utcOffsetHr <= 0 ? '+' : '-';
        const utcOffsetString = utcOffsetSign + (utcOffsetHr.toString.length == 1 ? `0${utcOffsetHr}` : `${utcOffsetHr}`) + ':00';
        return date.toISOString().replace('Z', utcOffsetString);
    };

    handleInputChange(event: any) {
        if (!this.disabled) {
            const oldValue = this.value;
            let newValue: any;
            if (this.type === 'date') {
                newValue = new Date(event.target.valueAsDate);
                newValue.setUTCHours(0, 0, 0, 0);
                newValue = newValue.toISOString();
            } else if (this.type === 'datetime') {
                newValue = new Date(newValue);
                newValue = newValue.toISOString();
            } else if (this.type === 'time') {
                newValue = event.target.valueAsDate.toISOString();
            }
            this.value = newValue;
            this.inputChange.emit({event, oldValue, newValue});
        }
    }

    getLabelElement() {
        return <label>{this.label}</label>;
    }

    getInputType() {
        if (this.type == 'datetime')
            return "datetime-local";
        return this.type;
    }

    private getInputElement() {
        let value = this.value;
        if (value && this.type === 'date')
            value = value.substr(0, 10);
        if (value && this.type === 'datetime')
            value = this.toLocaleISOString(new Date(value)).substr(0, 16);
        if (value && this.type === 'time')
            value = value.substr(11, 8);
        return <input
            class="idli-datepicker-element"
            type={this.getInputType()}
            value={value}
            required={this.required}
            onInput={(event) => this.handleInputChange(event)}
            disabled={this.disabled}>
        </input>
    }

    render() {
        return <div class={"idli-datepicker-component  " + this.getCssClasses()}>
            {[this.getLabelElement(), this.getInputElement()]}
        </div>;
    }
}
