Title: Lute This!
Tagline: 3 Day Jam // Unreal Engine
Published: 2020-05-11
Image: assets/img/projects/lute/lute-crop.gif
HeroImage: assets/img/projects/lute/lute.png
Type: Project
Category: 
  - game
  - soundtrack
Gallery:
  - "[Player1][An easy chart](assets/img/projects/lute/lute.gif)"
  - "[Player2][Select a song](assets/img/projects/lute/menu.png)"
  - "[Player3][Coins rain down on the player](assets/img/projects/lute/makeItRain.png)"
Link:
  - "[Bandcamp](https://seawaves.bandcamp.com/album/lute-this-ost)"
  - "[itch io](https://metriczero.itch.io/lute-this)"
---
Lute This! is a rhythm game where you perform for a crowd, and pick up the fruits of your busking!

TEAM:
- tfx: Code, Music
- Zope: Code, Design
- BlasterToad: Code, Day-saver
- Metric: Art
- Sand: Code, Design

Lute This! was designed for the first [KJam](https://itch.io/jam/kjam) with a 3 day time limit, and the theme "Loot This."  After deliberating for several hours on the theme, we decided to use word play and explore the direction of a rhythm game where the player not only matches patterns sliding down a "fretboard," but also has to collect coins that appear randomly on stage.

The majority of the framework was finished in the first 2 days of the jam, however the only testing platform used was the in editor play mode.  The technology we used (a MIDI plugin for Unreal Engine) did not work on either Windows or WebGL exports, so we pivoted to a text-based timing system based off of frame time suggested by BlasterToad.  BlasterToad produced the internal framework to handle step chart files (that would tie key presses to musical notes), and I created a C# application that would take MIDI input from the files that I produced alongside the music.  The final system worked well enough in both Windows and WebGL exports!

The soundtrack is available on both Itch.io as a download, as well as on Bandcamp for streaming and download.