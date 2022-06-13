// import tailwindcss from "tailwindcss";

// export default {
//     plugins: [tailwindcss("./tailwind.config.js"), require("autoprefixer")],
// };

import tailwind from 'tailwindcss'
import autoprefixer from 'autoprefixer'
import tailwindConfig from './tailwind.config.js'

export default {
  plugins: [tailwind(tailwindConfig), autoprefixer],
}
