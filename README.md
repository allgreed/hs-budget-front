# hs-budget-front

## Overview

## Prerequisites

To begin you'll need to have installed:

+ [Node.js](https://nodejs.org/en/)
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

1. Clone the repo

    ```sh
        $ git clone https://github.com/hs3city/hs-budget-front.git
    ```    
    
2. Navigate to the main folder

    ```sh
        $ cd hs-budget-front
    ```    
    
3. Fetch dependencies

    ```sh
        $ npm i && bower i
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

### Submit ideas
- Just drop'em as issues ;)

### Look for bugs
1. Run the app in development mode
2. Try strange use cases
3. When you find a bug - submit an issue.

### Write code

#### Prerequisites
+ Git basics
+ Understanding of Github's PR
+ ZenHub installed
+ Expertise in a field related to your to-be contribution

#### How to:

1. Find an unassigned issue / issue label with "help needed"
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

