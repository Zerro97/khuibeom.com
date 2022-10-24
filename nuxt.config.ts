import UnpluginComponentsVite from "unplugin-vue-components/vite";
import IconsResolver from "unplugin-icons/resolver";

export default defineNuxtConfig({
    "modules": [
        "@nuxtjs/tailwindcss", 
        "@nuxt/content", 
        "unplugin-icons/nuxt"
    ],
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
