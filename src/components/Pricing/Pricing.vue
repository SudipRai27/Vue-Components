<template>
  <div class="flex justify-center">
    <div
      class="
        w-1/2
        bg-blue-900
        rounded-lg
        shadow
        px-6
        py-12
        flex flex-col
        items-center
      "
    >
      <div class="bg-gray-400 rounded-full flex justify-around p-1">
        <button
          v-for="(price, frequency) in plans[0].pricing"
          :key="frequency"
          @click.prevent="currentFrequency = frequency"
          class="
            rounded-full
            text-xs
            font-bold
            px-6
            py-1
            uppercase
            focus:outline-none
          "
          :class="
            currentFrequency == frequency ? `bg-blue-600 text-gray-200` : ''
          "
        >
          {{ frequency }}
        </button>
      </div>
      <div class="flex w-full pt-8">
        <div
          class="text-white w-1/2 text-center"
          v-for="(plan, index) in plans"
          :key="index"
        >
          <h1 class="text-2xl font-bold">{{ plan.name }}</h1>
          <ul class="pt-4">
            <li
              v-for="(benifit, index) in plan.benifits[currentFrequency]"
              :key="index"
            >
              {{ benifit }}
            </li>
          </ul>
          <div class="flex justify-center mt-4">
            <div class="text-4xl font-bold">
              {{ getPrice(plan.pricing[currentFrequency].price) }}
            </div>
            <div class="pl-1 pt-2 text-gray-300">
              {{ plan.pricing[currentFrequency].label }}
            </div>
          </div>
        </div>
      </div>
      <div class="pt-4 text-center text-gray-400 text-sm font-bold">
        <a href="#" @click.prevent="currency = 'usd'">USD</a> |
        <a href="#" @click.prevent="currency = 'eur'">EUR</a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Pricing",
  data() {
    return {
      currentFrequency: "monthly",
      currency: "usd",
      plans: [
        {
          name: "Starter",
          benifits: {
            monthly: ["Benifit 1", "Benifit 2"],
            yearly: ["Benifit 1", "Benifit 2", "Benifit 3"],
            lifetime: ["Benifit 1", "Benifit 2", "Benifit 3", "Benifit 4"],
          },
          pricing: {
            monthly: {
              price: 99,
              label: "/mo",
            },
            yearly: {
              price: 499,
              label: "/yr",
            },
            lifetime: {
              price: 1200,
              label: "",
            },
          },
        },
        {
          name: "Pro",
          benifits: {
            monthly: ["Benifit 1", "Benifit 2"],
            yearly: ["Benifit 1", "Benifit 2", "Benifit 3"],
            lifetime: ["Benifit 1", "Benifit 2", "Benifit 3", "Benifit 4"],
          },
          pricing: {
            monthly: {
              price: 199,
              label: "/mo",
            },
            yearly: {
              price: 99,
              label: "/yr",
            },
            lifetime: {
              price: 2200,
              label: "",
            },
          },
        },
      ],
    };
  },
  methods: {
    getPrice(price) {
      return this["currency" + this.currency.toUpperCase()](price);
    },
    currencyUSD(price) {
      return "$" + price;
    },
    currencyEUR(price) {
      return Math.ceil(price * 0.85) + " EUR";
    },
  },
};
</script>