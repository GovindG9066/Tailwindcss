## How to start the tailwind css

> use the first command to start tailwindcss version 3. 
```
npm i -D tailwindcss@3    <-1st command 
```


>initilizing the tailwind css using the command

```
npx tailwindcss init -p   <-2nd command 
```
>create a folder name src and inside the folder create a file name input .css

```
Folder= src/input.css     <-3rd command 
```
>inside the input.css file  add the below commands

```
inside the css file import == {

@tailwind base;
@tailwind components;
@tailwind utilities;

}
```
>put it inside the tailwind.config.js  >>  contant[ ]
```
"./src/**/*.{html,js}" 
or
*.html
```
>run this command in the terminal
```
npx tailwindcss -i ./src/input.css -o ./src/output.css --watch  <-4th command
```

>output.css file created in src folder...

link to index.html file

```
 <link rel="stylesheet" href="src/output.css">
```