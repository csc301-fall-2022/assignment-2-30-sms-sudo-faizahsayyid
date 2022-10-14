
## Application Description

For this assignment, we have decided to build a checkout price calculator web application. This app is meant to mimic a bookstore website, similar to Indigo. As per the assignment requirements, key features of this application include adding and removing books in a checkout cart, discounts, and a checkout cart subtotal calculator. We also have a few additional features in our application including storing checkout cart info in local storage so the user can come back to it, and …

### Decision Summary (300 words limit)


  
### Frontend Options

#### Javascript Frameworks

The current top three frontend frameworks are [React](https://reactjs.org/docs/getting-started.html), [Vue](https://vuejs.org/guide/introduction.html) and [Angular](https://angular.io/docs). We will compare their benefits and disadvantages in order to make an informed decision on which frontend framework best fits our needs.

 1. React

React is the most popular framework of the three with an average of about 16,719,913 [npm downloads](https://www.npmjs.com/package/react) a week. React was released 9 years ago and has a large ecosystem of libraries and forums for us to work with. Many major websites use React as their frontend framework including Meta, Twitter, Atlassian, and Khan Academy, proving that React is a scalable and reliable framework. A basic React App can be created quite quickly in a number of ways. Two popular ways are using [Create React App](https://create-react-app.dev/) or [Vite](https://vitejs.dev/guide/). Moreover, React is a lightweight framework compared to Angular, meaning it has less boilerplate code and less enforced structural requirements. Since we are looking to build a small application, it would be cumbersome to deal with a lot of boilerplate code, so this aspect of React would be ideal for us. Functional components paired with hooks have become the modern way to work with react. These concepts are less intuitive to start out with compared to lifecycle methods.

2. Vue

Vue is the newest of these three frameworks, and is not backed by a major corporation like React and Angular. Despite this, Vue is still a fairly popular framework with an average of about 3,439,590 [npm downloads](https://www.npmjs.com/package/vue) a week. Additionally, Vue has clean and verbose [documentation](https://vuejs.org/guide/introduction.html) and has its fair share of libraries to work with, though not required. Vue is also used by some large websites including GitLab, which proves its reliability and scalability. Setting up a Vue project is as simple as with React and can be done using the [Vue CLI](https://cli.vuejs.org/guide/creating-a-project.html) tool or [Vite](https://vitejs.dev/guide/). Vue is also quite lightweight, and has a developer friendly experience. It uses Javascript variables to manage reactive state, javascript objects to manage component properties, and life cycle methods to handle different component states.

3.  Angular

Angular is the oldest of these three frameworks, and was initially released 12 years ago. The maturity of the framework is one of its key perks. As mentioned previously, Angular has a lot of boilerplate code, and has the longest learning curve. It's also an opinionated framework that isn't easily integrable with libraries outside of its ecosystem. It has a defined folder structure and file naming conventions that makes it easy to organize. By following the service and dependency injection design patterns, Angular allows for a clean separation between the UI and data layers of an application. It also uses life cycle methods to handle the different component states. For these reasons, Angular would be better suited for a large scale application where this level of organization would be favorable rather than cumbersome.

##### Why We Chose Vue

The main reasons we ended up choosing Vue was because our course project is building on top of our partners existing application which uses Vue as its frontend framework. Choosing Vue for this project gave us an opportunity to become familiar with Vue as well as its tooling and documentation. However, upon doing some research I feel as though Vue is the best choice for this project since it's a lightweight framework that’s easy to get started with, is developer friendly with an intuitive structure, and has detailed and thorough documentation. These are all ideal for creating the minimum viable product for a small checking cart calculator web application.

##### Styling

The easiest way to create consistent styling without a high fidelity Figma design (or equivalent) is to use an existing framework of styles and classes (or components). The most popular and easy to use of these frameworks is [Bootstrap](https://getbootstrap.com/docs/5.2/getting-started/introduction/). We have used this in our application paired with [Bootswatch](https://bootswatch.com/) to easily create a consistent look and feel to our application that is not as generic as the default Bootstrap theme.

  

### Backend Options

Due to the nature of the assignment we will be comparing both backend frameworks and backend as a service (BaaS) and selecting from the option that suits us the best. The three we will be comparing are express (backend framework), firebase and supabase (BaaS). We will compare the benefits and disadvantages to make an informed decision.

1. Express

Express (also known as Express.js) is an open-source framework built specifically for Node.js. It’s completely written in Javascript. This is a large pro because it means we would be using a unified language across both our frontend and backend. There is also extensive support and resources about how to use Express due to its popularity and increased use. A con that is preventing us from committing to using Express is that we have little experience and it usually has many issues in callbacks. To address the maturity of express, which was released in 2010, it has come to develop the ability to support thousands of concurrent actions, and has remained an open-source community. 

2.  Firebase

Firebase is a Google-backed application development software that builds off NoSQL databases and lets developers store and sync data between users in real time. Its core features are its REST API, the ability to send notifications, the ability to authenticate and the compilation of analytics that it provides. None of the features are particularly useful for the scale we need to build, but if we were to implement a real checkout, being able to collect analytics and easily view them would be very important. Overall, Firebase takes care of the general hassles that come associated with server-side programming with already production ready back-end storage.

3. Supabase

Supabase is known as being the open-source version of Firebase alternative. However, Supabase is a relational database whereas the Firebase counterpart is NoSQL database. It has extensively developed since being founded in [2020](https://supabase.com/docs) and has authentication, auto-generated APIs, edge functions, real-time abilities and observability features all available. Since Supabase is essentially just Postgres with easier functionality, it’s compatible with Angular, React, Javascript, and Vue.

##### Why We Chose Supabase

The main reasons we ended up choosing Supabase was for multiple reasons. Supabase is compatible with Vue which is what we will be developing the frontend with. Additionally, we find relational databases give us more ease of development since it is more extensively covered in csc343. Although it was founded in 2020, being the newest framework we're considering, the ability to auto-generate APIs and its organization more easily integrating with Vue (as it was built for that in mind) appeals to us. Another criteria we considered was the fact we needed to be able to deploy our application for free, which with a weekly reminder we’ll update the deployment of our application.

  

### Deployment Options

1. Heroku

Heroku is a type of agile deployment platform that is usually used for Ruby, Node.js, Java, Python and many more. It was released in 2007 and has gained a solid market share due to its simplicity and usability. Without extensive setting personalization and very minimal configuring infrastructure developers can use Heroku to deploy their application very easily. It was actually only until [2011](https://www.heroku.com/about#:~:text=Heroku%20was%20founded%20in%202007,now%20part%20of%20Salesforce%20Platform.) that Java, Python, Scala and Node.js became supported languages. Something unique to Heroku is that developers can work with 404s, redirects and server-side routing all through a command-line interface that access to process logs in real-time.

2. Vercel

Vercel is a platform used by frontend developers that maintains a Next.js web development framework. It’s deployed on Vercel’s Edge Network (which uses AWS Lambda under different regions). It also has extensive features that allow for previews of what would be deployed for every git push and dynamic edge catching.

3. Render

Render is a cloud to build and run all apps and websites which can be auto-deployed from Git. It was developed to be a midpoint between expensive/in-flexible platforms that fail to scale for different hosting and complex large clouds that have very steep learning curves. It was launched in 2019 and offers nearly 10+ different customer plans making it one of the most modifiable deployments of the three options.

4. Netlify

Netfly is a cloud computing company that is specifically meant for high-performant and dynamic websites, which our check out (if developed into an e-commerce store) would fall under. There are only four pricing options but it generally allows instant rollbacks and fully deployable static assets and dynamic serverless functions.

##### Why We Chose Netlify

LOL vercel wasn’t working