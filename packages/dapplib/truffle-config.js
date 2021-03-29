require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'guess narrow flee skull guard render remember solid idea arctic obscure gesture'; 
let testAccounts = [
"0x0d83d5e5bfe4d7324c94761b5df74d65a0989413d4f3d77a83969e96858ca9de",
"0x5e4e3fa7b3bcde16d954cce6f3a21f5f4f78e44355ac5ddca8eef9fdb7f04f0f",
"0xe0889d6c8af557c38a2f47f95d346f8a7afa17ee65ac8b3d524be90623c348f5",
"0x70058c907ff9c931b3066738f850ea942fab1d0199fd1307e05703b36efd03a8",
"0xe3cd44f1c34a29da0526b02bb483d34c450eceeded3e7470b13f4251e3b05186",
"0x1fb54123e8c4a9bdc08e1a8dc772a996db925f653554b247cfa40fa66da90c24",
"0x56f43f08a1ba786767b983b196141443d60f3ef0778c01ff589c1fa2259c6605",
"0xc3d9ccc369e2c36ae019bc13fb5d1b8d24fe6401814d9fad2559249dc36aea40",
"0x2ee2f1830cf8d1e9c2b9f777feab2d078a61a2f34ada686a7aa2c7a4644a9bf6",
"0x592186091b4eadbfd76fb90b5ab42ec35ae208e0836e15a599ee9cd959752806"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
