<script>
  import "../../lib";
</script>

<main>
  <h4>Buttons</h4>
  <br />
  <div class="flex">
    <b-button>Primary</b-button>
    <b-button type="left-round bottom-round">Border</b-button>
    <b-button type="border right-round top-round">Border</b-button>
    <b-button type="border right-round bottom-round">Border</b-button>
    <b-button type="left-round">Border</b-button>
    <b-button type="border round">
      <i>link</i>
      <span>Pill</span>
    </b-button>
    <br />
  </div>
  <br />
  <b-button type="responsive">Max Width</b-button>

  <br /><br />

  <h4>Cards</h4>
  <div class="flex">
    <b-card class="small-margin" width="25vw">
      <h5>Material You</h5>
    </b-card>
    <b-card class="small-margin" width="15vw" type="round">
      <h5>Is Coming</h5>
      <p class="left-align">
        With this the theming is gonna go to the next level
      </p>
      <br />
      <b-button type="responsive small round">
        <span>Soon</span>
      </b-button>
    </b-card>
  </div>

  <br /><br />

  <h4>Inputs</h4>
  <b-input label="Label" />
  <br /><br />

  <h4>Checkbox</h4>
  <div class="flex">
    <b-checkbox class="small-margin" label="Label" />
    <b-checkbox class="small-margin" disabled label="Disabled" />
    <b-checkbox class="small-margin" checked label="Checked" />

  </div>
</main>

<style>
  main {
    text-align: center;
    padding: 1em;
    margin: 0 auto;
  }
  .flex {
    display: flex;
    align-content: center;
  }
</style>
