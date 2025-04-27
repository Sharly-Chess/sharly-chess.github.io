# Sharly Chess Documentation

## Development setup

In order to test the documentation locally, you'll need to install *Ruby*, *Jekyll* and *bundler*.  See steps 1 and 2 of the [Jekyll documentation](https://jekyllrb.com/docs/) for details.

- Ruby downloads: [https://rubyinstaller.org/downloads/](https://rubyinstaller.org/downloads/)
- Bundler comes with Ruby if you use the common installer on Windows
- Install everything: ``bundle install``

Once installed, you should be able to generate the site locally by running:

```
bundle exec jekyll serve
```

This will start a local web server on port 4000 and you can view the site at http://localhost:4000.

## Deployment

The site is deployed automatically using a GitHub Action whenever a commit is pushed to the `main` branch.

## How the site is set up

The site uses the [Just the Docs](https://just-the-docs.com) theme, which is a Jekyll theme that provides a simple, responsive, and modern design for technical documentation.
This theme is installed as a gem (see the Gemfile) and is configured in the `_config.yml` file.

In order to provide multilingual support, the site uses the [Polyglot](https://polyglot.untra.io) plugin.  Once again, this is installed as a gem, this time in the `jekyll_plugins` group.

You should read the documentation for both of these projects to understand how they work.

## Creating content

### Localization

The site is localized into French and English, are there are two separate files for each page.
_Polyglot_ is configured to get the locale from filename, for example:

```
mypage.en.md
mypage.fr.md
```

When browsing the site it's possible to switch between the two languages using the language switcher at the top of the page, while staying on the same page.
To do this, _Polyglot_ will associate the different versions of a page using the `page_id` front matter option.

```
layout: page
title: My Page
permalink: /my-localized-url/
page_id: my-page
```

### Markdown links

When linking to other pages using Markdown, you'll either need to add the `site.baseurl` prefix to the URL, for example:

```
This is a link to the [Player Databases]({{ site.baseurl }}/databases) page.
```

or, _preferably_, use the link tag syntax to point to the file:

```
This is a link to the [Player Databases]({% link docs/player-databases/index.en.md %}) page.
```

If you don't do this then the link will work locally, but it won't work when deployed to GitHub Pages since we have a base URL of `/sharly-chess-doc` when hosted.

The advantage of using the link tag is that the build will fail if the file doesn't exist, which helps catch errors early.

Also keep in mind that you need to point to the correct language file for each link, for example:

```
This is a link to the [Screens]({% link docs/screens/index.en.md %}) page.
Voici un lien vers la page [Écrans]({% link docs/screens/index.fr.md %}).
```

### Posts

Blog posts are stored in the `_posts` directory, and should be named `YYYY-MM-DD-title.md`.

Due to a limitation of the Polyglot plugin, you'll need to manually add the `lang` and `slug` front matter to each post (this isn't necessary for other pages).
If you forget this then you won't be able to switch languages while remaining on the same page.

```
---
title: Version 2.5 disponible
date: 2025-04-07 12:00:00 +0200
categories: releases
layout: post
page_id: post-2025-04-07
slug: v25
lang: fr
```

### Post summaries

You can add a summary to a post by adding a `summary` field to the front matter:

```
summary: A few months after the release of version 2.4 (last November), we are pleased to announce version 2.5 of Papi-web.
```

This will be used as the excerpt on the home page.  The summary can use Markdown formatting.  If you need multiple lines, you can use this Yaml syntax:

```
summary: |
  A few months after the release of version 2.4 (last November), we are pleased to announce version 2.5 of Papi-web.

  The version 2.5 brings the following new features...
```

An alternative to using the `summary` field is to use the `<!--more-->` tag in the post content. The content before the tag will be used as the excerpt.

## Search

Getting the multilingual search to work correctly took a bit of work, since it's not supported out of the box by _Just the Docs_.
Inspired by [this post](https://github.com/just-the-docs/just-the-docs/issues/59#issuecomment-1807080785), a few customizations were required to make it work with our configuration.

The lunr files (needed support French) were added to the `assets/js/vendor` directory

* `lunr.fr.min.js`
* `lunr.multi.min.js`
* `lunr.stemmer.support.min.js`

`just-the-docs.js` and `zzzz-search-data.json` were copied from the _Just the Docs_ [Github repository](https://github.com/just-the-docs/just-the-docs) to the `assets/js/just-the-docs` directory.
Note that our versions of these files will then override the ones provided by _Just the Docs_. They where then slightly modified to suit our needs:

* `zzzz-search-data.json` was modified to add the language prefix to the URLs that are generated.
* `just-the-docs.js` was modified to use the localized version of 'search-data.json', and to tell _lunr_ to use the French plugin when viewing the French version of the site.

Both of these files end up as localized version in each language directory.

Finally, I copied `head.html` from the _Just the Docs_ [Github repository](https://github.com/just-the-docs/just-the-docs) directory to the `_includes` directory. This was modified to use the localized version of `just-the-docs.js`, rather that the root version in found in `/assets/js`
