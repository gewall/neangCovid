<template>
<div>

<!-- navigasi -->
  <div >
      <!-- layar besar -->
        <div class="d-none d-md-block">
            <v-row no-gutters class="text-center ">
                <v-app-bar dense flat class="transparent d-block">
                    <v-col :md="1">
                        <v-btn text rounded  class="red">
                            <span class="white--text">
                                Covid-19
                            </span>    
                        </v-btn>
                    </v-col>
                    <v-spacer></v-spacer>
                    <v-col :md="1">
                        <v-btn text class="dark--text">
                            Home
                        </v-btn>
                    </v-col>
                    <v-col :md="1">
                        <v-btn text class="dark--text">
                            Contact
                        </v-btn>
                    </v-col>
                    <v-col :md="1">
                        <v-btn text class="dark--text">
                            GEWAll
                        </v-btn>
                    </v-col>
                </v-app-bar>
            </v-row>
        </div>
        <!-- layar kecil -->

  </div>

    <v-container>
<!-- header -->
        <v-content>
            <v-row no-gutters>
                <v-col :md="5" class="text-md-left">
                    <p class="display-4">
                        Together
                    </p>
                    <p class="display-3">
                        Against
                    </p>
                    <p class="display-2">
                        COVID-19
                        
                    </p>
                   
                </v-col>
                <v-col class="text-md-center">
                    <!-- ///poto -->
                </v-col>
            </v-row>
        </v-content>

        <!-- content -->
        <v-content >
            <v-divider></v-divider>
            <!-- Data Card -->
            <v-row no-gutters justify-md="space-between">
                <!-- Positif -->
                <v-col :md="3" class="mt-md-3">
                    <v-hover v-slot:default="{ hover }" close-delay="200">
                        <v-card
                            :elevation="hover ? 16 : 2"
                            class=""
                            max-width="344"
                            outlined
                            style="border-bottom: 3px solid #FFC107"
                            
                        >
                            <v-list-item two-line>
                                <v-list-item-content>
                                    <div class="overline mt-md-0">COVID-19</div>
                                    <v-list-item-title class="headline">Positif</v-list-item-title>
                                    <v-list-item-subtitle>Jumlah Pasien Positif Covid-19 Sampai Hari Ini</v-list-item-subtitle>
                                </v-list-item-content>

                                <v-list-item-avatar
                                size="80"
                                color="amber"
                                >
                                <v-icon>fas fa-procedures</v-icon>
                                </v-list-item-avatar>
                            </v-list-item>

                            <v-expand-transition>
                                <div
                                    v-if="hover"
                                    class="d-flex transition-fast-in-fast-out amber darken-2 v-card--reveal display-3 white--text"
                                    style="height: 100%;"
                                >
                                    {{DIndo.jumlahKasus | numRep}}
                                </div>
                            </v-expand-transition>
                        </v-card>
                    </v-hover>
                </v-col>
                <!-- Negatif -->
                <v-col :md="3" class="mt-md-3">
                    <v-hover v-slot:default="{ hover }" close-delay="200">
                        <v-card
                            :elevation="hover ? 16 : 2"
                            class=""
                            max-width="344"
                            outlined
                            style="border-bottom: 3px solid #8BC34A"
                        >
                            <v-list-item two-line>
                                <v-list-item-content>
                                    <div class="overline mt-md-0">COVID-19</div>
                                    <v-list-item-title class="headline">Negatif</v-list-item-title>
                                    <v-list-item-subtitle>Jumlah Pasien Sembuh Covid-19 Sampai Hari Ini</v-list-item-subtitle>
                                </v-list-item-content>

                                <v-list-item-avatar
                                size="80"
                                color="light-green"
                                >
                                <v-icon>fas fa-heart</v-icon>
                                </v-list-item-avatar>
                            </v-list-item>

                            <v-expand-transition>
                                <div
                                    v-if="hover"
                                    class="d-flex transition-fast-in-fast-out light-green darken-2 v-card--reveal display-3 white--text"
                                    style="height: 100%;"
                                >
                                    {{DIndo.sembuh | numRep}}
                                </div>
                            </v-expand-transition>
                        </v-card>
                    </v-hover>    
                </v-col>
                <!-- meninggoy -->
                <v-col :md="3" class="mt-md-3">
                    <v-hover v-slot:default="{ hover }" close-delay="200">
                        <v-card
                            :elevation="hover ? 16 : 2"
                            class=""
                            max-width="344"
                            outlined
                            style="border-bottom: 3px solid #F44336"
                        >
                            <v-list-item two-line>
                                <v-list-item-content>
                                    <div class="overline mt-md-0">COVID-19</div>
                                    <v-list-item-title class="headline">Meninggal</v-list-item-title>
                                    <v-list-item-subtitle>Jumlah Pasien Meninggal Covid-19 Sampai Hari Ini</v-list-item-subtitle>
                                </v-list-item-content>

                                <v-list-item-avatar
                                size="80"
                                color="red"
                                >
                                <v-icon>fas fa-peace</v-icon>
                                </v-list-item-avatar>
                            </v-list-item>

                            <v-expand-transition>
                                <div
                                    v-if="hover"
                                    class="d-flex transition-fast-in-fast-out red darken-2 v-card--reveal display-3 white--text"
                                    style="height: 100%;"
                                >
                                    {{DIndo.meninggal | numRep}}
                                </div>
                            </v-expand-transition>
                        </v-card>
                    </v-hover>
                </v-col>
            </v-row>

            <!-- Data Chart -->
            <div class="mt-md-5">
                <v-hover
                    v-slot:default="{ hover }"
                    close-delay="200"
                >
                    <v-card
                    :elevation="hover ? 16 : 2"
                    class="mx-auto"
                    height="auto"
                    max-width="100%"
                    >
                    <v-sheet color="light-green darken-1 text-center">
                        <span class="container white--text ">Statistik Penyebaran Covid-19 Dari Hari ke hari</span>
                    </v-sheet>

                    
                    <canvas id="DChart"></canvas>

                    </v-card>
                </v-hover>
            </div>
            
            <!-- Tabel Data -->
            <div class="mt-md-5">
                <v-hover
                    v-slot:default="{ hover }"
                    close-delay="200"
                >
                    <v-card
                    :elevation="hover ? 16 : 2"
                    class="mx-auto"
                    height="350"
                    max-width="100%"
                    >
                    
                    <v-sheet color="light-green darken-1 text-center">
                        <span class="container white--text ">Tabel Penyebaran Covid-19 perProvinsi</span>
                    </v-sheet>

                    <v-simple-table fixed-header height="300px">
                        <template v-slot:default>
                        <thead>
                            <tr>
                            <th class="text-left">Provinsi</th>
                            <th class="text-left">Kasus Positif</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="item in DProv" :key="item.provinsi">
                            <td>{{ item.provinsi }}</td>
                            <td>{{ item.positif }}</td>
                            </tr>
                        </tbody>
                        </template>
                    </v-simple-table>
                    
                    </v-card>
                </v-hover>
            </div>

        </v-content>
    </v-container>

    <v-card height="150">
        <v-container>
            <v-row no-gutters="">
                <v-col><small>CP : <br>gewall21@gmail.com <br></small></v-col>
                <v-col class="text-right"><small>Thanks To : <br>indonesia-covid-19.mathdro.id <br>SMKN 1 MAJA</small></v-col>
            </v-row>
        </v-container>
        <v-footer
        absolute
        class="font-weight-medium"
        >
        <v-col
            class="text-center"
            cols="12"
        >
            {{ new Date().getFullYear() }} — <strong>Gewall</strong>
        </v-col>
        </v-footer>
    </v-card>

</div> 
</template>

<script>
import Chart from 'chart.js'
import { Line } from 'vue-chartjs'
import axios from 'axios'

export default {
    extends: Line,
    data () {
        return{
            DIndo: [],
            chartLoaded: false,
            chart: [],
            DProv: [],
            icons: [
                'fa-facebook',
                'fa-twitter',
                'fa-linkedin',
                'fa-instagram',
            ],
        }
    },

    async mounted () {
        this.loadData(),
        this.loadChart(this.chart),
        this.loadProv()
    },
    methods: {
        loadData(){
            axios
            .get('https://indonesia-covid-19.mathdro.id/api')
            .then(response => {
                this.DIndo = response.data;
                
                })
            .catch ((err) => console.log(err))
        },
        loadChart(){
                axios
                .get('https://indonesia-covid-19.mathdro.id/api/harian')
                .then(response => {
                    const chartData = response.data.data;
                    // const res = chartData.map((item) => {
                    //     return {
                    //         label: item.harike,
                    //         positif: item.jumlahpasiendalamperawatan
                    //     };
                    // });
                    this.chart = new Chart(document.getElementById('DChart'), {
                        type: 'line',
                        data: {
                            labels: chartData.map(item => item.harike),
                            datasets: [{
                                label: 'Dampak COVID-19 Dari Hari ke Hari',
                                data: chartData.map(item => item.jumlahpasiendalamperawatan)
                            }]
                        }  
                    });
                    
                    })
                .catch ((err) => console.log(err))
            },

            loadProv(){
                axios
                .get('https://indonesia-covid-19.mathdro.id/api/provinsi')
                .then(response => {
                    const dataProv = response.data.data;
                    this.DProv = dataProv.map((item) => {
                        return {
                            provinsi : item.provinsi,
                            positif : item.kasusPosi
                        }
                    });
                    console.log(this.DProv);
                })
            },

        },
    
  
};
</script>

<style lang="stylus">
.v-card--reveal {
    align-items: center;
    bottom: 0;
    justify-content: center;
    opacity: .7;
    position: absolute;
    width: 100%;
}
</style>