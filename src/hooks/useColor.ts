import {computed, Ref, ref} from "vue";

const useColor = (name: Ref<string>) => {
    const colorHash = ref('#b96a6a')

    return {
        colorHash,
        color: computed(() => `${name.value || '[NAME]'} - ${colorHash.value ?? '[HASH]'}`)
    }
}

export default useColor
