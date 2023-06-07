import assert from "node:assert";
import { moneyFormat } from "./moneyFormat.js";

assert.strictEqual(moneyFormat(19.99), "$19.99");
assert.strictEqual(moneyFormat(250), "$250.00");
assert.strictEqual(moneyFormat(9500.95), "$9,500.95");
