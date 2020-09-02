/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';


export namespace Components {
  interface IdliDatepicker {
    /**
    * If true, the user cannot interact with the button. Defaults to `false`.
    */
    'disabled': boolean;
    /**
    * If true, the form will be in inline format. Defaults to `false`.
    */
    'inline': boolean;
    /**
    * The input field label.
    */
    'label': string;
    /**
    * The input field placeholder.
    */
    'placeholder': string;
    /**
    * If true, required icon is show. Defaults to `false`.
    */
    'required': boolean;
    /**
    * The button size. Possible values are: `"sm"`, `"md"`, `"lg"`. Defaults to `"md"`.
    */
    'size': 'sm' | 'md' | 'lg';
    /**
    * Button variants Possible values are `"date"`, `"datetime"` and `"time"`. Defaults to `"date"`.
    */
    'type': 'date' | 'datetime' | 'time';
    /**
    * The input field value.
    */
    'value': string;
    /**
    * Button variants Possible values are `"default"`, `"dashed"`. Defaults to `"default"`.
    */
    'variant': 'default' | 'dashed';
  }
}

declare global {


  interface HTMLIdliDatepickerElement extends Components.IdliDatepicker, HTMLStencilElement {}
  var HTMLIdliDatepickerElement: {
    prototype: HTMLIdliDatepickerElement;
    new (): HTMLIdliDatepickerElement;
  };
  interface HTMLElementTagNameMap {
    'idli-datepicker': HTMLIdliDatepickerElement;
  }
}

declare namespace LocalJSX {
  interface IdliDatepicker {
    /**
    * If true, the user cannot interact with the button. Defaults to `false`.
    */
    'disabled'?: boolean;
    /**
    * If true, the form will be in inline format. Defaults to `false`.
    */
    'inline'?: boolean;
    /**
    * The input field label.
    */
    'label'?: string;
    /**
    * On change of input a CustomEvent 'inputChange' will be triggered. Event details contains parent event, oldValue, newValue of input.
    */
    'onInputChange'?: (event: CustomEvent<any>) => void;
    /**
    * The input field placeholder.
    */
    'placeholder'?: string;
    /**
    * If true, required icon is show. Defaults to `false`.
    */
    'required'?: boolean;
    /**
    * The button size. Possible values are: `"sm"`, `"md"`, `"lg"`. Defaults to `"md"`.
    */
    'size'?: 'sm' | 'md' | 'lg';
    /**
    * Button variants Possible values are `"date"`, `"datetime"` and `"time"`. Defaults to `"date"`.
    */
    'type'?: 'date' | 'datetime' | 'time';
    /**
    * The input field value.
    */
    'value'?: string;
    /**
    * Button variants Possible values are `"default"`, `"dashed"`. Defaults to `"default"`.
    */
    'variant'?: 'default' | 'dashed';
  }

  interface IntrinsicElements {
    'idli-datepicker': IdliDatepicker;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements {
      'idli-datepicker': LocalJSX.IdliDatepicker & JSXBase.HTMLAttributes<HTMLIdliDatepickerElement>;
    }
  }
}


