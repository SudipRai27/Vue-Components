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
    </ul>
  </div>
</template>

<style>
.content {
  background: #eceaea;
  width: 100%;
  height: 100vh;
  overflow-y: scroll;
}

.header {
  padding: 20px;
  font-size: 20px;
  font-weight: bold;
}

.main-content {
  padding: 10px 14px;
}
</style>
