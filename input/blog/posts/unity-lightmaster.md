Title: Unity Global Illumination Issues
Published: 2021-12-27
Category: news
---
## Unity GI and URP makes me tear my hair out
### Observe man lose mind in real time (lighting)
So this answer is kind of out on the internet already, thanks to some amazing (or perhaps poor) soul who has shared their experience with unity GI:

"Unity Build GI Data gets Stuck"
> Turn off auto-generate lighting and manually build each level, then build.

See [this original thread](https://www.reddit.com/r/unity/comments/i1xhz5/unity_gets_stuck_on_build_gi_data_can_i_have_some/) for a bit more on that, and to give the good `Unity_Pro` some well deserved karma.

Some additional advice I'd like to add:
#### My CPU is melting while my GPU sleeps!  What's up with that? 
Unity's default light mapper uses your CPU.  There's an option to set it to GPU (Preview) mode, which will run the bake on the GPU you configure in the lighting settings.

#### My GI bakes run ultra fast now but break and die directly afterwards with some denoiser error, I hate you! 
If you use an Nvidia GPU, it will automatically set your denoisers to the Optix denoiser.  This requires an absolutely insane amount of VRAM (apparently my 16 GB RTX 3070 doesn't have enough for a single GI bake...). Set the `Filtering` setting to Advanced, and then play with the settings it exposes.   Setting the denoisers to OpenImage (CPU denoising) seems to work for me.  Particularly, setting the Direct denoiser to OpenImage while keeping the indirect denoiser to Optix has bake times of ~3-4 minutes for large scenes on my computer (Ryzen 5 5950X, 32 GB RAM, 16 GB RTX 3070).

#### That still doesn't work!
Try reducing light map resolution and max light map sizes until it works on your machine.  Additionally: consider if you should be using light probes for small objects (tons of static objects in your scene may be unnecessary and produce huge lightmaps).  For more on that, see some advice unity suggests: https://docs.unity3d.com/Manual/GPUProgressiveLightmapper.html

#### That's all cool and I did all that, but I still get stuck on Build GI Data.
This is where things get a little speculative.  Make sure that all the levels configured to be exported in your build settings have manually built light maps - if you didn't bake all of them and ran the build, unity will _reset_ your settings to use CPU baking and occasionally reflag auto-generate to true (or this is stored individually in some scenes).  Triple check this.  If you're stuck on Build Data and notice that a performance monitor only shows CPU activity, it's very likely that Unity reset your light mapper settings.