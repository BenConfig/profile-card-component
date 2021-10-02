# Frontend Mentor - Profile card component solution

This is a solution to the [Profile card component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/profile-card-component-cfArpWshJ). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## The challenge

- Build out the project to the designs provided

## Screenshot

![](screenshot.png)

## Built with

- Semantic HTML5 Markup
- Tailwind
- Flexbox

## What I learned

This was my first ever project built using Tailwind. My process was to think of how I would achieve the design if I were using regular CSS, then refer to the Tailwind documentation to see which classes I would need to use in the HTML to achieve the same outcome.

I liked this project because although the design is very simple, it required me to use quite a few different classes to match the design and was therefore a nice introduction to using Tailwind. I quickly realised that Tailwind's default values were not quite specific enough to match the design exactly, however I decided not to override too many properties as I thought this would defeat the purpose of using Tailwind in the first place.

I did however create a few custom classes such as colors, the Kumbh Sans font family and the background images for the card and body.

For example, here is the code I used to create classes for the background images. I had to create a class for the background position also so that I could place the two circles on the body correctly.

```js
backgroundImage: {
    'body': "url('/images/bg-pattern-top.svg'), url('/images/bg-pattern-bottom.svg')",
    'card': "url('/images/bg-pattern-card.svg'), linear-gradient(transparent 76%, hsl(0, 0%, 70%) calc(76% + 1px), transparent 0)",
},
backgroundPosition: {
    'position': "bottom 40vh right 50vw, top 40vh left 50vw",
},
```

## Continued development

I am going to try and complete progressively more difficult designs from Frontend Mentor using Tailwind.

## Useful resources

- [01: Setting Up Tailwind CSS – Tailwind CSS: From Zero to Production](https://www.youtube.com/watch?v=qYgogv4R8zg) - This is the first in a series of videos about Tailwind. I found the series to be very helpful and informative.