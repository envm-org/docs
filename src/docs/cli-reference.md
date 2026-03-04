---
sidebar_position: 6
---

# CLI Reference

The following commands are available from the `envm` CLI to help you securely manage environment variables across projects.

<!-- commands -->
* [`envm completion`](#envm-completion)
* [`envm env`](#envm-env)
* [`envm init`](#envm-init)
* [`envm load`](#envm-load)
* [`envm login`](#envm-login)
* [`envm logout`](#envm-logout)
* [`envm project`](#envm-project)
* [`envm pull`](#envm-pull)
* [`envm push`](#envm-push)
* [`envm register`](#envm-register)
* [`envm uninstall`](#envm-uninstall)
* [`envm users`](#envm-users)
* [`envm version`](#envm-version)
* [`envm whoami`](#envm-whoami)

## `envm completion`

Generate the autocompletion script for the specified shell

```
USAGE
  $ envm completion [bash|zsh|fish|powershell]

DESCRIPTION
  Generates autocompletions. Automatically installed via install.sh for bash and zsh.
```

## `envm env`

Manage environments

```
USAGE
  $ envm env [COMMAND]

DESCRIPTION
  Create, read, update, and delete environments.
```

## `envm init`

Initialize ENVM configuration in the current directory

```
USAGE
  $ envm init

DESCRIPTION
  Scans for .env files and creates an envm.json configuration file.
```

## `envm load`

Load environment variables into the current shell

```
USAGE
  $ envm load

DESCRIPTION
  Scan for new .env files and update envm.json
```

## `envm login`

log in with your ENVM account

```
USAGE
  $ envm login

DESCRIPTION
  Log in with your email and password to access envm services.
```

## `envm logout`

log out

```
USAGE
  $ envm logout

DESCRIPTION
  Remove your local session credentials.
```

## `envm project`

Manage projects

```
USAGE
  $ envm project [COMMAND]

DESCRIPTION
  Create, read, update, and delete projects.
```

## `envm pull`

Pull environment variables from the server

```
USAGE
  $ envm pull

DESCRIPTION
  Pull environment variables from the server
```

## `envm push`

Push environment variables to the server

```
USAGE
  $ envm push

DESCRIPTION
  Push local environment variables to the server
```

## `envm register`

Register a new ENVM account

```
USAGE
  $ envm register

DESCRIPTION
  Create a new account with your name, email and password.
```

## `envm uninstall`

Uninstall the envm CLI

```
USAGE
  $ envm uninstall

DESCRIPTION
  Removes the envm binary and its configuration directory from your system.
```

## `envm users`

Manage users

```
USAGE
  $ envm users [COMMAND]

DESCRIPTION
  Create, read, update, and delete users.
```

## `envm whoami`

show the username you are logged in as

```
USAGE
  $ envm whoami

DESCRIPTION
  Display the currently authenticated user's name and email.
```

## `envm version`

Print the CLI version

```
USAGE
  $ envm version
  $ envm --version
  $ envm -v

DESCRIPTION
  Displays the current version of the envm CLI.
```
