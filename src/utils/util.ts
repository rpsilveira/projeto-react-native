export const formatNumber = (value: number|undefined, digits: number): string => {
    return (value ? value : 0).toFixed(digits).toString().replace('.',',');
}
