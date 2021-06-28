---
layout: layouts/post.njk
title: Week Note Twenty Five - Summer Rain
description: 2021 - Week Note Twenty Five
date: '2021-06-20'
tags:
  - weeknotes
---

## Father's Day

The second time in the lockdown that Father's Day has taken part and it was a rather interesting one this time around as noticing my sons are growing up (and personality clashes), has a particularly like for various food we have baked recently. Plums and blackberries crumble anyone?

## Responsibilities

Nobody wrote the rules on this one for adults. Having a family, maintaining personal wellbeing, making sure everything is functioning at home and work, checking in on friends, keeping the cats fed (hello dead birds as prizes... grr), EVERYTHING.

Which leads to an striking point regarding myself as reflecting on my life so far...

## Self

Sometimes, once in a while, we are human beings and we do often need the wake up call to step back to see the bigger picture. It is no doubt that mine was somewhat eventful in every aspects. Mental health came in at the top of the list and it is not a surprise that it had a detrimental affect on myself. Thankfully my friends and family kept sure that I'm *okay* with reassurance.

Right now, it is all about rebuilding confidence and self-esteem is the key area into improving well-being.

## And finally...

Docker decided to throw a hissy fit and somewhat the build for 11ty is broken. Time to fix the error shown below :D

```
 => [internal] load build definition from Dockerfile 0.0s
 => => transferring dockerfile:60B 0.0s
 => [internal] load .dockerignore 0.0s
 => => transferring context: 2B 0.0s
 => ERROR [internal] load metadata for docker.io/library/11ty-personal-site:latest 1.4s
------
 > [internal] load metadata for docker.io/library/11ty-personal-site:latest:
------
failed to solve: rpc error: code = Unknown desc = failed to solve with frontend dockerfile.v0: failed to create LLB definition: pull access denied, repository does not exist or may require authorization: server message: insufficient_scope: authorization failed
```

### Update 21/06/2021:

Turns out there was no docker image. Ran the command ```docker images``` reveals the container exists. The solution to rebuild of the container, and things are back up and running. Yay!

Stay safe, the warm weather will make a return...!