import { execSync } from 'child_process';

describe('npx script execution test', () => {
  describe('help', () => {
    it('should display the full help message without error', async () => {
      const output = execSync(
        'npx ts-node ./src/adapter/entry-points/cli/index.ts --help',
      ).toString();
      expect(output.trim()).toEqual(
        `Usage: Export all issues to markdown [options] <org>

This CLI command exports all issues from a GitHub repository to one markdown
file.
It'll help you to share knowledge of project with your AI/ChatGPT.

Arguments:
  org            GitHub organization name

Options:
  -V, --version  output the version number
  -h, --help     display help for command
`.trim(),
      );
    });
  });

  describe('execute', () => {
    it('should run the script without error', async () => {
      const output = execSync(
        `npx ts-node ./src/adapter/entry-points/cli/index.ts HiromiShi  kata`,
      ).toString();
      expect(output.trim()).toContain('✨🚀 Done 🚀✨');
    });
  });
});
