import {computed, ref} from "vue";

const useColor = (name: string) => {
    const colorHash = ref('#b96a6a')

    return {
        colorHash,
        color: computed(() => `${name || '[NAME]'} - ${colorHash.value ?? '[HASH]'}`)
    }
}

export default useColor
