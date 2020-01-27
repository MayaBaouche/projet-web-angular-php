import {Action,Selector,State, StateContext} from '@ngxs/store';
import {ShoppingCartStateModel} from './shopping-cart-model.state';
import {AddProduct} from '../actions/addProduct.action';
import {DelProduct} from '../actions/delProduct.action';
import {DelAllProducts} from '../actions/delAllProducts.action';
import { applySourceSpanToStatementIfNeeded } from '@angular/compiler/src/output/output_ast';

@State<ShoppingCartStateModel>({
    name: 'shoppingCart',
    defaults: {
        shoppingCart: []
    }
})

export class ShoppingCartState {

  @Selector()
    static getShoppingCart(state: ShoppingCartStateModel) {
        return state.shoppingCart;
    }

@Action(AddProduct)
    add({getState, patchState }: StateContext<ShoppingCartStateModel>, { payload }: AddProduct) {
        let state = getState();
        let exist : boolean = false; 
        state.shoppingCart.forEach(p => {
            if (p.idconfiserie == payload.idconfiserie)
            {
                exist = true;
            }
        }) ;
        if (!exist)
        {            
            patchState({
                shoppingCart: [...state.shoppingCart, payload]
            }); 
        }   
    }

  @Action(DelProduct)
    del ({getState, patchState }: StateContext<ShoppingCartStateModel>, { payload }: AddProduct) {
        const state = getState();
        let index = state.shoppingCart.indexOf(payload);
        state.shoppingCart.splice(index,1);
        patchState({
            shoppingCart: [...(state.shoppingCart)]
        });
    } 

    @Action(DelAllProducts)
        delAll ({getState, patchState }: StateContext<ShoppingCartStateModel>, { payload }: AddProduct) {
        const state = getState();
        state.shoppingCart = [];
        patchState({
            shoppingCart: [...(state.shoppingCart)]
        });
    }   
}