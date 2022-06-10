# Weather app dev log

### Web Developer - Assignment

### Abstract

Create a web application that shows the weather forecast by city.

### Feature Requirements

1. With an input field for user typing location (ex: Taipei, Tokyo, London).
2. After entering a location, get the four-day weather forecast from open API.
3. Rendering forecast data with charts: Max temperature (bar chart) Min temperature (bar chart) Humidity (pie chart)

### Implementation Requirements
1. Please use one of React / Vue / Svelte / Ember / Angular to implement the web application (We use React mostly).
2. You can use open API from: https://openweathermap.org/api or another open weather API to meet requirements
3. Don't use the UI component library for bar charts & pie charts. Write your style and component.
4. Git project with at least 1 commit.
5. Please provide a project link or zip/tar file containing all application artifacts.

### Technical Notes:

1. We will review the result using the latest Chrome. No need to worry about cross browser-support.
2. You can use browser extensions to skip the CORS problem during development (ex: Moesif Orign & CORS Changer)

---

- note
  - fqa: https://openweathermap.org/faq#onecall
  - 1,000 API calls per day for free
  - `api key` may take about 2 hours for setup

- stack
  - vite
  - react 18
  - tailwind
  - svg

- check list
  - [x] 1. Please use one of React / Vue / Svelte / Ember / Angular to implement the web application (We use React mostly).
  - [x] 2. You can use open API from: https://openweathermap.org/api or another open weather API to meet requirements
  - [x] 3. Don't use the UI component library for bar charts & pie charts. Write your style and component.
  - [x] 4. Git project with at least 1 commit.
  - [x] 5. Please provide a project link or zip/tar file containing all application artifacts.

### result

![](https://i.imgur.com/kaNqCEy.png)

- in the future (maybe)
  - add TypeScript
  - add more API
### development

```bash

# install
pnpm install

# dev
pnpm dev

# build
pnpm build

```