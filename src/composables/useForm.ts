import { ref, reactive } from 'vue'
import { useField } from './useField';
import { InitialFormObject, InputConfig } from '../components/types';

export function useForm(initConfig: InitialFormObject<string> = {}): InputConfig<string>[] {
    const formConfig = reactive<InputConfig<string>[]>([]);

    for (const value of Object.values(initConfig)){
        formConfig.push(useField(value));
    }

    return formConfig;
}   