# hs-budget-front

## Overview

## Prerequisites

To work with this repo you'll need to have installed:

+ Node.js
+ npm (comes with Node.js)
    

+ Bower

    ```sh
        $ npm i -g bower
    ```    

+ gulp-cli

    ```sh
        $ npm i -g gulp-cli
    ```    
    
## Setup

0. Install prerequisites
1. Clone the repo

    ```sh
        $ git clone https://github.com/hs3city/hs-budget-front.git
    ```    
    
2. Navigate to the main folder

    ```sh
        $ cd hs-budget-front
    ```    
    
3. Fetch npm dependencies

    ```sh
        $ npm i
    ```    
    
4. Fetch bower dependencies

    ```sh
        $ bower i
    ```
    
## Development

1. Run the build system in development mode

    ```sh
        $ gulp dev
    ```
*Do please note:* Once inited the build system watches for changes

2. Serve hs-budget-front/dev locally to preview your work

### I'm a noob, can't serve for shit :c

That's ok, dawng, just:

1. Install live-server globally

    ```sh
        $ npm i -g live-server
    ```

2. Enter development folder

    ```sh
        $ cd dev
    ```

3. Start the server

    ```sh
        $ live-server
    ```

## How to contribute

### Ideas
Just drop'em as issues ;)

### Code
0. Prerequisites:
    + Git basics
    + Understanding of Github's PR
    + ZenHub installed
    + Expertise in a field related to your to-be contribution
1. Find an unassigned issue
2. Assign yourself
3. Move the issue from icebox / backlog to in progress
3. Create a new branch with a meaninguful name
4. Hack it!
5. Create a PR with a [propper description](https://help.github.com/articles/closing-issues-via-commit-messages/).

## Building

```sh
    $ gulp build
```
    
Resulting build will be located in _/dist_ folder

## Deployment

