<template>
    <div class="row p-3">
        <label for="tags">{{ label }}</label>
        <input v-model="tags" ref="tagifyRef" type="text" id="tags" placeholder="Separate With Comma" />
    </div>
</template>

<script>
import Tagify from '@yaireo/tagify';
import "@/node_modules/@yaireo/tagify/dist/tagify.css";

export default {
    props: {
        label: {
            type: String,   
            default: 'Tags',
        },
        settings: {
            type: Object,
            default: () => ({
                blacklist: [],
                whitelist: [],
                delimiters: [','],
                maxTags: 10,
            }),
        },
        tagType:{
            type: String,
            required: true
        }
    },
    data() {
        return {
            tags: [],
            tagifyRef: null,
        };
    },
    mounted() {
        const tagify = new Tagify(this.$refs.tagifyRef, this.settings);
        tagify.on('add', (e) => {
        this.$emit('tagAdded', { type: this.tagType, value: e.detail.data.value });
        // this.$emit('tagAdded', e.detail.data.value);
      });
    }
};
</script>

<style scoped>
.tagify__input {
  color: black I !important;
}
</style>    