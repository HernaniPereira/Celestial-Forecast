# Zircon - A user-friendly Tile Engine & Text GUI [![Tweet](https://img.shields.io/twitter/url/http/shields.io.svg?style=social)](https://twitter.com/intent/tweet?text=Do%20you%20plan%20to%20make%20a%20roguelike%3F%20Look%20no%20further.%20Zircon%20is%20the%20right%20tool%20for%20the%20job.&url=https://github.com/Hexworks/zircon&hashtags=games,roguelikes)

<img src="https://cdn.discordapp.com/attachments/205245036084985857/481213000540225550/full_example.gif"  alt="Full Example"/>

Need info? Check the [Docs][zircon-docs]
| or [Create an issue](https://github.com/Hexworks/zircon/issues/new)
| Check [our project Board](https://github.com/Hexworks/zircon/projects/2)
| [Ask us on Discord][discord]
| Support us on [Patreon](https://www.patreon.com/hexworks)
| [Javadoc / Kdoc](https://hexworks.github.io/zircon/)

[![Circle CI](https://circleci.com/gh/Hexworks/zircon/tree/master.svg?style=shield)](https://circleci.com/gh/Hexworks/zircon/)
[![Maven Central](https://maven-badges.herokuapp.com/maven-central/org.hexworks.zircon/zircon.core/badge.svg)](https://maven-badges.herokuapp.com/maven-central/org.hexworks.zircon/zircon.core)
[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)
[![Awesome](https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)](https://github.com/sindresorhus/awesome)

---

## Table of Contents

- [Getting Started](#getting-started)
    - [Adding Zircon as a Maven Dependency](#adding-zircon-as-a-maven-dependency)
    - [Basic Usage](#basic-usage)
- [Best Practices](#best-practices)
- [Features at a Glance](#features-at-a-glance)
    - [Drawing](#drawing)
    - [Input Handling](#input-handling)
    - [Layering](#layering)
    - [Text GUI Components](#text-gui-components)
    - [Animations](#animations)
    - [Shape and Box Drawing](#shape-and-box-drawing)
    - [Fonts and Tilesets](#fonts-and-tilesets)
    - [Road Map](#road-map)
    - [License](#license)
    - [Credits](#credits)
    - [Thanks](#thanks)

## Getting Started

If you want to start working with Zircon you can either add it to your project as a Maven dependency or you can try out
the skeleton projects
([Java](https://github.com/Hexworks/zircon.skeleton.java), [Kotlin](https://github.com/Hexworks/zircon.skeleton.kotlin))
which come with batteries included.

The official [documentation site][zircon-docs] contains a lot of information. The examples are also documented on the
[Zircon Examples](https://hexworks.org/zircon/examples/) page *(under construction)*, and the best place to start is the
[Zircon Crash Course](https://hexworks.org/zircon/docs/2018-07-18-a-zircon-crash-course).

If you like learning by doing check out the source of *Zircon* from [here](https://github.com/Hexworks/zircon) and you
can run the examples for yourself. If you are using *Java*
start [here](https://github.com/Hexworks/zircon/tree/master/zircon.jvm.examples/src/main/java/org/hexworks/zircon/examples)
. Alternatively if you use *Kotlin* the code can be
found [here](https://github.com/Hexworks/zircon/tree/master/zircon.jvm.examples/src/main/kotlin/org/hexworks/zircon).

If you just want to peruse the *Zircon* API navigate [here][api]. Everything which is intended to be part of the public
API is there.
