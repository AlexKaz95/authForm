import type { Ref } from 'vue';

export type FormModel<T> = {
    model: Ref<T>; //WTF????
    valid: Ref<boolean>;
    errors: {[key: string]: unknown};
    touched?: Ref<boolean>;
}

export type InputConfig<T> = FormModel<T> & ({
    label: string;
    type: string;
    id: string;
    blur: () => void
    placeholder?: string;
});

export type InitialFormConfig<T> = {
    label: string,
    type: string,
    id: string,
    initValue: T,
    validators: {[key: string]: (val: any) => boolean}
}

export type InitialFormObject<T> = {[key: string]: InitialFormConfig<T>}