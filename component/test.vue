
<script>
import testComponent from 'test-component'

export default {
    components: {
        testComponent 
    },
    template:'<select name = "counties"><option v-for="todo in todos">{{ todo.text }}</option></select>'
}
</script>