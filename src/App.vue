<template>
  <v-app>
    <v-content>
      <Portofolio/>
    </v-content>
  </v-app>
</template>

<script>
import Portofolio from './components/Portofolio';


export default {
  name: 'App',

  components: {
    Portofolio
  },

  data: () => ({
    //
  }),
};
</script>
