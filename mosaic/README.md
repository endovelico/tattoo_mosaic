Oh, **this is where I think the project gets really interesting**.

I wouldn't think of the mosaic as "a photo gallery attached to my blog." I'd make it the **visual language of the blog itself**.

The important conceptual shift is:

> **The photos are the navigation. The blog posts are hiding inside the mosaic.**

So instead of:

```text
BLOG
────────────────────
Hero card

Article 1
Article 2
Article 3
Article 4
```

you have:

```text
                 PHOTO     PHOTO
        PHOTO
                           PHOTO
   PHOTO       PHOTO              PHOTO

             PHOTO
                    PHOTO

      PHOTO                 PHOTO
```

and the user discovers that these images are actually **doors into your writing**.

## I see 4 particularly good directions

### 1. The mosaic *is* the homepage

This is probably my favorite for what you're building.

The initial page is essentially your current artwork.

Each image corresponds to something on the blog:

```text
        ┌───────────┐
        │           │
        │  PHOTO    │───────┐
        │           │       │
        └───────────┘       │
                            ▼
                         POST
                         ─────────
                         Title
                         Date
                         Excerpt
```

When you hover an image:

* it moves slightly toward you
* becomes sharper/brighter
* perhaps other images retreat
* a small title appears
* maybe a category/tag appears

Something like:

```text
             ┌──────────────┐
             │              │
             │              │
             │   PHOTO      │
             │              │
             ├──────────────┤
             │ The Long Way │
             │ Home         │
             └──────────────┘
```

Click it → Hugo article.

**The homepage doesn't look like a blog until you interact with it.**

That's a pretty powerful identity.

---

# 2. Keep your Hero Card — but make it part of the mosaic

This might be even more interesting given what you already have.

Don't throw away your existing hero card.

Instead, make it the **one stable object in an otherwise unstable world**.

Imagine:

```text
┌───────────────────────────────────────────────────────────┐
│                                                           │
│  photo     photo          photo       photo               │
│                                                           │
│       photo       ┌───────────────────────┐               │
│                   │                       │               │
│    photo          │       HERO CARD      │       photo    │
│                   │                       │               │
│                   │   Latest article      │               │
│                   │                       │               │
│       photo       └───────────────────────┘       photo   │
│                                                           │
│             photo                photo                    │
│                                                           │
└───────────────────────────────────────────────────────────┘
```

The hero card could remain relatively conventional:

**TITLE**

Short description.

`Read →`

while the photographs behind it continuously drift/react.

That gives you a very nice contrast:

**chaos + structure**

---

# 3. The mosaic represents the *entire history* of the blog

This is the more ambitious idea.

Every post gets one or more images.

New posts are added to the mosaic.

Older posts gradually drift further into the background.

So the homepage becomes a kind of **visual archive**.

You could have:

```text
NEW
↑

       large
       recent
       articles

       ↓

    older articles
    smaller / deeper

       ↓

VERY OLD
```

And depth suddenly has semantic meaning.

Our `depth` property could become:

```text
depth 1.0 → newest / important
depth 0.7 → recent
depth 0.4 → older
depth 0.1 → archive
```

Now the physics aren't just decorative.

**The visual depth represents time.**

I really like that.

---

# 4. Two modes: "Explore" and "Read"

This is perhaps the most usable version.

### Explore

You see:

![Image](https://images.openai.com/static-rsc-4/QGCR3E5DmSm8-mf_Q4LsrY6xatKTdo0PAADhBDYuReE4HLVO99tQ3y9tF08vAB3iOm-3_kx11Tyo9k5FNdhk9ctftQjB_DE2BxywKgwPGuz71edFr_wCYTt1NX5oYaUZ0lEyop25eX4-ZsONbZDXPsusFLS6-v930KMdrIRMpNJV7ygWtJhVamujcaFSGY-1?purpose=fullsize)

![Image](https://images.openai.com/static-rsc-4/k2wVxJnlC_gDpZYfd-jKnq63T4iw_Fs6_qfyIiT2Z5FJpKxsc6YXPF32UUdZWeyBpNPXdTttCnrojPubkPafD4uon8bNlKJzceyWTrbQpkI7mgN92hsW0uF9ZPHIJWNTavmPU54sHeDw0vPBMA35gxZteqP3w072P9ZydSVkVEXABYMNwa0PII_cIm5CfOab?purpose=fullsize)

![Image](https://images.openai.com/static-rsc-4/e0nEtIR-OCQLYasj5I9MYwRXiH9rThFnqn83XuX4yI4aafpUYAlHiHif3sHxNagkNccQS9rsZiVDy02RJa4r1hcCkQnCSeWt1VQGqLzQ3GNJiGdoFi11qzGHRy5vJBvBUnXHezvYXTEL_4ZBREISluGuaRcez4-N2ai-OKlIX8ZLUa5SIXnrUViXSVZ90ZvW?purpose=fullsize)

![Image](https://images.openai.com/static-rsc-4/fBUc7E7J1CzEYKVx3QYVya-xydSRW3X47B_xOfuvyvhT9yUktniMxcaBMj2U_Kd_6Jk7bfAY4PTQPoyc9JHOd0yh5-3zk6cEq_Q2AfGfHgB231fUB-EyxgtzAjBeE_ZeSpbgz1aCPX4TVb-VvXdnCHC_rGVFF-oQUrpl79Far7VHOLYJXTkP493eqGdqOyv7?purpose=fullsize)

![Image](https://images.openai.com/static-rsc-4/hzY5iBmLVGCOnYw67_bvt_UFjQPdUdYUxszZhBNAZ62hK7p0Q5Z00knBwzZl-sPXSwLONIc72CY75bv7n53Sqv9ChBjFmj_k_HnyA01v6JSJsUV3wzO_OPoEB457t4NqvFPW-BXDD7qWO4iSMz60cvsYSZlg7Bz8D4WKScoEecGo70yWgJOP7sJ6ThqKXLTX?purpose=fullsize)

![Image](https://images.openai.com/static-rsc-4/APK2TFLaKcoJdSdPv1MOMqYJ5H90vshYOwGwBBcYNUqNi7p5y5koJbRsgw50e26ZbG-3fOz5jntPGrkdyOhG0bYLLmzjdEo0HgK5MjsoFFi5YRZoNs6cIrLgqbo2IyXTtfuRuCnGMNebRzPaALpJbyYYnSE5RKPiWN41TBz36qMiwcvnnP0YDrJkLkoc0MJQ?purpose=fullsize)

The full-screen mosaic.

No traditional navigation dominating the screen.

Move around.

Hover.

Discover.

Click.

### Read

Once you click an image, transition into your Hugo article.

Something like:

```text
                  MOSAIC
                    ↓
              click image
                    ↓
             ┌────────────┐
             │            │
             │   ARTICLE  │
             │            │
             └────────────┘
```

And the transition could actually use the clicked photograph.

For example:

```text
             [PHOTO]
                │
                │ expands
                ▼
       ┌──────────────────┐
       │                  │
       │      PHOTO       │
       │                  │
       ├──────────────────┤
       │                  │
       │  Article Title   │
       │                  │
       │  text...         │
       │                  │
       └──────────────────┘
```

So the photograph the reader clicked becomes the article's hero image.

That would feel **very cohesive**.

---

# And Hugo actually makes this architecture quite nice

You don't need to turn the whole Hugo site into a JavaScript application.

I'd keep Hugo responsible for the **content**:

```text
content/
├── posts/
│   ├── post-one.md
│   ├── post-two.md
│   └── post-three.md
```

with frontmatter such as:

```yaml
---
title: "The Long Way Home"
date: 2026-08-12
images:
  - "/images/home.jpg"
  - "/images/mountain.jpg"
  - "/images/road.jpg"
tags:
  - travel
  - photography
---
```

Then Hugo generates the data that our mosaic needs.

The mosaic application becomes the **presentation layer**.

Conceptually:

```text
                 HUGO
                  │
          posts + metadata
                  │
                  ▼
          ┌───────────────┐
          │    MOSAIC     │
          │               │
          │ image         │
          │ title         │
          │ url           │
          │ date          │
          │ tags          │
          └───────────────┘
                  │
                  ▼
             user clicks
                  │
                  ▼
            HUGO ARTICLE
```

That's a very clean separation.

---

# Here's an idea I particularly like for *your* project

I'd make the homepage have **three layers**.

### Layer 1 — The photographs

This is what we've been building.

Full-screen.

Dense.

Overlapping.

Different sizes.

Depth.

Physics.

Almost no UI.

### Layer 2 — Information

Information is normally invisible.

When you approach an image:

```text
             PHOTO
        ┌───────────────┐
        │               │
        │               │
        │               │
        └───────────────┘
          The Long Way
          Home
          08.12.26
```

The text could emerge from underneath/alongside it.

### Layer 3 — Navigation

Instead of a giant navbar, perhaps just something extremely minimal:

```text
                    YOUR NAME
                         
                         +
```

or:

```text
                         MENU
```

Then opening the menu could reveal:

```text
WORK
WRITING
ABOUT
ARCHIVE
```

The interface stays out of the way.

---

# There's another really cool possibility

**Use the actual content of the blog to determine the mosaic.**

For example:

A post has:

```yaml
title: "Walking Through Winter"
tags:
  - nature
  - travel
  - photography
```

Its images could be positioned near other posts with similar tags.

So you end up with **semantic neighborhoods**.

Something like:

```text
                    TRAVEL

       mountain     road       train
          │          │          │
          └──────────┼──────────┘

                    YOU ARE HERE

             ┌────────────────┐
             │   NEW POST     │
             └────────────────┘

          ocean       coast       boat

                    PHOTOGRAPHY
```

The user isn't explicitly told this.

They just start noticing that certain visual themes cluster together.

That could become **very sophisticated** without making the interface complicated.

---

# And I'd make the hero card special

Rather than having the hero card simply say:

> Latest Post

I'd make it something like:

**THE LATEST**

> *The Long Way Home*

*A story about...*

`READ`

And give it a **slight gravitational influence** over nearby images.

So when you approach the hero:

```text
                 photo
                   ↘
       photo →  HERO  ← photo
                   ↗
                 photo
```

The surrounding mosaic subtly rearranges itself.

The hero is therefore physically part of the world.

---

# My recommendation

I'd build toward this:

```text
                        BLOG
                         │
                         ▼
              ┌────────────────────┐
              │                    │
              │   FULL-SCREEN      │
              │     MOSAIC         │
              │                    │
              │  photographs are   │
              │  the navigation    │
              │                    │
              └─────────┬──────────┘
                        │
                hover / approach
                        │
                        ▼
              ┌────────────────────┐
              │ image + title      │
              │ image + metadata   │
              └─────────┬──────────┘
                        │
                      click
                        │
                        ▼
              ┌────────────────────┐
              │                    │
              │    HUGO POST       │
              │                    │
              │  hero photograph   │
              │  title             │
              │  writing           │
              │                    │
              └────────────────────┘
```

And crucially:

**Don't make the mosaic a separate microsite.**

Make it the **front door to the Hugo site**.

That way you get the artistic experience *and* retain everything Hugo is good at: URLs, Markdown, RSS, SEO, static generation, archives, tags, etc.

### The next technical thing I'd do

Before we make more visual effects, I'd connect **one real Hugo post to one of our tiles**.

That means we can stop using:

```ts
https://picsum.photos/...
```

and instead have something conceptually like:

```ts
{
    image: "/images/mountain.jpg",
    title: "The Long Way Home",
    url: "/posts/the-long-way-home/"
}
```

Then we'll make **clicking a tile actually open a real Hugo article**.

Once we have that working, we can experiment with the really fun stuff — hover states, article previews, transitions, and eventually having the Hugo frontmatter drive the entire mosaic.

