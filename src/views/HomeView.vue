<template>
    <div>
        <div>
            <p>
                Ask a yes/no question:
                <input v-model="question" :disabled="loading" />
            </p>
            <p>{{ answer }}</p>
            <input ref="input" />
        </div>

        <AlertBox>
            Something bad happened.
        </AlertBox>

        <div class="demo">
            <button v-for="(_, tab) in tabs" :key="tab" :class="['tab-button', { active: currentTab === tab }]"
                @click="currentTab = tab">
                {{ tab }}
            </button>
            <!-- <keepAlive> -->
                <component :is="tabs[currentTab]" class="tab"></component>
            <!-- </keepAlive> -->
        </div>

        <ComponentA msg="prop 传递" @increaseBy="(n) => count += n" v-model:title="title" class="attr">
            <template v-slot="slotProps">{{ slotProps.text }} slot</template>
            <template #test="testProps">{{ testProps.text }} slot </template>
        </ComponentA>

        <div>Mouse position is at: {{ x }}, {{ y }}</div>
    </div>
</template>

<script setup>
import { ref, watch, onMounted, onUnmounted, provide } from 'vue';
import PostsComponent from '../components/PostsComponent.vue'
import ArchiveComponent from '../components/ArchiveComponent.vue'
import AlertBox from '../components/AlertBox.vue'

const question = ref('')
const answer = ref('Questions usually contain a question mark. ;-)')
const loading = ref(false)
// 声明一个 ref 来存放该元素的引用
// 必须和模板里的 ref 同名
const input = ref(null)
const currentTab = ref('PostsComponent')
const count = ref(0)
const title = ref('v-model argument example')
const location = ref('North Pole')
const x = ref(0)
const y = ref(0)

function update(event) {
    x.value = event.pageX
    y.value = event.pageY
}

function updateLocation() {
    location.value = 'South Pole'
}

provide('location', {
    location,
    updateLocation
})


const tabs = {
    PostsComponent,
    ArchiveComponent
}

onMounted(() => {
    input.value.focus()
    input.value.value = 'input';

    console.log('addEvent start')
    window.addEventListener('mousemove', update)
    console.log('addEvent end')
})

onUnmounted(() => {
    console.log('removeEvent start')
    window.removeEventListener('mousemove', update)
    console.log('removeEvent end')
})

// 可以直接侦听一个 ref
watch(question, async (newQuestion, oldQuestion) => {
    console.log(newQuestion, oldQuestion)
    if (newQuestion.includes('?')) {
        loading.value = true
        answer.value = 'Thinking...'
        try {
            const res = await fetch('https://yesno.wtf/api')
            answer.value = (await res.json()).answer
        } catch (error) {
            answer.value = 'Error! Could not reach the API. ' + error
        } finally {
            loading.value = false
        }
    }
})

watch(count, (newCount) => {
    console.log(newCount)
})

</script>

<style scoped>
.demo {
    font-family: sans-serif;
    border: 1px solid #eee;
    border-radius: 2px;
    padding: 20px 30px;
    margin-top: 1em;
    margin-bottom: 40px;
    user-select: none;
    overflow-x: auto;
}

.tab-button {
    padding: 6px 10px;
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;
    border: 1px solid #ccc;
    cursor: pointer;
    background: #f0f0f0;
    margin-bottom: -1px;
    margin-right: -1px;
}

.tab-button:hover {
    background: #e0e0e0;
}

.tab-button.active {
    background: #e0e0e0;
}

.tab {
    border: 1px solid #ccc;
    padding: 10px;
}
</style>