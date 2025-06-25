const bip32 = require('bip32');
const bip39 = require('bip39');
const bitcoin = require('bitcoinjs-lib');

const network = bitcoin.networks.testnet;

//Deterministic Hierarchical Wallet
const path = "m/49'/1'/0'/0/0";


// Generate a 12-word mnemonic seed phrase
const mnemonic = bip39.generateMnemonic();

// Convert the seed phrase to a binary seed
const seed = bip39.mnemonicToSeedSync(mnemonic);

// Create a master key from the seed
const root = bip32.fromSeed(seed, network);

// Derive a child key using BIP49 path (P2SH-P2WPKH)
const child = root.derivePath(path);

// Generate a key pair (private and public)
const { address } = bitcoin.payments.p2sh({
    redeem: bitcoin.payments.p2wpkh({ 
        pubkey: child.publicKey,
        network 
    }),
    network
});

// Display wallet information
console.log('Seed Phrase (Mnemonic):', mnemonic);
console.log('Wallet Address:', address);
console.log('Private Key (WIF):', child.toWIF());
console.log('Derivation Path:', path);


