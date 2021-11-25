<template>
  <div>
    <div>
      <h1>Vending Machine with VueX</h1>
    </div>
    <div class="wrapper">
      <svg
        class="chipbag"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 140.7 175"
      >
        <defs></defs>
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <path
              stroke-miterlimit="10"
              stroke="#000"
              fill="#f48787"
              d="M10.79 21.5h121v132h-121z"
            />
            <path
              class="cls-2"
              d="M131.79 21.5h-121L.79.5h139l-8 21zM131.97 153.5h-121l-10 21h139l-8-21z"
            />
            <circle
              cx="73.29"
              cy="88"
              r="46.5"
              fill="#fff"
              stroke-miterlimit="10"
              stroke="#000"
            />
            <path
              class="chip-1"
              d="M39.79 90.1c.38-3.43 15.68.68 28.66-10.61C75.87 73 77 66.34 85.44 63.56c.92-.3 9-2.86 14.86 1.07 9.07 6.13 9.21 25.88 1.06 35-15.65 17.59-62.24-3.49-61.57-9.53z"
            />
            <path
              class="chip-2"
              d="M40.32 90.63c0 .74.64 13.89 11.37 20.17 8.66 5.06 20.12 3.44 27.91-4.25a60.45 60.45 0 01-39.28-15.92z"
            />
          </g>
        </g>
      </svg>
      <div class="product-name">
        <span>Lays</span>
        <h2>Potato Chips</h2>
        <p>Product Code</p>
        <span>76424233</span>
      </div>
      <section class="action-section">
        <div class="supply">
          <div class="supply-count">
            <span class="count">Supply</span>
            <h4>{{ supply }}</h4>
          </div>
        </div>
        <div class="buttons">
          <button
            class="restock-btn"
            @click="restock"
            :disabled="supply === 40"
          >
            Restock
          </button>
          <button
            class="dispense-btn"
            @click="dispense"
            :disabled="supply === 0"
          >
            Dispense
          </button>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    supply() {
      return this.$store.state.supply;
    },
  },
  methods: {
    restock() {
      this.$store.commit("restockProduct");
    },
    dispense() {
      this.$store.commit("dispenseProduct");
    },
  },
};
</script>

<style lang="scss" scoped>
h1 {
  text-align: center;
}
body {
  background: #333;
  font-family: "Gothic A1", sans-serif;
  display: flex;
  justify-content: center;
}

[class*="chip-"] {
  fill: #ffc400;
}

.cls-2 {
  fill: #843b3b;
}

.wrapper {
  border-radius: 10px;
  background: #fff;
  border: 1px solid black;
  width: 350px;
  // height: 500px;
  position: relative;
  margin: auto;
}

.chipbag {
  width: 50%;
  position: relative;
  margin: 0 auto;
  margin-top: 100px;
  display: block;
}

.product-name {
  position: relative;
  margin: 0 auto;
  width: 55%;
  & p {
    display: inline-block;
  }
  & h2 {
    font-size: 30px;
    margin: 0;
  }
}

.action-section {
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 0 30px;
  position: relative;
  height: 200px;
  background: #008a56;
  color: white;
  border-radius: 0 0 10px 10px;
  & .buttons {
    width: 150px;
  }
}

.supply-count {
  height: 100px;
  width: 100px;
  background: #74b39c;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  & span {
    position: absolute;
    top: -30px;
    left: 30%;
  }
  & h4 {
    font-size: 40px;
  }
}

.restock-btn,
.dispense-btn {
  width: 150px;
  cursor: pointer;
  font-size: 20px;
  color: white;
  background: #ffb232;
  padding: 10px 30px;
  border: none;
  border-radius: 10px;
  &:disabled {
    opacity: 0.4;
  }
}

.dispense-btn {
  margin-top: 10px;
  background: red;
}
.cls-2,
.cls-4 {
  stroke-miterlimit: 10;
}
.cls-2 {
  fill: #843b3b;
  stroke: #070707;
}
.cls-4 {
  fill: #ffc400;
  stroke: #020202;
}
</style>
