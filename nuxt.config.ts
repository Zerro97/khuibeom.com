import UnpluginComponentsVite from "unplugin-vue-components/vite";
import IconsResolver from "unplugin-icons/resolver";

export default defineNuxtConfig({
    "modules": [
        "@nuxtjs/tailwindcss", 
        "@nuxt/content", 
        "unplugin-icons/nuxt"
    ],
    "build": {
        "transpile": ["@headlessui/vue"],
    },
    "vite": {
        "plugins": [
            UnpluginComponentsVite({
                "dts": true,
                "resolvers": [
                    IconsResolver({
                        "prefix": "Icon",
                    }),
                ],
            }),
        ],
    },
});
