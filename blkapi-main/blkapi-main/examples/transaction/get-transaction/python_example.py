from theblockchainapi import BlockchainAPIResource, Blockchain, BlockchainNetwork
import json

# Get an API key pair for free here: https://blkapilabs.com/dashboard
MY_API_KEY_ID = None
MY_API_SECRET_KEY = None

BLOCKCHAIN = Blockchain.SOLANA
NETWORK = BlockchainNetwork.SolanaNetwork.MAINNET_BETA
# NETWORK = BlockchainNetwork.SolanaNetwork.DEVNET

# BLOCKCHAIN = Blockchain.ETHEREUM
# NETWORK = BlockchainNetwork.EthereumNetwork.MAINNET
# NETWORK = BlockchainNetwork.EthereumNetwork.ROPSTEN

BLOCKCHAIN_API_RESOURCE = BlockchainAPIResource(
    api_key_id=MY_API_KEY_ID,
    api_secret_key=MY_API_SECRET_KEY,
    blockchain=BLOCKCHAIN,
    network=NETWORK
)


def example():
    try:
        assert MY_API_KEY_ID is not None
        assert MY_API_SECRET_KEY is not None
    except AssertionError:
        raise Exception("Fill in your key ID pair!")

    if BLOCKCHAIN.value == Blockchain.SOLANA.value:
        # This is the transaction signature for a transaction that lists an NFT on SolSea.
        # From `mainnet-beta`
        tx_id = "5H7o5YND5X7q4RgtKpmawqR9S7WuUwdnzj2uA5B7vCUvvVQVgNzk1CgMyH3duDXsapCcNgKufAeMZrijWaThCj9T"
    else:
        # From `ropsten`
        tx_id = '0x2e81c50888bb80f763fb52870240fdad2fa87a8e95c8c729367c9f145fb85b59'

    transaction_info = BLOCKCHAIN_API_RESOURCE.get_transaction(transaction_blockchain_identifier=tx_id)

    print(json.dumps(transaction_info, indent=4, sort_keys=True))


if __name__ == '__main__':
    example()
