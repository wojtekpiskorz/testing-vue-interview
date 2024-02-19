import {computed, ModelRef, ref} from "vue";

const useColor = (name: ModelRef<string>) => {
    const colorHash = ref('#b96a6a')

    return {
        colorHash,
        color: computed(() => `${name.value || '[NAME]'} - ${colorHash.value ?? '[HASH]'}`)
    }
}

export default useColor
