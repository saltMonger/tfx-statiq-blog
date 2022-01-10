Title: Forgemaster
Tagline:  35 Day Game Jam // Unity
Published: 2021-12-26
Image: assets/img/projects/forgemaster/demo-crop.gif
HeroImage: assets/img/projects/forgemaster/hero.png
Type: Project
Category: 
  - game
Gallery:
  - "[Player1][The dungeon beckons...](assets/img/projects/forgemaster/entrance.png)"
  - "[Player2][The barrows await...](assets/img/projects/forgemaster/demo.gif)"
  - "[Player3][Combat is quick and dangerous](assets/img/projects/forgemaster/fighting.png)"
Link:
  - "[Itch.io](https://zoped.itch.io/forgemaster)"
  - "[Related Blog Post](https://tfx.seawavescollective.net/blog/2021/news/unity-lightmaster.html)"
---
Hack and slash dungeon crawler.

TEAM:
- tfx: Code, Music, Design
- Zope: Code, VFX, Design
- Saspatoon: Level Design, Playtesting
- Xuubasa: Code
- Hiij: Art


Forgemaster was designed as a Secret Santa gift for **saltysalyhug** who specified "roguelike dungeon crawler." The design direction towards dwarvren ruins provided, as well as most of the systems code was provided by Zope.

Special technology includes:
- Procedural room unload and reload: Designed by Zope, the system handles spawning enemies and interactables, and unlocking doors and running cutscenes.  When a player exits the previous room, the room is unloaded and disposed.
- Contextual BGM system:  Utilizing room state management, the BGM can be changed on a per room basis, and responds to both enemy spawn and clear (triggering combat theme and fading to calm/environmental themes).
- Dialogue system: 

This game was also designed with global illumination.  During the process of exporting builds, I discovered a number of workflow caveats with the standard Unity light mapper.  These caveats and trip-ups, as well as workarounds are detailed in my blog posts here: [Unity Global Illumination Issues](https://tfx.seawavescollective.net/blog/2021/news/unity-lightmaster.html)