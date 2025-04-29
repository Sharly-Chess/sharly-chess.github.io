---
layout: page
title: Development env.
parent: Technical appendices
permalink: /dev-env
page_id: dev-env
nav_order: 300
---

# Technical Appendix - Setting Up a Development Environment

You can use _PyCharm_ 2024.3.1.1 (Community Edition) on an up-to-date _Windows_ 11 system.

Clone the _GitHub_ repository https://github.com/sharly-chess/sharly-chess and start playing ;-)

## Running the scripts from the development environment

### Starting the web server

```
python src/papi_web.py
```

Use the `--experimental` option to enable experimental features:

```
python src/papi_web.py --experimental
```

{: .warning }
> :warning: USE THE EXPERIMENTAL FEATURES AT YOUR OWN RISK!

### Launching the interface with the FFE server

```
python src/papi_web.py --ffe
```

### Launching the interface with the ChessEvent platform

```
python src/papi_web.py --chessevent
```

## Configuring authentication on the FFE server

The `src/plugins/ffe/.credentials` file, used to connect to the federal website, is not stored on the _GitHub_ repository.

It must be generated in each developer's environment (ask other developers for login credentials):

```
python scripts/ffe/generate_ffe_sql_server_credentials.py
```

## Creating the Windows executable

The Windows executable is automatically produced by a _GitHub_ action, triggered by the arrival of a tag on the _GitHub_ repository.

- [See the _GitHub_ action](https://github.com/sharly-chess/sharly-chess/actions/workflows/export.yml)

An unpublished (draft) release is automatically created by the action with the release notes (https://github.com/Sharly-Chess/sharly-chess/blob/dev/RELEASE_NOTES.md).

The draft release must be validated to be available to the users.

## Installing tools and libraries

Starting with version 2.6, libraries are no longer stored on the _GitHub_ repository and are installed:

- automatically in the developer environment when the server is first launched;
- manually by running the `install_libs.py` script.

```
python scripts/libs/install_libs.py
```

## Updating Federation Flags

Federation flags are stored in the _GitHub_ repository and can be updated using the `download_federation_flags.py` script:

```
python scripts/federation_flags/download_federation_flags.py
```
