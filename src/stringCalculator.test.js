import { strictEqual } from "node:assert";
import { stringCalculator } from "./stringCalculator.js";

strictEqual(stringCalculator("1,2"), 3);
strictEqual(stringCalculator("2,3"), 5);
strictEqual(stringCalculator("12,3"), 15);
strictEqual(stringCalculator("1,5"), 6);
strictEqual(stringCalculator("1,3,2,2"), 8);
strictEqual(stringCalculator("150,3,2"), 155);
