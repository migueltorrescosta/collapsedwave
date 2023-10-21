# Collapsed Wave

Notes on Quantum Theory. 

# Contribution

If there are notes that would be useful to have, the best way to add them is by making a PR into this repo, following the instructions below. 

## Installation

Run the command bellow to install the required dependencies. The `--user-install` flag is only needed if you do not want to install your dependencies globally. 

```shell
gem install bundle --user-install
bundle install
```

## Debugging your installation

If Gems fail to install due to a `Bundler::GenericSystemCallError`, you might have to locally install your gems, by running

```shell
gem install jekyll-feed jekyll-tidy user-install
```

If you fail to run the website locally, you might not have your ruby gems locally. This requires you to add them to your PATH, by adding the lines below to either `.zshrc` or `.bashrc`:

```txt
export GEM_HOME="$(ruby -e 'puts Gem.user_dir')"
export PATH="$PATH:$GEM_HOME/bin"
```


## Running locally

Run the command below to access your website at `http://localhost:4000`
```shell
bundle exec jekyll serve
```

Alternatively, you can run from a docker environment with
```shell
docker run -p 4000:4000 -v $(pwd):/site bretfisher/jekyll-serve
```

## Adding notes

For all notes to work properly, we need to have three frontmatter values. Please make sure the front matter is written in between three lines. If you check any `.md` files in this repo, you will see something this.  

```yaml
title: Credits
permalink: /credits
```

1. `Title` is the page title. It **should be same as that of your Obsidian file** title for our Wiki links to work. i.e, if file is `credits.md` title has to be `credits`.
2. `date` is used to sort out the notes in the feed.