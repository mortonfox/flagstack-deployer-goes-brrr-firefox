# Flagstack Deployer goes brrr (Firefox version)

## Introduction

The purpose of this Firefox extension is to add keyboard shortcuts to help you deploy green flags on the [Flagstack map page](https://www.flagstack.net/map). This makes the workflow a bit easier when you are deploying a lot of green flags on the map.

Note: You need a premium membership to deploy green flags via the website map.

## Installation

The following is not relevant to Firefox. One would have to run ``web-ext build``, submit it to Mozilla Add-ons, and wait for approval. Then install it from there.

git clone this repository to your local disk or download the zip file and extract.

Go to the Chrome extensions page (chrome://extensions). You'll need to enable developer mode in order to load an unpacked extension.

Click on "Load unpacked extension" and navigate to the folder in which you cloned or extracted the source files. Select this folder to load the extension.

After installing the extension, you can customize the keyboard shortcuts by going to the Chrome keyboard shortcuts page (chrome://extensions/shortcuts). The defaults are <kbd>Alt-G</kbd> to start a green flag deploy and <kbd>Alt-R</kbd> to save the flag.

## Usage

On the Flagstack map page, hit <kbd>Alt-G</kbd> and then <kbd>Enter</kbd> to initiate the flag deploy.

Move the flag into position.

Finally, hit <kbd>Alt-R</kbd> to "click" on the save button to complete the flag deploy.
