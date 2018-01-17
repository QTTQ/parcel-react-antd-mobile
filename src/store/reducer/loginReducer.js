
import { fromJS } from 'immutable';

// 初始化state数据
const initialState = {
    ListDetailsData: {}
};


export const login_Rr = (state = initialState, action) => {
    switch (action.type) {
        case 'HIDEGOBACKIOCN_TYPE': // 用于页面和区块的加载中状态
            return fromJS(state).merge({ HideIconData: action.data }).toJS();
        default:
            return state;
    }
}