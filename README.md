# Micro Frontends (MFEs) with Bit and Git

This example demonstrates the use of Bit and Git for managing Micro Frontends (MFEs) in a multi-team setup. The example is set up with 2 teams, one GitHub organization called "we-are-the-champions", and one [Bit organization](https://bit.cloud/we-are-the-champions) with the same name. The example also includes 3 scopes, with one scope owned by ["the-header-herders"](https://bit.cloud/we-are-the-champions/the-header-herders) team that maintains the [header component](https://bit.cloud/we-are-the-champions/the-header-herders/header), another scope owned by ["the-page-turners"](https://bit.cloud/we-are-the-champions/the-page-turners) team that maintains the [page component](https://bit.cloud/we-are-the-champions/the-page-turners/best-page-forever), and a shared scope called ["the-app-timizers"](https://bit.cloud/we-are-the-champions/the-app-timizers/) that is used by both teams.

## Repositories

The example includes 2 repositories, workspaces, that are version-controlled with Git and Github. Each repo has the team name. One workspace has a component by team A and an app component from the shared scope, while the other workspace has a component by team B and an app component from the shared scope.

## GitHub Actions

This example also uses GitHub Actions to automate the versioning of components. The GitHub Action, "Tag and Export Components," runs every time changes are pushed to the main branch. The action includes several steps, such as installing and using the latest version of Bit, installing packages using Bit, hard-tagging pending components, and exporting the components. Additionally, the action also includes a step that commits any changes made to the .bitmap file and pushes the changes to the remote repository.

## Merge Hook

The example also includes a merge hook that keeps the workspace up-to-date every time changes are pulled from the remote repository. The hook script is as follows:

``` bash
#!/bin/sh
bit import && bit checkout head && bit link && bit compile
```

To use this hook, you need to make the script executable by running `chmod +x merge-hook.sh.`
Then, you need to add the hook script to the hooks folder in your local repository, not in the `.git/hooks folder`, since you want all collaborators to have it in their local repository as well.

All these steps together allow teams to develop, version and collaborate on different components in an efficient and organized manner. The build-time integration approach allows teams to release updates independently, while still maintaining a consistent and cohesive application.

## GitHub Action Script

``` bash
name: Tag and Export Components

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  tag-and-export:
    runs-on: ubuntu-latest
    if: "!contains(github.event.head_commit.message, '--skip-ci')"
    env:
      BIT_TOKEN: ${{ secrets.BIT_TOKEN }}

    steps:
      - uses: actions/checkout@v2
      - name: Set @bit:registry to use
        run: npm config set @teambit:registry https://node-registry.bit.cloud
      - name: Use Node.js 16
        uses: actions/setup-node@v1
        with:
          node-version: 16.x
      - name: Install Bit Version Manager
        run: npm i -g @teambit/bvm
      - name: Install latest Bit version
        run: bvm install
      - name: add bvm bin folder to path
        run: echo "$HOME/bin" >> $GITHUB_PATH
      - name: Set up bit config
        run: |
          bit config set analytics_reporting false
          bit config set anonymous_reporting false
          bit config set user.token $BIT_TOKEN
      - name: Install packages using bit
        run: bit install
      - name: Hard-tag pending components
        run: bit tag --persist
      - name: Export components
        run: bit export
      - name: Commit changes made to .bitmap
        run: |
          git config --global user.name '${{ github.actor }}'
          git config --global user.email '${{ github.actor }}@users.noreply.github.com'
          git add .bitmap
          git commit -m "update .bitmap with new component versions (automated). --skip-ci"
          git push

```
