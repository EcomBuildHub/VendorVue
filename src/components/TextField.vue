<template>
    <div class="input-wrapper">
        <input
            :type="type"
            :name="name"
            :id="id"
            :placeholder="placeholder"
            :value="modelValue"
            autocomplete="off"
            @input="$emit('update:modelValue', $event.target.value)"
            class="input-field">
    </div>
</template>
<script setup>
    defineProps({
        type: {
            type: String,
            default: "text",
        },
        name: {
            type: String,
            required: true,
        },
        id: {
            type: Int16Array,
            required: true,
        },
        placeholder: {
            type: String,
            required: true,
        },
        modelValue: {
            type: String,
            default: "",
        }
    });
    defineEmits(['update:modelValue']);
</script>
<style scoped>
    .input-field {
        border: none; /* Removes all borders */
        border-bottom: 3px dashed rgb(33, 73, 108); /* Adds a 3px dotted bottom border */
        border-style: initial;
        outline: none; /* Optional: Removes input focus outline */
        padding: 5px; /* Optional: Adds spacing for better appearance */
        width: 440px;
        height: 40px;
    }
    .input-wrapper {
        margin-top: 2px;
        margin-bottom: 2px;
    }
</style>