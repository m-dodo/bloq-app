# BloQ

Blog-like app posing as skills showcase for Q dev team interview.

## Scripts

Use `npm run dev` to start development server. The app will then be available at `http://localhost:3000/`. Before first start run `npm install`. Use `npm test` to run tests.

## Description

I'm using React (Next.js framework) with SSR, and Emotion for styling.

In the beginning I had trouble with error saying "Module not found: @emotion/react" even when it was installed.
It was about latest React version featuring Emotions' `jsx` pragma support under the hood and I had to dig for some time to find it. Solved the issue by setting up configuration in `.babelrc`.

After that, the coding itself took me about 11-12 hours (reading about unit testing included).

If this was bigger, "real life" app, I would use `react-query` to fetch data. Now I didn't do it because I wasn't sure if that would be considered as third party state management so I used the ordinary `fetch`. I would also implement infinite scroll logic on listing page and break the code into even smaller components - like button component (now I have like two buttons so I didn't separate them). And of course, I would care more about responsivity, now I've done it just so it doesn't break.

I have never used TypeScript before so I skipped it here. Instead, for typechecking, I used PropTypes (and JSDoc annotations for methods).

On the other hand, I also never wrote unit tests before, but here I gave it a try, using Jest. Not sure if my tests fullfill what they should. But I will learn it :)
