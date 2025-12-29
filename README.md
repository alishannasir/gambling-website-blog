This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.





need few things to change:
1. change the background color of @%28main%29   whole page to be white, @globals.css here is the color theme i want to use. same as for @admin .

2.  i have theme, which is been used in @articles @games , understand that the shadow one, use that in @%28main%29 @admin .

3. add login, admin, to nav bar so i can navigate easyly.

4. do create a small  navigation at @%5Bid%5D for just going back to all articles. at top after the nav bar.

5. do read all code to match theme al arround the website, look for every detail,  do create a single component for reuseble UI like button, i want the shadow one. i need all page should have smilir theme al across. and the ad space for ads, of all  page. expect the terms and conditoins one.

6. use data from @data , for temparay, change the data scheme to match as our @models .
do chnage the data context in it to games.


7.@games  , do use category as @%28main%29  has use. and when click on more games at home to navigate to this page, and show more games, use side  bar to adsen and to show most recent relase, or best of the year , or popular games..
 

8. do pop up the a card every 1 mint on website to show a discont or telling about new game.

9. optimize code for whole website.

