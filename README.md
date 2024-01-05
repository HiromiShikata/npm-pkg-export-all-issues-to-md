# npm-pkg-export-all-issues-to-md

[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
[![semantic-release: angular](https://img.shields.io/badge/semantic--release-angular-e10079?logo=semantic-release)](https://github.com/semantic-release/semantic-release)

## Description

Export all issues from a GitHub repository to one markdown file.
It'll help you to share knowledge of project with your AI/ChatGPT.

## Usage

### Set GitHub personal access token

You need to create a personal access token to use this package.
Please refer to [this page](https://docs.github.com/en/github/authenticating-to-github/creating-a-personal-access-token) to create a personal access token.

```
export GH_TOKEN=<your personal access token>
```

### Export

#### (wip)Export all issues from all repositories of an organization

```
npx export-all-issues-to-md <org>
```

#### (wip)Export all issues from a repository

```
npx export-all-issues-to-md <org>/<repo>
```

#### (wip)Export all issues from a repository to a specific file

```
npx export-all-issues-to-md <org>/<repo> <file>
```

#### (wip)Export all issues from a repository with token

```
npx export-all-issues-to-md <org>/<repo> <file> <token>
```

## License

MIT

## Changelog

See [CHANGELOG.md](./CHANGELOG.md)
