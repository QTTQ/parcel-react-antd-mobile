import { NetInfo } from 'react-native';

// var getNetInfo = function getNetInfo () {
//   NetInfo.isConnected.fetch().done((isConnected) => {
//     return isConnected;
//   });
// }

var getNetInfo = async function getNetInfo() {
    try {
        let isConnected = await NetInfo.isConnected.fetch();
        console.log(isConnected);
        alert(isConnected);
        return isConnected;
    } catch(error) {
      console.error(error);
    }
}

global.getNetInfo = getNetInfo;
