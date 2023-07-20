import { Ref, reactive, ref, watch } from 'vue'
import { InitialFormConfig, InputConfig } from '../components/types';

export function useField(field: InitialFormConfig<string>): InputConfig<string> {
    const {label, type, id, initValue} = field;
    const valid = ref<boolean>(true);
    const model = ref<string>(initValue);
    const errors = reactive<{[key: string]: Ref<unknown>}>({});
    const touched = ref(false);
    
    watch(model, () => {
        Object.keys(field.validators ?? {}).forEach((name: string) => {
            try {
                valid.value = field.validators[name](model.value);
                errors[name].value = '';
            } catch (e: unknown) {
                valid.value = false;
                if (errors[name]) errors[name].value = ref(e);
                else errors[name] = ref(e)
            }
        })    
    }, {immediate: true});

    return { model, valid, errors, label, type, id, touched, blur: () => { touched.value = true } } as InputConfig<T>;
}