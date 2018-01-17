import axios from 'axios';
import "./Mock";
import CONSTANTS from './API';

export const requestaxios = (url)=>{
    return new Promise((resolve, reject) => {
        axios({
            method: "GET",
            url: CONSTANTS.SY+url,
            headers: { 'Access-Control-Allow-Origin': '*' }
        }).then(function (res) {
            resolve(res);
        }).catch(function (err) {
            reject(err);
        });

    })
}
export const request=(url, body)=> {
    return new Promise((resolve, reject) => {
        fetch(CONSTANTS.SY + url, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            mode: "cors",
            body: body,
        })
            .then((response) => {
                //   console.log(response);
                // console.log(response.text());
                return response.json();
            })
            .then((jsonData) => {
                resolve(jsonData);
            })
            .catch((error) => {
                reject(error);
            });
    })

}
