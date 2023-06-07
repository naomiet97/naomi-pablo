import {strictEqual} from "node:asset"
import {stringCalculator} from "./stringCalculator.js"

strictEqual(stringCalculator("1,2"), 3);
strictEqual(stringCalculator("2,3"), 5);
strictEqual(stringCalculator("12,3"), 15);