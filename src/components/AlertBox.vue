<template>
    <div class="alert-wrapper">
        <div class="alert-box">
            <strong>Error!</strong>
            <br />
            <slot />
        </div>
    </div>
</template>

<style scoped>
.alert-wrapper {
    padding: 20px 30px;
    margin-top: 1em;
}

.alert-box {
    color: #666;
    border: 1px solid red;
    border-radius: 4px;
    padding: 20px;
    background-color: #f8f8f8;
}

strong {
    color: red;
}
</style>