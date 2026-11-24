# Hugo project for the website www.udogroebner.com

Based on the [sam](https://github.com/vickylai/hugo-theme-sam) theme.

## Requirements

Built and tested with [Hugo](https://gohugo.io/) v0.170.1 (the current release).
The extended edition is not required.

```sh
hugo
```

The generated site is written to `docs/` (see `publishDir` in `config.toml`).
`./deploy.sh` builds the site, commits `docs/` and pushes it.

The theme's compiled layouts and CSS are committed, so no Node/npm step is
required. Only edit the theme's `sass/` or `pug/` sources if you intend to
rebuild those assets yourself.
