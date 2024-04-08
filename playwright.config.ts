import type { PlaywrightTestConfig } from "@playwright/test";
import test from "node:test";

const config:PlaywrightTestConfig = {
    testMatch:["tests/Demo.test.ts"]
};
export default config;
