<template>
  <div>
    <h2>Please click one of the following components</h2>
    <ul>
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
    </ul>
  </div>
</template>


