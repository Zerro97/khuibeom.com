---
year: '2023'
from_date: 2023-01
to_date: 2023-01
title: 'Link Shortener'
description: 'Link Shortener for personal use'
image: '/projects/link-shortener.png'
icon: 'fluent-emoji-flat:link'
slug: link-shortener
livelink: 'https://link.khuibeom.com/'
repo: ''
team: 1
---

## Introduction
Whenever I had to attach a link to some of my social media or portfolio websites, it always nagged me that I have to type out the full url like this: [https://www.linkedin.com/in/hui-beom-kim-4a0849165/](https://www.linkedin.com/in/hui-beom-kim-4a0849165/). 

To create a shortend links, I tried searching online for link shortener services. Most of them, however, uses their own domain names for free plan. I wanted use my own custom domain name so I looked at open source projects to self host the service instead.

Among many options, I tried out [kutt.it](https://github.com/thedevs-network/kutt) and [notiolink](https://github.com/theodorusclarence/notiolink). While I liked their clean looking UI of the website and the documentation of the installation process, I did not really like the fact that I still have to setup a database for user authentication. I didn't want to deal with database and possible security concerns so I created my own website whose only purpose was to redirect to another website.

It was a little too simple, so I tried adding QR code for redirection as well. I'm not sure if I'll ever use the QR code, to be honest, but it was still good for learning purpose.