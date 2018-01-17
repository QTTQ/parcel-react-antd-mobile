import {
    NetInfo,
} from 'react-native';

var getNetworkState = async function getNetworkState() {
    try {
        let isConnected = await NetInfo.isConnected.fetch();
        console.log(isConnected);
        return isConnected;
    } catch(error) {
      console.error(error);
    }
}

global.getNetworkState = getNetworkState;