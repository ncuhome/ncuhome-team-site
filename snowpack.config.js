/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    public: "/",
    src: "/_dist_",
  },
  plugins: [
    "@snowpack/plugin-react-refresh",
    "@snowpack/plugin-dotenv",
    "@snowpack/plugin-typescript",
    "@snowpack/plugin-webpack",
    "@snowpack/plugin-sass",
  ],
  alias: {
    "@": "./src"
  },
  routes: [
    {"match": "routes", "src": ".*", "dest": "/index.html"},
  ],
};
