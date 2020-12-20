# landscape

![Screenshot](/screenshot.jpg)

A bar for macos that displays the current workspaces.

## Installation and requirements

Requires [*yabai*](https://github.com/koekeishiya/yabai) and [Übersicht](http://tracesof.net/uebersicht/).

Once Übersicht is installed, download this repository to wherever your widgets are stored (by default ~/Library/Application Support/Übersicht/widgets/).

This can be done via the terminal like so:

```sh
brew tap caskroom/cask
brew cask install ubersicht
git clone https://github.com/zzzeyez/pecan.git "$HOME/Library/Application Support/Übersicht/widgets/pecan"
```

And install *Yabai*:

```sh
brew install yabai
brew services start yabai
```

To create and destroy workspaces you will need to disable SIP.  Instructions are on the page for *Yabai*.

You will need the included `landscape` in your $PATH:

```sh
ln -s "${HOME}/Library/Application Support/Übersicht/widgets/landscape/landscape" "/usr/local/bin/landscape"
```

And now when you switch workspaces via skhd you'll want to run `landscape` like so:

```sh
ctrl - left : yabai -m space --focus prev && landscape
```

## Use

Click the button on the far right to create a new workspace.  Right click that same button to delete current workspace.

[![Support via PayPal](https://cdn.rawgit.com/twolfson/paypal-github-button/1.0.0/dist/button.svg)](https://www.paypal.me/zzzeyez/)
