# ERC20 implementation

bsc_testnet: https://testnet.bscscan.com/token/0xac60eeed4adcea750da61560e30fa13607125f9d?a=0x0000000000000000000000000000000000000000

contract: https://testnet.bscscan.com/address/0xac60eeed4adcea750da61560e30fa13607125f9d

**Run**
```npm i```
```npx hardhat test```

**Test tasks**
```npx hardhat allowance --owner '0x1C15dB18641F5E16Ed924c250C0A4031F37a0ab5' --spender '0xFF81d61134b9c4e07BFAEECeD77B6A83b159aEbA' --network bsc_testnet ```

```npx hardhat transfer --to '0xFF81d61134b9c4e07BFAEECeD77B6A83b159aEbA' --amount '0.1' --network bsc_testnet```
 e.t.c
