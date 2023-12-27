<center>
  <a title="CodeMelted - PWA" href="https://codemelted.com" target="_self_"><img style="width: 100%; max-width: 500px;" src="https://developer.codemelted.com/assets/images/logos/developer-non-banner.png" /></a>
  <div style="display: grid; grid-template-columns: auto auto auto auto auto; width: 100%; max-width: 500px;">
    <a title="Raspberry Pi Project" href="https://developer.codemelted.com/codemelted_pi" target="_self"><img style="height: 30px;" src="https://developer.codemelted.com/assets/images/icons/raspberry-pi.png"/></a>
    <a title="Embedded Module" href="https://developer.codemelted.com/codemelted_embedded" target="_self"><img style="height: 30px;" src="https://developer.codemelted.com/assets/images/icons/c.png"/></a>
    <a title="Terminal Module" href="https://developer.codemelted.com/codemelted_terminal" target="_self"><img style="height: 25px;" src="https://developer.codemelted.com/assets/images/icons/powershell.png"/></a>
    <a title="Fullstack Module" href="https://developer.codemelted.com/codemelted_fullstack" target="_self"><img style="height: 30px;" src="https://developer.codemelted.com/assets/images/icons/javascript.png"/></a>
    <a title="Web Module" href="https://developer.codemelted.com/codemelted_web" target="_self"><img style="height: 30px;" src="https://developer.codemelted.com/assets/images/icons/flutter.png"/></a>
  </div>
  <div style="display: grid; grid-template-columns: auto auto auto; width: 100%; max-width: 500px;">
      <a id="btnDevGitHub" title="About Me" href="#" target="_blank"><img style="height: 30px;" src="https://developer.codemelted.com/assets/images/icons/github.png"/></a>
      <a id="btnDevSupport" title="Support My Work" target="_blank" href="#"><img style="height: 30px;" src="https://developer.codemelted.com/assets/images/icons/bmc-button.png" /></a>
      <a id="btnDevJSON" title="JSON Feed" href="#" target="_blank"><img style="height: 30px;" src="https://developer.codemelted.com/assets/images/icons/json-feed.png"/></a>
  </div>
</center>

<h1> <img style="height: 35px;" src="assets/images/favicon_io/apple-touch-icon.png" /> CodeMelted Developer </h1>

"Write once, run anywhere (WORA)" was the famous slogan made by Sun Microsystems in 1995.  At the time, this technology allowed for easy full stack engineering allowing you to target dedicated workstations and on premise servers. So long as a Java Runtime Environment existed, you could run your code. Java was unable to keep to their slogan as web browsers became more advanced, mobile devices became ubiquitous, and companies no longer required dedicated servers.

Enter the Progressive Web Applications (PWA). A technology stack that utilizes the web browser as the ultimate runtime environment. You can run your application so long as a web browser is on the device. This is the same mantra and spirit of the original Java slogan.

The goal of this project is to aid software engineers in building and delivering on PWAs. It will implement a series of identified use cases across the different identified SDK technologies to support all aspects of a PWA. The later sections of this document will expand on this philosophy.

**Table of Contents**

- [Features](#features)
  - [Use Cases](#use-cases)
    - [Transactional](#transactional)
      - [About](#about)
      - [Console](#console)
      - [Data](#data)
      - [Error](#error)
      - [Logger](#logger)
      - [Math](#math)
      - [Runtime](#runtime)
      - [Task](#task)
      - [UI](#ui)
    - [Protocol](#protocol)
      - [Async](#async)
        - [Process](#process)
        - [Task Workers](#task-workers)
      - [Audio](#audio)
      - [Network](#network)
        - [Broadcast Channel](#broadcast-channel)
        - [Fetch / HTTP](#fetch--http)
        - [WebSocket](#websocket)
        - [WebRTC](#webrtc)
      - [Peripheral](#peripheral)
        - [Bluetooth](#bluetooth)
        - [MIDI](#midi)
        - [Orientation](#orientation)
        - [USB](#usb)
      - [Storage](#storage)
        - [Database](#database)
        - [File](#file)
        - [Key-Value](#key-value)
  - [Module Design](#module-design)
    - [Named Parameters](#named-parameters)
    - [Sequence of Events](#sequence-of-events)
    - [Error Handling](#error-handling)
- [Version](#version)
  - [Document](#document)
  - [Module](#module)
- [License](#license)

# Features

The following identifies the use cases that will make up the module and the design paradigm of the modules. Not all use cases are implemented in each module as they will not apply to that module's SDK environment.

## Use Cases

<center>
  <img style="width: 100%; max-width: 500px;" src="assets/images/use-case-model.drawio.png" />
</center>

### Transactional

Transactional use cases represent use cases where you ask and then get an answer. Some will be synchronous and some not. If the transaction returns a value but the transaction fails, a error return value is returned. Void transactional failures can also be checked. See the [Error Use Case](#error) for details.

#### About

Their are multiple common items one can query about the environment their application runs on. This use case will provide a set of these common queries to allow for quick access to the information.

#### Console

A user interface is too hot. A command line interface is too cold. Interacting with a user via STDIN / STDOUT is just right. This will provide basic prompts to get answers from the user without all the fancy user interface glitz.

#### Data

This use case will provide a set of functions for checking, transforming, and validating data. Each module will essentially make use of dynamic data. Provide this is key for successful application data transactions.

#### Error

Things can fail. This use case provides the user the ability to access the last transactions success or failure. If a use case request fails, an error will be accompanied with the use case function. If it was successful, then no error message will exist. Each use case transaction will clear this value.

#### Logger

Regardless of what managers tell you, without data, we can't fix it. This use case will utilize the logging facilities available to the language SDK implementing a common logging level schema and signature. It will also expose a log handler environment allowing you to further process logged events.

#### Math

This use case will provide a collection of math formulas. The user will simple specify the formula, provide the data, and poof, the answer will appear.

#### Runtime

The module SDKs will have very specific SDK strengths that may not be available to all modules. This use case will cover such requests. Where commonality exists, it will be provided. For everything else, it will be specific to the particular module SDK.

#### Task

This use case provides a developer the ability to schedule one-shot asynchronous task processing either on the main thread or the background so you can do more then one thing. You can also schedule repeating tasks and cancel them later.

#### UI

This use case will provide the developer the ability to define a single page application. This singular view will then utilize a controller that allows for the updating of the UI state. It will also provide dialog functions to present other information to a user. Also attached with this use case is the building of specific widgets and layouts to build out the single page application view.

### Protocol

A protocol is *[a set of rules or procedures for transmitting data between electronic devices](https://www.britannica.com/technology/protocol-computer-science)*. In analyzing the different ways a Progressive Web Application (PWA) and supporting infrastructure would need to exchange this data, an asynchronous protocol design was chosen.

In this design paradigm, a developer will request a particular protocol and if successfully constructed, get a protocol id back. This signifies the protocol was successfully opened and ready for data posting. The protocol id is utilized for both posting data to the protocol and eventually terminating it. To process data, a handler is specified as part of the protocol creation.

#### Async

The shortest path between two point is a synchronous straight line. Well imagine if you could throw another task up in the air, continue that path, and catch it later with it being completed.

##### Process

This can be programs / services that provide a command line interface (CLI) or a text based protocol that are running on the same computer your application will run. This use case will wrap the ability to start / interact with such a program / service via STDIN / STDOUT / STDERR pipes available via the operating system.

##### Task Workers

This use case provides a developer the ability to schedule asynchronous task processing where tasks are queued up in First In First Out (FIFO) order for processing. This can occur on the main thread or background thread if available to the module SDK implementation.

#### Audio

Apps need the ability to play sound. This use case provides the ability to play back audio files. This use case will also provide the ability to perform text-to-speech actions.

#### Network

A network allows computers to exchange information via the Internet. The protocols captured by this use case will utilize layer 4 of the [OSI Model](https://en.wikipedia.org/wiki/OSI_model). The use cases chosen represent protocols specific to Progressive Web Applications.

##### Broadcast Channel

>[The Broadcast Channel](https://developer.mozilla.org/en-US/docs/Web/API/Broadcast_Channel_API) allows basic communication between browsing contexts (that is, windows, tabs, frames, or iframes) and workers on the same origin.

This use case will provide the setup of such a communication for your web applications.

##### Fetch / HTTP

The Internet implemented a one REST policy. REST APIs provide services to allow clients to interact with their services to include any ones you implement. This use case provides the means to interact and define these APIs.

##### WebSocket

>[WebSocket](https://en.wikipedia.org/wiki/WebSocket) is a computer communications protocol, providing simultaneous two-way communication channels over a single Transmission Control Protocol (TCP) connection.

This use case will provide the ability to connect ans serve this protocol to provide two way communication between web applications.

##### WebRTC

>With [WebRTC](https://webrtc.org/), you can add real-time communication capabilities to your application that works on top of an open standard. It supports video, voice, and generic data to be sent between peers, allowing developers to build powerful voice- and video-communication solutions. The technology is available on all modern browsers as well as on native clients for all major platforms.

This use case will provide the ability to connect and define such real-time communications between your web applications.

#### Peripheral

>The term [peripheral](https://en.wikipedia.org/wiki/Peripheral) device refers to all hardware components that are attached to a computer and are controlled by the computer system, but they are not the core components of the computer.

The sub-sections below describe the different protocols this use case will create for your application.

##### Bluetooth

> <a href="https://en.wikipedia.org/wiki/Bluetooth" target="_blank">Bluetooth</a> is a short-range wireless technology standard for exchanging data between devices. This powers most Internet of Things (IoT) in your smart home or say your headphones with your mobile device.

This use case will provide the elements of this protocol so you can interact with such data within your application.

##### MIDI

>[MIDI (/ˈmɪdi/; Musical Instrument Digital Interface)](https://en.wikipedia.org/wiki/MIDI) is a technical standard that describes a communication protocol, digital interface, and electrical connectors that connect a wide variety of electronic musical instruments, computers, and related audio devices for playing, editing, and recording music.

This use case will provide the elements of this protocol to exchange read and write such data.

##### Orientation

Modern mobile devices are equipped with sensors (i.e. GPS, accelerometer, gyroscope, etc.) for determining your orientation in 3 dimensional space. This use case will wrap those sensors to properly report updates in 3D space of your application.

##### USB

><a href="https://en.wikipedia.org/wiki/RS-232" target="_blank">RS-232</a> and later USB represent wired protocols for communicating with connected devices to read / write data.

This use case will expose the capabilities to communicate with such connected devices to exchange data.

#### Storage

Every kitchen has a junk drawer that can store all necessary items locally. You would not necessarily remember what was in there but you knew it was there. The sub-sections below describe the different storage methods available.

##### Database

Databases allow you to store more complex relational data. Enterprise layer applications and services will use enterprise later solutions (mySql, postgres, etc.). This use case will implement an embedded database based on the technology available to the module SDK.

##### File

Files on disk allow you to read and write data from disk. This use case will provide the ability to write string or binary data within the file with the ability to seek anywhere within the file.

##### Key-Value

This use case will provide a simple key / value pair string storage capability representing the easiest of the storage methods available via the modules.

## Module Design

<center>
  <img style="width: 100%; max-width: 500px;" src="assets/images/sequence-diagram.drawio.png" />
</center>

- *NOTE: All modules will exhibit the same paradigm documented in the sub-sections below except for the codmelted_embedded module. This module utilize the C-style interface will and not have the ability to utilize the [Name Parameters](#named-parameters) design paradigm. It will utilize a C-style paradigm following the principals called out by the Name Parameters.*

### Named Parameters

Each [Module Use Case](#use-cases) functions will utilized named parameters to carry out the use case request. Any invalid combination of name parameters will result in an error. This paradigm was chosen so that a developer is calling out the action of the use case function.

### Sequence of Events

Each of the [Module Use Cases](#use-cases) are represented by a function that will take a series of named parameters to invoke the given use case. If the use case function can return a value, it will return either a valid value as requested or indicate an error. In the event of a void return, a developer can check for use case function success via the [Error Use Case](#error). Every module will follow this paradigm so that a developer familiar with one particular module will be familiar with all modules.

### Error Handling

The [Error Use Case](#error) describes a function that can be utilized to get the last error associated with a use case transaction. Essentially every attempt is made by the module to handle any error and provide a C-style flag back to the user. This was chosen to allow for consistency between all modules and reduce try-catch logic which can impair performance.

A developer can also utilize the [Logger Use Case](#logger) as any handled error will also be logged. This provides the developer two chances to catch and fix errors prior to their applications deployment with the module.

# Version

The following documents the version of this document and explains the *CodeMelted Module* versioning scheme.

## Document

**26 Dec 2023:**
- Updated use case model to what I believe will be the use case organization.
- Documented all the sections of this document to tell the story.
- I am sure these will change as I start implementing each of the modules.
- Will also give thought as to what version 1 of this module will look like because I am not sure all of these will need defining to get to a version 1. We will see.

**23 Dec 2023:**

- Finalized design document to begin fleshing out this document.
- Stubbed all the different sections to begin filling it out.

## Module

```
X.Y.Z (dd mmm yyyy):
^ All module use cases are implemented
  ^ An individual use case becomes available
    ^ Use case fixes / tweaks
```

As the CodeMelted modules are developed, they will be versioned as identified above. A use case is considered available when a sufficient portion of its functionality is developed, tested, and documented. This will reset the `.Z` for any fixes made to existing available module use cases. When everything is done, it will be released as `1.0.0`.

- *NOTE: The `2.0.0` version of any module is considered something outside this design document. It will be covered with a similar document as this if something is ever considered worthy* 🙂.

# License

MIT License

© 2023 Mark Shaffer. All Rights Reserved.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

<script src="assets/js/codemelted_channel.js"></script>