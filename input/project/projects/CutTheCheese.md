Title: Cut the Cheese Simulator
Tagline: 10 Day Game Jam // Unity
Published: 2021-05-03
Image: assets/img/projects/cheese/cheese-crop.gif
Type: Project
Category: 
  - game
Gallery:
  - "[Player1][Unprocessed processed \"cheese\" cubes roll down the line...](assets/img/projects/cheese/cheese.gif)"
Link:
  - "[itch io](https://zoped.itch.io/who-cut-the-cheese)"
---
Cut the Cheese Simulator is a tongue in cheek not-quite-cheese production simulator.

TEAM:
- tfx: Code, Music, UI
- SonderGaming: Code, Art, Level Design, Tutorialization
- Zope: Code, VFX
- Hiij: Art
- Xuubasa: Code

Designed and built for the Jamulator 2021 game jam, where it ranked 1st out of 94 entries.  The constraint for the game jam was to create games in a "Simulation" genre.

This was a breakaway success that taught us how valuable tutorialization and level design is in game development.  Much of the success and enjoyment we attribute to very clear game play and good scaling of difficulty that shows you how to play the game without throwing prompt after prompt at you.

This game saw the development of several concepts and internal libraries that we continue to use today, including:
 - Task management and tracking:  A scene level manager watches for task conditions which are configured per level by ScriptableObjects.  This allows level designers to quickly specify and tune level difficulty and included  mechanics.  This level manager integrates with the next system,
 - World UI based on Unity UIXML:  Leveraging upcoming technology, a display is programmatically created using an XML language similar to XAML.  Elements are styled using a variation of CSS called USS.  The Task management component notifies the UI to update and reflows UI components as necessary.
 - Abstract interaction system: Robust and extensible situation that allows for game objects to follow common interaction  code as well as execute specialized logic.  This allowed for changes to be made across the entire game to update the UI dynamically when looking at objects with displayable information in 4 lines of code.