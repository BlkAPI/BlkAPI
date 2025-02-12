from theblockchainapi import SolanaAPIResource, SolanaNetwork
import json

# Get an API key pair for free here: https://blkapilabs.com/dashboard
MY_API_KEY_ID = None
MY_API_SECRET_KEY = None

BLOCKCHAIN_API_RESOURCE = SolanaAPIResource(
    api_key_id=MY_API_KEY_ID,
    api_secret_key=MY_API_SECRET_KEY
)


def example():
    try:
        assert MY_API_KEY_ID is not None
        assert MY_API_SECRET_KEY is not None
    except AssertionError:
        raise Exception("Fill in your key ID pair!")

    # This is the transaction signature for a transaction that lists an NFT on SolSea.
    tx_signature = "5H7o5YND5X7q4RgtKpmawqR9S7WuUwdnzj2uA5B7vCUvvVQVgNzk1CgMyH3duDXsapCcNgKufAeMZrijWaThCj9T"

    transaction_info = BLOCKCHAIN_API_RESOURCE.get_solana_transaction(
        tx_signature=tx_signature,
        network=SolanaNetwork.MAINNET_BETA
    )

    print(json.dumps(transaction_info, indent=4, sort_keys=True))


if __name__ == '__main__':
    example()
