---
title: 'Getting into AI video making'
description: 'AI video making and all the troubles that come with it.'
pubDate: 'Sep 23 2026'
categories: ['ai-videos']
draft: false
---

So let's start with some assumptions.
AI video making is easy - yes and no.
If you want something goofy and cartoony and don't care about vibe or consistency then yes it's easy.
If you want a real interesting world where rooms stay the same, people don't morph, the number of fingers is correct then no it's really hard.

I want to introduce you to the pain points I've found:

1. Characters change each image generation
2. Rooms are never consistent, they change with every camera shift
3. Number of fingers
4. Non-sense logic, models will always make someone have a cigarette in both hands for instance
5. Certain materials are a no-go, thin materials like wire, furry seems to be handled badly
6. Cuts and camera angles in a single setting are incredibly difficult

The solutions to these common issues:

- **1.1** Create character sheets, sheets which show a character in multiple angles on a neutral background
- **1.2** Some models and frameworks offer consistent character rendering
- **2.1** Similarly you can attempt to capture a room from various angles to reduce variation
- **2.2** A better method appears to have 3D renders of spaces through tools like (OpenArts Worlds) which allow for consistent environment and camera angle placement
- **4** Sometimes this is just luck of the draw, you can reduce variation by being very explicit with prompts for scene generation. It's best to render a starting frame which looks correct and animate from there instead of doing it all cold.
- **5** This may change model to model but image generation and video generation seem to handle these poorly, there might be a workaround but given my themes I don't have a strong enough reason to attempt to overcome this
- **6** Again going back to point 2.2 having a consistent 3D world through some method will help this

Types of AI videos:

- **Straight prompting:** Most models want a starting image, I'm sure some will do direct to video so you just have maximum variation, minimal control, and every round is a gamble.
- **Low preproduction:** You want to reduce variation so essentially do what real studios do, storyboard out the scenes, make a frame which can become animated, ensure you have character sheets, objects, settings, locations all recorded and saved as images, there's more but this is the short of it.
- **High preproduction:** Full on 3D spaces, sometimes taking 3D scenes and rendering video based on it so the model has more to work with, it's a hybrid approach to reduce variation and shape the process better.
- **Video to Video:** There are various ways to do this but sometimes there are real humans basically in front of a green screen actually acting and later the model turns this video into the desired look using variations of the methods above.

Given my technical limitations and personal style I sit between low and high preproduction.
Given what I create I just have to need yet to do more.
I create images in Midjourney with a personalized setting so all prompts will be unique to my preferences.
I take those images and combine them whether it be people with object to say make someone have a backpack or put a person in a scene or map out the entire world furniture style it's all included at this range and above.

I experimented with Google Flow because they boast consistent character software however it's not native to the model it's part of the Flow product which behind the scenes seems to influence prompt weights.
The product is also just bad at this period in time, sometimes video download will fail, you can only create content by chatting with Gemini and it will almost every time never send off your request, sometimes the videos can't be downloaded, there are regional forced watermarks.
After this flop I switched over to another program.

I currently use Hailuo Minimax H3 for Image to Video and it's been worlds better, there is even free Nano Banana Pro image generation for me at the moment which helps place consistent characters within a scene.

It's much different than software engineering and we all encounter these AI videos all the time.
I think it's fun to look at them now and realize some of what you see isn't so much a style as a limitation of software.
If you see a video that handles the pain points 1-6 very well you will know that person has mastered the technique and each video may take hours and hours to create, it's truly not just a one-off thing that can be done.
I've only ever seen a handful of accounts on TikTok which can pull it off.

Anyway I just wanted to share, thanks for reading.
