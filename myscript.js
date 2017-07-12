const API = require('./api.js');
let address = '0xe4AbD3C05344E1DAA66fD85C83948105E194D13f';

API.init(() => {
  console.log('API initialized');
  API.getEtherDeltaTokenBalances(address, ['HMQ'], (err, result) => {
    let newResult = API.utility.weiToEth(result.HMQ, API.getDivisor('0xcbcc0f036ed4788f63fc0fee32873d6a7487b908'));
    console.log(newResult);
  });
});
