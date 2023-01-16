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
Whenever I had to attach a link to some of my social media or portfolio websites, I did not really like that I have to type out the full url like this: [https://www.linkedin.com/in/hui-beom-kim-4a0849165/](https://www.linkedin.com/in/hui-beom-kim-4a0849165/). 

To create a shortend links, I tried searching online for link shortener services. Most of them, however, uses their own domain names for free plan. So, I looked at some other open source projects to self host the service instead. 

I tried [kutt.it](https://github.com/thedevs-network/kutt) and [notiolink](https://github.com/theodorusclarence/notiolink). While I liked how they documented the installation process and a clean looking UI, I did not like the fact that I still have to setup a database for authentication and custom urls (and a bit of tedious work of setting them up). I didn't really want to deal with database and possible security concerns so I just created my own website whose only purpose was to redirect to another website.

It did felt a little too simple, so I tried out generating QR code for redirection as well. I'm not sure if I'll ever use the QR code to be honest, but it was still good for learning purpose.