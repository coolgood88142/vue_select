
<template lang="html">
    <select name = "counties">
        <option v-for="todo in todos">
            {{ todo.text }}
        </option>
    </select>
</template>

<script>
import testComponent from 'test-component'
export default {
    components: {
        testComponent 
    }
}
</script>