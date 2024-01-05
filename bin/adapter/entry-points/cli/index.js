#!/usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const commander_1 = require("commander");
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const packageJson = JSON.parse(fs_1.default.readFileSync(path_1.default.join(__dirname, '../../../../package.json'), 'utf8'));
const isPackageJson = (arg) => {
    return (typeof arg === 'object' &&
        arg !== null &&
        'version' in arg &&
        typeof arg.version === 'string');
};
if (!isPackageJson(packageJson)) {
    throw new Error('package.json is not found');
}
const program = new commander_1.Command();
program
    .version(packageJson.version)
    .name('Export all issues to markdown')
    .description(`This CLI command exports all issues from a GitHub repository to one markdown file.
It'll help you to share knowledge of project with your AI/ChatGPT.`)
    .argument('<org>', 'GitHub organization name')
    .action(async (org) => {
    console.log(`🚀 Start exporting issues from ${org} 🚀`);
    console.log(`✨🚀 Done 🚀✨`);
});
if (process.argv) {
    program.parse(process.argv);
}
//# sourceMappingURL=index.js.map