---
title: Lucien Hinderling
subtitle: Making microscopes smarter
author: Oskar Wickström
author-url: "https://wickstrom.tech"
date: 2024-08-26
lang: en
toc-title: Contents
version: v0.1.0
---

## Hello!

I am a cell biologist with a background in computer science, developing [real-time feedback control microscopy](#research) approaches at the University of Bern.

## Research
### Smart microscopy
During my PhD in [Pertz Lab](https://www.pertzlab.net) I built an experimental platform for closed-loop, feedback control microscopy. We primarily use the platform for optogenetic experiments, where we segment and track cells in real-time to automatically generate stimulation masks with sub-cellular precision. This technology allows us to manipulate cells with remarkable accuracy, and for example steer them around like tiny biologcial remote-controlled cars. We can control hundreds of cells simultaneously, enabling unprecedented experimental throughput.
<figure>
<pre>
╭──────────────────────────────╮
│ User                         │
╰──────────────────────────────╯
    ↕          ↕          ↕
┌────────┐ ┌────────┐ ┌────────┐
│ GUI    │ │ CODE   │ │ LLM    │
│ napari │ │ python │ │        │
└───┬────┘ └───┬────┘ └───┬────┘
┌───┴──────────┴──────────┴────┐
│ Microscope Control Software  │
│ uManager/pymmcore            │
└──────────────┬───────────────┘
┌──────────────┴───────────────┐
│ Microscope Hardware          │
│ camera/stage/filters/DMD/... │
└──────────────────────────────┘
               ↕
╭──────────────────────────────╮
│ Live Cells                   │
│ biosensors/optogenetics      │
╰──────────────────────────────╯
</pre>
<figcaption>Figure: Architecture of feed-back control microscopy platform.</figcaption>
</figure>

A current project explores how LLMs can interface between users and microscope hardware, to simplify the control of these complex machines and enable complex automation tasks that require reasoning on experimental output. 

As member of the [Smart Microscopy Working Group](https://smartmicroscopy.github.io), I am interested to standardize adaptive feedback microscopy workflows, working with experts from academia and industry to create reference specifications for consistent implementation and reproducibility across imaging systems.

### Image analysis
I'm passionate about all things bio-image analysis. I'm really proud about **[Convpaint](https://github.com/guiwitz/napari-convpaint)**, an interactive pixel classification tool we built. It uses pretrained ViTs to extract image features. Using an simple GUI in napari, users can train a ML model in seconds to find structures in cells and tissues, or even track animals behavior. Convpaint seemlessly handles multidimensional data (time-series, 3D, multichannel).

<hr>

## Publications
<table>
<thead>
  <tr>
    <th class="width-min">Year</th>
    <th class="width-auto">Title</th>
    <th class="width-min">Link</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>2024<br>1st</td>
    <td>Convpaint - Universal framework for interactive pixel classification using pretrained neural networks<br>
    _L Hinderling, G Witz, R Schwob, A Stojiljkovic, M Dobrzyński, M Vladymyrov, J Frei, B Grädel, A Frismantiene, O Pertz_</td>
    <td>[bioRxiv]()</td>
  </tr>
  <tr>
    <td>2024</td>
    <td>Transformer-based spatial–temporal detection of apoptotic cell death in live-cell imaging<br>
    _AP Gagliardi, DU Pizzagalli, PA Gagliardi, L Hinderling, P Lopez, R Zayats, PC Barberà, P Antonello, MP Segura, B Grädel, M Nicolai, A Giusti, M Thelen, LM Gambardella, TT Murooka, O Pertz, R Krause, SF Gonzalez_</td>
    <td>[elife](https://elifesciences.org/articles/90502)</td>
  </tr>
    <tr>
    <td>2023</td>
    <td>Automatic detection of spatio-temporal signaling patterns in cell collectives<br>
    _PA Gagliardi, B Grädel, MA Jacques, L Hinderling, P Ender, AR Cohen, G Kastberger, O Pertz, M Dobrzyński_</td>
    <td>[JCB](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC10374943/)</td>
  </tr>
    <tr>
    <td>2023<br>co-1st</td>
    <td>GTPase activating protein DLC1 spatio-temporally regulates Rho signaling<br>
    _M Heydasch, L Hinderling, J van Unen, M Dobrzynski, O Pertz_</td>
    <td>[bioRxiv](https://www.biorxiv.org/content/10.1101/2023.06.19.545304.abstract)</td>
  </tr>
    <tr>
    <td>2022</td>
    <td>LITOS: a versatile LED illumination tool for optogenetic stimulation<br>
    _TC Höhener, AE Landolt, C Dessauges, L Hinderling, PA Gagliardi, O Pertz_</td>
    <td>[Scientific Reports](https://www.nature.com/articles/s41598-022-17312-x)</td>
  </tr>
</tbody>
</table>

<hr>

## Selected talks

<table>
<thead>
  <tr>
    <th class="width-min">Year</th>
    <th class="width-auto">Title</th>
    <th class="width-min">Event</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>2024</td>
    <td>Smart Microscopy - automation of imaging experiments and active learning.<br>
    _Invited talk, XI Seminar - Seminar on Extended Intelligence_</td>
    <td>[Data Science Lab](https://www.dsl.unibe.ch/lab/seminar/)</td>
  </tr>
  <tr>
    <td>2024</td>
    <td>Feedback-control microscopy.<br>
    _Flash talk and poster, AI and Biology Symposium_</td>
    <td>[EMBL](https://www.embl.org/about/info/course-and-conference-office/events/ees24-01/#vf-tabs__section-programme)</td>
  </tr>
  <tr>
    <td>2023</td>
    <td>Hardware control and smart microscopy approaches in Napari.<br>
    _Invited talk for Librehub LatAm. [VIDEO RECORDING](https://youtu.be/eqsdabsb-oA?si=bowyrcXmDQTfRqN3)_</td>
    <td>[LIBREhub](https://librehub.github.io/napari-LatAm-workshop-2023/intro.html)</td>
  </tr>
  <tr>
    <td>2022</td>
    <td>RhoA dynamics in shape oscillations and blebbing.<br>
    _Award for Best Junior Presentation._</td>
    <td>[Cytomeet conference](https://www.tki.unibe.ch/unibe/portal/fak_medizin/ber_vkhum/inst_tki/content/e393363/e1046028/e1046038/e1046084/e1510294/Program_Cytomeet_2023_eng.pdf)</td>
  </tr>
  <tr>
    <td>2022</td>
    <td>Wie man Zellen mit Licht fernsteuern kann.<br>
    _Public outreach event_</td>
    <td>[Nacht der Forschung](https://www.nachtderforschung.unibe.ch/unibe/portal/microsites/nacht_der_forschung/content/e581313/e1257964/NdF2022_Programm_ger.pdf)</td>
  </tr>
  <tr>
    <td>2022</td>
    <td>Optogenetics workshop: from the fundamentals to the cutting edge. <br>
    _Talk and co-organization of workshop_</td>
    <td>[Signaling Dynamics & Encoding](https://signalingdynamics.org/2022seminar/#workshops)</td>
  </tr>
  <tr>
  <tr>
    <td>2021</td>
    <td>Exploring emergent behaviours in epithelia using feedback-control microscopy<br>
    _BeFri Research Colloquium_</td>
    <td></td>
  </tr>
  <tr>
    <td>2021</td>
    <td>Live or die: Controlling the fate of cells in a tissue in real time using feedback- control microscopy<br>
    _Invited talk at Namur institute for complex systems_</td>
    <td>[naxys](https://www.naxys.be/event/lucien-hinderling-university-of-bern/)</td>
  </tr>
</tbody>
</table>

<hr>

Lovely. We can hide stuff in the `<details`> element:

<details>
<summary>A short summary of the contents</summary>
<p>Hidden gems.</p>
</details>


## Lists

This is a plain old bulleted list:

* Banana
* Paper boat
* Cucumber
* Rocket

Ordered lists look pretty much as you'd expect:

1. Goals
1. Motivations
    1. Intrinsic
    1. Extrinsic
1. Second-order effects

It's nice to visualize trees.
This is a regular unordered list with a `tree` class:

<ul class="tree"><li><p style="margin: 0;"><strong>/dev/nvme0n1p2</strong></p>

* usr                               
    * local                         
    * share                                           
    * games                         
        * solitaire
        * snake
        * tic-tac-toe
    * media                         
* media                             
* run                               
* tmp                               

</li></ul>

Here are some buttons:

<nav>
    <button>Reset</button>
    <button>Save</button>
</nav>

And inputs:

<form class="grid">
<label>First name <input type="text" placeholder="Placeholder..." /></label>
<label>Last name <input type="text" placeholder="Text goes here..." /></label>
<label>Age <input type="text" value="30" /></label>
</form>

Add the `grid` class to a container to divide up the horizontal space evenly for the cells.
Not that it maintains the monospace, so the total width might not be 100%.
Here are six grids with increasing cell count:

<div class="grid"><input readonly value="1" /></div>
<div class="grid"><input readonly value="1" /><input readonly value="2" /></div>
<div class="grid"><input readonly value="1" /><input readonly value="2" /><input readonly value="3" /></div>
<div class="grid"><input readonly value="1" /><input readonly value="2" /><input readonly value="3" /><input readonly value="4" /></div>
<div class="grid"><input readonly value="1" /><input readonly value="2" /><input readonly value="3" /><input readonly value="4" /><input readonly value="5" /></div>
<div class="grid"><input readonly value="1" /><input readonly value="2" /><input readonly value="3" /><input readonly value="4" /><input readonly value="5" /><input readonly value="6" /></div>

If we want one cell to fill the remainder, we set `flex-grow: 1;` for that particular cell.

<div class="grid"><input readonly value="1" /><input readonly value="2" /><input readonly value="3!" style="flex-grow: 1;" /><input readonly value="4" /><input readonly value="5" /><input readonly value="6" /></div>


<figure>
<pre>
┌───────┐ ┌───────┐ ┌───────┐
│Actor 1│ │Actor 2│ │Actor 3│
└───┬───┘ └───┬───┘ └───┬───┘
    │         │         │    
    │         │  msg 1  │    
    │         │────────►│    
    │         │         │    
    │  msg 2  │         │    
    │────────►│         │    
┌───┴───┐ ┌───┴───┐ ┌───┴───┐
│Actor 1│ │Actor 2│ │Actor 3│
└───────┘ └───────┘ └───────┘</pre>
<figcaption>Example: Message passing.</figcaption>
</figure>

Let's go wild and draw a chart!

<figure><pre>
                      Things I Have
                                              
    │                                     ████ Usable
15  │
    │                                     ░░░░ Broken
    │
    │   █         █         █          ░
    │   █         █         █          ░
 0  └───▀─────────▀─────────▀──────────▀─────────────
      Socks     Jeans     Shirts   USB Drives
</pre></figure>

Media objects are supported, like images and video:

![A room in an old French castle (2024)](castle.jpg)

![[The Center of the Web (1914), Wikimedia](https://en.wikisource.org/wiki/Page:The_Center_of_the_Web_(1914).webm/11)](https://upload.wikimedia.org/wikipedia/commons/e/e0/The_Center_of_the_Web_%281914%29.webm)

They extend to the width of the page, and add appropriate padding in the bottom to maintain the monospace grid.