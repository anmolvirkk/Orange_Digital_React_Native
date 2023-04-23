const addCommas = (string: string) => string.replace(/\B(?=(\d{3})+(?!\d))/g, ",")

export default addCommas