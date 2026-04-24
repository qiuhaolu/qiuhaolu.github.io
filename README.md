# Qiuhao Lu

Personal website for Qiuhao Lu, built with the [Academic Pages](https://github.com/academicpages/academicpages.github.io) Jekyll template and published with GitHub Pages.

## Local Development

Use Ruby 3 or newer for local builds. The macOS system Ruby 2.6 is too old for the current GitHub Pages dependency set.

Install dependencies:

```bash
bundle install
```

Run the site locally:

```bash
bundle exec jekyll serve -l -H localhost
```

Then open <http://localhost:4000>.

## Content

- `_pages/about.md` controls the homepage.
- `_data/navigation.yml` controls the top navigation.
- `_config.yml` controls site metadata and sidebar profile links.
- `_portfolio/` contains project pages.
- `_posts/` contains writing.
- `_publications/`, `_talks/`, and `_teaching/` are ready for academic content.
- `files/` is for PDFs and downloadable files.

The original static draft is preserved in `_legacy_static_site/`. Template examples are preserved in `_template_examples/`.
