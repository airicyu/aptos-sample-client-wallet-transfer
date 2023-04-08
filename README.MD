# Sample for Aptos client doing 10 wallet transfer

This is a sample for demonstrate using Aptos JS client to do 10 wallet transfers in Devnet.

We are using 1 payer wallet to transfer to 10 receipient wallet.

# How to run

`npm start`

```
> npm start

> apt_poc@1.0.0 start
> ts-node ./src/main.ts

Preparing receipient accounts...
payer: 399976000

trxTime=5103.847900003195 ms, transfer to wallet[0] 0xba7d6d36e5c27ef60d40ddbd593dcaff36ac78b6279afa0e01baaace70138bd6, sent trx with hash 0x901fe9a61e3523dd13f63656db204bed9f526a0ab25adb3529e00a7e34e9bbb0
trxTime=6081.163200005889 ms, finish wait for trx hash 0x901fe9a61e3523dd13f63656db204bed9f526a0ab25adb3529e00a7e34e9bbb0
trxTime=5278.355100005865 ms, transfer to wallet[1] 0xb3d42d72c5875d9b18d5cda81cdb1ae6577156fcee4bdfc8a2720e845ddef00f, sent trx with hash 0x0aa075adb7974be0ed9ac7fda4c0bd3351b099f0718130325dd1e42b007d3d93
trxTime=6242.259000003338 ms, finish wait for trx hash 0x0aa075adb7974be0ed9ac7fda4c0bd3351b099f0718130325dd1e42b007d3d93
trxTime=4638.662799999118 ms, transfer to wallet[2] 0xaf809335a8e6c8795ccf0b11bd89429cd74ad4ae454930276183451ec71312a0, sent trx with hash 0x25fdaee1cc1da4b38c4fc62f52156020f8970d46f6f07bb8069319e9e0f47f70
trxTime=5593.345599994063 ms, finish wait for trx hash 0x25fdaee1cc1da4b38c4fc62f52156020f8970d46f6f07bb8069319e9e0f47f70
trxTime=5139.579099997878 ms, transfer to wallet[3] 0x329eaa8c6693b6138bd838d86cbc7359762ef7e6b16063ce3e3bada6a5756a30, sent trx with hash 0x48f44fc75527820516745cd6f04dd4e995294ddbfe980d17404c44d7a23c9776
trxTime=6098.446099996567 ms, finish wait for trx hash 0x48f44fc75527820516745cd6f04dd4e995294ddbfe980d17404c44d7a23c9776
trxTime=4811.532400012016 ms, transfer to wallet[4] 0xa07b062f6546d1b8d7636cd10b373e77f619d078bb4d7f151634098a91db811b, sent trx with hash 0x09a86f9c010c331f70fdf4e29e32734b1e215a7b8bf95d342b58dabea2d57bc4
trxTime=5767.068200007081 ms, finish wait for trx hash 0x09a86f9c010c331f70fdf4e29e32734b1e215a7b8bf95d342b58dabea2d57bc4
trxTime=5112.887199997902 ms, transfer to wallet[5] 0x3aaa070dc64f3f6d8bcc93e15e016e03566370a67ccd35155d8680fd00234ad4, sent trx with hash 0x085a1e613136339d0498d866fbb891ca1eab03fe2b28c276fe4d817e19a56b1e
trxTime=5897.822499990463 ms, finish wait for trx hash 0x085a1e613136339d0498d866fbb891ca1eab03fe2b28c276fe4d817e19a56b1e
trxTime=5141.736900001764 ms, transfer to wallet[6] 0xe204bd10b4e35a0cf8e7cc57fcac517c59b2f0d2505e4ce2fb2ce2efff1365ae, sent trx with hash 0x6355f56115354822dbe4bb3cac5a91694c67042921708d5a66093493896173aa
trxTime=6107.288299992681 ms, finish wait for trx hash 0x6355f56115354822dbe4bb3cac5a91694c67042921708d5a66093493896173aa
trxTime=4786.103900000453 ms, transfer to wallet[7] 0x35f0f95283644a30cdf42cf77caf5a12de647ea2e1d3dd221e83b6814a1523a8, sent trx with hash 0xdbc13e348a3dce5304362ec620be514f90bb7af1e13666759a46b3333ce8fdfe
trxTime=5760.609799996018 ms, finish wait for trx hash 0xdbc13e348a3dce5304362ec620be514f90bb7af1e13666759a46b3333ce8fdfe
trxTime=5257.115500003099 ms, transfer to wallet[8] 0xcdfb3064bb1f489eef191d3b78eadc2c40da9dcf275a9bb867d819671700716c, sent trx with hash 0x8b11c9e62eac98ecdbc50fd8d28979d58df549af47ecfc414e337a36cff31934
trxTime=6228.514200001955 ms, finish wait for trx hash 0x8b11c9e62eac98ecdbc50fd8d28979d58df549af47ecfc414e337a36cff31934
trxTime=5133.909599989653 ms, transfer to wallet[9] 0x447df16982abf71c341af1a1173baed9c6e3803fb99ec898b606f8176c1ce3fa, sent trx with hash 0x67e47c067cf61a149e53800250dfb1a8da144cc0af947bf779c913312c363329
trxTime=6085.496799990535 ms, finish wait for trx hash 0x67e47c067cf61a149e53800250dfb1a8da144cc0af947bf779c913312c363329
Total elapsed time: 59869.5965000093 ms
```