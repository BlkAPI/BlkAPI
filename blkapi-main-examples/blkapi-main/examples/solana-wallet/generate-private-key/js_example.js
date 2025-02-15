import theblockchainapi from 'theblockchainapi';

let defaultClient = theblockchainapi.ApiClient.instance;
let APIKeyID = defaultClient.authentications['APIKeyID'];
let APISecretKey = defaultClient.authentications['APISecretKey'];

// BEGIN: -----------------------------------------------------------------------------------------------
// TODO:- Fill in with your own API Keys
// Get a free API Key Pair: https://blkapilabs.com/dashboard
APIKeyID.apiKey = 'API-KEY-ID';
APISecretKey.apiKey = 'API-SECRET-KEY';
// END:   -----------------------------------------------------------------------------------------------

let apiInstance = new theblockchainapi.SolanaWalletApi();

const private_key = await apiInstance.solanaGeneratePrivateKey().then((data) => {
  return data;
}, (error) => {
  console.error(error);
  return null;
});

const b58_private_key = private_key['b58_private_key'];
console.log("This is a base58-encoded private key. This is what Phantom shows when you click `Show Private Key`");
console.log(b58_private_key);

console.log("------------------------");

const private_key_arr = private_key['private_key'];
console.log("This is a standard private key array. This is what SolFlare shows when you click `Export Private Key`");
console.log(private_key_arr);
