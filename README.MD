# Sample for Aptos client doing 10 wallet transfer

This is a sample for demonstrate using Aptos JS client to do 10 wallet transfers in Devnet.

We are using 1 payer wallet to transfer to 10 receipient wallet.

# How to run

`npm start`

```
> npm start
> aptos-sample-client-wallet-transfer@1.0.0 start
> ts-node ./src/main.ts

Preparing receipient accounts...
payer address: 0x29dca461cdd0900850b2631ed09d52a1fa81b8725cde846526013dd57ec0468d, balance: 499972000

trxTime=5285.189999997616 ms, transfer to wallet[0] 0x78aa7b2f3de4234016b139116da79a78691a32e534242f952357bd3d1a23d50f, sent trx with hash 0x77f3a8db8d1a3f7e2ac3fd37cce3c74c5a775db16c1a8306339a31d1c67b6644
trxTime=6245.1186999976635 ms, finish wait for trx hash 0x77f3a8db8d1a3f7e2ac3fd37cce3c74c5a775db16c1a8306339a31d1c67b6644
trxTime=5115.490099996328 ms, transfer to wallet[1] 0x0ada86cab075f11f2ec6b291a285a492bab3c226646a73692d6f4b699222ba53, sent trx with hash 0xcf21f1b7ab35826fe6f07d7cf384e77e3e6dec89e0b68d00ea8dace24e4832e6
trxTime=6083.453199997544 ms, finish wait for trx hash 0xcf21f1b7ab35826fe6f07d7cf384e77e3e6dec89e0b68d00ea8dace24e4832e6
trxTime=4620.4625000059605 ms, transfer to wallet[2] 0xd0b050ffb0974698e1a7d2f0f244ec5e80c636fa5b05a406161d2ac9ef1eb2ae, sent trx with hash 0xa9ae5ae6088da50545e988c7120865a827550ce201932e0453bc3175412abce0
trxTime=5590.011500000954 ms, finish wait for trx hash 0xa9ae5ae6088da50545e988c7120865a827550ce201932e0453bc3175412abce0
trxTime=5281.892599999905 ms, transfer to wallet[3] 0xbdc0d3525edce02796de702cc01bbc862f91b58d256559f7a829da9cba4a448d, sent trx with hash 0x12e4785159f0ba1628f92a85872c8f07049ce5f8e44d86a0a52caaa1ce237a62
trxTime=6408.78979998827 ms, finish wait for trx hash 0x12e4785159f0ba1628f92a85872c8f07049ce5f8e44d86a0a52caaa1ce237a62
trxTime=5276.699000000954 ms, transfer to wallet[4] 0xb640da72fcd65d70d43c8c6da25dbfe54fe332dc3fd90f4a1a9f993c29a6ee30, sent trx with hash 0x80d044bc41c03a368b6817a3654563a1cde65bfaf4504a6fb3622d6fa38d06b3
trxTime=6217.934599995613 ms, finish wait for trx hash 0x80d044bc41c03a368b6817a3654563a1cde65bfaf4504a6fb3622d6fa38d06b3
trxTime=5297.168099999428 ms, transfer to wallet[5] 0xd81fd12b68fdce0084b272376d781560e505705a4949bd43ebf9703746ddcb63, sent trx with hash 0x3e525ad4401cc580475d33016ec8c4e37a4a45072618844fded2a2e4bf547eec
trxTime=6253.623699992895 ms, finish wait for trx hash 0x3e525ad4401cc580475d33016ec8c4e37a4a45072618844fded2a2e4bf547eec
trxTime=5280.293999999762 ms, transfer to wallet[6] 0x21bdfb16dda241c7e64a289be8c59caedfab2c5d95a94ca4f6435f6596629fa4, sent trx with hash 0x5597897c996fbe236989f871ba680971fb93b9f3d5164da6c94dc7d12db9ecd5
trxTime=6241.777899995446 ms, finish wait for trx hash 0x5597897c996fbe236989f871ba680971fb93b9f3d5164da6c94dc7d12db9ecd5
trxTime=4942.242499992251 ms, transfer to wallet[7] 0xac7b9cd10968bb424f872ce41b64361734cf6ce52094fe769dcad9463e612a54, sent trx with hash 0xb76cbf04a3d49d9e21a8507d5bdab29ef1ae0ac81d1ddf63df3b0c599f79e4e5
trxTime=5574.689899995923 ms, finish wait for trx hash 0xb76cbf04a3d49d9e21a8507d5bdab29ef1ae0ac81d1ddf63df3b0c599f79e4e5
trxTime=5295.397199988365 ms, transfer to wallet[8] 0x24fa09f19a53fe9860ac06939bc56a3a0403e4d07425aa367f20fded3ba82061, sent trx with hash 0xca79ac540a01e690c6f26272fb0ae9d9fee64a36f133b4b482fba08c8e8cd6f8
trxTime=6268.0063000023365 ms, finish wait for trx hash 0xca79ac540a01e690c6f26272fb0ae9d9fee64a36f133b4b482fba08c8e8cd6f8
trxTime=5917.172900006175 ms, transfer to wallet[9] 0xe2a0c7df52e9c320018ee56e099462227b95a9055a616e77828e0d28741b6b7c, sent trx with hash 0xd11057aece0fd85e27fd29699287b28b615ef051d6da88025ecafb42aae888f0
trxTime=7022.299800008535 ms, finish wait for trx hash 0xd11057aece0fd85e27fd29699287b28b615ef051d6da88025ecafb42aae888f0
Total elapsed time: 61909.91089999676 ms
```