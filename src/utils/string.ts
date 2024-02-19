export const getStringWidth = (string: string | number, font: string): number => {
    // @ts-ignore
    const canvas = getStringWidth.canvas || (getStringWidth.canvas = document.createElement('canvas'))
    const context = canvas.getContext('2d')

    context.font = font

    return Math.ceil(context.measureText(string).width)
}
