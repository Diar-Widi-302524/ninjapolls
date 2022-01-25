<script>
  import Header from "./components/Header.svelte";
  import Footer from "./components/Footer.svelte";
  import PollList from "./components/PollList.svelte";
  import CreatePollForm from "./components/CreatePollForm.svelte";
  import Tabs from "./shared/Tabs.svelte";

  //tab
  let items = ["Current Polls", "Add New Poll"];
  let activeItem = "Current Polls";
  const tabChange = (e) => {
    activeItem = e.detail;
  };

  const handleAdd = (e) => {
    activeItem = "Current Polls";
  };
</script>

<div class="wrapper">
  <Header />
  <main>
    <Tabs {activeItem} {items} on:tabChange={tabChange} />
    {#if activeItem === "Current Polls"}
      <PollList />
    {:else if activeItem === "Add New Poll"}
      <CreatePollForm on:add={handleAdd} />
    {/if}
  </main>

  <Footer />
</div>

<style>
  .wrapper {
    max-width: auto;
    margin: 0;
    padding: 0;
    height: 100vh;
    display: flex;
    flex-direction: column;
  }
  main {
    flex: 1;
    overflow: auto;
    justify-content: center;
  }
</style>
