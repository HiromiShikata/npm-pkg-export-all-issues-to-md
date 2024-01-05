#!/usr/bin/env node
import { Command } from 'commander';

import fs from 'fs';
import path from 'path';
const packageJson: unknown = JSON.parse(
  fs.readFileSync(path.join(__dirname, '../../../../package.json'), 'utf8'),
);
const isPackageJson = (arg: unknown): arg is { version: string } => {
  return (
    typeof arg === 'object' &&
    arg !== null &&
    'version' in arg &&
    typeof arg.version === 'string'
  );
};
if (!isPackageJson(packageJson)) {
  throw new Error('package.json is not found');
}

const program = new Command();
program
  .version(packageJson.version)
  .name('Export all issues to markdown')
  .description(
    `This CLI command exports all issues from a GitHub repository to one markdown file.
It'll help you to share knowledge of project with your AI/ChatGPT.`,
  )
  .argument('<org>', 'GitHub organization name')
  .action(async (org: string) => {
    console.log(`🚀 Start exporting issues from ${org} 🚀`);
    console.log(`✨🚀 Done 🚀✨`);
  });
if (process.argv) {
  program.parse(process.argv);
}
