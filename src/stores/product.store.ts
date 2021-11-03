import { IProduct } from 'types';
import create, { SetState, GetState } from 'zustand';

type ProductStore = {
    products: IProduct[];
    push: (product: IProduct) => void;
    update: (product: IProduct) => void;
    remove: (id: string) => void;
};

export const useProductStore = create<ProductStore>(
    (
        set: SetState<ProductStore>,
        get: GetState<ProductStore>
    ) => ({
        // All products
        products: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(_ => ({
            name: `Name ${_}`,
            description: `Long product description goes in here for very long time`,
            price: _ * 200,
            quantity_in_stock: _ * 40,
            id: `${_}`
        })),

        // Method that allows to add a product in the store
        push: (product: IProduct): void => {
            const { products } = get();
            set({ products: [product, ...products] });
        },

        // Method that allows to edit a product in the store
        update: (product: IProduct): void => {
            const { products } = get();
            const newProducts = products.map(_ => {
                if (_.id === product.id) return product
                return _
            })
            set({ products: newProducts });
        },

        // Method that allows to remove a product from the store
        remove: (id: string) => {
            const { products } = get();
            set({ products: products.filter(_ => _.id !== id) });
        }
    })
)
