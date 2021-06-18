# React Material UI Storybook 🚀

Thousands of developers around the globe use React and Material UI. Each developer customize Material UI components making compount components based on their project requirement. However, It is quite possible that your customized components might be re-usable for another developer.

Github Pages is setup [Here](https://arifshariati.github.io/react-mui-storybook/) 🔗
# Motivation ✨ ✨

On daily basis, we write several components and then we forget it. In another case, we might write customize component which can be used by another developer too. This repo aims to bring about my daily works together so every one can review, customize and re-use the compnent. This greatly save development time and brings variety in thought process while writing components for React.

# Guideline 📔

If you want to collaborate on this repo, go on cloning the repo and checkout to your branch. Upon completing your component, create pull request so me and other developers can review your code. 

Once your code is reviewed and approved, it will be part of the main branch in this repository and that's it. 

Few things you have to consider while writing your componenet. Components directory contains all components seperated by;

    1. Atomic : individual stand alone components (as an example MUIButton component with additional param rounded).
    2. Compound: Collection of stand alone components should be kept in compount directory.


Moreover, Each new component should have its own folder and index.js file. To keep things clear, write your stories inside your component folder itself.

Following above guideline, will make life easy for developers in viewing or using code base for their own projects. 

# Get Started 

clone the repository and navigate to react-mui-storybook directory and run;

```
npm install & npm start
```

> **_NOTE:_** i have removed react-scripts from the proejct as sole aim of the repository is to write components and preview in storybook. 

Let's code together for making development of components easy and re-usable for all.

Cheers !! 🥂