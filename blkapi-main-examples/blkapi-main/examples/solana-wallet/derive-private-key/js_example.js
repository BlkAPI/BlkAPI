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

const test = async (seed_phrase, derivation_path, passphrase) => {
    console.log(" BEGIN ------------------------");

    console.log(seed_phrase);

    let getPublicKeyRequest = new theblockchainapi.GetPublicKeyRequest(); // GetPublicKeyRequest | 
    getPublicKeyRequest.wallet = {
        secret_recovery_phrase: seed_phrase,
        derivation_path: derivation_path,
        passphrase: passphrase
    }

    const private_key = await apiInstance.solanaDerivePrivateKey(getPublicKeyRequest).then((data) => {
        console.log('API called successfully.');
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

    console.log(" END: ------------------------");

}

await test('sadness swap zebra path panda power finger robot yellow game list enemy', 'm/44/501/0/0', '');
await test('sadness swap zebra path panda power finger robot yellow game list enemy', 'm/44/501/1/0', '');
await test('sadness swap zebra path panda power finger robot yellow game list enemy', 'm/44/501/0/0', 'apple');
await test('fire owner display success half rescue pledge oval foam gossip window once', 'm/44/501/0/0', '');