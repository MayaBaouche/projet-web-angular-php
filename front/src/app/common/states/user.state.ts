import { Action, Selector, State, StateContext } from '@ngxs/store';
import { UserStateModel} from './user-model.state';
import { AddUser } from '../actions/addUser.action';
import { DelUser } from '../actions/delUser.action';

@State<UserStateModel>({
    name: 'user',
    defaults: {
        user : []
    }
})

export class UserState {

  @Selector()
    static getShoppingCart(state: UserStateModel) {
        return state.user;
    }

@Action(AddUser)
    add({getState, patchState }: StateContext<UserStateModel>, { payload }: AddUser) {
        let state = getState();      
        patchState({
            user: [payload]
        }); 
    }

  @Action(DelUser)
    del ({getState, patchState }: StateContext<UserStateModel>, { }: DelUser) {
        const state = getState();
        patchState({
            user : []
        });
    } 
}