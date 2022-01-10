Title: Estranged
Tagline: 3 Day Jam // Unity
Published: 2020-10-23
Image: assets/img/projects/estranged/estranged-crop.gif
HeroImage: assets/img/projects/estranged/hero.png
Type: Project
Category: 
  - game
Gallery:
  - "[Player1][The player embarks on their journey](assets/img/projects/estranged/estranged.gif)"
  - "[Player2][The player readies the spaceship](assets/img/projects/estranged/spaceship.png)"
  - "[Player3][The world awaits...](assets/img/projects/estranged/sky.png)"
Link:
  - "[Itch.io](https://metriczero.itch.io/estrange)"
---
Estranged is an emotional story telling experience with heavy themes of manipulation and actualization.

TEAM: 
- **tfx**: Code, Music
- **Zope**: Code, VFX, SFX
- **Metric**: Art, Story

Designed and built for the 2nd Ben Bonk Game Jam.  The jam lasted 3 days and the theme was "Limited Space."  We placed 23rd overall with our experience.

This was our first narrative heavy game, focusing solely on story delivery - the only controls are moving left and right, and interacting with a space ship.  Most of the systems in this game revolved around showing dialogue, movement and staging of sprites, and dynamic audio.

I wrote the basis for an audio system that is still in use in all of my Unity projects, "GrannyTone" based off a set of [audio examples](https://gamedevbeginner.com/how-to-play-audio-in-unity-with-examples/).  This system not only allows seamless looping between intro and loop sections of music, but also the transition between sets of intros and loops.  This is triggered by collision zones in the game to schedule a move to the next section of the music (building tension, flourish section, resolve).  This allows the player to experience the game at their own pace without the music reaching inappropriate highs or lows for the situation.