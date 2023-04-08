import { AptosClient, AptosAccount, CoinClient, FaucetClient } from "aptos";
import { NODE_URL, FAUCET_URL } from "./config.js";
import { account as payer } from "./loadPayerWallet.js";

const client = new AptosClient(NODE_URL);
const faucetClient = new FaucetClient(NODE_URL, FAUCET_URL);

const coinClient = new CoinClient(client);

const N_RECEIPIENTS = 10;

const receipients: AptosAccount[] = [];
console.log("Preparing receipient accounts...");
for (let i = 0; i < N_RECEIPIENTS; i++) {
  const receipient = new AptosAccount();
  receipients.push(receipient);
}

await faucetClient.fundAccount(payer.address(), 100_000_000);

// Print out initial balances.
console.log(`payer: ${await coinClient.checkBalance(payer)}`);
console.log("");

const run = async () => {
  const start = performance.now();
  const trxHashes: string[] = [];

  for (let i = 0; i < N_RECEIPIENTS; i++) {
    const trxStart = performance.now();
    let trxHash = await coinClient.transfer(payer, receipients[i], 1_000, {
      gasUnitPrice: BigInt(100),
    });
    trxHashes.push(trxHash);
    console.log(
      `trxTime=${
        performance.now() - trxStart
      } ms, transfer to wallet[${i}] ${receipients[
        i
      ].address()}, sent trx with hash ${trxHash}`
    );
    await client.waitForTransaction(trxHash);
    console.log(
      `trxTime=${
        performance.now() - trxStart
      } ms, finish wait for trx hash ${trxHash}`
    );
  }

  console.log(`Total elapsed time: ${performance.now() - start} ms`);
};

run();
