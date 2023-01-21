<script>

    import FeedbackItem from "./FeedbackItem.svelte";
    import {FeedbackStore} from "../stores/"

</script>

{#each $FeedbackStore as fb (fb.id)}
<div>
    <FeedbackItem item = {fb}/>
</div>
{/each}

