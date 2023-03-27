---
year: '2023'
from_date: 2023-02
to_date: 2023-03
title: 'quiz.khuibeom.com'
description: 'Quiz platform for studying'
image: '/projects/quiz.khuibeom.png'
icon: 'mdi:web'
slug: quiz.khuibeom
livelink: 'https://quiz.khuibeom.com'
repo: ''
keywords: 'project, study, quiz'
team: 1
---

## Introduction
I was inspired by [this popular repository](https://github.com/jwasham/coding-interview-university) (4th most starred github repo) and the story of how the author studied for months just to get hired by a big tech companies. One of the things he did was creating a flashcard site where he would repeatedly review the topics that he studied for. According to [his article](https://startupnextdoor.com/retaining-computer-science-knowledge/), repetition was the key to remembering and the idea seemed convincing enough for me to start my own flashcard website for studying!

While the project is small in scale, the project underwent few changes as I worked on it, mostly because new ideas kept popping up in my head. Originally, I was thinking of creating simple flashcards application, but I decided having multiple choice option would be nice feature to add. Multiple choice turned out nice so I'm happy with it. I was also thinking of giving user an ability to locally save their quiz and question sets, so that on top of my own quizzes, user will be able to create his own quiz. This idea seemed more difficult and confusing, however, so I decided not to add it in.

## What I learned
This project was an experimental ground for me, since I tried out bunch of new technologies that I heard about.

Specifically, I wanted to use the new server components that React 18 introduced, so I decided to go with Next 13, using the beta `app` directory. I also wanted to learn about stale-while-revalidate, so I tried out React Query for caching data fetches. While not entirely new, I got more familiar with Supabase for managing database and the PostgreSQL's row level security for authentication.

Lastly, I got more familiar with Typescript, mostly because I had to pass the type check command in order to make a commit. 

## Challenges
As mentioned before, this was my first time using Next 13 and React Query, so it required more time and effort to understand how both frameworks worked. Utilizing cache was another challenge for me as well, since it added a layer of complication on top of the regular data fetches that I was used to. 

Luckily, both Next 13 and React Query was fairly easy to get used to and there were a lot of good resources to learn from.

## What can be improved
If you have explored the site, you might have noticed that it seems as if the user can create/update/delete data, but if you do try to create/update/delete the data, there is prompt saying that you first need to login. Well, this is confusing and I should definitely hide these options (such as the + buttons in main page) from unathorized users. For now though, I will leave it as it is, because I want to show the work I put in... 

Speaking of login, there is no way of signing up for new users. Only I can create the quizzes and questions as of now. Originally, I was thinking of not implementing login and database at all and use markdown files to store data locally. However, because I wanted to practice using supabase and react query, I decided to implement auth and database, even when it's only meant for myself.
