export default {
  mainnet: {
    pubkey: 0x3a,
    pubkeyhash: 0x3a,
    scripthash: 0x32,
    witness_v0_keyhash: 'yc',
    witness_v0_scripthash: 'yc'
  },
  testnet: {
    pubkey: 0x78,
    pubkeyhash: 0x78,
    scripthash: 0x6e,
    witness_v0_keyhash: 'ty',
    witness_v0_scripthash: 'ty'
  }
}[process.env.network || 'mainnet']
