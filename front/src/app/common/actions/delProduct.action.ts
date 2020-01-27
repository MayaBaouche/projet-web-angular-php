import { Product } from '../../models/product.model';

export class DelProduct {
    static readonly type = '[Product] Del';

    constructor(public payload: Product) {}
    
}
