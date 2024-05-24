
interface VariantT {
    type: string,
    value: string
}

interface InventoryT {
    quantity: number,
    isStock: boolean
}

interface ProductT {
    name: string,
    description: string,
    price: number,
    category: string,
    tags: string[],
    variants: VariantT[],
    inventory: InventoryT
}


export {
    ProductT,
    InventoryT,
    VariantT
};