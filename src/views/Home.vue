<template>
  <div>
    <h2 class="m-4">Please click one of the following components</h2>
    <ul class="m-4">
      <li>
        <router-link :to="{ name: 'SidebarHome' }">Sidebar</router-link>
      </li>
      <li>
        <router-link :to="{ name: 'ModalView' }">Modal</router-link>
      </li>
      <li>
        <router-link :to="{ name: 'DropBoxView' }">DropBox</router-link>
      </li>
      <li>
        <router-link :to="{ name: 'SnackBarView' }">Snack Bar</router-link>
      </li>
      <li>
        <router-link :to="{ name: 'NavigationView' }"
          >Responsive Navigation</router-link
        >
      </li>
      <li>
        <router-link :to="{ name: 'TabView' }">Tabs</router-link>
      </li>
      <li>
        <router-link :to="{ name: 'ButtonView' }">Button</router-link>
      </li>
      <li>
        <router-link :to="{ name: 'InputView' }">Input</router-link>
      </li>
      <li>
        <router-link :to="{ name: 'TextAreaView' }">Text Area</router-link>
      </li>
      <li>
        <router-link :to="{ name: 'DropDownView' }">DropDown</router-link>
      </li>
      <li>
        <router-link :to="{ name: 'AutocompleteView' }"
          >Autocomplete</router-link
        >
      </li>
      <li>
        <router-link :to="{ name: 'AutoFormatInputView' }"
          >Auto Format Input</router-link
        >
      </li>
      <li>
        <router-link :to="{ name: 'PricingComponentView' }"
          >Pricing Component</router-link
        >
      </li>
      <li>
        <router-link :to="{ name: 'AutoHidingNavigationView' }"
          >Auto Hiding Naviagtion</router-link
        >
      </li>
      <li>
        <router-link :to="{ name: 'NavigationDropDownView' }">
          Navigation DropDown</router-link
        >
      </li>
      <li>
        <router-link :to="{ name: 'About' }">Simple About Page</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  setup() {},
};
</script>