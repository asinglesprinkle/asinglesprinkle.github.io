---
title: 'What I learned reading a job posting'
description: 'Various topics I researched to learn more about AI and better understand it.'
pubDate: 'Oct 02 2026'
categories: ['ai-general']
draft: false
---

## Inference
Everything after the model training. The model running to produce output for a request.
This is normally split into two portions, Prefill and Decode.

### Prefill 
The whole prompt is pushed through the already loaded weights in parallel which builds the KV cache.
This part of the process is compute bound and determines time to first token.
Time to first token scales with prompt length as well.

### Decode
Generates one token at a time and each token requires reading the entire model's weight from VRAM.
This part of the process is memory bandwidth bound and determines tokens per second.

### Batching
Since the expensive part of fetching the model weights you serve many requests in the same forward pass.
Read the weights once, generate a token for everyone waiting.
This increases throughput. 
Continuous batching would be new requests being able to join mid-flight instead of waiting for the batch to drain.

### Quantization
This is storing each weight with fewer bits: sixteen down to eight or four.
Half of the bits means half the VRAM and since decode is bandwidth bound roughly twice the speed.
A little quality is lost.

### Arithmetic
Given the sizing, 2 bytes, 1 byte, 1 nibble and a hypothetical model of 70 Billion parameters it scales as such
70 x  2 -> 140
70 x  1 -> 70
70 x .5 -> 35

The model begins being loaded into VRAM, the models weights sort of define the structure of the model.
A good analogy here would be .png and .jpg you can have the same image but one is a more lossy format, as you decrease the bits this is what happens.
Or a stone house where you cut the stone blocks larger, its essentially the same house and same shape just different sized blocks and less details at the edges.

Usually a 70B at 1 nibble beats an 8B at 2 bytes.
When you are short of VRAM drop precision before you drop parameters.

## Fine Tuning

### Full fine tuning 
This is updating every weight in the model.
The cost is roughly ten to twenty times the model's size in VRAM because for each weight you hold the weight itself, its gradient, and the optimiser's running averages.
Four full size copies before activiations, essentially matrices.
Impractical on anything but a multi-GPU box.

### LoRA
Instead of updating 70 billion weights you freeze them and train a small pair of matrices alongside.
The update you would have made is low-rank so its expressible as a tall skinny matrix times a wide flat one.
A thousand-by-thousand matrix becomes two thousand-by-eight matrices.
Sixteen thousand numbers instead of a million.

### Hot Swapping
These thing matrices can be hot swapped for different ones since the base model is frozen.
Swap dozens on one base model, one GPU serves many customers.

### Merging
You can multiply the adapter out and fold it into the base weights for slightly faster inference at the cost of hot swapping.

### When to Fine Tune

Imagine three common cases which dont require fine tuning:
- They want the model to know their documents, this is retrieval, not fine tuning.
- Their data changes often so every change means retraining.
- They havent seriously tried prompting yet.

The rule is prompting for knowledge and instructions, fine tuning for consistent format, tone, or a narrow high volume task.

## Thoughts
I just got the mental image in my head when reading about this like the prompting is material forced through some screen or filter which is the model weights.
Almost like air or water flow.
The weights define the shape of that screen and the response is the effect the prompt had on the weights.
You can change the structure of this screen, keep the structure but change the resolution, changing the bits.
You can use a different sized structure altogether, the parameters, get a different screen.
LoRA here would be like adding an additional structure on top of the existing one.














