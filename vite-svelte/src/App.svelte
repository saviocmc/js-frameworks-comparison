<script lang="ts">
    let todoList: string[] = [];
    let todoInputValue: string = "";

    const addTodo = (event: Event) => {
        event.preventDefault();
        todoList = [...todoList, todoInputValue];
        todoInputValue = "";
    };
</script>

<div class="App">
    <h1>TODO App - Vite Svelte</h1>
    <ul>
        {#each todoList as todo}
            <li>{todo}</li>
        {/each}
    </ul>
    <form on:submit={(event) => addTodo(event)}>
        <input placeholder="add todo..." bind:value={todoInputValue} />
        <button type="submit">add</button>
    </form>
</div>

<style>
    :root {
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
            Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    }

    .App {
        margin: 30px auto;
        width: fit-content;
    }
</style>
